import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { TarifeBilgi } from "@/components/TarifeBilgi";
import { TarifeFAQ } from "@/components/TarifeFAQ";
import { TeklifForm } from "@/components/TeklifForm";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Teklif Alın | ABM Enerji",
  description:
    "Son Kaynak Tedarik Tarifesi hakkında bilgi alın ve ücretsiz fiyat teklifi için formu doldurun.",
};

export default function TeklifAlinPage() {
  return (
    <>
      <PageBanner
        title="Teklif Alın"
        subtitle="Son Kaynak Tedarik Tarifesi hakkında bilgi edinin ve enerji maliyetlerinizi optimize edin."
        backgroundImage={IMAGES.ctaBg}
        breadcrumbs={[{ label: "Teklif Alın" }]}
      />
      <TarifeBilgi />
      <TarifeFAQ />
      <TeklifForm />
    </>
  );
}
