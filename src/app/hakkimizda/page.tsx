import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda | ABM Enerji",
  description:
    "ABM Enerji hakkında bilgi edinin. 15 yılı aşkın deneyimimizle enerji sektöründe güvenilir çözüm ortağınızız.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        subtitle="15 yılı aşkın deneyimimizle enerji sektöründe güvenilir çözümler sunuyoruz."
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
