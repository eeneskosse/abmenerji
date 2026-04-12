import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | ABM Enerji",
  description: "ABM Enerji Mühendislik gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <PageBanner
        title="Gizlilik Politikası"
        subtitle="Kişisel verilerinizin korunması bizim için önemlidir."
        backgroundImage={IMAGES.contactBanner}
        breadcrumbs={[{ label: "Gizlilik Politikası" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl prose-custom">
            <p className="text-slate-500 font-body text-sm mb-10">
              Son güncelleme: Nisan 2026
            </p>

            <h2>1. Giriş</h2>
            <p>
              ABM Enerji Mühendislik (&quot;Şirket&quot;, &quot;biz&quot;) olarak, abmenergy.com.tr adresindeki internet sitemizi
              ziyaret eden kullanıcılarımızın kişisel verilerinin korunmasına büyük önem veriyoruz.
              İşbu Gizlilik Politikası, sitemizi kullanırken hangi bilgilerin toplandığını ve bu bilgilerin
              nasıl kullanıldığını açıklamaktadır.
            </p>

            <h2>2. Toplanan Bilgiler</h2>
            <p>
              Sitemiz üzerinden yalnızca iletişim ve teklif formları aracılığıyla bizimle paylaşmayı tercih
              ettiğiniz bilgileri toplamaktayız. Bu bilgiler şunları içerebilir:
            </p>
            <ul>
              <li>Ad ve soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Mesaj içeriği</li>
              <li>Abone türü ve tahmini tüketim bilgisi (teklif formu için)</li>
            </ul>
            <p>
              Bu bilgiler yalnızca sizin tarafınızdan gönüllü olarak sağlanmakta olup, form doldurmadığınız
              sürece herhangi bir kişisel veriniz tarafımızca toplanmamaktadır.
            </p>

            <h2>3. Bilgilerin Kullanım Amacı</h2>
            <p>Topladığımız kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
            <ul>
              <li>Teklif taleplerinize yanıt vermek</li>
              <li>İletişim taleplerinizi değerlendirmek ve size geri dönüş sağlamak</li>
              <li>Hizmetlerimiz hakkında bilgilendirme yapmak</li>
            </ul>

            <h2>4. Bilgilerin Üçüncü Taraflarla Paylaşılması</h2>
            <p>
              Sitemiz üzerinden elde edilen kişisel bilgileriniz hiçbir koşulda üçüncü şahıs veya
              kuruluşlarla ticari amaçla paylaşılmaz, satılmaz veya kiralanmaz. Yasal zorunluluk
              durumları haricinde bilgileriniz gizli tutulur.
            </p>

            <h2>5. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin yetkisiz erişime, kayba veya değiştirilmeye karşı korunması için
              makul teknik ve idari tedbirler almaktayız. Ancak internet üzerinden yapılan veri
              iletiminin tamamen güvenli olduğu garanti edilemez.
            </p>

            <h2>6. Site İçeriğine İlişkin Haklar</h2>
            <p>
              İnternet sitemizdeki tüm içerik, görseller, tasarım ve yazılım ABM Enerji Mühendislik&apos;in
              mülkiyetindedir. Sitedeki materyaller izinsiz olarak kopyalanamaz, çoğaltılamaz veya
              ticari amaçla kullanılamaz. Kişisel kullanım amacıyla sayfaların çıktısını alabilirsiniz.
            </p>

            <h2>7. Sorumluluk Sınırı</h2>
            <p>
              Sitemizde yer alan bilgiler tanıtım ve bilgilendirme amaçlıdır. İçeriklerin güncelliği
              konusunda azami özen gösterilmekle birlikte, olası eksiklik veya hatalardan kaynaklanan
              zararlardan ABM Enerji Mühendislik sorumlu tutulamaz. Kesin ve güncel bilgi için
              doğrudan bizimle iletişime geçmenizi öneririz.
            </p>

            <h2>8. Değişiklikler</h2>
            <p>
              ABM Enerji Mühendislik, işbu Gizlilik Politikası&apos;nı önceden bildirimde bulunmaksızın
              güncelleme hakkını saklı tutar. Güncellemeler yayınlandığı andan itibaren geçerlidir.
            </p>

            <h2>9. Haklarınız</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinizle ilgili
              olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için <a href="mailto:info@abmenerji.com" className="text-gold-600 hover:text-gold-700">info@abmenerji.com</a> adresinden
              bize ulaşabilirsiniz.
            </p>

            <h2>10. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> info@abmenerji.com</li>
              <li><strong>Telefon:</strong> +90 538 503 38 81</li>
              <li><strong>Adres:</strong> Erenler Mh. 1201. Sk. No:5 Erenler, Sakarya</li>
            </ul>

            <p className="mt-8 text-sm text-slate-400">
              Bu siteyi kullanarak işbu Gizlilik Politikası&apos;nın şartlarını kabul etmiş sayılırsınız.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
