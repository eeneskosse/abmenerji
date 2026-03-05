"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeklifForm() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          kicker="Ücretsiz Teklif"
          title="Fiyat Teklifi Alın"
          description="Daha fazla bilgi almak veya fiyat teklifi almak için aşağıdaki formu doldurun, uzman ekibimiz sizi arayacaktır."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 max-w-2xl"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  required
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0 (5XX) XXX XX XX"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                E-posta
              </label>
              <input
                type="email"
                required
                placeholder="ornek@email.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                Abone Türü
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors">
                <option value="">Seçiniz</option>
                <option value="mesken">Mesken</option>
                <option value="ticarethane">Ticarethane</option>
                <option value="sanayi">Sanayi</option>
                <option value="tarimsal">Tarımsal Faaliyet</option>
              </select>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                Aylık Tahmini Tüketim (kWh)
              </label>
              <input
                type="text"
                placeholder="Örn: 5000"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-navy-700 mb-1.5">
                Mesajınız
              </label>
              <textarea
                rows={4}
                placeholder="Teklif almak istediğiniz konu hakkında kısaca bilgi veriniz..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 font-body text-sm text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-400 text-navy-900 font-heading font-semibold text-sm rounded-lg hover:bg-gold-500 transition-colors cursor-pointer"
            >
              Teklif Talep Et
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <p className="text-slate-400 font-body text-xs mt-3">
              Formu doldurarak enerji uzmanlarımızın sizinle iletişime geçmesini sağlayabilirsiniz. Bilgileriniz gizli tutulacaktır.
            </p>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
