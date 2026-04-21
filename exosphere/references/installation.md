# Installing Exosphere

`@boomi/exosphere` is published on npm. This page covers all supported install paths. Pick the section matching the user's stack.

All commands assume you're in the target project's root.

---

## Prerequisites

- **Node.js v16+** (per the package README).
- A package manager: npm, yarn, or pnpm.
- For Jest-based test setups: extra config required (see React section).
- For non-React frameworks: nothing beyond the framework's own setup.

## Supported frameworks

Exosphere is built as Lit-based web components with first-class React wrappers. The same npm package supports all of these:

| Stack                  | How to use it                                                     | Details                                            |
|------------------------|-------------------------------------------------------------------|----------------------------------------------------|
| **React**              | `import { ExButton } from '@boomi/exosphere'`                     | [`references/frameworks/react.md`](frameworks/react.md) |
| **Next.js (App)**      | Same as React, but wrap usage in `'use client'` components        | [`references/frameworks/next.md`](frameworks/next.md)   |
| **Angular**            | Use `<ex-button>` tags + `CUSTOM_ELEMENTS_SCHEMA`                 | [`references/frameworks/angular.md`](frameworks/angular.md) |
| **Vue 3**              | Use `<ex-button>` tags + `compilerOptions.isCustomElement`        | [`references/frameworks/vue.md`](frameworks/vue.md) |
| **Plain HTML / CDN**   | `<script type="module">` from unpkg                               | See CDN section below                              |

---

## Minimal install (all frameworks)

```bash
npm i @boomi/exosphere --save
# or
yarn add @boomi/exosphere
# or
pnpm add @boomi/exosphere
```

Then **import the CSS** in an entry file that runs before any Exosphere component:

```js
import "@boomi/exosphere/dist/styles.css";
```

Without this import, `<ex-button>` and `<ExButton />` render as unstyled text. This is the single most common "nothing's working" cause.

## Optional CSS bundles

Beyond `styles.css`, Exosphere ships a few additional stylesheets you load *only when needed*:

- `@boomi/exosphere/dist/exo-component-theme.css` — component theming overrides.
- `@boomi/exosphere/dist/exo-table-styles.css` — required if you use `ExTable` (wraps AG-Grid).
- `@boomi/exosphere/dist/ui-kit/ai.css` — for AI-surface features (Boomi Intelligence).
- `@boomi/exosphere/dist/ui-kit/discover.css` — for the Discover surface.

Import alongside `styles.css` in the same entry file when the feature applies.

---

## React-specific setup

```tsx
// src/main.tsx (or App.tsx for CRA)
import "@boomi/exosphere/dist/styles.css";

import { ExButton } from "@boomi/exosphere";

export default function App() {
  return <ExButton type="primary" flavor="branded">Hello from Exosphere!</ExButton>;
}
```

### Jest configuration (important)

Jest doesn't transform ESM from `node_modules` by default, and Exosphere is ESM. Add this to `package.json`:

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

Without this, Jest fails with `SyntaxError: Cannot use import statement outside a module` when importing `@boomi/exosphere`.

Vitest works out of the box with no extra config.

---

## Next.js-specific setup

Exosphere uses Lit-based web components that **cannot server-render**. Any file using `Ex*` components must be a client component:

```tsx
// app/page.tsx or app/my-component.tsx
'use client';

import { ExButton } from "@boomi/exosphere";
// ...
```

Import CSS once in the root layout:

```tsx
// app/layout.tsx
import "@boomi/exosphere/dist/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html><body>{children}</body></html>;
}
```

More details + troubleshooting: [`references/frameworks/next.md`](frameworks/next.md).

---

## Angular-specific setup

Angular needs `CUSTOM_ELEMENTS_SCHEMA` to accept web-component tags:

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@boomi/exosphere/dist/styles.css';
import '@boomi/exosphere';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

For standalone components (Angular 15+):

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<ex-button type="primary" flavor="branded">Hello Angular!</ex-button>`,
})
export class AppComponent {}
```

Use web-component syntax in templates:

```html
<ex-button type="primary" flavor="branded" (click)="doSomething()">Click me</ex-button>
```

More details: [`references/frameworks/angular.md`](frameworks/angular.md).

---

## Vue-specific setup

Tell Vue's compiler which tags are custom elements so it doesn't warn:

```ts
// vite.config.ts (Vue + Vite)
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ex-'),
        },
      },
    }),
  ],
});
```

Or equivalently, at runtime:

```ts
// src/main.ts
import { createApp } from 'vue';
import '@boomi/exosphere/dist/styles.css';
import '@boomi/exosphere';
import App from './App.vue';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ex-');
app.mount('#app');
```

Use web-component tags in templates:

```vue
<template>
  <ex-button type="primary" flavor="branded" @click="doSomething">Hello Vue!</ex-button>
</template>
```

More details: [`references/frameworks/vue.md`](frameworks/vue.md).

---

## Plain HTML / CDN

No build step. Good for quick prototypes or embedding in non-bundled pages:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/@boomi/exosphere@7.8.3/dist/styles.css">
    <script type="module" src="https://unpkg.com/@boomi/exosphere@7.8.3/dist/index.mjs"></script>
  </head>
  <body>
    <ex-button type="primary" flavor="branded">Hello Web Components!</ex-button>
  </body>
</html>
```

**Always pin a version** (`@7.8.3`, not `@latest`) for production — unpinned CDN URLs silently pick up breaking releases.

For local installation in a non-bundled project:

```html
<link rel="stylesheet" href="/node_modules/@boomi/exosphere/dist/styles.css">
<script type="module" src="/node_modules/@boomi/exosphere/dist/index.mjs"></script>
```

---

## Verifying the install worked

Drop this into any framework's main component and it should render a branded blue button:

```tsx
// React / Next
<ExButton type="primary" flavor="branded">Verify</ExButton>
```
```html
<!-- Angular / Vue / HTML -->
<ex-button type="primary" flavor="branded">Verify</ex-button>
```

If it renders as plain text: the CSS import is missing or in the wrong file.

If it renders but looks wrong (no color, wrong font): the `styles.css` import resolved but a font or CSS variable isn't loading — check the browser devtools console for 404s on font files.

If you see an Angular/Vue template error about unknown element `ex-button`: the framework setup step (`CUSTOM_ELEMENTS_SCHEMA` / `isCustomElement`) is missing.

---

## The automated installer

`scripts/install-exosphere.sh` (in this skill's `scripts/` folder) automates the install + CSS wiring for the detected framework. Run it from the project root:

```bash
bash /path/to/skill/scripts/install-exosphere.sh
```

It inspects `package.json`, picks the right framework path, installs the dep, adds the CSS import at the right entry point, and prints a verification snippet. Use this instead of doing steps by hand.
