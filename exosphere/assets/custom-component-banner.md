# Custom Exosphere extension — banner template

When the `suggest → ask → flag` flow results in an approved custom component, every file for that component must start with this banner.

## TypeScript / JavaScript / TSX / JSX

```ts
/**
 * ────────────────────────────────────────────────────────────
 * CUSTOM EXOSPHERE EXTENSION
 * NOT part of @boomi/exosphere.
 *
 * Approved by: <user name or team>  on  <YYYY-MM-DD>
 * Reason: <one-line reason the official Exosphere component could not cover this>
 *
 * Rules this file follows:
 *   - Colors / spacing / radii / typography come from --exo-* tokens only.
 *   - No raw hex, rgb, or px values.
 *   - Consumes Exosphere primitives where possible (ExIcon, ExPill, ExLabel).
 *
 * Revisit if Exosphere ships an official equivalent or if the need goes away.
 * ────────────────────────────────────────────────────────────
 */
```

## Vue SFC

```vue
<!--
  ────────────────────────────────────────────────────────────
  CUSTOM EXOSPHERE EXTENSION
  NOT part of @boomi/exosphere.

  Approved by: <user or team>  on  <YYYY-MM-DD>
  Reason: <one-line reason>

  - Uses --exo-* tokens only (no raw hex / rgb / px).
  - Consumes Exosphere primitives where possible.
  Revisit if Exosphere ships an equivalent.
  ────────────────────────────────────────────────────────────
-->
```

## CSS / SCSS

```css
/*
 * ────────────────────────────────────────────────────────────
 * CUSTOM EXOSPHERE EXTENSION
 * NOT part of @boomi/exosphere.
 * Approved by <user> on <YYYY-MM-DD>; reason: <...>.
 * All values come from --exo-* tokens.
 * ────────────────────────────────────────────────────────────
 */
```

## HTML (if standalone component page)

```html
<!--
  ────────────────────────────────────────────────────────────
  CUSTOM EXOSPHERE EXTENSION
  NOT part of @boomi/exosphere.
  Approved by <user> on <YYYY-MM-DD>; reason: <...>.
  ────────────────────────────────────────────────────────────
-->
```

---

## Project-level register (`EXOSPHERE-CUSTOM.md`)

For every approved custom, append a row here — create the file at the project root if it doesn't exist.

```markdown
# Custom Exosphere extensions in this project

Components here are NOT part of `@boomi/exosphere`. Each was approved for a specific reason when no shipped component fit. Revisit when the design system expands.

| Component file                        | Approved on  | Reason                                          |
|---------------------------------------|--------------|-------------------------------------------------|
| `src/components/radar-chart/RadarChart.tsx` | 2026-04-21 | `ExChart` doesn't support radar as of Exo 7.8.3 |
```

## Guidance for writing the custom

1. Start the file with the banner above.
2. Import tokens only — never type a hex or pixel count. Example:
   ```tsx
   const Wrapper = styled.div`
     background: var(--exo-color-background);
     padding: var(--exo-spacing-standard);
     border-radius: var(--exo-radius-standard);
     color: var(--exo-color-font);
   `;
   ```
3. Reuse Exosphere primitives inside the custom when it makes sense — e.g., an `ExIcon` inside a custom widget's header.
4. Keep the file small. Customs are meant to be focused escape hatches, not second design systems.
5. Add a test that at least imports and renders the component — so regressions are caught.
6. When Exosphere ships an equivalent, raise a cleanup ticket and delete the custom.
