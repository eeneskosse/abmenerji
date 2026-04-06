import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda | ABM Enerji",
  description:
    "ABM Enerji Mühendislik hakkında bilgi edinin. Enerji sektöründe kaliteli ve güvenilir çözüm ortağınız.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        subtitle="Enerji sektöründe kaliteli, güvenilir ve yenilikçi çözümler sunuyoruz."
        backgroundImage={IMAGES.aboutBanner}
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />
      <About />
      <WhyUs />
      <CTASection
        backgroundImage={IMAGES.ctaBg}
        title="Projeniz İçin Doğru Çözüm Ortağı"
        subtitle="Deneyimli ekibimizle projelerinize değer katmak için hazırız."
      />
    </>
  );
}
