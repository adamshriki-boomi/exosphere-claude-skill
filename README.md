# Exosphere Claude Skill

The **official** Claude Code skill for Boomi's [Exosphere design system](https://exosphere.boomi.com/). Install it, and Claude Code becomes an embedded Exosphere developer:

- Installs `@boomi/exosphere` and wires the framework correctly (React, Next.js, Angular, Vue, plain web components).
- Picks the right shipped `Ex*` component for each UX need — 80 components indexed by UX function.
- Uses the `--exo-*` design-token system exclusively; no hex, no px magic numbers.
- Applies voice/tone, accessibility, and pattern guidance from the Storybook.
- Walks the **suggest → ask → flag** flow before building any custom component.
- Flags approved custom extensions with a banner and logs them in the project's `EXOSPHERE-CUSTOM.md`.

---

## Install

Download [`exosphere.skill`](./exosphere.skill) (sibling of this README) and install from a Claude Code session:

```bash
/plugin install /path/to/exosphere.skill
```

Verify it works with a prompt like:

```
Set up Exosphere in a new Vite + React project and show me a primary button that opens a confirmation dialog.
```

The skill triggers on:

- Any `Ex*` identifier (`ExButton`, `ExDialog`, `ExWizard`, …).
- Any `ex-*` custom element tag (`ex-button`, `ex-combobox`, …).
- The package `@boomi/exosphere`, `--exo-*` CSS tokens, or `exosphere.boomi.com` URLs.
- UI work in any Boomi product/codebase — Exosphere is the default there, so the skill triggers proactively even when not explicitly named.

See `exosphere/SKILL.md` for the full trigger spec.

---

## Versioning

Two versions are tracked independently — see `exosphere/manifest.json` and `exosphere/CHANGELOG.md`:

| Field                  | Meaning                                                             |
|------------------------|---------------------------------------------------------------------|
| `skill_version`        | The skill's own semver — bumped when the skill content/behavior changes. |
| `exosphere_version`    | The `@boomi/exosphere` release the bundled references snapshot was built from. |

When Exosphere ships a new release, the skill is re-built against it — see the *Upgrading* section below.

---

## What's in the skill

```
exosphere/
├── SKILL.md                     Router + workflow (orient → map → token → pattern → suggest-ask-flag → verify)
├── CHANGELOG.md                 Per-version history of the skill itself
├── manifest.json                Machine-readable version metadata
├── references/
│   ├── installation.md          Hand-authored install guide (all 4 frameworks + CDN)
│   ├── frameworks/              React · Next.js · Angular · Vue deep-dives
│   ├── foundation/              design-tokens.md (values verbatim from dist/styles.css) + scraped foundation pages
│   ├── patterns/                Scraped pattern pages (dialogs, tables, links-vs-buttons, auth, …)
│   ├── content-guidelines/      Voice, tone, inclusive language, 12 content patterns
│   ├── development-standards/   BEM · ITCSS · measurement standards
│   ├── components/              One file per shipped component (scraped from Storybook)
│   ├── decision-guides/         "picking-components.md" + "component-vs-custom.md" (suggest→ask→flag)
│   └── kits/                    AI kit · Discover kit
├── assets/
│   ├── css-theme-variables.json Design tokens verbatim from @boomi/exosphere
│   ├── component-exports.json   Authoritative list of all 80 Ex* exports + prop enums
│   ├── react-index.d.ts         Verbatim TypeScript definitions
│   ├── custom-component-banner.md  Banner template for flagged customs
│   └── framework-setup-snippets/   Runnable starter files (one per framework)
└── scripts/
    ├── detect-framework.sh          Detects project's framework from package.json
    ├── install-exosphere.sh         Wizard: installs the npm package and prints next steps
    ├── check-exosphere-version.mjs  Warns if project's Exosphere version differs from snapshot
    ├── verify-token-usage.mjs       Flags raw hex / px / rgb in changed files
    ├── verify-component-usage.mjs   Flags raw <button>/<input> that should be Ex*
    └── fetch-storybook-doc.mjs      On-demand live Storybook fetch when a reference is missing
```

---

## Upgrading to a newer Exosphere release

The `exosphere/build-tools/` directory (not shipped inside the `.skill`) is the one-shot upgrade pipeline. To rebuild against a newer Exosphere release:

```bash
cd exosphere/build-tools
npm ci
npx playwright install chromium          # first-time only (~300 MB)

# macOS-only: point at Homebrew's CA bundle so the Anthropic API is reachable
export SSL_CERT_FILE=/opt/homebrew/etc/openssl@3/cert.pem

node upgrade.mjs --skill-bump minor      # bumps Exosphere → latest, skill → next minor
```

That command:

1. Queries npm for `@boomi/exosphere@latest`.
2. Downloads new `css-theme-variables.json`, `react/index.d.ts`, and associated metadata.
3. Re-scrapes the Storybook via Playwright → fresh per-component / per-pattern markdown.
4. Rebuilds `exosphere/references/**` (protecting hand-authored files).
5. Pulls Exosphere's own changelog and splices a human-readable diff into `exosphere/CHANGELOG.md`.
6. Bumps `manifest.json` + `SKILL.md` frontmatter + CHANGELOG version headers.
7. (You then) run the evals, then re-package to a fresh `.skill`:

   ```bash
   ./exosphere/build-tools/package-skill.sh   # writes exosphere.skill at the repo root
   ```

   The wrapper stages a clean copy before handing off to the skill-creator's `package_skill.py`, so `build-tools/` itself isn't inlined into the shipped bundle. See `exosphere/build-tools/README.md` for details.

`exosphere/build-tools/README.md` has CI-ready GitHub Actions snippets for automating this weekly.

---

## Evidence

The skill was benchmarked against 6 realistic feature-build tasks spanning all four supported frameworks plus the suggest-ask-flag custom-component flow and a token-compliance refactor:

| Configuration | Overall pass rate |
|---------------|-------------------|
| With skill    | **100%** (49/49 assertions) |
| Baseline (no skill) | 47% (23/49) |
| **Delta**     | **+0.53**         |

Per-eval breakdown, assertions, scraped outputs, and the full benchmark are checked into `docs/evidence/iteration-1/`.

A 102-query trigger-eval loop was also run to tune the SKILL.md `description` for reliable triggering — see `docs/evidence/trigger-opt/` and the notes in `exosphere/CHANGELOG.md` under `1.0.0-alpha.2`.

---

## Contributing

- **Reporting a bug with the skill itself** (wrong guidance, broken script, missing component) — open an issue.
- **Upgrading the snapshot** (new Exosphere release) — run the pipeline above and open a PR with the regenerated references + bumped CHANGELOG.
- **New behavior / workflow** (e.g., a new helper script or a pattern rule) — open an issue first so the change is visible before implementation.

For large structural changes, ping `@adamshriki-boomi` for a pre-review.

---

## License

BSD-3-Clause, matching `@boomi/exosphere` itself. See [`LICENSE`](./LICENSE).
