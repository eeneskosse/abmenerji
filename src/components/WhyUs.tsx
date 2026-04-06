"use client";

import { motion } from "framer-motion";
import {
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_US } from "@/lib/constants";

const iconMap = {
  users: UserGroupIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  phone: PhoneIcon,
};

export function WhyUs() {
  return (
    <section id="neden-biz" className="scroll-mt-24 py-20 md:py-28 lg:py-32 bg-slate-50">
      <Container>
        <SectionHeading
          kicker="Neden Biz?"
          title="ABM Enerji Farkı"
          description="500'den fazla başarılı proje ve müşteri odaklı yaklaşımımızla her projede fark yaratıyoruz."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {WHY_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:border-gold-300 group-hover:bg-gold-50 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
