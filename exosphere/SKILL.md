---
name: exosphere
description: |
  Use this skill for any question or task involving Boomi's Exosphere design system. This is the only skill that knows Exosphere — invoke it whenever you see:

  - Any identifier starting with `Ex` (e.g. ExButton, ExDialog, ExPill, ExWizard, ExTree, ExCarousel, ExRichTextEditor, ExLeftmenubar*, ExStructuredList*, ExToastController — 70+ components, including unfamiliar Ex* names).
  - Any `ex-*` custom element tag like `ex-button`, `ex-badge-group`, `ex-alert-banner`.
  - The package `@boomi/exosphere`, `--exo-*` CSS tokens, or `exosphere.boomi.com`.
  - UI work inside any Boomi product/codebase (Integration Designer, runtime UI, atom catalog, theming pages) — Exosphere is the default there, trigger even when not named.

  Covers: props, events, docs, examples, comparisons ("X vs Y"), loading/responsive/a11y behavior, framework setup (React, Next.js, Angular, Vue), tokens/theming, and picking the right component for a UX need.

  When in doubt about an Ex-prefixed name or a Boomi UI task, trigger.
license: BSD-3-Clause
metadata:
  version: 1.0.0-alpha.3
  exosphere_version: 7.8.3
  built_at: "2026-04-23"
  official: true
  owner: Boomi, LP
---

# Boomi Exosphere — Official Design System Skill

You are now an Exosphere specialist. Every UI decision goes through the Exosphere design system: identify the official component, follow the guidelines, use the tokens, never invent when a shipped component fits.

## About this snapshot

This skill is version **1.0.0-alpha.3**, built against **`@boomi/exosphere@7.8.3`**. `CHANGELOG.md` (in this skill's root) lists what each version includes. `manifest.json` has the machine-readable version data. If the user's project is on a newer Exosphere than 7.8.3, you may hit components / props that are missing from the local references — see *When a reference is missing* below.

## What Exosphere is (the essentials)

- Boomi's design system, published as `@boomi/exosphere` on npm.
- A library of **Lit-based web components** (`ex-*` tags like `<ex-button>`) plus first-class **React wrappers** (`Ex*` names like `ExButton`). Also works in Angular (via `CUSTOM_ELEMENTS_SCHEMA`), Vue (templates), Next.js (client components), and plain HTML (CDN).
- Themed by CSS variables (`--exo-*`) with light and dark variants shipped out of the box.
- Requires two root imports: `@boomi/exosphere/dist/styles.css` (styling) and `@boomi/exosphere/dist/icon.js` (icon registry, 7.x+). Skip `styles.css` → unstyled text; skip `icon.js` → icons render as empty boxes silently. See [`references/foundation/iconography.md`](references/foundation/iconography.md).

## The Exosphere workflow (the core loop you MUST follow)

For every UI task, walk these steps in order. Don't skip. Skipping is how code drifts off-system.

### 1. Orient

Before writing any markup:

- Run `scripts/detect-framework.sh` in the target project to pick the framework context (React / Next / Angular / Vue / other). This reads `package.json` and tells you what you're working with.
- Confirm Exosphere is installed: look for `@boomi/exosphere` in `package.json` dependencies. If missing, consult `references/installation.md` and offer to install.
- Confirm **both** root imports are present in an app-root file (e.g. `main.tsx`, `app/layout.tsx`, `src/main.js`, `main.ts`):
  - `@boomi/exosphere/dist/styles.css` — missing this is the #1 cause of "components render as plain text."
  - `@boomi/exosphere/dist/icon.js` — missing this renders every icon (dialog close X, combobox chevron, toast status markers, `<ex-icon>`, `<ex-icon-button>`) as silent empty boxes. See `references/foundation/iconography.md`.
- Run `scripts/check-exosphere-version.mjs` to compare the project's installed Exosphere version to this snapshot (7.8.3). If the project is on something newer, mention the drift to the user up front so they know to expect on-demand lookups.

### 2. Map to a component

For every UI element you're about to render, look up the closest Exosphere component *before* choosing how to implement it.

- Consult `references/decision-guides/picking-components.md` — a "user says X → use Y" table for common UX needs.
- Consult `references/components/_index.md` — the full 74-component catalog grouped by UX function (Actions / Form Inputs / Feedback / Navigation / Layout / Data / Overlays / Media / Charts / Editors / Utility).
- Check `assets/component-exports.json` for the authoritative list of exported components, React names, web-component tags, and prop enums. This is the source of truth for "does Exosphere ship this?".

**Do not** default to a raw HTML element when an Exosphere component fits. `<button>` → `ExButton`. `<input>` → `ExInput`. `<select>` → `ExSelect` or `ExCombobox`. `<dialog>` → `ExDialog`. This is not cosmetic — raw elements bypass the system's a11y, theming, and behavior.

### 3. Use tokens, never raw values

All colors, spacing, radii, shadows, typography, and motion come from Exosphere CSS variables (`--exo-*`).

- ❌ `color: #1a1a1a;`
- ✅ `color: var(--exo-color-font);`

- ❌ `padding: 16px;`
- ✅ `padding: var(--exo-spacing-md);`

If you're tempted to type a hex value, a pixel count, or an inline rgb/rgba, stop and open `references/foundation/design-tokens.md`. The file has every token in both light and dark themes, grouped by use. `assets/css-theme-variables.json` has the raw JSON for programmatic lookups.

For primitives not covered by `--exo-color-*` / `--exo-spacing-*` (rare), fall back to `var(--exo-palette-*)` — but prefer semantic over palette tokens so theme switches work correctly.

### 4. Apply pattern + content guidance

Before shaping a non-trivial UI (dialogs, tables, forms, page headers, error messages, empty states, notifications, toasts vs. banners), load the matching guidance:

- `references/patterns/*.md` — visual/interaction patterns. When to use a dialog vs. a drawer. When to use a link vs. a button. How a table's row actions should be structured.
- `references/content-guidelines/*.md` — microcopy, voice, tone, inclusive language, and content patterns (how to phrase error messages, empty-state copy, field labels, CTAs).
- `references/foundation/*.md` — color usage, typography hierarchy, iconography, accessibility.

If the specific pattern doesn't have a reference file yet (this skill is a snapshot — some Storybook pages may not have been bundled), fall through to `scripts/fetch-storybook-doc.mjs` to pull it live.

### 5. Handle missing components — suggest → ask → flag

If the user wants something Exosphere doesn't ship, follow this exact sequence. Never go straight to "I'll build a custom component." The three steps are in `references/decision-guides/component-vs-custom.md`.

1. **Suggest the closest official component first**, with a one-line justification:
   > "Exosphere has `ExWizard` which covers most stepper flows — does that cover your need, or do you specifically need X behavior it doesn't support?"
2. **Only if the user confirms** it's genuinely insufficient, ask explicitly:
   > "Exosphere doesn't ship a dedicated `<feature>` today. I can build a custom component styled strictly with Exosphere tokens so it still fits the system, and flag it clearly in code as a custom extension. Proceed?"
3. **On approval**, scaffold using the banner from `assets/custom-component-banner.md`. The component must be tokens-only (no hex colors, no pixel magic numbers), and the file must lead with the banner header. Also append a record to the project's `EXOSPHERE-CUSTOM.md` (create if absent) so future reviewers can see the list of custom extensions in one place.

Before deciding "not in Exosphere," cross-check *both* `assets/component-exports.json` *and* do a live `scripts/fetch-storybook-doc.mjs <story-id>` lookup — a newer Exosphere than our snapshot may ship it.

### 6. Verify before reporting complete

- Run `scripts/verify-token-usage.mjs` over the changed files. It flags raw hex / px / rgb values that should have been tokens.
- Run `scripts/verify-component-usage.mjs`. It flags raw `<button>` / `<input>` / `<select>` / `<dialog>` / `<a>` elements where an Exosphere component would apply.
- For UI changes, open in a browser if possible — type checking + tests verify correctness, not feature correctness.

## Framework quick-start

Pointers. The full file for each framework has runnable starters + troubleshooting:

- **React** → `references/frameworks/react.md`. Install, import `dist/styles.css` in `main.tsx`, use `Ex*` wrappers. Jest/Vitest config snippet included.
- **Next.js** → `references/frameworks/next.md`. React content plus `'use client'` directive rules (Lit components can't SSR), App Router placement, SSR caveats for `ExDialog`/`ExTooltip`.
- **Angular** → `references/frameworks/angular.md`. Uses `CUSTOM_ELEMENTS_SCHEMA`, web-component syntax in templates, NgZone tips for heavy components.
- **Vue** → `references/frameworks/vue.md`. Uses `app.config.compilerOptions.isCustomElement` to silence warnings, v-model + `.prop` modifier patterns.
- **Plain HTML / CDN** → `references/installation.md` (bottom section). Link the stylesheet + script from unpkg; use `<ex-*>` tags directly.

## Component catalog pointer

Go to `references/components/_index.md` first — it lists every component grouped by UX function with a one-line "when to use." Then go to the per-component file for specifics (`references/components/<name>.md`). Until Phase B scraping lands, the per-component files fall back to `scripts/fetch-storybook-doc.mjs` to pull live Storybook docs on demand.

## Design foundations pointer

Load these as needed — don't pre-read unless the task demands it:

- `references/foundation/color-key-decisions.md` (plus `color-theme.md` for dark-theme roles and `color-approved-colors-by-color.md` for the approved palette) — palette, semantic color roles, dark-theme parity.
- `references/foundation/typography-key-decisions.md` (plus `typography-body.md` and `typography-headings.md`) — type scale, fonts (Nunito Sans is the system font), heading hierarchy.
- `references/foundation/iconography.md` — the mandatory `icon.js` root import, `<ex-icon>` / `ExIcon` usage with `IconVariant` / `IconSize`, shipped tiers (primary / V2 / V1 / Archive), a11y requirements, color customization via tokens.
- `references/foundation/accessibility.md` — a11y rules that all Exosphere components follow by default.
- `references/foundation/voice-and-tone.md` — Boomi's product voice.
- `references/foundation/data-formatting.md` — dates, numbers, currencies, identifiers.
- `references/foundation/design-tokens.md` — every token, light + dark, with "use for" notes.

## Custom components — the hard rule

Do not build custom components by default. The **suggest → ask → flag** flow above is not optional. Short version:

1. Recommend the closest official component with a one-line reason.
2. Only ask permission to build custom if the user confirms insufficiency.
3. If approved, the generated file starts with the custom-extension banner (see `assets/custom-component-banner.md`), uses `--exo-*` tokens only, and gets recorded in the project's `EXOSPHERE-CUSTOM.md`.

If you catch yourself reaching for a raw `<div>` with styled-components or a hand-rolled modal, stop. That is the moment to walk the flow.

## When a reference is missing

The bundled references are a snapshot. If you need a Storybook page that isn't included (yet) or you hit a component/prop added after `7.8.3`:

```bash
node scripts/fetch-storybook-doc.mjs <story-id>
# e.g., node scripts/fetch-storybook-doc.mjs components-button--1-overview
```

The story id is the `id` field from `https://exosphere.boomi.com/index.json`. You can also pass a URL fragment (`?path=/docs/components-button--1-overview`) and the script will extract the id.

## Kits

Exosphere ships two higher-level theme kits on top of the base:

- `references/kits/ai-kit.md` — `dist/ui-kit/ai.css` — for AI-surface pages (Boomi Intelligence features). Uses the periwinkle token family.
- `references/kits/discover-kit.md` — `dist/ui-kit/discover.css` — for the Discover surface.

Load the relevant kit CSS *in addition to* `dist/styles.css` when building inside those surfaces.

## Versioning + self-knowledge

- This skill's version: see frontmatter and `manifest.json` (field: `skill_version`).
- The Exosphere release this snapshot was built from: field `exosphere_version` (currently `7.8.3`).
- Human-readable change history: `CHANGELOG.md`.
- If the user asks "what Exosphere version does this skill know?" — cite `manifest.json` and `CHANGELOG.md`.

If `scripts/check-exosphere-version.mjs` reports the project is on a newer Exosphere by ≥ 1 minor, proactively tell the user: *"I'm running against the Exosphere 7.8.3 snapshot but your project is on 7.X.Y — for anything new since 7.8.3 I'll fall back to live fetches."* This is not optional — surface it up front so they can calibrate expectations.

## Red lines (things not to do)

- ❌ Do not use hex / rgb / px literals for anything that has a token.
- ❌ Do not use raw `<button>`, `<input>`, `<select>`, `<dialog>`, `<a>`, `<table>` when an Exosphere component fits.
- ❌ Do not skip the two mandatory root imports. Exosphere's components need both `@boomi/exosphere/dist/styles.css` (styling) and `@boomi/exosphere/dist/icon.js` (icon registry, 7.x+). Missing `styles.css` → components render unstyled. Missing `icon.js` → every icon, including the close-X inside dialogs and chevrons inside comboboxes, renders as an empty box silently. Both go in the app root (`main.tsx`, `app/layout.tsx`, `src/main.ts`, etc.).
- ❌ Do not skip the framework setup step (e.g., `CUSTOM_ELEMENTS_SCHEMA` in Angular, `isCustomElement` in Vue, `'use client'` in Next). The setup isn't cosmetic — the components won't work without it.
- ❌ Do not build custom components without walking the suggest → ask → flag flow. This includes avoiding "just a quick wrapper" and "just a utility div" — if it's a visible UI unit, it goes through the flow.
- ❌ Do not fabricate component names, props, or enum values. If unsure, check `assets/component-exports.json` or fetch the live Storybook doc. Never guess.

## Success looks like

After a feature is built with this skill:

1. Every visible UI unit is either an `Ex*` component or a flagged custom extension.
2. All colors/spacing come from `--exo-*` tokens; `scripts/verify-token-usage.mjs` passes.
3. Framework setup is right (`CUSTOM_ELEMENTS_SCHEMA` for Angular, `isCustomElement` for Vue, `'use client'` in Next, etc.).
4. Any custom extension is banner-flagged and recorded in `EXOSPHERE-CUSTOM.md`.
5. Light + dark themes both look correct (this is automatic if tokens are used; verify visually).
