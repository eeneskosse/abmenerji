import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABM Enerji",
  description:
    "ABM Enerji - Elektrik tesisat, enerji altyapısı, güneş enerjisi ve endüstriyel otomasyon hizmetleri. Profesyonel enerji çözümleri.",
  keywords: [
    "enerji",
    "elektrik tesisat",
    "güneş enerjisi",
    "altyapı",
    "ABM Enerji",
  ],
  openGraph: {
    title: "ABM Enerji",
    description: "Profesyonel enerji ve altyapı çözümleri.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
