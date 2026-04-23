# Exosphere in React

First-class support. Exosphere ships React wrappers via `@lit-labs/react` that expose ergonomic React components (`ExButton`) over the underlying Lit web components (`<ex-button>`).

## Install

```bash
npm i @boomi/exosphere --save
```

## Wire the root imports — once, at the root

Two modules, both required:

```tsx
// src/main.tsx (Vite) or src/index.tsx (CRA)
import React from "react";
import ReactDOM from "react-dom/client";
import "@boomi/exosphere/dist/styles.css"; // component styling
import "@boomi/exosphere/dist/icon.js";    // icon registry (7.x+)
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

- Missing `styles.css` → components render as unstyled text (the #1 "nothing works" bug).
- Missing `icon.js` → every icon (dialog close X, combobox chevron, toast status marker, pagination arrows, and anything inside `<ex-icon>` / `<ex-icon-button>`) renders empty with no error or warning. See [`foundation/iconography.md`](../foundation/iconography.md) for the full story.

## Use components

Import by name from the package root:

```tsx
import { ExButton, ExDialog, ExInput, ExTable } from "@boomi/exosphere";
```

Every wrapper is prefixed `Ex`. See [`assets/component-exports.json`](../../assets/component-exports.json) for the full list of 80 exports. Every wrapper maps 1:1 to the underlying web component:

- `ExButton` → `<ex-button>`
- `ExIconButton` → `<ex-icon-button>`
- `ExDialog` → `<ex-dialog>`
- `ExSideDrawer` → `<ex-side-drawer>`

Use the React import form in React code. Use the web-component form only when you genuinely need to bypass the wrapper (rare).

## Event handling

Web components fire events with lowercase, dash-separated names (`open-change`, `value-change`). The React wrappers expose these as camelCased props beginning with `on`:

```tsx
<ExDialog
  open={isOpen}
  onOpenChange={(e) => setIsOpen(e.detail.open)}
  headerContent="Confirm delete"
>
  Are you sure?
</ExDialog>
```

When in doubt about a component's event name, check the Storybook story or the component's TypeScript definition: `node_modules/@boomi/exosphere/dist/react/<component>/index.d.ts`.

## Prop enums

Most components have typed enums for their variant props:

```tsx
import { ExButton, ButtonType, ButtonFlavor } from "@boomi/exosphere";

<ExButton type={ButtonType.Primary} flavor={ButtonFlavor.Branded}>Save</ExButton>
```

You can also pass the string values directly (`type="primary"`) — the enums are just a typed convenience.

## TypeScript

Types ship in the package. `tsconfig.json` doesn't need any changes. If a component's props aren't resolving, verify:

- `"moduleResolution": "bundler"` (or `"node16"`/`"nodenext"`) in tsconfig.
- You're importing from `@boomi/exosphere`, not from a deep path.

## Jest configuration

Jest can't import ESM from `node_modules` by default. Add to `package.json`:

```json
{
  "jest": {
    "transformIgnorePatterns": ["<rootDir>/node_modules/(?!@boomi/exosphere/)"],
    "moduleNameMapper": {
      "^@boomi/exosphere": "<rootDir>/node_modules/@boomi/exosphere/dist/react/index.mjs"
    }
  }
}
```

Failure mode without this: `SyntaxError: Cannot use import statement outside a module`.

## Vitest configuration

Vitest works out of the box — no extra config. Just write tests normally.

For component tests that exercise Exosphere components (using `@testing-library/react`), wrap them in a setup file that imports the CSS:

```ts
// vitest.setup.ts
import "@boomi/exosphere/dist/styles.css";
```

Then in `vitest.config.ts`:

```ts
export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "happy-dom", // or 'jsdom'
  },
});
```

## Storybook

If you use Storybook in your own React app:

```ts
// .storybook/preview.ts
import "@boomi/exosphere/dist/styles.css";
```

## Starter file

See [`assets/framework-setup-snippets/react-main.tsx`](../../assets/framework-setup-snippets/react-main.tsx).

## Troubleshooting

**"Components render as plain text"** — CSS import missing or not loaded before components render.

**"TypeError: register is not a function" / "Custom element registered twice"** — You're loading both `@boomi/exosphere` (web components) and the React entry somewhere. Import only from `@boomi/exosphere` (which reroutes to `dist/react/index.mjs`).

**"Event handlers not firing"** — Check that the React wrapper's `on*` prop matches the web component's event. The wrappers translate `my-event` → `onMyEvent`.

**Jest tests fail with ESM errors** — Apply the Jest config above.

**Vite build warnings about `process is not defined`** — Not an Exosphere issue; usually from a transitive dep. Usually safe to ignore. If it breaks the build, upgrade Vite.
