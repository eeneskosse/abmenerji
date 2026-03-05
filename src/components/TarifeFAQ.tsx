"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    soru: "Son Kaynak Tedarik Tarifesi limitleri ne zaman güncellendi?",
    cevap:
      "Son Kaynak Tedarik Tarifesi limitleri, Enerji Piyasası Düzenleme Kurumu'nun (EPDK) 31.10.2025 tarihli kararı ile güncellenmiştir. Yeni düzenleme, 01.01.2026 tarihinden itibaren yürürlüğe girmiştir.",
  },
  {
    soru: "01.01.2026 itibarıyla bu tarifeden kimler etkilenecek?",
    cevap:
      "2025 veya 2026 takvim yılı bazlı elektrik tüketimi limitlerini aşan tüketiciler etkilenecektir. Mesken aboneleri için 4.000 kWh, Ticarethane ve Sanayi aboneleri için 15.000 kWh, Tarımsal Faaliyetler için ise 150.000.000 kWh üzeri tüketim yapan müşteriler bu tarife kapsamına girmektedir.",
  },
  {
    soru: "Tüketimlerimi nereden takip edebilirim?",
    cevap:
      "Aylık enerji tüketiminizi faturalarınızdan takip edebilir, nihai tüketim tespitini ise Dağıtım Şirketinizden öğrenebilirsiniz. Tüketim limitlerini aşmanız durumunda, Son Kaynak Tedarik Tarifesi kapsamında dağıtım şirketi tarafından bilgilendirilirsiniz.",
  },
  {
    soru: "Tüm mesken aboneleri için bu tarife uygulanacak mı?",
    cevap:
      "Hayır. Son Kaynak Tedarik Tarifesi, yalnızca 2025 veya 2026 takvim yılı içinde 4.000 kWh tüketim limitini aşan kullanıcılar için geçerlidir. Limitlerin altında kalan mesken aboneleri Ulusal Tarife kapsamında faturalandırılmaya devam edecektir.",
  },
  {
    soru: "Yeni güncelleme hangi tarihten itibaren geçerli?",
    cevap:
      "01.01.2026 tarihinden itibaren 2025 veya 2026 yılı tüketimi belirlenen limitleri aşan tüketiciler için uygulamaya başlanmıştır. Örneğin; Ekim 2025'te limiti aşan bir mesken kullanıcısı 01.01.2026 itibarıyla, Aralık 2025'te aşan bir kullanıcı ise 01.03.2026 itibarıyla bu tarifeye dahil edilecektir.",
  },
  {
    soru: "Birden fazla tesisatım var. Hepsi bu tarifeye dahil olur mu?",
    cevap:
      "Hayır. Yalnızca limiti aşan tesisatlarınız Son Kaynak Tedarik Tarifesi kapsamında faturalandırılır. Diğer tesisatlarınız Ulusal Tarife'den faturalandırılmaya devam eder.",
  },
];

export function TarifeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          kicker="Sıkça Sorulan Sorular"
          title="Merak Edilenler"
          description="Son Kaynak Tedarik Tarifesi hakkında en çok sorulan soruları yanıtladık."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 max-w-3xl"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
              >
                <span className="font-heading text-[1.0625rem] font-semibold text-navy-800 group-hover:text-gold-600 transition-colors">
                  {faq.soru}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-gold-300 transition-colors">
                  <svg
                    className={`w-4 h-4 text-navy-600 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-slate-500 font-body leading-relaxed pr-12">
                      {faq.cevap}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
