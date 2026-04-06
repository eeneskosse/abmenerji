"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/lib/constants";

const contactDetails = [
  {
    icon: MapPinIcon,
    label: "Adres",
    value: COMPANY_INFO.address,
  },
  {
    icon: PhoneIcon,
    label: "Telefon",
    value: COMPANY_INFO.phone,
  },
  {
    icon: EnvelopeIcon,
    label: "E-posta",
    value: COMPANY_INFO.email,
  },
  {
    icon: ClockIcon,
    label: "Çalışma Saatleri",
    value: COMPANY_INFO.workingHours,
  },
];

export function Contact() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          kicker="İletişim"
          title="Bizimle İletişime Geçin"
          description="Projeleriniz hakkında bilgi almak veya teklif talep etmek için bize ulaşın."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14"
        >
          {/* Contact Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-navy-700 mb-1.5">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-body text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-navy-700 mb-1.5">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-body text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-navy-700 mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+90 (___) ___ __ __"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-body text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-navy-700 mb-1.5">
                  Konu
                </label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-body text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors appearance-none cursor-pointer">
                  <option value="">Konu Seçiniz</option>
                  <option value="teklif">Teklif Talebi</option>
                  <option value="bilgi">Bilgi Alma</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-navy-700 mb-1.5">
                  Mesajınız
                </label>
                <textarea
                  rows={5}
                  placeholder="Projeniz hakkında bilgi verin..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg font-body text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gold-400 text-navy-900 font-heading font-semibold rounded-lg hover:bg-gold-500 active:bg-gold-600 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                Mesaj Gönder
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-body text-sm text-slate-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body font-medium text-navy-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Google Maps */}
            <div className="mt-8 aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0167289136084!2d30.408340676708292!3d40.73982187138948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb362c7efe551%3A0x286b61b943cb755c!2zQUJNIEVORVJKxLAgTcOcSEVORMSwU0zEsEs!5e1!3m2!1str!2sus!4v1775494417788!5m2!1str!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABM Enerji Konum - Erenler, Sakarya"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
