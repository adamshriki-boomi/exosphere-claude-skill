// app/providers.tsx — client-only wrapper that loads Exosphere's root imports.
// Use this (Recipe B) if Recipe A (imports directly in app/layout.tsx) causes
// an SSR crash sourced at @boomi/exosphere/dist/icon.js
// (e.g., "ReferenceError: customElements is not defined").
//
// This file is a Client Component, so the imports below only execute in the
// browser — icon.js can safely call customElements.define() and touch window.

'use client';

import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";

// If you use ExTable anywhere in the app:
// import "@boomi/exosphere/dist/exo-table-styles.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Then in app/layout.tsx:
//
//   import { Providers } from "./providers";
//
//   export default function RootLayout({ children }) {
//     return (
//       <html lang="en">
//         <body>
//           <Providers>{children}</Providers>
//         </body>
//       </html>
//     );
//   }
