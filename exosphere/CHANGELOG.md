# Changelog — Boomi Exosphere Claude Skill

All notable changes to this skill are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Skill versions use [Semantic Versioning](https://semver.org/) and are tracked independently from the bundled Exosphere release.

Each entry names the **Exosphere version** that the snapshot inside this skill was built from. When Exosphere ships a new release, `build-tools/upgrade.mjs` produces a new entry here.

---

## [Unreleased]

_Nothing yet._

## [1.0.0-alpha.3] — 2026-04-23

Icon-rendering fix: the skill used to omit the mandatory `icon.js` root import from every new-user path. Apps generated from the skill would silently render empty icons in dialogs, comboboxes, toasts, date-pickers, pagination, side-drawers, and anywhere `<ex-icon>` or `<ex-icon-button>` appeared. Same Exosphere snapshot (`7.8.3`); documentation-level fix.

### Fixed

- **Mandatory `@boomi/exosphere/dist/icon.js` root import was missing from every new-user path.** In Exosphere 7.0+, icons moved to a sideways-loaded module that populates a `window[Symbol.for("$$EXOSPHERE_ICON$$")]` registry; without importing it at the app root, every `<ex-icon>`, `<ex-icon-button>`, and every internal icon inside composite components (dialog close X, combobox chevron, toast status markers, date-picker glyphs, pagination arrows, side-drawer chevrons) renders as an empty box with no error or warning. Propagated the requirement to:
  - `references/installation.md` (minimal install, React sample, Next sample, Angular sample, Vue sample, CDN/HTML sample, and "verifying the install worked" troubleshooting)
  - `references/frameworks/react.md`, `next.md`, `angular.md`, `vue.md` (root-imports section + troubleshooting entries)
  - `assets/framework-setup-snippets/react-main.tsx`, `next-layout.tsx`, `angular-app.module.ts`, `vue-main.ts`, `html-cdn.html` (all five starter templates)
  - `SKILL.md` (the "About this snapshot" line, the "1. Orient" checklist, and the "Red lines" list)
- **Missing `references/foundation/iconography.md` (seven-way broken pointer).** The file was referenced from `SKILL.md`, `foundation/_index.md`, `decision-guides/picking-components.md`, `components/_index.md`, `assets/component-exports.json`, and `build-tools/build-references.mjs` — but it didn't exist. Authored a new hand-curated foundation-level file unifying the icon component doc with the 7.x import contract, `ExIcon` React wrapper examples (`IconVariant`/`IconSize`), a11y requirements, and color customization via tokens. Added to `PROTECTED_PATHS` in `build-references.mjs` so the rebuild pipeline preserves it.
- **Stale "4 icon sets v1/v2/v3/FullColor" claim.** SKILL.md line 123 and `assets/component-exports.json` ExIcon `note` field described four sets that don't match the shipped catalog. Corrected to the actual structure: primary catalog / V2 / V1 / Archive. (Upstream Storybook has no `system-foundation-iconography-*` story — iconography lives at the component level upstream.)
- **Stale foundation pointers in SKILL.md and `foundation/_index.md`.** SKILL.md linked to `foundation/color.md` and `foundation/typography.md` — files that don't exist under those names. The actual files are split (`color-key-decisions.md`, `color-theme.md`, `color-approved-colors-by-color.md`, `typography-key-decisions.md`, `typography-body.md`, `typography-headings.md`). Fixed SKILL.md pointers and fully rewrote `foundation/_index.md` to match what's actually on disk.

### Added

- `grep_any` assertion for `@boomi/exosphere/dist/icon.js` to the three icon-rendering evals' rules in `exosphere-workspace/iteration-1/assertions.json` (`react-install-plus-dialog`, `angular-users-table`, `next-dashboard-shell`) so the grader catches missing icon-root-imports end-to-end. The corresponding `expected_output` strings in `evals/evals.json` now name both required imports.
- Browser-level contract test: `build-tools/browser-tests/run-icon-tests.mjs` launches headless chromium via `playwright-core`, serves fixture HTML pages with and without `icon.js`, and asserts the `icon.js` contract holds — registry populated (1,019 icons including Trash/Close/Warning/Download/Edit) when the import is present, `undefined` when it isn't. Evidence archived in `docs/evidence/browser-tests/`.

### Notes

- No change to `exosphere_version` — still `@boomi/exosphere@7.8.3`.
- No change to the skill's trigger description, so the 102-query trigger eval doesn't need to re-run.
- Historical eval outputs in `exosphere-workspace/iteration-1/` are preserved unmodified; the new assertion will flag the missing `icon.js` import against them when graded, confirming the assertion is substantive. A fresh iteration run (iteration-2 or later) will validate that the updated skill now emits the import end-to-end.

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
