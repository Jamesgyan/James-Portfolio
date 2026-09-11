import { profile, stats } from "@/lib/portfolio-data";
import { Reveal, Stagger, staggerItem } from "./fx/Reveal";
import { StatCounter } from "./fx/StatCounter";
import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--neon-cyan)]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into intelligent digital experiences"
        />
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
          <Reveal>
            <div className="rounded-3xl p-8 glass neon-border">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground font-semibold">{profile.name}</span>, an MSc
                Data Science graduate passionate about building AI-powered applications, modern web
                platforms, Android apps, and data-driven solutions.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I bridge full-stack engineering with machine learning — shipping production
                systems that are fast, elegant, and useful. From artist booking marketplaces to
                computer-vision projects, I love turning hard problems into simple products.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {["Full Stack", "Data Science", "Android", "Cloud", "ML"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl p-6 glass transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-neon-cyan)]"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-70"
                  style={{ background: "var(--neon-cyan)" }}
                />
                <p className="relative text-4xl font-bold gradient-text">
                  <StatCounter to={s.value} suffix={s.suffix} />
                </p>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
