# Changelog — Boomi Exosphere Claude Skill

All notable changes to this skill are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Skill versions use [Semantic Versioning](https://semver.org/) and are tracked independently from the bundled Exosphere release.

Each entry names the **Exosphere version** that the snapshot inside this skill was built from. When Exosphere ships a new release, `build-tools/upgrade.mjs` produces a new entry here.

---

## [Unreleased]

_Nothing yet._

## [1.0.0-alpha.2] — 2026-04-21

### Changed

- **SKILL.md description** replaced with a more aggressive, bulleted version emerged from the trigger-optimization loop. Same snapshot (Exosphere 7.8.3); the change is purely to how the skill is triggered, not what it knows. Key shift: explicit "This is the only skill that knows Exosphere" framing + bullet list of all trigger surfaces (any `Ex*` identifier, any `ex-*` tag, `@boomi/exosphere`, `--exo-*` tokens, any Boomi product UI work even when unnamed).

### Notes from the trigger-optimization loop

- Loop ran 102 trigger eval queries × 3 runs × 3 iterations. Train/test split 62/40 with 0.4 holdout. Best iteration (#3) scored 7/62 train / 4/40 test vs. baseline 6/62 / 3/40.
- Should-NOT-trigger queries pass 100% under every description tested — no false-trigger risk.
- Low should-trigger pass rate on short per-component queries ("docs for ExX", "show me the props for ExY") reflects Claude Code's documented behavior of declining to consult skills for simple single-step queries — not a description flaw. Substantive queries (Phase C evals) still see 100% with-skill pass rate.

## [1.0.0-alpha.1] — 2026-04-21

### Fixed

- Corrected the documented chart-variant support: **`ExChart` in 7.8.3 ships bar / line / area / donut / half-donut / spider (radar) variants**. Previous pre-release drafts incorrectly said radar was unsupported; eval 5 surfaced the contradiction (live `references/components/chart.md` had the "Spider / Radar Chart" section). Updated:
  - `assets/component-exports.json` ExChart note
  - `references/components/_index.md` ExChart entry
  - `references/decision-guides/picking-components.md` chart rows
  - `references/decision-guides/component-vs-custom.md` — replaced the radar-chart "not supported" example with a color-picker example (which genuinely isn't shipped)
- Upstream bug in `skill-creator`'s `eval-viewer/generate_review.py`: embedded file content containing `</script>` (e.g. Vue SFCs) prematurely closed the host `<script>` tag and broke the viewer JS. Locally patched the copy used by this skill; worth filing upstream.

---

## [1.0.0-alpha] — 2026-04-21

### Exosphere snapshot

- Built from `@boomi/exosphere@7.8.3` (released 2026-04-15).
- **80** React-wrapped components bundled.
- 93 palette colors + full semantic token set (light + dark) bundled verbatim.
- **174 Storybook docs pages scraped** into `references/**/*.md` (all docs-type entries in the Storybook index).

### Added

- `SKILL.md` router with the Exosphere workflow loop (orient → map → token → pattern → suggest-ask-flag → verify).
- Installation guide covering React, Next.js, Angular, Vue, and plain web components / CDN.
- Hand-authored design-token reference derived directly from `dist/styles.css` + `dist/css-theme-variables.json` (the most complete token list anywhere in the skill).
- Per-component docs files for every shipped component that has its own Storybook page — ~115 files including design-docs variants.
- Per-pattern / per-foundation / per-content-guideline files from the scraped Storybook.
- Component catalog (`references/components/_index.md`) grouping all 80 exports by UX function (Actions / Form Inputs / Feedback / Navigation / Layout / Overlays / Data / Media / Charts / Editors / Utility), paired with per-component doc links.
- Helper scripts: `detect-framework.sh`, `install-exosphere.sh`, `verify-token-usage.mjs`, `verify-component-usage.mjs`, `check-exosphere-version.mjs`, `fetch-storybook-doc.mjs`.
- Decision guides: `picking-components.md`, `component-vs-custom.md`.
- Custom-component banner template + project-level `EXOSPHERE-CUSTOM.md` logging protocol.
- 6 evals spanning all four frameworks + custom-component flow + token compliance.
- Machine-readable version metadata at `manifest.json`.
- `build-tools/`: Playwright-based scraper, references processor, upgrade orchestrator, changelog differ, and CI README for automating future upgrades.

### Notes

- `components_count` is 80 (full `Ex*` export set including sub-components) — higher than the earlier draft estimate of 74.
- 2 Storybook pages hit the original strict 30s wait threshold (`components-navigation-drawer--overview`, `components-copy--overview`) because they render very little prose. The scraper now falls back to capturing whatever is present after 15s, and both succeeded on retry.
- `ExCopy` appears in Storybook but is not in the React wrapper d.ts at 7.8.3 — likely web-component-only or in-flight.
