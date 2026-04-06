"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    kicker: "Enerji & Altyapı Çözümleri",
    title: "Enerjinize",
    titleHighlight: "Güç Katıyoruz",
    description:
      "Elektrik tesisat, enerji altyapısı ve güneş enerjisi alanlarında profesyonel çözümlerle projelerinize değer katıyoruz.",
    primaryBtn: { text: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    secondaryBtn: { text: "İletişime Geçin", href: "/iletisim" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    kicker: "Sürdürülebilir Enerji",
    title: "Güneş Enerjisi",
    titleHighlight: "Sistemleri",
    description:
      "GES fizibilite, kurulum ve işletme hizmetleri ile temiz ve sürdürülebilir enerji çözümleri sunuyoruz.",
    primaryBtn: { text: "GES Çözümleri", href: "/hizmetlerimiz" },
    secondaryBtn: { text: "Projelerimiz", href: "/projelerimiz" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    kicker: "Endüstriyel Çözümler",
    title: "Endüstriyel",
    titleHighlight: "Otomasyon",
    description:
      "SCADA sistemleri, akıllı enerji yönetimi ve endüstriyel otomasyon ile tesislerinizi geleceğe taşıyoruz.",
    primaryBtn: { text: "Detaylı Bilgi", href: "/hizmetlerimiz" },
    secondaryBtn: { text: "Teklif Alın", href: "/iletisim" },
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export function Hero() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback(
    (dir: number) => {
      const next =
        dir > 0
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length;
      setCurrent([next, dir]);
    },
    [current]
  );

  const goToSlide = (index: number) => {
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Gold accent line at very top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-transparent z-20" />

      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="max-w-2xl pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="w-16 h-[3px] bg-gold-400 mb-7" />
                <p className="text-gold-400 font-body text-sm uppercase tracking-[0.2em] font-medium mb-4">
                  {slide.kicker}
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  {slide.title}
                  <br />
                  <span className="text-gold-400">{slide.titleHighlight}</span>
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-body">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href={slide.primaryBtn.href}>
                    {slide.primaryBtn.text}
                  </Button>
                  <Button variant="outline" href={slide.secondaryBtn.href}>
                    {slide.secondaryBtn.text}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust indicators */}
            <div className="mt-14 flex items-center gap-8 text-slate-500">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-white">500+</span>
                <span className="text-xs uppercase tracking-wider">Proje</span>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-white">4+</span>
                <span className="text-xs uppercase tracking-wider">Yıl Deneyim</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Left / Right arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white/70 hover:text-gold-400 transition-all duration-200 cursor-pointer group"
        aria-label="Önceki"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white/70 hover:text-gold-400 transition-all duration-200 cursor-pointer group"
        aria-label="Sonraki"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-gold-400"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20">
          <motion.div
            key={current}
            className="h-full bg-gold-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
      )}
    </section>
  );
}
