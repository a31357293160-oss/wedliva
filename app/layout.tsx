import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WedLiva — Luxury Digital Wedding Invitations",
  description:
    "Create beautiful digital wedding invitations with premium design, elegant motion, RSVP and one shareable link.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
