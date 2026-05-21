"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-600/10 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                Prêt à collaborer ?
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Discutons de votre prochain projet
              </h2>
              <p className="mt-3 max-w-xl text-slate-400 md:text-lg">
                Stage, alternance, mission freelance ou CDI — je suis ouvert aux
                opportunités dans le développement logiciel et la data.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              <Button href="#contact" variant="primary" size="lg">
                <Mail size={18} />
                Me contacter
                <ArrowRight size={16} />
              </Button>
              <Button
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <Download size={18} />
                Télécharger CV
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
