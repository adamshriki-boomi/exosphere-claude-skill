// app/layout.tsx — Next.js 14 App Router root layout.
// CSS import can live in a Server Component; the components themselves need
// 'use client' in their own files.

import "@boomi/exosphere/dist/styles.css";
// If you use ExTable anywhere in the app:
// import "@boomi/exosphere/dist/exo-table-styles.css";

export const metadata = {
  title: "Your App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
