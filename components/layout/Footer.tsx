import { Mail, Heart, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { navLinks, personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-base font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold">
                TS
              </span>
              {personalInfo.shortName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Portfolio professionnel — développement fullstack, data
              engineering et innovation technologique.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400"
                >
                  {personalInfo.email}
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
                >
                  <GitHubIcon size={14} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          {/* <p className="flex items-center gap-1 text-xs text-slate-600">
            © {year} {personalInfo.shortName}. Fait avec
            <Heart size={12} className="text-rose-500" />
            à Madagascar
          </p> */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 transition-colors hover:text-cyan-400"
          >
            Télécharger le CV
          </a>
        </div>
      </div>
    </footer>
  );
}
