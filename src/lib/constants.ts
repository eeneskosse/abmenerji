export const NAV_LINKS = [
  {
    label: "Kurumsal",
    href: "/hakkimizda",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Misyon & Vizyon", href: "/hakkimizda#misyon" },
      { label: "Neden Biz?", href: "/hakkimizda#neden-biz" },
    ],
  },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Projelerimiz", href: "/projelerimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export const SERVICES = [
  {
    id: "elektrik",
    title: "Elektrik Tesisat",
    description:
      "Endüstriyel ve ticari tesislerde elektrik tesisat projelendirme, montaj ve devreye alma hizmetleri sunuyoruz.",
    icon: "bolt" as const,
  },
  {
    id: "altyapi",
    title: "Enerji Altyapısı",
    description:
      "Enerji nakil hatları, trafo merkezleri ve dağıtım altyapısı kurulum ve bakım çözümleri.",
    icon: "building" as const,
  },
  {
    id: "gunes",
    title: "Güneş Enerjisi Sistemleri",
    description:
      "Güneş enerji santrali (GES) fizibilite, kurulum ve işletme hizmetleri ile sürdürülebilir enerji çözümleri.",
    icon: "sun" as const,
  },
  {
    id: "bakim",
    title: "Bakım & Onarım",
    description:
      "Periyodik bakım planlaması, arıza tespiti ve acil müdahale hizmetleri ile kesintisiz enerji sağlıyoruz.",
    icon: "wrench" as const,
  },
  {
    id: "muhendislik",
    title: "Mühendislik Danışmanlığı",
    description:
      "Fizibilite çalışmaları, proje tasarımı ve teknik danışmanlık ile yatırımlarınıza yön veriyoruz.",
    icon: "chart" as const,
  },
  {
    id: "otomasyon",
    title: "Otomasyon Sistemleri",
    description:
      "Endüstriyel otomasyon, SCADA sistemleri ve akıllı enerji yönetimi çözümleri.",
    icon: "cpu" as const,
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Tamamlanan Proje" },
  { value: 4, suffix: "+", label: "Yıllık Deneyim" },
];

export const WHY_US = [
  {
    title: "Deneyimli Kadro",
    description:
      "Alanında uzman elektrik mühendisleri, enerji danışmanları ve saha teknisyenlerinden oluşan kadromuzla her projeye özenle yaklaşıyoruz. Ekibimiz güncel mevzuat ve teknolojileri yakından takip ederek size en doğru çözümü sunar.",
    icon: "users" as const,
  },
  {
    title: "Zamanında Teslim",
    description:
      "Detaylı proje planlaması ve profesyonel iş takibi sayesinde taahhüt edilen sürelere %98 oranında sadık kalıyoruz. Gecikme riski oluştuğunda alternatif çözüm planlarımızı devreye alarak süreci aksatmadan yönetiyoruz.",
    icon: "clock" as const,
  },
  {
    title: "Kalite Taahhüdü",
    description:
      "ISO 9001 kalite yönetim sistemi çerçevesinde çalışıyor, TSE ve uluslararası standartlara uygun malzemeler kullanıyoruz. Her aşamada çoklu kalite kontrol noktalarıyla projelerin en yüksek standartlarda teslim edilmesini sağlıyoruz.",
    icon: "shield" as const,
  },
  {
    title: "7/24 Destek",
    description:
      "Proje sonrasında da yanınızdayız. Acil arıza müdahale ekibimiz 7/24 ulaşılabilir durumda. Periyodik bakım planlarımızla tesislerinizin kesintisiz çalışmasını garanti altına alıyoruz.",
    icon: "phone" as const,
  },
];

export const PROJECT_CATEGORIES = [
  "Tümü",
  "Endüstriyel Tesis",
  "Kamu & Konut",
  "Yenilenebilir Enerji",
  "Şarj İstasyonu",
];

export const PROJECTS = [
  {
    id: 1,
    title: "KNS Otomotiv – Entegre Enerji ve Kesintisiz Güç Sistemleri",
    category: "Endüstriyel Tesis",
    description:
      "Otomotiv sektörünün yüksek hassasiyet gerektiren üretim bandı ihtiyaçlarına yönelik, tesisin tüm enerji altyapısı \"sıfır hata\" prensibiyle projelendirilmiştir.",
    image: "/projeler/kns-oto-1.jpg",
    images: ["/projeler/kns-oto-1.jpg", "/projeler/kns-oto-2.jpg"],
    specs: [
      { label: "Sektör", value: "Otomotiv" },
      { label: "Konum", value: "Sakarya" },
      { label: "Kapsam", value: "Kuvvetli Akım, Trafo, Jeneratör, Yangın Alarm" },
      { label: "Aydınlatma", value: "LED Endüstriyel Aydınlatma" },
    ],
    details: [
      "Fabrika sahasının enerji yoğunluğuna göre optimize edilmiş kuvvetli akım tesisatı ve verimlilik odaklı LED aydınlatma sistemleri.",
      "Üretim sürekliliğini korumak adına yüksek kapasiteli trafo merkezi ve enerji kesintilerine karşı anlık devreye giren jeneratör sistemleri entegrasyonu.",
      "Tesis genelinde hassas algılama kabiliyetine sahip yangın alarm ve erken uyarı sistemleri kurulumu.",
    ],
  },
  {
    id: 2,
    title: "Erensan Çelik – Komple Fabrika ve İdari Bina Elektrik Mühendisliği",
    category: "Endüstriyel Tesis",
    description:
      "Sakarya Arifiye'de konumlanan, toplam 4.431,57 m² kapalı alana sahip dev tesiste, endüstriyel üretim alanları ile modern ofis ihtiyaçları tek bir çatı altında koordine edilmiştir.",
    image: "/projeler/erensan-1.jpg",
    images: ["/projeler/erensan-1.jpg", "/projeler/erensan-2.jpg"],
    specs: [
      { label: "Toplam Alan", value: "4.431,57 m²" },
      { label: "Konum", value: "Sakarya Arifiye" },
      { label: "Kapsam", value: "Endüstriyel Tesisat, Zayıf Akım, Paratoner" },
      { label: "Tesis Tipi", value: "Fabrika + İdari Bina" },
    ],
    details: [
      "Çelik konstrüksiyon üretiminde gereken yüksek akım ihtiyacını karşılayacak, gerilim düşümü hesaplamaları hassasiyetle yapılmış endüstriyel tesisat.",
      "Modern çalışma ortamı için zayıf akım (data, telefon, yapısal kablolama) ve iç mimari aydınlatma çözümleri.",
      "Fabrika binasının yüksek metal yapısı göz önünde bulundurularak, uluslararası standartlarda aktif paratoner sistemi kurulumu.",
    ],
  },
  {
    id: 3,
    title: "Şenpiliç Kaynarca – Üretim Hattı Mekanik ve Elektrik Entegrasyonu",
    category: "Endüstriyel Tesis",
    description:
      "Gıda endüstrisinin öncü kuruluşlarından Şenpiliç için mekanik imalat ile elektrik otomasyonu birleştirilmiştir.",
    image: "/projeler/senplic-kaynarca-1.jpg",
    images: [
      "/projeler/senplic-kaynarca-1.jpg",
      "/projeler/senplic-kaynarca-2.jpg",
    ],
    specs: [
      { label: "Sektör", value: "Gıda Endüstrisi" },
      { label: "Konum", value: "Sakarya Kaynarca" },
      { label: "Kapsam", value: "Konveyör İmalatı, ADP, Saha Tesisatı" },
      { label: "Sistem", value: "Ana Dağıtım Panosu (ADP)" },
    ],
    details: [
      "Üretim akışını modernize eden özel konveyör bandı imalatı ve montaj süreçleri.",
      "Tüm tesisin enerji kontrolünü sağlayan, yüksek koruma sınıflı bileşenlerle donatılmış Ana Dağıtım Panosu (ADP) tasarımı ve saha tesisat çekimi.",
    ],
  },
  {
    id: 4,
    title: "GSB Sakarya Serdivan Yurdu – Yüksek Kapasiteli Enerji Altyapısı",
    category: "Kamu & Konut",
    description:
      "Gençlik ve Spor Bakanlığı'na bağlı, yüzlerce öğrenciye ev sahipliği yapan bu büyük ölçekli projede kamu ihale şartnamelerine tam uyumlu altyapı inşa edilmiştir.",
    image: "/projeler/gsb-yurt-1.jpg",
    images: [
      "/projeler/gsb-yurt-1.jpg",
      "/projeler/gsb-yurt-2.jpg",
      "/projeler/gsb-yurt-3.jpg",
    ],
    specs: [
      { label: "Kat Sayısı", value: "4 Kat" },
      { label: "Bağımsız Bölüm", value: "75 Adet" },
      { label: "Kurulu Güç", value: "898.688 W" },
      { label: "Talep Gücü", value: "300.000 W" },
    ],
    details: [
      "4 katlı mimari yapı içerisinde toplam 75 bağımsız bölümün enerji dağıtımı.",
      "Toplamda 898.688 W Kurulu Güç ve 300.000 W Talep Gücü yönetimi için özel trafo merkezi kurulumu.",
      "Bağımsız bölümlerin iç tesisat işlemleri, acil durum aydınlatmaları ve bina enerji yönetim sistemleri anahtar teslim tamamlanmıştır.",
    ],
  },
  {
    id: 5,
    title: "Kotanoğlu İnşaat – Korucuk Modern Konut Sitesi",
    category: "Kamu & Konut",
    description:
      "Sakarya Korucuk'un çehresini değiştiren 99 dairelik bu prestijli projede, konfor ve güvenlik teknolojileri ön planda tutulmuştur.",
    image: "/projeler/kotanoglu-1.jpg",
    images: ["/projeler/kotanoglu-1.jpg", "/projeler/kotanoglu-2.jpg"],
    specs: [
      { label: "Daire Sayısı", value: "99 Daire" },
      { label: "Konum", value: "Sakarya Korucuk" },
      { label: "Güneş Paneli", value: "22 Adet" },
      { label: "Kapsam", value: "Tesisat, Yangın Algılama, GES" },
    ],
    details: [
      "99 dairenin tamamında akıllı sigorta sistemleri ve yüksek kaliteli elektrik-aydınlatma tesisat uygulamaları.",
      "Tüm blokları kapsayan, merkezi izleme üniteli yangın algılama ve ihbar sistemleri.",
      "22 adet güneş paneli ile ortak alan aydınlatmalarında yenilenebilir enerji kullanımı.",
    ],
  },
  {
    id: 6,
    title: "Söğütlü Villa Grubu – Estetik ve Teknoloji Odaklı Elektrik Projesi",
    category: "Kamu & Konut",
    description:
      "Söğütlü bölgesinde inşa edilen 18 adet bağımsız lüks villanın elektrik mühendisliği süreçleri, modern mimariyle uyumlu şekilde yürütülmüştür.",
    image: "/projeler/sogutlu-villa-1.jpg",
    images: ["/projeler/sogutlu-villa-1.jpg", "/projeler/sogutlu-villa-2.jpg"],
    specs: [
      { label: "Villa Sayısı", value: "18 Adet" },
      { label: "Konum", value: "Söğütlü" },
      { label: "Kapsam", value: "İç Mekan, Bahçe Aydınlatma, Akıllı Ev" },
      { label: "Koruma", value: "Bağımsız Enerji Panoları" },
    ],
    details: [
      "Villaların iç mekan aydınlatma altyapısı, çevre ve bahçe aydınlatma sistemleri ile akıllı ev sistemlerine hazır altyapı kurulumu.",
      "Her villa için bağımsız enerji panoları ve güvenli akım koruma çözümleri.",
    ],
  },
  {
    id: 7,
    title: "Serdivan Güneş Enerji Santrali (GES) Projesi",
    category: "Yenilenebilir Enerji",
    description:
      "Sakarya Serdivan'da 1.045,78 m² yüzey alanına sahip, 25 kWe kurulu güç kapasiteli doğa dostu enerji kaynağı devreye alınmıştır.",
    image: "/projeler/serdivan-ges-1.jpg",
    images: ["/projeler/serdivan-ges-1.jpg", "/projeler/serdivan-ges-2.jpg"],
    specs: [
      { label: "Yüzey Alanı", value: "1.045,78 m²" },
      { label: "Kurulu Güç", value: "25 kWe" },
      { label: "Panel Sayısı", value: "45 Adet" },
      { label: "Konum", value: "Sakarya Serdivan" },
    ],
    details: [
      "Toplam 1.045,78 m² yüzey alanına sahip, 25 kWe kurulu güç kapasiteli GES projesi.",
      "Maksimum ışınım açısıyla yerleştirilmiş 45 adet yüksek verimli panel.",
      "İşletme maliyetlerinde tasarruf sağlanırken, karbon salınımının azaltılmasına doğrudan katkı.",
    ],
  },
  {
    id: 8,
    title: "Fluxus Cafe Kırkpınar – Mimari Aydınlatma ve Elektrik Tasarımı",
    category: "Yenilenebilir Enerji",
    description:
      "Kırkpınar'ın estetik dokusuna uygun, ticari prestiji artıran bir aydınlatma ve tesisat projesi hayata geçirilmiştir.",
    image: "/projeler/fluxus-cafe-1.jpg",
    images: ["/projeler/fluxus-cafe-1.jpg"],
    specs: [
      { label: "Sektör", value: "Gastronomi / Ticari" },
      { label: "Konum", value: "Kırkpınar" },
      { label: "Kapsam", value: "Konsept Aydınlatma, Güçlendirilmiş Kablolama" },
      { label: "Sistem", value: "Elektrik Dağıtım Panoları" },
    ],
    details: [
      "Mekanın atmosferini belirleyen, enerji tasarruflu ancak yüksek görsel kaliteye sahip konsept aydınlatma tasarımları.",
      "Gastronomi alanındaki yüksek güç çeken mutfak ekipmanları için güçlendirilmiş kablolama ve güvenli elektrik dağıtım panoları.",
    ],
  },
  {
    id: 9,
    title: "Elektrikli Araç Şarj İstasyonu Kurulumu",
    category: "Şarj İstasyonu",
    description:
      "Elektrikli araç kullanımının hızla yaygınlaştığı günümüzde, AC ve DC şarj istasyonlarının altyapı projelendirmesinden kurulumuna kadar anahtar teslim çözümler sunuyoruz.",
    image: "/projeler/sarjistasyonu-1.jpg",
    images: [
      "/projeler/sarjistasyonu-1.jpg",
      "/projeler/sarjistasyonu-2.jpg",
      "/projeler/sarjistasyonu-3.jpg",
      "/projeler/sarjistasyonu-4.jpg",
      "/projeler/sarjistasyonu-5.jpg",
    ],
    specs: [
      { label: "Kapasite", value: "AC 22 kW / DC 120 kW" },
      { label: "Konum", value: "Sakarya" },
      { label: "Kapsam", value: "Altyapı, Kurulum, Devreye Alma" },
      { label: "Uyumluluk", value: "CCS2 / Type 2" },
    ],
    details: [
      "Elektrik altyapı analizi, trafo kapasitesi değerlendirmesi ve şarj istasyonu yerleşim planlaması.",
      "AC ve DC şarj ünitelerinin montajı, kablolama ve topraklama işlemleri.",
      "Şarj istasyonlarının devreye alınması, test edilmesi ve kullanıma hazır hale getirilmesi.",
      "Kurulum sonrası periyodik bakım ve teknik destek hizmeti.",
    ],
  },
];

export const COMPANY_INFO = {
  name: "ABM Enerji",
  address: "Erenler Mh. 1201. Sk. No:5 Erenler, Sakarya",
  phone: "+90 538 503 38 81",
  email: "info@abmenerji.com",
  workingHours: "Pazartesi - Cumartesi: 08:00 - 18:00",
};

// Unsplash stok fotoğraf URL'leri (sonradan gerçek fotoğraflarla değiştirilecek)
export const IMAGES = {
  heroBg: "/images/hero-1.jpg",
  aboutBanner: "/images/about-banner.jpg",
  servicesBanner: "/images/services-banner.jpg",
  projectsBanner: "/images/projects-banner.jpg",
  contactBanner: "/images/contact-banner.jpg",
  ctaBg: "/images/cta-bg.jpg",
};
