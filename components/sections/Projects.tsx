"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import type { GitHubRepo } from "@/lib/github";

interface ProjectsProps {
  githubRepos?: GitHubRepo[];
}

export function Projects({ githubRepos }: ProjectsProps) {
  const enrichedProjects = projects.map((project, index) => {
    const repo = githubRepos?.[index];
    return {
      ...project,
      github: repo?.html_url ?? project.github,
      demo: repo?.homepage || undefined,
      stars: repo?.stargazers_count ?? 0,
    };
  });

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projets"
          title="Réalisations & innovations"
          description="Une sélection de projets techniques démontrant ma polyvalence en développement, simulation et data engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enrichedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <TiltCard>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div
                    className={cn(
                      "relative flex h-40 items-center justify-center bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />
                    <Folder
                      size={48}
                      className="relative text-cyan-400/60 transition-transform group-hover:scale-110"
                    />
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-2 py-1 text-xs text-amber-400">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-800/60 px-2 py-0.5 text-xs text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <div className="mt-5 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
                      >
                        <GitHubIcon size={14} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                    </div> */}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
