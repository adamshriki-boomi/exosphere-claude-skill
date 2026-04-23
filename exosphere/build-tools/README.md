# Build tools — Exosphere skill upgrade pipeline

This directory regenerates the Exosphere Claude skill's bundled knowledge from
upstream sources. It is **not shipped** in the packaged `.skill` file — it's
only used when authoring and when upgrading to a newer Exosphere release.

## Prerequisites

```bash
cd build-tools
npm install                   # installs playwright-core + turndown + semver
npx playwright install chromium   # ~300 MB first-time download
```

## The happy-path upgrade

When Exosphere ships a new version, the full upgrade is a single command:

```bash
node upgrade.mjs --skill-bump minor
```

This will:

1. Query npm for `@boomi/exosphere@latest`.
2. If it matches what the skill already snapshots, exit (pass `--force` to override).
3. Download the new `dist/css-theme-variables.json` and `dist/react/index.d.ts`.
4. Re-scrape the Storybook at `https://exosphere.boomi.com`.
5. Rebuild `references/**/*.md`.
6. Call `diff-changelog.mjs` to summarize Exosphere's CHANGELOG between the old
   and new version and append it under `[Unreleased]` in the skill's CHANGELOG.
7. Bump `manifest.json` + `SKILL.md` frontmatter + insert a new CHANGELOG entry.

After the script finishes:

- Review `CHANGELOG.md` — annotate what changed in the skill itself (beyond the
  auto-generated Exosphere diff).
- Run the evals (`claude -p` locally or the skill-creator's eval runner).
- Re-package: `./package-skill.sh` (see below) → new `.skill` at the repo root.

### `package-skill.sh`

Wrapper around the skill-creator's `package_skill.py` that stages a clean copy
of `exosphere/` first, excluding `build-tools/` (this directory), `evals/`,
`node_modules`, and `.DS_Store`. Without the staging step, the packager would
silently inline `build-tools/` — 30+ MB of scraper tooling — into the shipped
`.skill`. Users don't need any of that.

```bash
# From the repo root:
exosphere/build-tools/package-skill.sh             # writes exosphere.skill to repo root
exosphere/build-tools/package-skill.sh ./dist      # write to ./dist instead

# Using a non-default packager location:
PACKAGE_SKILL_PY=/path/to/package_skill.py exosphere/build-tools/package-skill.sh
```

Prerequisites: Python 3 with `pyyaml` installed (`python3 -m pip install --user
pyyaml`) and the skill-creator plugin installed in Claude Code (so
`package_skill.py` resolves under `~/.claude/plugins/…`).

## Flags

| Flag                  | Default | Meaning                                              |
|-----------------------|---------|------------------------------------------------------|
| `--skill-bump`        | `minor` | `patch` / `minor` / `major` for the skill semver     |
| `--force`             | off     | Re-run even if Exosphere version hasn't changed      |
| `--to <version>`      | latest  | Pin the Exosphere target version                     |
| `--dry-run`           | off     | Print the plan, change nothing                       |
| `--base-url <url>`    | prod    | Override the Storybook host (e.g. sandbox for QA)    |

## Individual pieces

When the orchestrator doesn't fit your situation, the scripts are composable:

### `scrape-storybook.mjs`

```bash
node scrape-storybook.mjs                          # full run (~175 docs, ~100 seconds at conc=6)
node scrape-storybook.mjs --pilot                  # 8 representative stories for quick smoke
node scrape-storybook.mjs --filter components-     # just component docs
node scrape-storybook.mjs --limit 20               # first 20 docs entries
node scrape-storybook.mjs --concurrency 8          # tune concurrency (default 4)
```

Output lands in `build-tools/scraped/<category>/<story-id>.md`.

Rules:

- Only `type: docs` entries are scraped (not individual story variants).
- Each file gets YAML frontmatter with id/title/source_url/scraped_at.
- Turndown + GFM plugin handle HTML → markdown; a post-processor strips
  backslash escapes inside code fences and removes "Copy" button leakage.

### `build-references.mjs`

Reads `scraped/` and writes `../references/<dir>/<name>.md`.

```bash
node build-references.mjs                # write
node build-references.mjs --dry-run      # preview what would be written
node build-references.mjs --scraped ./scraped --out ../references  # override paths
```

Protected paths (Phase-A hand-authored files) are never overwritten:

- `installation.md`, `foundation/design-tokens.md`, `frameworks/*.md`,
  `decision-guides/*.md`, `_index.md` stubs for unscraped dirs.

`components/_index.md` is regenerated from `assets/component-exports.json`
to pair shipped components with their scraped docs (and to mark sub-components
that don't have their own Storybook page).

### `diff-changelog.mjs`

```bash
node diff-changelog.mjs --from 7.8.3 --to 7.9.0           # print diff
node diff-changelog.mjs --from 7.8.3 --to 7.9.0 --append  # append to ../CHANGELOG.md
```

Fetches the `miscellaneous-changelog--overview` Storybook page, parses out the
version sections between `from` (exclusive) and `to` (inclusive), and either
prints them to stdout or inserts them under `[Unreleased]` in the skill's
CHANGELOG.

### `upgrade.mjs`

The orchestrator (see Happy-path above).

## Repeatable / CI

This pipeline is deterministic given a pinned Exosphere version. In CI:

```yaml
# .github/workflows/exosphere-upgrade.yml  (sketch)
on:
  schedule:
    - cron: "0 12 * * 1"      # weekly, Monday noon UTC
  workflow_dispatch:

jobs:
  upgrade:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: cd build-tools && npm ci
      - run: cd build-tools && npx playwright install chromium
      - run: cd build-tools && node upgrade.mjs --skill-bump minor
      - uses: peter-evans/create-pull-request@v6
        with:
          title: "Upgrade to Exosphere $(cat manifest.json | jq -r .exosphere_version)"
          commit-message: "exosphere: upgrade snapshot"
          branch: exosphere-upgrade
```

Manual review → merge → tag → publish.

## Troubleshooting

**`playwright-core` can't launch chromium**  
Run `npx playwright install chromium` once. The binary lives in `~/Library/Caches/ms-playwright/` on macOS.

**Scrape times out on specific pages**  
A few Storybook pages render with very little text content and trip the strict wait condition. `scrape-storybook.mjs` already has a fallback to capture whatever's rendered after 15 s. If you see persistent failures, inspect the page in a real browser — it may have moved or been renamed.

**`build-references.mjs` overwrote a file I wanted kept**  
Add the relative path to `PROTECTED_PATHS` in `build-references.mjs`.

**npm view fails behind a proxy**  
Point `upgrade.mjs` at a specific version with `--to 7.9.0` to skip the npm query.

## Why Playwright (not Cheerio + fetch)?

The Exosphere Storybook is a client-rendered SPA. `fetch` returns a nearly-empty HTML shell — the docs content is injected by JavaScript after the page loads. A headless browser is the only reliable way to get the rendered markdown. We use `playwright-core` (not `playwright`) to keep the install small; chromium is installed separately.
