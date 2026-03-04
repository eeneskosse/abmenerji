"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import clsx from "clsx";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered =
    activeCategory === "Tümü"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          kicker="Projelerimiz"
          title="Başarıyla Tamamlanan Projeler"
          description="Farklı sektörlerde hayata geçirdiğimiz projelerden bazıları."
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-5 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-navy-800 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-slate-300"
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
                    <p className="text-slate-400 text-xs font-body">
                      Proje Görseli
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-heading font-semibold text-sm border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors">
                      Detaylar
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="text-gold-600 font-body text-xs uppercase tracking-wider font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-navy-800 mt-1.5 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-body text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
