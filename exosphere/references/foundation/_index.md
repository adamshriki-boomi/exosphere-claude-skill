# Foundations — index

Design foundations shipped with this skill snapshot:

- [`about.md`](about.md) — Exosphere's scope and design philosophy.
- [`accessibility.md`](accessibility.md) — a11y principles every Exosphere component follows by default.
- [`data-formatting.md`](data-formatting.md) — dates, numbers, currencies, identifiers.
- [`design-tokens.md`](design-tokens.md) — the complete token system, light + dark, with values.
- [`grid-system-guidelines.md`](grid-system-guidelines.md) — layout grid, breakpoints, spacing scale.
- [`iconography.md`](iconography.md) — the mandatory `icon.js` root import, `<ex-icon>` / `ExIcon` usage with `IconVariant` / `IconSize` enums, shipped tiers (primary / V2 / V1 / Archive), a11y requirements, color customization via tokens.
- [`voice-and-tone.md`](voice-and-tone.md) — Boomi's product voice.

### Color

Color foundation is split across three files:

- [`color-key-decisions.md`](color-key-decisions.md) — the core palette decisions and rationale.
- [`color-theme.md`](color-theme.md) — semantic color roles and dark-theme parity.
- [`color-approved-colors-by-color.md`](color-approved-colors-by-color.md) — the approved-color catalog.

### Typography

Typography foundation is split across three files:

- [`typography-key-decisions.md`](typography-key-decisions.md) — type scale and hierarchy decisions.
- [`typography-body.md`](typography-body.md) — body text usage.
- [`typography-headings.md`](typography-headings.md) — heading hierarchy and usage.

---

If you need a foundation page that isn't bundled here, fetch it live:

```bash
node scripts/fetch-storybook-doc.mjs system-foundation-about--overview
node scripts/fetch-storybook-doc.mjs system-foundation-accessibility--overview
node scripts/fetch-storybook-doc.mjs system-foundation-data-formatting--overview
node scripts/fetch-storybook-doc.mjs system-foundation-voice-and-tone--overview
```

Or browse at [exosphere.boomi.com/?path=/docs/system-foundation-about--overview](https://exosphere.boomi.com/?path=/docs/system-foundation-about--overview).

> Note: upstream Storybook has no `system-foundation-iconography-*` story — iconography is documented at the component level (`components-icon--overview`) upstream. The [`iconography.md`](iconography.md) file in this skill is hand-authored as a foundation-level summary that unifies the icon component doc with the 7.x `icon.js` root-import contract.
