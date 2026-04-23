// Fixture: styles.css ok, but the Providers wrapper is MISSING 'use client'.
// Without the directive, providers.tsx is a Server Component and its static
// import of icon.js runs server-side — the exact SSR crash Recipe B exists
// to avoid. The verifier must reject this even though the import path is
// present at the top of a reachable file.
import "@boomi/exosphere/dist/styles.css";
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
