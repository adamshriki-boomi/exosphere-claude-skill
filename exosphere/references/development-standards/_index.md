# Development standards — index

Exosphere's CSS conventions. These apply mostly when you're contributing to Exosphere itself or writing a flagged custom extension — consumer apps typically don't need them. But if you hit a styling decision inside a custom, the BEM/ITCSS/measurement rules keep things consistent.

**Phase B pending** (will land with the Storybook snapshot):

- `bem.md` — Block / Element / Modifier naming for custom CSS.
- `itcss.md` — Inverted-triangle CSS layering.
- `measurement.md` — rem-based measurement standards.

Until these are bundled, fetch them live:

```bash
node scripts/fetch-storybook-doc.mjs development-standards-block-element-modifier--docs
node scripts/fetch-storybook-doc.mjs development-standards-inverted-triangle-css--docs
node scripts/fetch-storybook-doc.mjs development-standards-measurement-standards--docs
```

Or browse at https://exosphere.boomi.com/?path=/docs/development-standards-block-element-modifier--docs
