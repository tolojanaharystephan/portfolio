"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Formation"
          title="Parcours académique"
          description="Formation d'excellence en informatique à l'École Nationale d'Informatique de Fianarantsoa."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:left-1/2 md:-translate-x-px" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative mb-12 pl-16 md:pl-0 md:text-center"
            >
              <div className="absolute left-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-950 md:left-1/2 md:-translate-x-1/2">
                <GraduationCap size={12} className="text-cyan-400" />
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/20 md:mx-auto md:max-w-xl">
                <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {item.period}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  {item.school}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
