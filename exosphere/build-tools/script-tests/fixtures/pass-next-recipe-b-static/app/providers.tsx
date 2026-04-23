// Recipe B providers wrapper — client boundary keeps icon.js out of the
// server render even though layout.tsx itself stays a Server Component.
'use client';

import "@boomi/exosphere/dist/icon.js";

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
