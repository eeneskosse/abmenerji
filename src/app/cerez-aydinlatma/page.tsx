import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Çerez Aydınlatma Metni | ABM Enerji",
  description: "ABM Enerji Mühendislik çerez aydınlatma metni ve çerez kullanım politikası.",
};

export default function CerezAydinlatmaPage() {
  return (
    <>
      <PageBanner
        title="Çerez Aydınlatma Metni"
        subtitle="İnternet sitemizde kullanılan çerezler hakkında bilgilendirme."
        backgroundImage={IMAGES.contactBanner}
        breadcrumbs={[{ label: "Çerez Aydınlatma Metni" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl prose-custom">
            <p className="text-slate-500 font-body text-sm mb-10">
              Son güncelleme: Nisan 2026
            </p>

            <h2>Çerez Aydınlatma Metni</h2>
            <p>
              ABM Enerji Mühendislik (&quot;Şirket&quot;) olarak, abmenerji.com adresindeki internet sitemizde
              çerezler kullanmaktayız. İşbu Çerez Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması
              Kanunu&apos;nun (&quot;KVK Kanunu&quot;) 10. maddesi kapsamında veri sorumlusu sıfatıyla Şirket
              tarafından hazırlanmıştır.
            </p>

            <h2>Çerez Nedir?</h2>
            <p>
              Çerezler, internet sitelerinin tarayıcınız aracılığıyla cihazınıza (bilgisayar, tablet veya
              telefon) yerleştirdiği küçük metin dosyalarıdır. Bu dosyalar sayesinde internet sitemiz
              cihazınızı tanıyabilir ve dil tercihi gibi ayarlarınızı hatırlayabilir.
            </p>

            <h2>Çerez Türleri</h2>

            <h3>Sürelerine Göre</h3>
            <ul>
              <li>
                <strong>Oturum çerezleri:</strong> Tarayıcınızı kapattığınızda otomatik olarak silinen,
                yalnızca o oturum süresince geçerli çerezlerdir.
              </li>
              <li>
                <strong>Kalıcı çerezler:</strong> Belirlenen süre boyunca cihazınızda saklanan ve
                tercihlerinizi hatırlamamıza yardımcı olan çerezlerdir.
              </li>
            </ul>

            <h3>Taraflarına Göre</h3>
            <ul>
              <li>
                <strong>Birinci taraf çerezleri:</strong> Doğrudan sitemiz tarafından yerleştirilen çerezlerdir.
              </li>
              <li>
                <strong>Üçüncü taraf çerezleri:</strong> Sitemiz dışındaki hizmet sağlayıcılar tarafından
                yerleştirilen çerezlerdir.
              </li>
            </ul>

            <h2>Kullandığımız Çerezler</h2>

            <h3>Zorunlu Çerezler</h3>
            <p>
              İnternet sitemizin düzgün çalışabilmesi için gerekli olan çerezlerdir. Bu çerezler olmadan
              sitenin temel işlevleri kullanılamaz. Zorunlu çerezler oturum süresince aktiftir ve
              tarayıcınızı kapattığınızda silinir.
            </p>
            <p>
              Bu çerezler için KVK Kanunu m.5 kapsamında &quot;veri sorumlusunun meşru menfaatleri için
              veri işlenmesinin zorunlu olması&quot; şartına dayanmaktayız.
            </p>

            <h3>Fonksiyonel Çerezler</h3>
            <p>
              Dil tercihi ve sayfa düzeni gibi seçimlerinizi hatırlayarak size daha kişisel bir deneyim
              sunmamıza yardımcı olan çerezlerdir. Bu çerezlerin kullanımı isteğe bağlıdır.
            </p>

            <h2>Çerez Ayarlarınızı Nasıl Yönetebilirsiniz?</h2>
            <p>
              Tarayıcınızın ayarlarından çerezleri kontrol edebilir, engelleyebilir veya silebilirsiniz.
              Her tarayıcıda çerez yönetimi farklı olduğundan, kullandığınız tarayıcının yardım
              menüsünden detaylı bilgi alabilirsiniz:
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-g%C3%B6z-atma-verilerini-ve-%C3%A7erezleri-silme-45f1f64c-1f56-4b17-8d78-3a1c9c3e63a6" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700">
                  Safari
                </a>
              </li>
            </ul>
            <p>
              Çerezleri devre dışı bırakmanız durumunda sitemizin bazı işlevlerinin düzgün
              çalışmayabileceğini hatırlatmak isteriz.
            </p>

            <h2>Değişiklikler</h2>
            <p>
              İnternet sitemize yeni çerezler ekleyebilir veya mevcut çerezleri değiştirebiliriz.
              Bu durumda işbu Çerez Aydınlatma Metni güncellenecektir. Güncel metin her zaman
              bu sayfada yayınlanacaktır.
            </p>

            <h2>İletişim</h2>
            <p>
              Çerezlerle ilgili sorularınız veya KVK Kanunu kapsamındaki haklarınızı kullanmak için
              aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> <a href="mailto:info@abmenerji.com" className="text-gold-600 hover:text-gold-700">info@abmenerji.com</a></li>
              <li><strong>Telefon:</strong> +90 538 503 38 81</li>
              <li><strong>Adres:</strong> Erenler Mh. 1201. Sk. No:5 Erenler, Sakarya</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
