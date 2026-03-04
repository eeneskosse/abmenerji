import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { Projects } from "@/components/Projects";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projelerimiz | ABM Enerji",
  description:
    "ABM Enerji tarafından başarıyla tamamlanan enerji, altyapı ve güneş enerjisi projeleri.",
};

export default function ProjelerimizPage() {
  return (
    <>
      <PageBanner
        title="Projelerimiz"
        subtitle="Farklı sektörlerde başarıyla tamamladığımız projelerimizi inceleyin."
        backgroundImage={IMAGES.projectsBanner}
        breadcrumbs={[{ label: "Projelerimiz" }]}
      />
      <Projects />
      <CTASection
        backgroundImage={IMAGES.ctaBg}
        title="Sizin Projeniz Bir Sonraki Olsun"
        subtitle="Enerji projeleriniz için profesyonel çözümler sunuyoruz."
        buttonText="Teklif Alın"
      />
    </>
  );
}
