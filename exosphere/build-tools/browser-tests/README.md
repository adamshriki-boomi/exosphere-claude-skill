# Browser tests — icon.js contract

End-to-end verification, in a real headless browser, that Exosphere's `icon.js` root import is the load-bearing part it's documented to be. When it's present, `window[Symbol.for("$$EXOSPHERE_ICON$$")]` is populated with the 1,000+ shipped icons. When it's absent, the registry simply doesn't exist — and every downstream component that renders a glyph will look up nothing and render nothing.

Complements the content-level assertions in `docs/evidence/iteration-1/assertions.json` — those check that generated source code *contains* the import; this test checks that the import, when present, *actually does what it's supposed to do*.

## What this test does NOT verify

Exosphere's web-component registration is lazy: the package's `.` export is `dist/react/index.mjs`, and `<ex-icon>` / `<ex-dialog>` get defined on the browser's `customElements` registry only when the corresponding React wrapper is first rendered. Standing up that path in a headless test requires React + JSX runtime, which is out of scope for this smoke test.

Instead, this test isolates the underlying mechanism — the icon **registry** that every component looks up at render time — and proves the `icon.js` import is what fills it. If the registry is populated, any component that asks for a glyph will find one. If the registry is empty (the missing-import case), every glyph lookup fails, and icons silently disappear across the app.

## Running

```bash
cd exosphere/build-tools
node browser-tests/run-icon-tests.mjs
```

Under ten seconds on a warm cache.

### Dependencies

- Node 18+.
- `playwright-core` (already in `build-tools/node_modules`).
- `@boomi/exosphere` (install with `npm install --no-save @boomi/exosphere@7.8.3` in `build-tools/`).
- A chromium browser binary: `npx playwright install chromium` (~300 MB, one-time).
- Local loopback HTTP (no outbound network needed; fixtures serve the locally-installed package).

### What it asserts

With `icon.js` loaded:

- `window[Symbol.for("$$EXOSPHERE_ICON$$")]` is present (`object`).
- Registry contains at least 100 icon names (current 7.8.3 snapshot has 1,019).
- Well-known icons (`Trash`, `Close`, `Warning`, `Download`, `Edit`) are all present.

Without `icon.js`:

- The window symbol is `undefined`.
- Zero icon names available.

## When to re-run

- After bumping the Exosphere snapshot version — update `@boomi/exosphere@X.Y.Z` in build-tools/ and re-run to confirm the new release still populates the registry via `icon.js` (and not via some new mechanism that would invalidate the skill's guidance).
- When adding or revising skill guidance about icon import — the contract these tests check is the thing the guidance promises.
- Before shipping a new skill release.
