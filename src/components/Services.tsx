"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  BuildingOffice2Icon,
  SunIcon,
  WrenchScrewdriverIcon,
  DocumentChartBarIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  bolt: BoltIcon,
  building: BuildingOffice2Icon,
  sun: SunIcon,
  wrench: WrenchScrewdriverIcon,
  chart: DocumentChartBarIcon,
  cpu: CpuChipIcon,
};

export function Services() {
  return (
    <section
      className="py-20 md:py-28 lg:py-32 bg-slate-50"
    >
      <Container>
        <SectionHeading
          kicker="Hizmetlerimiz"
          title="Kapsamlı Enerji Çözümleri"
          description="Elektrik tesisattan güneş enerjisine, otomasyon sistemlerinden mühendislik danışmanlığına kadar geniş hizmet yelpazemizle yanınızdayız."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative bg-white rounded-xl p-7 lg:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-400 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors">
                  <Icon className="w-7 h-7 text-gold-600" />
                </div>

                <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-body text-[0.9375rem] leading-relaxed mb-5">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-gold-600 font-body font-medium text-sm gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                  Detaylı Bilgi
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
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
