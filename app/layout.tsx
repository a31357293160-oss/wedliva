import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WedLiva — Luxury Wedding Invitation",
  description: "A premium interactive digital wedding invitation template by WedLiva."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
