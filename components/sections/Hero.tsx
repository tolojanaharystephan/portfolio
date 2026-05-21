"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  ArrowDown,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { RotatingText } from "@/components/ui/RotatingText";
import { Particles } from "@/components/effects/Particles";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/data/portfolio";

interface HeroProps {
  avatarUrl?: string;
}

function StatItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-bold text-white md:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-slate-500 md:text-sm">{label}</p>
    </div>
  );
}

export function Hero({ avatarUrl }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
      </div>

      <Particles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {personalInfo.available && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponible pour opportunités
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              <span className="mb-3 block text-base font-normal text-slate-400 sm:text-lg">
                Bonjour, je suis{" "}
                <span className="text-slate-300">Tolojanahary Stephan</span>
              </span>
              <span className="block bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                Ingénieur logiciel
              </span>
              <span className="mt-3 block text-xl font-semibold sm:text-2xl md:text-3xl">
                <RotatingText items={personalInfo.roles} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-500" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail size={14} className="text-cyan-500" />
                {personalInfo.email}
              </a>
              {personalInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone size={14} className="text-cyan-500" />
                  {phone}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                <Download size={18} />
                Télécharger CV
              </Button>
              <Button
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <GitHubIcon size={18} />
                Voir GitHub
              </Button>
              <Button href="#contact" variant="outline">
                <Mail size={18} />
                Me Contacter
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-40 scale-110" />
              <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/30">
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-slate-950 sm:h-72 sm:w-72 md:h-80 md:w-80">
                  <ProfileAvatar
                    avatarUrl={avatarUrl}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2.5 backdrop-blur-xl shadow-xl">
                <p className="text-xs text-slate-500">Stack favori</p>
                <p className="text-xs font-semibold leading-snug text-cyan-400 sm:text-sm">
                  JavaScript · TypeScript · Python
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs">Découvrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
