import type { Metadata } from "next";
import { Inter_Tight, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "TAG Homes | Sell Your House Fast in Oklahoma City",
    template: "%s | TAG Homes",
  },
  description:
    "We buy houses for cash in Oklahoma City, Edmond, Norman, Moore, Mustang, and the OKC metro. No fees, no commissions, close in 21-30 days.",
  metadataBase: new URL("https://taghomes.co"),
  openGraph: {
    siteName: "TAG Homes",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${cormorantGaramond.variable} ${pinyonScript.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
