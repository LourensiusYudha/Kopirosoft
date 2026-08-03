import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const title = "Finance | Banking & Beyond";
const description =
  "Modern banking for daily money management, automated savings, and global financial freedom.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kopirosoft.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Finance",
    title,
    description,
    images: [
      {
        url: "/images/hero.webp",
        width: 2400,
        height: 1600,
        alt: "Customer reviewing receipts while managing daily finances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
