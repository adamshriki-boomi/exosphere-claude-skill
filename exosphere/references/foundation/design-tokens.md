# Design tokens — the Exosphere token system

Exosphere exposes its design decisions as CSS custom properties (`--exo-*`). Use these exclusively. Raw hex/px/rgb values are the #1 indicator of drift away from the system.

All values below are extracted verbatim from `@boomi/exosphere@7.8.3/dist/styles.css`. The same tokens are available as JSON in [`assets/css-theme-variables.json`](../../assets/css-theme-variables.json) (semantic tokens only — palette values are in the CSS file).

---

## The two-tier token system

1. **Palette tokens** (`--exo-palette-*`) — raw colors. Example: `--exo-palette-blue-60: #...`. Use directly only when a semantic token doesn't exist for your need.
2. **Semantic tokens** (`--exo-color-background`, `--exo-color-font`, etc.) — named by role. Reference palette tokens. **Prefer these** — they switch with theme automatically.

When you need `color`, `background`, `border`, think semantic first (`--exo-color-font-link`). Fall back to palette only for truly novel uses.

---

## Themes

Exosphere ships **light** and **dark** themes. Both are defined as CSS variable overrides. When the host page enables dark mode, the same semantic tokens resolve to dark-appropriate values automatically — *only if you use semantic tokens*. Hard-coded palette tokens won't flip.

Activation (see [`foundation/color.md`](color.md) for full details):

```html
<body class="exo-theme-dark"><!-- or exo-theme-light --></body>
```

---

## Color — palette

14 color families × multiple shades (10, 20, ..., 90/100). Shade numbers roughly correlate with darkness (10 = lightest, 90/100 = darkest). Most families span 10→80 or 10→90.

Families available in 7.8.3:

- `aqua` (30, 40, 50, 60, 70, 80 — no 10/20 shades)
- `blue` (10–90)
- `brand` (the signature Boomi navy: `#072b55`)
- `coral` (10–90)
- `gray` (10–100)
- `green` (10–90)
- `magenta` (50, 60 only — narrow palette, used for code/syntax)
- `navy` (10–80)
- `periwinkle` (used for AI-surface features)
- `purple` (10–90)
- `red` (10–90)
- `yellow` (10–90)
- `black` (`#000000`)
- `white` (`#ffffff`)

Usage:

```css
/* prefer semantic... */
color: var(--exo-color-font-danger);

/* ...but palette tokens are available when you truly need a specific shade */
color: var(--exo-palette-blue-60);
```

A few palette tokens also have `-rgb` counterparts for `rgba()` use:

- `--exo-palette-black-rgb`: `0, 0, 0`
- `--exo-palette-gray-60-rgb`
- `--exo-palette-gray-90-rgb`
- `--exo-palette-gray-100-rgb`

```css
box-shadow: 0 2px 8px rgba(var(--exo-palette-black-rgb), var(--exo-opacity-2));
```

---

## Color — semantic tokens

These are the tokens you'll use most. Organized by role. Both light and dark themes define these identically-named variables with theme-appropriate values — see [`assets/css-theme-variables.json`](../../assets/css-theme-variables.json) for the complete mapping.

### Background

| Token                                        | Use for                                   |
|----------------------------------------------|-------------------------------------------|
| `--exo-color-body`                           | Page body default background              |
| `--exo-color-page`                           | Page content surface                      |
| `--exo-color-background`                     | Default component background              |
| `--exo-color-background-secondary`           | Recessed/subtle surfaces                  |
| `--exo-color-background-tertiary`            | Further-recessed surfaces                 |
| `--exo-color-background-disabled`            | Disabled states                           |
| `--exo-color-background-brand`               | Primary brand surfaces                    |
| `--exo-color-background-selected`            | Selected/active items                     |
| `--exo-color-background-selected-hover`      | Hover over selected items                 |
| `--exo-color-background-selected-weak`       | Subtle selection highlight                |
| `--exo-color-background-action`              | Primary action button background          |
| `--exo-color-background-action-hover`        | Primary action hover                      |
| `--exo-color-background-action-secondary`    | Secondary action button bg                |
| `--exo-color-background-action-secondary-hover` | Secondary action hover                 |
| `--exo-color-background-action-inverse`      | Dark-on-light button backgrounds          |
| `--exo-color-background-highlight`           | Attention highlight (coral-based)         |
| `--exo-color-background-success`             | Success weak surface                      |
| `--exo-color-background-success-strong`      | Success strong surface                    |
| `--exo-color-background-info`                | Info weak surface                         |
| `--exo-color-background-info-strong`         | Info strong surface                       |
| `--exo-color-background-warning`             | Warning weak surface                      |
| `--exo-color-background-warning-strong`      | Warning strong surface                    |
| `--exo-color-background-danger-weak`         | Danger weak surface                       |
| `--exo-color-background-danger-strong`       | Danger strong surface                     |
| `--exo-color-background-danger-extreme`      | Extreme danger (purple-based)             |
| `--exo-color-surface-ai-action`              | AI-surface background (periwinkle)        |
| `--exo-color-surface-ai-action-hover`        | AI-surface hover                          |

### Foreground / text

| Token                                     | Use for                               |
|-------------------------------------------|---------------------------------------|
| `--exo-color-font`                        | Default body text                     |
| `--exo-color-font-secondary`              | De-emphasized text (captions, hints)  |
| `--exo-color-font-tertiary`               | Brand-colored text                    |
| `--exo-color-font-link`                   | Link text                             |
| `--exo-color-font-link-hover`             | Link hover                            |
| `--exo-color-font-link-secondary`         | Secondary link (brand navy)           |
| `--exo-color-font-link-secondary-hover`   | Secondary link hover                  |
| `--exo-color-font-success`                | Success text                          |
| `--exo-color-font-disabled`               | Disabled text                         |
| `--exo-color-font-inverse`                | Text on dark/inverse backgrounds      |
| `--exo-color-font-danger`                 | Danger/error text                     |
| `--exo-color-font-code`                   | Code text (magenta)                   |

### Icons

| Token                             | Use for                               |
|-----------------------------------|---------------------------------------|
| `--exo-color-icon`                | Default icon color (brand)            |
| `--exo-color-icon-secondary`      | Blue icon                             |
| `--exo-color-icon-tertiary`       | Dark icon                             |
| `--exo-color-icon-inverse`        | Icon on dark backgrounds              |
| `--exo-color-icon-disabled`       | Disabled icon                         |
| `--exo-color-icon-danger`         | Danger-state icon                     |

### Borders

| Token                                      | Use for                                |
|--------------------------------------------|----------------------------------------|
| `--exo-color-border`                       | Default border                         |
| `--exo-color-border-secondary`             | Subtle border                          |
| `--exo-color-border-tertiary`              | Blue emphasis border                   |
| `--exo-color-border-selected`              | Border for selected items              |
| `--exo-color-border-highlight`             | Highlight border (yellow)              |
| `--exo-color-border-action`                | Button/action border                   |
| `--exo-color-border-action-hover`          | Button hover border                    |
| `--exo-color-border-danger-weak`           | Danger weak border                     |
| `--exo-color-border-danger-strong`         | Danger strong border                   |
| `--exo-color-border-danger-extreme`        | Danger extreme border                  |
| `--exo-color-border-inverse`               | Border on dark backgrounds             |
| `--exo-color-border-contrast`              | High-contrast border                   |

### Outlines (focus / a11y)

| Token                              | Use for                                    |
|------------------------------------|--------------------------------------------|
| `--exo-color-outline-weak`         | Subtle outline (blue-30)                   |
| `--exo-color-outline-moderate`     | Standard focus outline (blue-60)           |
| `--exo-color-outline-strong`       | Strong focus outline (brand)               |
| `--exo-color-outline-extreme`      | Extreme focus outline (gray-90)            |
| `--exo-color-outline-inverse`      | Focus outline on dark backgrounds          |

### Scrim + shadow

| Token                              | Use for                                    |
|------------------------------------|--------------------------------------------|
| `--exo-color-scrim`                | Dialog/drawer overlay scrim                |
| `--exo-color-shadow-weak`          | Subtle drop shadow                         |
| `--exo-color-shadow-moderate`      | Standard drop shadow                       |
| `--exo-color-shadow-strong`        | Pronounced drop shadow                     |

### Data visualization

For charts and data displays, Exosphere ships categorical color sets plus "solid" data colors:

| Token                                       | Use for                                        |
|---------------------------------------------|------------------------------------------------|
| `--exo-color-set-1-*` (1..5)                | 5-color qualitative palette (coral/navy/yellow/blue/purple) |
| `--exo-color-set-2-*` (1..3)                | 3-color sequential-safe palette                |
| `--exo-color-set-3-*` (1..8)                | 8-color qualitative palette                    |
| `--exo-color-data-solid-{navy,coral,purple,periwinkle,green,blue,gray}` | Single-series data colors |
| `--exo-color-data-solid-background-gray`    | Data container background                      |

---

## Typography

### Font families

| Token                  | Value                        | Use for                          |
|------------------------|------------------------------|----------------------------------|
| `--exo-font-brand`     | `"Poppins", sans-serif`      | Marketing/brand headers          |
| `--exo-font-family`    | `"Noto Sans", sans-serif`    | Default UI text                  |
| `--exo-font-monospace` | `"Fira Mono"`                | Code, ids, fixed-width data      |

Exosphere's Storybook uses **Nunito Sans** for its own chrome, but the published system font for *your app* is **Noto Sans**. Don't mix them up.

### Font sizes (rem-based; assumes root font-size 16px)

| Token                          | Value     | Equivalent |
|--------------------------------|-----------|------------|
| `--exo-font-size-x-micro`      | `0.625rem`| 10px       |
| `--exo-font-size-micro`        | `0.75rem` | 12px       |
| `--exo-font-size-x-small`      | `0.813rem`| 13px       |
| `--exo-font-size-small`        | `0.875rem`| 14px       |
| `--exo-font-size-medium`       | `1rem`    | 16px       |
| `--exo-font-size-large`        | `1.12rem` | 18px       |
| `--exo-font-size-x-large`      | `1.25rem` | 20px       |
| `--exo-font-size-2x-large`     | `1.37rem` | 22px       |
| `--exo-font-size-3x-large`     | `1.5rem`  | 24px       |
| `--exo-font-size-4x-large`     | `1.62rem` | 26px       |
| `--exo-font-size-5x-large`     | `1.75rem` | 28px       |
| `--exo-font-size-6x-large`     | `2rem`    | 32px       |
| `--exo-font-size-7x-large`     | `2.5rem`  | 40px       |

### Font weights

| Token                        | Value |
|------------------------------|-------|
| `--exo-font-weight-light`    | 300   |
| `--exo-font-weight-regular`  | 400   |
| `--exo-font-weight-semi-bold`| 600   |
| `--exo-font-weight-bold`     | 700   |

Use regular + semi-bold for most UI. Reserve bold for emphasis. Light is for large display type only.

Full typography rules (when to pick what size, line-height, letter-spacing): see [`foundation/typography.md`](typography.md).

---

## Spacing

Rem-based scale, suitable for padding, margin, gap:

| Token                          | Value       | Equivalent |
|--------------------------------|-------------|------------|
| `--exo-spacing-none`           | `0`         | 0          |
| `--exo-spacing-4x-small`       | `0.0625rem` | 1px        |
| `--exo-spacing-3x-small`       | `0.125rem`  | 2px        |
| `--exo-spacing-2x-small`       | `0.25rem`   | 4px        |
| `--exo-spacing-x-small`        | `0.5rem`    | 8px        |
| `--exo-spacing-small`          | `0.75rem`   | 12px       |
| `--exo-spacing-standard`       | `1rem`      | 16px       |
| `--exo-spacing-medium`         | `1.25rem`   | 20px       |
| `--exo-spacing-large`          | `1.5rem`    | 24px       |
| `--exo-spacing-x-large`        | `2rem`      | 32px       |
| `--exo-spacing-2x-large`       | `3rem`      | 48px       |
| `--exo-spacing-3x-large`       | `4rem`      | 64px       |
| `--exo-spacing-4x-large`       | `4.5rem`    | 72px       |
| `--exo-spacing-5x-large`       | `6rem`      | 96px       |

```css
.card { padding: var(--exo-spacing-standard); }
.toolbar { gap: var(--exo-spacing-small); }
```

---

## Radius

| Token                    | Value        | Equivalent        |
|--------------------------|--------------|-------------------|
| `--exo-radius-small`     | `0.125rem`   | 2px               |
| `--exo-radius-standard`  | `0.3125rem`  | 5px               |
| `--exo-radius-large`     | `0.625rem`   | 10px              |
| `--exo-radius-x-large`   | `1.5625rem`  | 25px              |
| `--exo-radius-circle`    | `50%`        | Fully rounded     |

```css
.card { border-radius: var(--exo-radius-standard); }
.avatar { border-radius: var(--exo-radius-circle); }
```

---

## Sizing (fixed widths/heights for containers)

Rem-based step scale for container sizing:

| Token             | Value    | Equivalent |
|-------------------|----------|------------|
| `--exo-size-1`    | `5rem`   | 80px       |
| `--exo-size-2`    | `11rem`  | 176px      |
| `--exo-size-3`    | `17rem`  | 272px      |
| `--exo-size-4`    | `23rem`  | 368px      |
| `--exo-size-5`    | `29rem`  | 464px      |
| `--exo-size-6`    | `35rem`  | 560px      |
| `--exo-size-7`    | `41rem`  | 656px      |
| `--exo-size-8`    | `47rem`  | 752px      |
| `--exo-size-max`  | `95rem`  | 1520px     |

Use these for predictable dialog widths, drawer widths, max-content constraints, etc.

---

## Opacity

| Token              | Value         |
|--------------------|---------------|
| `--exo-opacity-0`  | `transparent` |
| `--exo-opacity-1`  | `0.1`         |
| `--exo-opacity-2`  | `0.15`        |
| `--exo-opacity-3`  | `0.4`         |
| `--exo-opacity-4`  | `0.5`         |
| `--exo-opacity-5`  | `0.6`         |
| `--exo-opacity-6`  | `0.75`        |

Used in `rgba()` and as standalone opacity.

---

## Z-index

| Token                                  | Value                          |
|----------------------------------------|--------------------------------|
| `--exo-z-index-layer-1`                | 900                            |
| `--exo-z-index-layer-2`                | 901                            |
| `--exo-z-index-layer-3`                | 902                            |
| `--exo-z-index-layer-4`                | 903                            |
| `--exo-z-index-layer-5`                | 9999                           |
| `--exo-z-index-dialog`                 | `var(--exo-z-index-layer-1)`   |
| `--exo-z-index-dialog-overlay`         | `var(--exo-z-index-layer-4)`   |
| `--exo-z-index-select-menu-input`      | `var(--exo-z-index-layer-2)`   |
| `--exo-z-index-select-menu-dropdown`   | `var(--exo-z-index-layer-3)`   |
| `--exo-z-index-tooltip-popup`          | `var(--exo-z-index-layer-5)`   |

Never introduce your own `z-index` values above 900 — they'll compete with Exosphere overlays. Use these tokens or the `--exo-z-index-layer-*` scale.

---

## Tokens as a source of truth

When `scripts/verify-token-usage.mjs` flags a file, it compares against this list. If you find yourself wanting a value that's not in the list (a specific spacing, a particular color), prefer:

1. The *closest* existing token, even if off by a hair.
2. Escalating: "this design calls for X that's not in the system — should we propose a new token?" is a valid Exosphere contribution, not a reason to hard-code.

Raw literals only belong in:

- Values that are genuinely outside the design system's concerns (e.g., a specific 3rd-party component's pixel-perfect embed, not a Boomi UI).
- Low-level CSS utility inside a flagged custom component (see [`decision-guides/component-vs-custom.md`](../decision-guides/component-vs-custom.md)).

---

## Gaps in 7.8.3 — categories Exosphere doesn't tokenize yet

Real categories where `--exo-*` tokens are **missing** in 7.8.3. If you need values here, raw literals are unavoidable today — but confine them to one place (a `motion.ts` / `shadows.css` module, or a flagged custom component) so the eventual Exosphere tokens are a one-file migration.

### Motion / duration / easing

No `--exo-motion-*`, `--exo-duration-*`, or `--exo-easing-*` tokens exist. Components ship their own transitions internally but don't expose them.

**Recommendation** — if you're building a custom animation, use these conservative values (they mirror what the shipped Exosphere components feel like):

```css
/* Small, reactive UI (hover, focus, dismiss) */
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

/* Medium — popovers, menus opening */
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

/* Large — sheets, drawers, page transitions */
transition: all 300ms cubic-bezier(0.2, 0, 0, 1);
```

Centralize these in one file in your app (e.g., `src/theme/motion.ts`) so migration to future `--exo-motion-*` tokens is trivial. `scripts/verify-token-usage.mjs` does not flag motion literals (it only checks hex/rgb/px).

### Shadow offsets + spread

`--exo-color-shadow-weak | moderate | strong` exist — these are the **colors** for box-shadows. There are **no** `--exo-shadow-*` tokens that bundle offset and spread, so the numeric offsets have to be raw:

```css
/* ✅ tokenized color, raw offsets — the script treats this as compliant */
.card {
  box-shadow: 0 2px 8px var(--exo-color-shadow-weak);
}
```

`scripts/verify-token-usage.mjs` recognizes the `--exo-color-shadow-*` reference on a line and will **not** flag the px offsets on the same line. When Exosphere ships full shadow-elevation tokens, the skill will switch to flagging composed shadows too.

### Typography font-size scale — shipped, often missed

Not a gap — but often assumed to be one, because `assets/css-theme-variables.json` only contains theme-variable tokens (light/dark swaps) and font sizes are constants. The full `--exo-font-size-*` scale (`x-micro` through `7x-large`, covering 10 px through 40 px) IS shipped. See the [Font sizes table above](#font-sizes-rem-based-assumes-root-font-size-16px). Use those tokens instead of ad-hoc `text-[15px]` values or arbitrary `rem` numbers.

If you need a size that's not on the scale, use the closest scale value rather than inventing a new literal — or propose a new step to the scale if it's a real systemic gap.
