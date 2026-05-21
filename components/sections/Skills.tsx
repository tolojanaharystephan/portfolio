"use client";

import { motion } from "framer-motion";
import { skillCategories, skillProficiency } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function ProficiencyBar({
  skill,
  level,
  index,
}: {
  skill: string;
  level: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group"
    >
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill}
        </span>
        <span className="text-cyan-400/80 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Compétences"
          title="Stack technique & expertise"
          description="Technologies maîtrisées et niveau de pratique — du frontend à la data."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
        >
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Maîtrise principale
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillProficiency.map((item, index) => (
              <ProficiencyBar key={item.skill} {...item} index={index} />
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div
                className={cn(
                  "mb-5 inline-block rounded-lg bg-gradient-to-r px-3 py-1 text-sm font-semibold text-white",
                  category.color
                )}
              >
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-lg border border-white/5 bg-slate-900/50 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
