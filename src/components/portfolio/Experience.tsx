import { experience } from "@/lib/portfolio-data";
import { Reveal } from "./fx/Reveal";
import { SectionHeading } from "./About";
import { FiBriefcase } from "react-icons/fi";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've built" />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px md:left-1/2"
            style={{
              background: "var(--border)",
            }}
            aria-hidden
          />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">

                  {/* Timeline icon */}
                  <div
                    className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-[color:var(--neon-cyan)] md:left-1/2"
                    style={{ boxShadow: "var(--shadow-neon-cyan)" }}
                  >
                    <FiBriefcase className="h-4 w-4" />
                  </div>

                  {/* Experience card */}
                  <div
                    className={`ml-12 rounded-2xl p-6 glass md:ml-0 ${
                      i % 2 === 1 ? "md:col-start-1" : "md:col-start-1"
                    }`}
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-[color:var(--neon-cyan)]">
                      {e.period}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {e.role}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {e.org}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--neon-purple)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}