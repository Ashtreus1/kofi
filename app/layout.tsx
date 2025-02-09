import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "KoFi Roaster",
  description: "Wake up and smell the coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        {children}
      </body>
    </html>
  );
}
