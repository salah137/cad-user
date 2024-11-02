import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CAD",
  description: "club d'art et design ENSA",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  