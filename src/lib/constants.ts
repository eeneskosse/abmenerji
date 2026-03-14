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
  { value: 15, suffix: "+", label: "Yıllık Deneyim" },
  { value: 120, suffix: "+", label: "Uzman Kadro" },
  { value: 50, suffix: "+", label: "Aktif Müşteri" },
];

export const WHY_US = [
  {
    title: "Deneyimli Kadro",
    description:
      "120'den fazla elektrik mühendisi, enerji uzmanı ve saha teknisyeninden oluşan kadromuz, sektördeki 15 yılı aşkın birikimle her projeye hakim. Ekibimiz düzenli olarak sertifikasyon programlarına katılarak güncel teknolojileri takip eder.",
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
  "Enerji",
  "Altyapı",
  "Güneş Enerjisi",
  "Aydınlatma",
  "Şarj İstasyonu",
];

export const PROJECTS = [
  {
    id: 1,
    title: "Organize Sanayi Bölgesi Enerji Hattı",
    category: "Enerji",
    description: "250 MW kapasiteli enerji nakil hattı projesi",
  },
  {
    id: 2,
    title: "Güneş Enerji Santrali Kurulumu",
    category: "Güneş Enerjisi",
    description: "10 MW kapasiteli GES kurulumu ve devreye alma",
  },
  {
    id: 3,
    title: "Fabrika Elektrik Altyapısı",
    category: "Altyapı",
    description: "Büyük ölçekli üretim tesisi komple elektrik altyapısı",
  },
  {
    id: 4,
    title: "Trafo Merkezi Modernizasyonu",
    category: "Enerji",
    description: "Mevcut trafo merkezinin güçlendirme ve modernizasyon çalışması",
  },
  {
    id: 5,
    title: "Çatı Üstü GES Projesi",
    category: "Güneş Enerjisi",
    description: "Ticari bina çatı üstü güneş enerjisi sistemi",
  },
  {
    id: 6,
    title: "Endüstriyel Otomasyon Sistemi",
    category: "Altyapı",
    description: "Üretim hattı SCADA ve otomasyon entegrasyonu",
  },
  {
    id: 7,
    title: "Aydınlatma Direk Dikimi ve Hat Çekimi",
    category: "Aydınlatma",
    description:
      "Cadde, bulvar ve sanayi bölgelerinde beton ve metal direk dikimi, enerji nakil hattı çekimi ve aydınlatma altyapısı kurulum projesi",
  },
  {
    id: 8,
    title: "Elektrikli Araç Şarj İstasyonu Kurulumu",
    category: "Şarj İstasyonu",
    description:
      "AC ve DC hızlı şarj istasyonu tedarik, montaj ve devreye alma; otopark ve AVM lokasyonlarında anahtar teslim şarj altyapısı",
  },
];

export const COMPANY_INFO = {
  name: "ABM Enerji",
  address: "Organize Sanayi Bölgesi, İstanbul, Türkiye",
  phone: "+90 (212) 000 00 00",
  email: "info@abmenerji.com",
  workingHours: "Pazartesi - Cumartesi: 08:00 - 18:00",
};

// Unsplash stok fotoğraf URL'leri (sonradan gerçek fotoğraflarla değiştirilecek)
export const IMAGES = {
  heroBg:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
  aboutBanner:
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80",
  servicesBanner:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  projectsBanner:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  contactBanner:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  ctaBg:
    "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1920&q=80",
};
