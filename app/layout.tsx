import type { Metadata } from "next";
import { Archivo_Black, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "zKorp - Web3 Tech Builders for Technical Ambitious Projects",
  description:
    "zKorp builds production-ready Web3 products. Smart contracts, dapps, and onchain games using Starknet, Cairo, Dojo, and FHE. From A to Z.",
  openGraph: {
    title: "zKorp - Web3 Tech Builders",
    description: "6 experts. 10 years XP. +15 projects on mainnet.",
    url: "https://zkorp.xyz",
    siteName: "zKorp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        suppressHydrationWarning
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
