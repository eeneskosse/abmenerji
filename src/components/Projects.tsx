"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
              >
                <Link
                  href={`/projelerimiz/${project.id}`}
                  className="group block relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer"
                >
                  {/* Project image */}
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-heading font-semibold text-sm border border-white/30 rounded-lg px-5 py-2.5">
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
                    <p className="text-slate-500 font-body text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
