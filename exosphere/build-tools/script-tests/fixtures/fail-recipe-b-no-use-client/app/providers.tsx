// Intentional bug: no 'use client' directive. This file runs server-side
// and icon.js crashes on `customElements is not defined`.
import "@boomi/exosphere/dist/icon.js";

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
