import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { Contact } from "@/components/Contact";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "İletişim | ABM Enerji",
  description:
    "ABM Enerji ile iletişime geçin. Projeleriniz hakkında bilgi almak veya teklif talep etmek için bize ulaşın.",
};

export default function IletisimPage() {
  return (
    <>
      <PageBanner
        title="İletişim"
        subtitle="Projeleriniz hakkında bilgi almak veya teklif talep etmek için bize ulaşın."
        backgroundImage={IMAGES.contactBanner}
        breadcrumbs={[{ label: "İletişim" }]}
      />
      <Contact />
    </>
  );
}
