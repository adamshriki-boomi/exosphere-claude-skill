# Foundations — index

Files in this directory:

- [`design-tokens.md`](design-tokens.md) — the complete token system, light + dark, with values.

**Phase B pending** (will land with the Storybook snapshot):

- `color.md` — palette principles, semantic color roles, theming.
- `typography.md` — type scale, hierarchy, usage.
- `iconography.md` — ExIcon usage + the 4 icon sets (v1/v2/v3/FullColor).
- `accessibility.md` — a11y principles every Exosphere component follows.
- `voice-and-tone.md` — Boomi's product voice.
- `data-formatting.md` — dates, numbers, currencies, identifiers.

Until these are bundled, fetch them live:

```bash
node scripts/fetch-storybook-doc.mjs system-foundation-about--overview
node scripts/fetch-storybook-doc.mjs system-foundation-color-1-key-decisions--docs
node scripts/fetch-storybook-doc.mjs system-foundation-typography-1-key-decisions--docs
node scripts/fetch-storybook-doc.mjs system-foundation-iconography-1-overview--docs
node scripts/fetch-storybook-doc.mjs system-foundation-accessibility--docs
node scripts/fetch-storybook-doc.mjs system-foundation-voice-and-tone--docs
node scripts/fetch-storybook-doc.mjs system-foundation-data-formatting--docs
```

Or browse at https://exosphere.boomi.com/?path=/docs/system-foundation-about--overview
