import "./globals.css";

export const metadata = {
  title: "HZL Global",
  description: "HZL Global landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

