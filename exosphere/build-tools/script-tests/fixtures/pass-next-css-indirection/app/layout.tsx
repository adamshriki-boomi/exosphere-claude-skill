// Fixture: styles.css is satisfied via a CSS @import inside globals.css
// (one level of indirection); icon.js is imported directly.
import "./globals.css";
import "@boomi/exosphere/dist/icon.js";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
