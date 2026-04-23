# script-tests

Regression harness for the scripts that ship under `exosphere/scripts/`. Not bundled into the packaged `.skill` — `build-tools/` stays out of the distributable.

## verify-root-imports.mjs

```bash
node exosphere/build-tools/script-tests/test-verify-root-imports.mjs
```

Runs `scripts/verify-root-imports.mjs` against each fixture under `./fixtures/` and asserts the exit code from the directory-name convention:

- `pass-*` → expect exit 0 (both root imports present at a real entry file)
- `fail-*` → expect exit 1 (missing one or both imports, or split across files)
- `warn-*` → expect exit 1 (no recognized entry file found)

The most load-bearing case is `fail-false-positive-string-literal`. The fixture has both import paths inside a template literal — no real top-level `import` statement. A naive grep-based check would incorrectly call that file "compliant." The script's lexer-lite state mask is what makes this case fail correctly; if that case ever regresses, the mask has broken.

### Indirection fixtures (alpha.6)

Three `pass-*` fixtures exercise the one-level-of-indirection pathways added in alpha.6:

- `pass-next-css-indirection/` — `styles.css` reached through `@import "@boomi/exosphere/dist/styles.css"` inside a `./globals.css` referenced by `app/layout.tsx`; `icon.js` stays a direct import.
- `pass-next-recipe-b-static/` — Recipe B with a static `import "@boomi/exosphere/dist/icon.js"` in a `'use client'` Providers wrapper.
- `pass-next-recipe-b-dynamic-alias/` — the reviewer-supplied real-world shape: `src/` layout, `@/` alias → `src/`, Tailwind v4 + Exosphere via CSS @import with a relative `node_modules` path, and a dynamic `import('@boomi/exosphere/dist/icon.js')` inside a `useEffect` in a `'use client'` wrapper.

The paired `fail-recipe-b-no-use-client/` fixture keeps the indirection shape but drops the `'use client'` directive from the Providers file. Without the directive the same imports would still execute server-side and crash SSR — so the script must still fail. This is the case that proves we aren't matching on path presence alone.
