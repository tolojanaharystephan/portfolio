"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Loader2,
  Briefcase,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { useToast } from "@/components/providers/ToastProvider";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactItems: Array<{
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    value: string;
    href?: string;
  }> = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    ...personalInfo.phones.map((phone) => ({
      icon: Phone,
      label: "Téléphone",
      value: phone,
      href: `tel:${phone}`,
    })),
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: personalInfo.githubUsername,
      href: personalInfo.github,
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: personalInfo.location,
      href: undefined,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      subject: (data.get("subject") as string)?.trim(),
      message: (data.get("message") as string)?.trim(),
    };

    const fieldErrors: Record<string, string> = {};
    if (!payload.name || payload.name.length < 2) {
      fieldErrors.name = "Nom requis (min. 2 caractères)";
    }
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      fieldErrors.email = "Email invalide";
    }
    if (!payload.message || payload.message.length < 10) {
      fieldErrors.message = "Message requis (min. 10 caractères)";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setLoading(false);
      toast({
        type: "error",
        title: "Formulaire incomplet",
        message: "Veuillez corriger les champs indiqués.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast({
          type: "success",
          title: "Message envoyé",
          message: "Je vous répondrai dans les plus brefs délais.",
        });
        form.reset();
      } else if (res.status === 503 && result.fallbackMailto) {
        toast({
          type: "info",
          title: "Ouverture de votre messagerie",
          message: "Configurez Web3Forms pour un envoi direct depuis le site.",
        });
        window.location.href = result.fallbackMailto;
      } else {
        throw new Error(result.error ?? "Erreur d'envoi");
      }
    } catch (err) {
      toast({
        type: "error",
        title: "Échec de l'envoi",
        message:
          err instanceof Error
            ? err.message
            : "Réessayez ou contactez-moi par email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-slate-900/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:ring-1 ${
      errors[field]
        ? "border-rose-500/50 focus:border-rose-500/50 focus:ring-rose-500/30"
        : "border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/30"
    }`;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Travaillons ensemble"
          description="Décrivez votre projet, opportunité ou collaboration — réponse sous 24–48h."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                <Briefcase size={16} />
                {personalInfo.available
                  ? "Disponible pour de nouvelles opportunités"
                  : "Non disponible actuellement"}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Stages, alternance, freelance ou CDI — Madagascar & remote.
              </p>
            </div>

            {contactItems.map((item, index) => (
              <motion.div
                key={item.label + item.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform group-hover:scale-110">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="font-medium text-white group-hover:text-cyan-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-slate-400"
                  >
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    className={inputClass("name")}
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-400"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={inputClass("email")}
                    placeholder="vous@entreprise.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-slate-400"
                >
                  Objet
                </label>
                <input
                  id="subject"
                  name="subject"
                  className={inputClass("subject")}
                  placeholder="Opportunité / Projet / Collaboration"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-slate-400"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Présentez votre besoin, stack souhaitée, délais..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </motion.button>

              <p className="mt-4 text-center text-xs text-slate-600">
                Vos données ne sont utilisées que pour vous recontacter.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
