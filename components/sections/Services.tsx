"use client";

import { motion } from "framer-motion";
import { Database, Server, Smartphone, Sparkles } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Smartphone,
  Server,
  Database,
  Sparkles,
} as const;

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Ce que je propose"
          description="Des solutions techniques complètes, de la conception à la mise en production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-shadow hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition-all group-hover:bg-cyan-500/10" />
                <div className="relative mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 p-3 text-cyan-400">
                  <Icon size={22} />
                </div>
                <h3 className="relative text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
