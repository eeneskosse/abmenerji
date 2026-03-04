"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div variants={fadeUp} ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-extrabold text-gold-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="font-body text-slate-300 text-sm uppercase tracking-[0.15em]">
        {label}
      </div>
    </motion.div>
  );
}

const diagonalPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`;

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-navy-800 relative overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: diagonalPattern }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
