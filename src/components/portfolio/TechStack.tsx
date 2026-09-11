import { techStack } from "@/lib/portfolio-data";
import { Reveal, Stagger, staggerItem } from "./fx/Reveal";
import { SectionHeading } from "./About";
import { motion } from "framer-motion";

const accentToVar: Record<string, string> = {
  cyan: "var(--neon-cyan)",
  purple: "var(--neon-purple)",
  blue: "var(--neon-blue)",
  pink: "var(--neon-pink)",
};

export function TechStack() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          sub="A polyglot toolbox across web, data, mobile, and cloud."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => {
            const color = accentToVar[group.accent];
            return (
              <motion.div
                key={group.category}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl p-6 glass transition-all hover:-translate-y-1"
                style={{ ["--c" as string]: color }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "color-mix(in oklab, var(--c) 8%, transparent)",
                    }}
                />
                <div
                  className="mb-4 h-1 w-10 rounded-full"
                  style={{ background: color, boxShadow: `0 0 20px ${color}` }}
                />
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
