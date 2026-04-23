import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";

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
