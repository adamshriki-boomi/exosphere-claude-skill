# Exosphere in Next.js

Exosphere works in Next.js, but there's a hard constraint: **Lit-based web components cannot server-render**. Any component that uses `Ex*` must be a client component.

This page covers the App Router (Next 13+). Pages Router works similarly — treat every page with Exosphere as client-rendered.

## Install

```bash
npm i @boomi/exosphere --save
```

## Wire the CSS — in root layout

```tsx
// app/layout.tsx
import "@boomi/exosphere/dist/styles.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

CSS imports in `layout.tsx` (or any Server Component) are fine — the CSS itself doesn't need to run on the client, only the JS does. Only the Exosphere **components** need client rendering.

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

## Starter file

See [`assets/framework-setup-snippets/next-layout.tsx`](../../assets/framework-setup-snippets/next-layout.tsx).

## Troubleshooting

**"ReferenceError: window is not defined" / "document is not defined" during build** — You're rendering an Exosphere component in a Server Component. Add `'use client'` to the file.

**"Hydration mismatch" warnings** — Component rendered something different on server vs. client. For `ExDialog` and similar portal components, use the `{open && <...>}` gating pattern above.

**Components render unstyled in dev, fine in prod** — Confirm `@boomi/exosphere/dist/styles.css` is imported from `app/layout.tsx` (not a page-level file that might not load).

**Turbopack can't resolve `@boomi/exosphere/dist/styles.css`** — Check you're using a recent Next version. Turbopack CSS support has improved in 14+.

**Build works, `ExTable` renders blank at runtime** — AG-Grid requires its own CSS too. Also import `@boomi/exosphere/dist/exo-table-styles.css`.
