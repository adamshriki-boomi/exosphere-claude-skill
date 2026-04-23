// Ambient declaration for @boomi/exosphere/dist/icon.js.
// Place this file anywhere inside your TypeScript project's `include` scope
// (e.g., `src/types/boomi-exosphere.d.ts` or a root `global.d.ts`).
//
// Why: the dist/icon.js module ships without a sibling .d.ts, so `import
// "@boomi/exosphere/dist/icon.js"` raises TS7016 ("Could not find a declaration
// file for module"). The module is side-effect-only — no body is needed.

declare module "@boomi/exosphere/dist/icon.js";
