// Fixture modeled on the alpha.5 reviewer's real app: Tailwind v4 + src/
// layout + App Router. styles.css reached via CSS @import in globals.css
// (relative node_modules path); icon.js reached via a 'use client' wrapper
// at @/components/exosphere-provider using a dynamic import() inside
// useEffect. Exercises: CSS indirection, @/ → src/ alias, dynamic icon
// import, client-boundary gating.
import "./globals.css";
import { ExosphereProvider } from "@/components/exosphere-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ExosphereProvider>{children}</ExosphereProvider>
      </body>
    </html>
  );
}
