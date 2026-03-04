import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { Services } from "@/components/Services";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | ABM Enerji",
  description:
    "ABM Enerji hizmetleri: Elektrik tesisat, enerji altyapısı, güneş enerjisi, bakım-onarım, mühendislik danışmanlığı ve otomasyon sistemleri.",
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageBanner
        title="Hizmetlerimiz"
        subtitle="Elektrik tesisattan güneş enerjisine, kapsamlı enerji çözümleri sunuyoruz."
        backgroundImage={IMAGES.servicesBanner}
        breadcrumbs={[{ label: "Hizmetlerimiz" }]}
      />
      <Services />
      <CTASection
        backgroundImage={IMAGES.ctaBg}
        title="Hizmetlerimiz Hakkında Bilgi Alın"
        subtitle="İhtiyacınıza uygun enerji çözümü için bizimle iletişime geçin."
        buttonText="İletişime Geçin"
      />
    </>
  );
}
