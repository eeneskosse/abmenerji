"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection({
  title = "Projeniz İçin Bizimle İletişime Geçin",
  subtitle = "Enerji ihtiyaçlarınız için size özel çözümler sunalım. Uzman ekibimiz projeleriniz için hazır.",
  backgroundImage,
  buttonText = "Teklif Alın",
  buttonHref = "/iletisim",
}: {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with fixed effect */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/80" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-400/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-400/20" />

      <Container className="relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="w-12 h-[3px] bg-gold-400 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-slate-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={buttonHref}>
              {buttonText}
            </Button>
            <Button variant="outline" href="/hizmetlerimiz">
              Hizmetlerimizi İnceleyin
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
