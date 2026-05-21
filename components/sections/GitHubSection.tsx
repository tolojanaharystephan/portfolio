"use client";

import { motion } from "framer-motion";
import {
  BookMarked,
  GitFork,
  Star,
  Users,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import type { GitHubProfile } from "@/lib/github";

interface GitHubSectionProps {
  profile: GitHubProfile | null;
}

export function GitHubSection({ profile }: GitHubSectionProps) {
  const user = profile?.user;
  const repos = profile?.repos ?? [];
  const languages = profile?.languages ?? [];

  const stats: Array<{
    icon: React.ComponentType<{ className?: string; size?: number }>;
    label: string;
    value: string | number;
  }> = [
    {
      icon: BookMarked,
      label: "Repositories",
      value: user?.public_repos ?? "—",
    },
    { icon: Users, label: "Followers", value: user?.followers ?? "—" },
    { icon: Star, label: "Following", value: user?.following ?? "—" },
    {
      icon: GitHubIcon,
      label: "Membre depuis",
      value: user?.created_at
        ? new Date(user.created_at).getFullYear()
        : "—",
    },
  ];

  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GitHub"
          title="Activité open source"
          description="Mes contributions, repositories et langages utilisés sur GitHub."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center backdrop-blur-sm"
            >
              <stat.icon size={24} className="mx-auto mb-3 text-cyan-400" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {languages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Langages utilisés
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-900/50 px-4 py-2"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm text-white">{lang.name}</span>
                  <span className="text-xs text-slate-500">×{lang.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.length > 0 ? (
            repos.slice(0, 6).map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-cyan-400 group-hover:text-cyan-300">
                    {repo.name}
                  </h4>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-slate-600 group-hover:text-cyan-400"
                  />
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                  {repo.description ?? "Projet open source"}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500">
              <a
                href={personalInfo.github}
                className="text-cyan-400 hover:underline"
              >
                Voir le profil GitHub →
              </a>
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-500/20"
          >
            <GitHubIcon size={18} />
            Voir tous les repositories
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-4"
        >
          <img
            src={`https://ghchart.rshah.org/${personalInfo.githubUsername}`}
            alt="GitHub contributions chart"
            className="w-full rounded-lg opacity-90"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
