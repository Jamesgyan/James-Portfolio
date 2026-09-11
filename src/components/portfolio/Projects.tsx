import { projects } from "@/lib/portfolio-data";
import { Reveal, Stagger, staggerItem } from "./fx/Reveal";
import { SectionHeading } from "./About";
import { TiltCard } from "./fx/TiltCard";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          sub="Live products, freelance builds, and research-grade experiments."
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className={`group ${p.featured ? "md:col-span-2" : ""}`}
            >
              <TiltCard className="h-full rounded-3xl">
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 glass ${
                    p.featured ? "md:p-10" : ""
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color:var(--accent)] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.14]"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-[color:var(--neon-cyan)]">
                        {p.subtitle}
                      </p>
                      <h3
                        className={`mt-2 font-bold tracking-tight ${
                          p.featured ? "text-3xl md:text-4xl" : "text-2xl"
                        }`}
                      >
                        {p.title}
                      </h3>
                    </div>
                    {p.featured && (
                      <span className="rounded-full border border-[color:var(--neon-cyan)]/40 bg-[color:var(--neon-cyan)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--neon-cyan)]">
                        Featured
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-4 max-w-2xl text-muted-foreground ${
                      p.featured ? "text-lg" : "text-sm"
                    }`}
                  >
                    {p.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--neon-blue)]"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
