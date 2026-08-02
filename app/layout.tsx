import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance | Banking & Beyond",
  description:
    "Modern banking for daily money management, automated savings, and global financial freedom.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
