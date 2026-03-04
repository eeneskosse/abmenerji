"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative h-[420px] md:h-[450px] flex items-end overflow-hidden pt-[7.5rem]">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/70 to-navy-900/50" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-transparent z-10" />

      <Container className="relative z-10 pb-12 md:pb-16">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm font-body mb-4"
        >
          <a
            href="/"
            className="text-slate-400 hover:text-gold-400 transition-colors"
          >
            Ana Sayfa
          </a>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
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
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-slate-400 hover:text-gold-400 transition-colors"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-gold-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-12 h-[3px] bg-gold-400 mb-5" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-slate-300 font-body text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
