// app/layout.tsx — Next.js 14 App Router root layout.
// Both root imports can live here in the Server Component; the components
// themselves need 'use client' in their own files.

// Two mandatory root imports — both required for Exosphere 7.x+
import "@boomi/exosphere/dist/styles.css"; // component styling
import "@boomi/exosphere/dist/icon.js";    // icon registry — missing this silently empties every icon

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
