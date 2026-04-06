"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Misyonumuz",
    description:
      "Müşteri odaklı hizmet anlayışımızla, sektöre özel ihtiyaçlara yönelik kaliteli, güvenilir ve yenilikçi endüstriyel çözümleri; zamanında, eksiksiz ve sürdürülebilir bir şekilde sunmaktır.",
  },
  {
    title: "Vizyonumuz",
    description:
      "Türkiye'nin enerji altyapısına değer katan, yenilikçi ve çevre dostu çözümleriyle sektörde öncü bir firma olmak.",
  },
  {
    title: "Değerlerimiz",
    description:
      "Güvenilirlik, kalite odaklılık, müşteri memnuniyeti ve sürdürülebilirlik ilkeleriyle her projede fark yaratıyoruz.",
  },
];

export function About() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] bg-white rounded-xl overflow-hidden flex items-center justify-center p-8">
              <Image
                src="/abm-logo.png"
                alt="ABM Enerji Mühendislik"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Gold offset accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-400/20 rounded-xl -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-navy-800 rounded-xl px-6 py-4 shadow-lg">
              <p className="font-heading text-3xl font-bold text-gold-400">
                4+
              </p>
              <p className="text-slate-300 text-sm font-body">Yıllık Deneyim</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              kicker="Hakkımızda"
              title="Güvenilir Enerji Çözüm Ortağınız"
              description="ABM Enerji olarak, 2022 yılından bu yana enerji sektöründe endüstriyel ve ticari projelerde kapsamlı çözümler sunuyoruz. Uzman kadromuz ve modern ekipmanlarımızla her projede kaliteyi ön planda tutuyoruz."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-4"
            >
              {[
                "Endüstriyel ve ticari projelerde anahtar teslim çözümler",
                "Türkiye genelinde proje teslim kapasitesi",
                "Çevre dostu ve sürdürülebilir enerji yaklaşımı",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-gold-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-body">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div id="misyon" className="scroll-mt-24" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 md:mt-28 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="relative border border-slate-100 rounded-xl p-8 hover:border-gold-200 transition-colors group"
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <h3 className="font-heading text-xl font-semibold text-navy-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
