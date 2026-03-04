import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HomeServices } from "@/components/HomeServices";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomeServices />
      <CTASection
        backgroundImage={IMAGES.ctaBg}
        title="Projeniz İçin Doğru Çözüm Ortağı"
        subtitle="Enerji ihtiyaçlarınız için size özel çözümler sunalım. Uzman ekibimiz projeleriniz için hazır."
      />
    </>
  );
}
