"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

const limitler = [
  {
    abone: "Mesken Aboneleri",
    limit: "4.000 kWh",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    abone: "Ticarethane & Sanayi",
    limit: "15.000 kWh",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    abone: "Tarımsal Faaliyetler",
    limit: "150.000.000 kWh",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export function TarifeBilgi() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl"
        >
          <div className="w-12 h-[3px] bg-gold-400 mb-5" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-800 mb-4">
            Son Kaynak Tedarik Tarifesi Nedir?
          </h2>
          <p className="text-slate-600 font-body leading-relaxed text-[1.0625rem] mb-4">
            Son Kaynak Tedarik Tarifesi, yüksek elektrik tüketimine sahip abonelere uygulanan özel bir tarife düzenlemesidir.
            Bu tarife, 2025 veya 2026 takvim yılı içinde belirlenen tüketim limitlerini aşan müşteriler için geçerlidir.
          </p>
          <p className="text-slate-500 font-body leading-relaxed">
            Enerji Piyasası Düzenleme Kurumu&apos;nun (EPDK) 31.10.2025 tarihli kararı ile güncellenen limitler, 01.01.2026 tarihinden itibaren yürürlüğe girmiştir.
          </p>
        </motion.div>

        {/* Limit kartları */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid sm:grid-cols-3 gap-5"
        >
          {limitler.map((item) => (
            <div
              key={item.abone}
              className="relative bg-navy-800 rounded-xl p-6 text-white group hover:bg-navy-700 transition-colors"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gold-400" />
              <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400 mb-4">
                {item.icon}
              </div>
              <p className="text-slate-400 font-body text-sm mb-1">{item.abone}</p>
              <p className="font-heading text-2xl font-bold text-gold-400">
                {item.limit}
                <span className="text-sm font-normal text-slate-400 ml-1">ve üzeri</span>
              </p>
            </div>
          ))}
        </motion.div>

        {/* Formül kutusu */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8"
        >
          <h3 className="font-heading text-lg font-semibold text-navy-800 mb-3">
            Fatura Hesaplama Formülü
          </h3>
          <div className="bg-white rounded-lg border border-slate-200 p-4 mb-4 font-mono text-sm text-navy-800">
            SKTT = (PTF + YEKDEM Fiyatı) × KBK
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-sm font-body text-slate-500">
            <div><span className="font-semibold text-navy-700">PTF:</span> Piyasa Takas Fiyatı</div>
            <div><span className="font-semibold text-navy-700">YEKDEM:</span> Yenilenebilir Enerji Destek Mekanizması</div>
            <div><span className="font-semibold text-navy-700">KBK:</span> Kurulca Belirlenen Katsayı</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
