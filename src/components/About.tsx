"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Misyonumuz",
    description:
      "Enerji sektöründe sürdürülebilir ve güvenilir çözümler sunarak, müşterilerimizin projelerini en yüksek kalite standartlarında hayata geçirmek.",
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
            <div className="aspect-[3/4] sm:aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-body">Firma Görseli</p>
              </div>
            </div>
            {/* Gold offset accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-400/20 rounded-xl -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-navy-800 rounded-xl px-6 py-4 shadow-lg">
              <p className="font-heading text-3xl font-bold text-gold-400">
                15+
              </p>
              <p className="text-slate-300 text-sm font-body">Yıllık Deneyim</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              kicker="Hakkımızda"
              title="Güvenilir Enerji Çözüm Ortağınız"
              description="ABM Enerji olarak, enerji sektöründe 15 yılı aşkın deneyimimizle endüstriyel ve ticari projelerde kapsamlı çözümler sunuyoruz. Uzman kadromuz ve modern ekipmanlarımızla her projede kaliteyi ön planda tutuyoruz."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-4"
            >
              {[
                "ISO 9001 kalite yönetim sistemi sertifikası",
                "Alanında uzman 120+ mühendis ve teknisyen",
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
