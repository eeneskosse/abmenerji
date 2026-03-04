"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SectionHeading({
  kicker,
  title,
  description,
  centered = false,
  light = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={centered ? "text-center" : ""}
    >
      <div className={`w-12 h-[3px] bg-gold-400 mb-6 ${centered ? "mx-auto" : ""}`} />
      <p
        className={`font-body text-sm uppercase tracking-[0.15em] font-medium mb-3 ${
          light ? "text-gold-300" : "text-gold-500"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] mb-4 ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
