import { services, whyHireMe } from "@/lib/portfolio-data";
import { Stagger, staggerItem } from "./fx/Reveal";
import { SectionHeading } from "./About";
import {
  FiCode,
  FiSmartphone,
  FiBarChart2,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiZap,
  FiCloud,
  FiActivity,
  FiCheck,
} from "react-icons/fi";
import { motion } from "framer-motion";

const serviceIcons = [FiCode, FiLayers, FiZap, FiSmartphone, FiBarChart2, FiActivity, FiCpu, FiDatabase, FiCloud];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          sub="Ship modern products end-to-end — from data pipelines to pixel-perfect UI."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <motion.div
                key={s}
                variants={staggerItem}
                className="group flex items-center gap-4 rounded-2xl p-5 glass transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-neon-cyan)]"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-[color:var(--neon-cyan)] transition-all group-hover:border-[color:var(--neon-cyan)] group-hover:shadow-[var(--shadow-neon-cyan)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold">{s}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function WhyHireMe() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Hire Me" title="What I bring to a team" />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireMe.map((w) => (
            <motion.div
              key={w}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-full border border-border bg-secondary px-5 py-3 backdrop-blur transition-all hover:border-[color:var(--neon-purple)] hover:shadow-[var(--shadow-neon-purple)]"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <FiCheck className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="font-medium">{w}</span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
