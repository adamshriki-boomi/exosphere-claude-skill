// app/layout.tsx — Next.js 14 App Router root layout.
// Recipe A: both root imports in the Server Component layout. Works in most apps.
// If you hit an SSR crash sourced at @boomi/exosphere/dist/icon.js
// ("ReferenceError: customElements is not defined", etc.), switch to Recipe B —
// see `next-providers.tsx` in this directory.
//
// TypeScript note: `import "@boomi/exosphere/dist/icon.js"` raises TS7016 because
// the module ships without a .d.ts. Add the one-line ambient declaration from
// `boomi-exosphere.d.ts` anywhere in your project's TS include scope.

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
