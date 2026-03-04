"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BoltIcon,
  SunIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "Elektrik Tesisat",
    description:
      "Endüstriyel ve ticari tesislerde profesyonel elektrik tesisat projelendirme ve montaj.",
    icon: BoltIcon,
  },
  {
    title: "Güneş Enerjisi Sistemleri",
    description:
      "GES fizibilite, kurulum ve işletme hizmetleri ile sürdürülebilir enerji çözümleri.",
    icon: SunIcon,
  },
  {
    title: "Enerji Altyapısı",
    description:
      "Enerji nakil hatları, trafo merkezleri ve dağıtım altyapısı kurulumu.",
    icon: BuildingOffice2Icon,
  },
];

export function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            kicker="Hizmetlerimiz"
            title="Ne Yapıyoruz?"
            description="Enerji sektöründe kapsamlı çözümlerle yanınızdayız."
          />
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-2 text-gold-600 font-heading font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            Tüm Hizmetleri Gör
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-7"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-400 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors">
                <item.icon className="w-7 h-7 text-gold-600" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2.5">
                {item.title}
              </h3>
              <p className="text-slate-500 font-body text-[0.9375rem] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
