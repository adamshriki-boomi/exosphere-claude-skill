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
