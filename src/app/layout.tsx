import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

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
  title: {
    default: "ABM Enerji Mühendislik",
    template: "%s | ABM Enerji",
  },
  description:
    "ABM Enerji Mühendislik - Elektrik tesisat, enerji altyapısı, güneş enerjisi ve endüstriyel otomasyon hizmetleri. Sakarya merkezli profesyonel enerji çözümleri.",
  keywords: [
    "enerji",
    "elektrik tesisat",
    "güneş enerjisi",
    "altyapı",
    "ABM Enerji",
    "Sakarya enerji",
    "endüstriyel elektrik",
    "GES kurulumu",
  ],
  icons: {
    icon: "/abmlogo-icon.png",
    apple: "/abmlogo-icon.png",
  },
  openGraph: {
    title: "ABM Enerji Mühendislik",
    description: "Elektrik tesisat, enerji altyapısı ve güneş enerjisi alanlarında profesyonel çözümler.",
    locale: "tr_TR",
    type: "website",
    url: "https://abmenergy.com.tr",
    siteName: "ABM Enerji",
    images: [
      {
        url: "/logoyapistirma.png",
        width: 1200,
        height: 630,
        alt: "ABM Enerji Mühendislik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABM Enerji Mühendislik",
    description: "Profesyonel enerji ve altyapı çözümleri.",
    images: ["/logoyapistirma.png"],
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
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
