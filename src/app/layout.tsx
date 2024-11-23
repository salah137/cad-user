import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

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
        <body>{children}
          <Analytics/>
        </body>
      </html>
    );
  }
  