import { education, certifications, achievements } from "@/lib/portfolio-data";
import { Reveal, Stagger, staggerItem } from "./fx/Reveal";
import { SectionHeading } from "./About";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education & Credentials" title="Learning path" />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Stagger className="space-y-4">
              {education.map((e) => (
                <motion.div
                  key={e.degree}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl p-6 glass transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-neon-purple)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <FiBookOpen className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono uppercase tracking-widest text-[color:var(--neon-cyan)]">
                        {e.period}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                      <p className="text-sm text-muted-foreground">{e.school}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{e.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal className="mb-4">
              <h3 className="text-lg font-semibold">Certifications</h3>
            </Reveal>
            <Stagger className="space-y-3">
              {certifications.map((c) => (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary p-4 backdrop-blur transition-all hover:border-[color:var(--neon-cyan)] hover:shadow-[var(--shadow-neon-cyan)]"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--neon-cyan)]/40 text-[color:var(--neon-cyan)] transition-transform group-hover:rotate-12">
                    <FiAward className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>

            <Reveal className="mb-4 mt-10">
              <h3 className="text-lg font-semibold">Achievements</h3>
            </Reveal>
            <Stagger className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <motion.div
                  key={a.label}
                  variants={staggerItem}
                  className="rounded-xl border border-border bg-secondary p-4 text-center transition-all hover:-translate-y-0.5"
                >
                  <p className="text-2xl font-bold gradient-text">{a.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.label}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
