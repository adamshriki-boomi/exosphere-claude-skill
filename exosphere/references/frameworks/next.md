# Exosphere in Next.js

Exosphere works in Next.js, but there's a hard constraint: **Lit-based web components cannot server-render**. Any component that uses `Ex*` must be a client component.

This page covers the App Router (Next 13+). Pages Router works similarly — treat every page with Exosphere as client-rendered.

## Install

```bash
npm i @boomi/exosphere --save
```

## Wire the root imports — two recipes

Exosphere needs two modules imported at the app root:

- `@boomi/exosphere/dist/styles.css` — component styling.
- `@boomi/exosphere/dist/icon.js` — icon registry (7.x+). This module calls `customElements.define()` at top-level and touches `window`.

Where the second one is imported matters in the App Router. Pick one of the recipes below.

### Recipe A — imports directly in `app/layout.tsx` (simplest; works in most apps)

```tsx
// app/layout.tsx
import "@boomi/exosphere/dist/styles.css"; // component styling
import "@boomi/exosphere/dist/icon.js";    // icon registry (7.x+)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

`layout.tsx` is a Server Component, but both imports are side-effect imports — Next's bundler includes them in the client bundle where they actually run. This works in most App Router setups.

**If you see an SSR crash** like `ReferenceError: customElements is not defined` (or similar: `window`, `HTMLElement`, `document`) sourced at `@boomi/exosphere/dist/icon.js`, switch to Recipe B. Some bundler configurations execute the import graph server-side even for side-effect modules, and `icon.js` isn't guarded against that.

### Recipe B — imports in a client-only `<Providers>` wrapper (safer)

Creates a client boundary at the top of the tree and keeps the Lit registry out of the server render entirely.

```tsx
// app/providers.tsx
'use client';
import { useEffect } from 'react';
import "@boomi/exosphere/dist/styles.css"; // CSS is safe either way — kept here for locality
// icon.js runs ONLY on the client because this whole file is 'use client'
import "@boomi/exosphere/dist/icon.js";

export function Providers({ children }: { children: React.ReactNode }) {
  // Nothing else to do — both imports are pure side-effect.
  // (A useEffect is not required; the imports fire when this client bundle loads.)
  return <>{children}</>;
}
```

```tsx
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Keep the layout a Server Component so the rest of your app still benefits from server rendering.

### Failure modes

- Missing `styles.css` → components render unstyled.
- Missing `icon.js` → every icon (close X inside `ExDialog`, chevrons inside `ExCombobox`, status markers inside `ExToast`, `<ExIcon>`, `<ex-icon-button>`) renders empty, silently. See [`foundation/iconography.md`](../foundation/iconography.md).
- Both imports present but in different files than above → fine, as long as at least one loads on every page. Prefer the layout-level approach so you can't accidentally ship a page without the icon registry.

### TypeScript — silence TS7016 on `icon.js`

`@boomi/exosphere/dist/icon.js` ships without a sibling `.d.ts`, so a TypeScript project will raise:

```
error TS7016: Could not find a declaration file for module '@boomi/exosphere/dist/icon.js'.
```

Workaround — add a one-line ambient declaration anywhere in your TS project (e.g., `src/types/boomi-exosphere.d.ts` or a root-level `global.d.ts`):

```ts
// global.d.ts
declare module "@boomi/exosphere/dist/icon.js";
```

No body needed — this is a side-effect-only module. Make sure the file is picked up by `tsconfig.json` (the default `"include": ["**/*.ts", "**/*.tsx"]` covers it; if you've narrowed `include`, add it explicitly).

A ready-to-drop copy lives in [`assets/framework-setup-snippets/boomi-exosphere.d.ts`](../../assets/framework-setup-snippets/boomi-exosphere.d.ts).

## Use components — mark as client

Every file that imports from `@boomi/exosphere` must start with `'use client'`:

```tsx
// app/settings/settings-form.tsx
'use client';

import { ExButton, ExInput } from "@boomi/exosphere";

export default function SettingsForm() {
  return (
    <form>
      <ExInput label="Name" />
      <ExButton type="primary" flavor="branded">Save</ExButton>
    </form>
  );
}
```

## Pattern: server page + client component boundary

A common shape: the page itself is a Server Component (good — fetches data, renders faster), and the interactive bits are client components:

```tsx
// app/settings/page.tsx  (Server Component)
import SettingsForm from "./settings-form";

export default async function SettingsPage() {
  const user = await fetchUser();
  return (
    <div>
      <h1>Settings for {user.name}</h1>
      <SettingsForm initial={user} /> {/* client component */}
    </div>
  );
}
```

Keep the client boundary as small as possible — wrap only the parts that need interactivity.

## SSR caveats for specific components

- **`ExDialog`, `ExSideDrawer`, `ExTooltip`, `ExAlertPopup`** — portal-based; they render into `document.body`. They work fine in client components but avoid rendering them during the initial server pass. In practice, gate them behind state:
  ```tsx
  'use client';
  import { useState } from 'react';
  import { ExDialog } from '@boomi/exosphere';

  export default function DeleteDialog() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Delete</button>
        {open && <ExDialog open onOpenChange={(e) => setOpen(e.detail.open)}>Are you sure?</ExDialog>}
      </>
    );
  }
  ```
- **`ExTable`** — wraps AG-Grid. Heavy component. Render client-side only; wrap in a Suspense boundary if the page can't proceed until the table's ready.
- **`ExChart`** — wraps D3. Client-only, same guidance as `ExTable`.

## Fonts (Nunito Sans)

Exosphere uses **Nunito Sans** as its system font. The stylesheet declares the `@font-face` rules for the Nunito files it bundles (served from `dist/sb-common-assets/` in Storybook, but when you install the package they're referenced relatively).

If you use Next's `next/font` system and want to avoid CLS, import Nunito Sans via `next/font/google` and set it on the `<body>`:

```tsx
// app/layout.tsx
import { Nunito_Sans } from 'next/font/google';
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>{children}</body>
    </html>
  );
}
```

## Tailwind interop

If the Next app uses Tailwind, you can mix but **don't replace Exosphere tokens with Tailwind equivalents**. Use Exosphere tokens for anything that's part of a shipped component; use Tailwind for layout-only (grid, flex, spacing) utility. When in doubt, lean on the Exosphere tokens and avoid double-styling.

## Vitest + Next

If you add Vitest to a Next project for unit tests, follow the [React Vitest setup](./react.md#vitest-configuration). Add a `vitest.setup.ts` that imports the CSS.

## Starter files

- [`next-layout.tsx`](../../assets/framework-setup-snippets/next-layout.tsx) — Recipe A (imports in `app/layout.tsx`).
- [`next-providers.tsx`](../../assets/framework-setup-snippets/next-providers.tsx) — Recipe B (client-only `<Providers>` wrapper). Use when Recipe A crashes during SSR.
- [`boomi-exosphere.d.ts`](../../assets/framework-setup-snippets/boomi-exosphere.d.ts) — the one-line ambient module declaration that silences TS7016 for `@boomi/exosphere/dist/icon.js`.

## Troubleshooting

**"ReferenceError: window is not defined" / "document is not defined" during build** — You're rendering an Exosphere component in a Server Component. Add `'use client'` to the file.

**"ReferenceError: customElements is not defined" sourced at `@boomi/exosphere/dist/icon.js` during build** — Recipe A's bundler is executing `icon.js` server-side. Switch to Recipe B (move both root imports into a `'use client'` `<Providers>` wrapper — see "Wire the root imports" above).

**`TS7016: Could not find a declaration file for module '@boomi/exosphere/dist/icon.js'`** — `dist/icon.js` has no sibling `.d.ts`. Add a one-line ambient declaration (`declare module "@boomi/exosphere/dist/icon.js";`) to any `.d.ts` file in your TypeScript include scope. Ready-to-drop snippet in [`assets/framework-setup-snippets/boomi-exosphere.d.ts`](../../assets/framework-setup-snippets/boomi-exosphere.d.ts).

**"Hydration mismatch" warnings** — Component rendered something different on server vs. client. For `ExDialog` and similar portal components, use the `{open && <...>}` gating pattern above.

**Components render unstyled in dev, fine in prod** — Confirm `@boomi/exosphere/dist/styles.css` is imported from `app/layout.tsx` (not a page-level file that might not load).

**Icons (dialog close X, combobox chevrons, toasts, `<ExIcon>`) render as empty boxes** — `@boomi/exosphere/dist/icon.js` isn't imported from `app/layout.tsx`. Add it alongside the `styles.css` import. See [`foundation/iconography.md`](../foundation/iconography.md).

**Turbopack can't resolve `@boomi/exosphere/dist/styles.css`** — Check you're using a recent Next version. Turbopack CSS support has improved in 14+.

**Build works, `ExTable` renders blank at runtime** — AG-Grid requires its own CSS too. Also import `@boomi/exosphere/dist/exo-table-styles.css`.
