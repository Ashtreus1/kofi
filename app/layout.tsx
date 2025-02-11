import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Kura Cafe",
  description: "More than just a coffee",
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
