"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react";
import { aboutHighlights } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Code2,
  Layers,
  Brain,
  Database,
  Sparkles,
  GraduationCap,
} as const;

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="À propos"
          title="Passionné par l'innovation technologique"
          description="Étudiant ingénieur informatique avec une vision claire : créer des solutions digitales impactantes à l'intersection du développement, de l'IA et des données."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 text-cyan-400 transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
