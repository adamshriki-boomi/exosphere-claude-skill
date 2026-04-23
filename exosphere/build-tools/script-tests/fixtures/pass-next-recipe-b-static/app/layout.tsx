// Fixture: styles.css imported directly; icon.js via a 'use client' Providers
// wrapper imported from the layout (Recipe B, static-import variant — matches
// the snippet shipped at assets/framework-setup-snippets/next-providers.tsx).
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
