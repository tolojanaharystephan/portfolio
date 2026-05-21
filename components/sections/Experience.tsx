"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Expériences"
          title="Parcours professionnel"
          description="Stages et projets concrets qui ont forgé mon expertise en développement et data engineering."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse"
                          : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400">
                        <Building2 size={22} />
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                          {exp.period}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.company}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                      <Briefcase size={14} className="text-cyan-500" />
                      {exp.role}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {exp.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-500 bg-slate-950 md:left-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
