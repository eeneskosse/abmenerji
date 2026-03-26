"use client";

import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PROJECTS, IMAGES } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";
import { notFound } from "next/navigation";

export default function ProjeDetayPage() {
  const params = useParams();
  const project = PROJECTS.find((p) => p.id === Number(params.id));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && project)
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % project.images.length : null
        );
      if (e.key === "ArrowLeft" && project)
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + project.images.length) % project.images.length
            : null
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, project]);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Banner with main project image */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden pt-[7.5rem]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/60 to-navy-900/30" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-transparent z-10" />

        <Container className="relative z-10 pb-12 md:pb-16">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-body mb-4"
          >
            <Link
              href="/"
              className="text-slate-400 hover:text-gold-400 transition-colors"
            >
              Ana Sayfa
            </Link>
            <svg
              className="w-3.5 h-3.5 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <Link
              href="/projelerimiz"
              className="text-slate-400 hover:text-gold-400 transition-colors"
            >
              Projelerimiz
            </Link>
            <svg
              className="w-3.5 h-3.5 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="text-gold-400">{project.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block bg-gold-500/20 text-gold-400 font-body text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-4xl">
              {project.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Project details */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Description and details */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="font-heading text-xl md:text-2xl font-bold text-navy-800 mb-4">
                Proje Hakkında
              </h2>
              <p className="text-slate-600 font-body text-base leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-4">
                Mühendislik Kapsamı
              </h3>
              <ul className="space-y-3">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-slate-600 font-body text-sm leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Info card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-heading text-base font-semibold text-navy-800 mb-4">
                  Proje Bilgileri
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400 font-body text-xs uppercase tracking-wider">
                      Kategori
                    </span>
                    <p className="text-navy-800 font-body text-sm font-medium mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  {project.specs.map((spec, i) => (
                    <div key={i} className="border-t border-slate-200 pt-3">
                      <span className="text-slate-400 font-body text-xs uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <p className="text-navy-800 font-body text-sm font-medium mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-slate-200 pt-3">
                    <span className="text-slate-400 font-body text-xs uppercase tracking-wider">
                      Durum
                    </span>
                    <p className="text-green-600 font-body text-sm font-medium mt-0.5">
                      Tamamlandı
                    </p>
                  </div>
                </div>

                <Link
                  href="/teklif-alin"
                  className="mt-6 block text-center bg-gold-500 hover:bg-gold-600 text-white font-heading font-semibold text-sm py-3 rounded-lg transition-colors"
                >
                  Benzer Proje Teklifi Alın
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Project gallery */}
          <motion.div
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-xl md:text-2xl font-bold text-navy-800 mb-6">
              Proje Görselleri
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Görsel ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                onClick={closeLightbox}
              >
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white/70 hover:text-white z-10 cursor-pointer"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Previous button */}
                {project.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(
                        (lightboxIndex - 1 + project.images.length) %
                          project.images.length
                      );
                    }}
                    className="absolute left-4 text-white/70 hover:text-white z-10 cursor-pointer"
                  >
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                )}

                {/* Image */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-[90vw] h-[80vh] max-w-6xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={project.images[lightboxIndex]}
                    alt={`${project.title} - Görsel ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </motion.div>

                {/* Next button */}
                {project.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(
                        (lightboxIndex + 1) % project.images.length
                      );
                    }}
                    className="absolute right-4 text-white/70 hover:text-white z-10 cursor-pointer"
                  >
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-body text-sm">
                  {lightboxIndex + 1} / {project.images.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Back button */}
          <div className="mt-12">
            <Link
              href="/projelerimiz"
              className="inline-flex items-center gap-2 text-navy-800 hover:text-gold-600 font-body text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Tüm Projelere Dön
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
