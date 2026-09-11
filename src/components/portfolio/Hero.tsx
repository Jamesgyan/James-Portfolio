import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { profile } from "@/lib/portfolio-data";
import { useHydrated } from "@/hooks/useHydrated";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useTypingRoles } from "@/hooks/useTypingRoles";
import { MagneticLink } from "./fx/MagneticButton";
import { ResumeButton } from "./ResumeButton";
import avatar from "@/assets/avatar.png";

const ThreeScene = lazy(() => import("./fx/ThreeScene"));

export function Hero() {
  const hydrated = useHydrated();
  const typed = useTypingRoles(profile.roles);
  const { settings } = useSiteSettings();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      {hydrated && (
        <div className="absolute inset-0" aria-hidden>
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--neon-cyan)]" />
            </span>
            Available for work · Bengaluru, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text">{settings.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex h-8 items-center text-lg text-muted-foreground sm:text-xl"
          >
            <span className="text-[color:var(--neon-cyan)]">&gt;</span>
            <span className="ml-2 font-mono text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[color:var(--neon-cyan)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {settings.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <ResumeButton />
            <MagneticLink href="#projects" variant="outline">
              View Projects
            </MagneticLink>
            <MagneticLink href="#contact" variant="ghost">
              Hire Me
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { href: profile.github, Icon: FiGithub, label: "GitHub" },
              { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary backdrop-blur transition-all hover:border-[color:var(--neon-cyan)] hover:text-[color:var(--neon-cyan)] hover:shadow-[var(--shadow-neon-cyan)]"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div
              className="absolute inset-0 rounded-full border-2 border-[color:var(--accent)]"
              aria-hidden
            />
            <div className="absolute inset-[3px] rounded-full bg-background" aria-hidden />
            <img
              src={settings.photo || avatar}
              alt={`${settings.name} — portrait`}
              width={320}
              height={320}
              className="relative h-full w-full rounded-full object-cover p-2"
            />
          </div>
          <div className="absolute -right-2 -top-2 animate-[floaty_5s_ease-in-out_infinite] rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Currently</p>
            <p className="text-sm font-semibold">Building AI × Web</p>
          </div>
          <div className="absolute -bottom-2 -left-2 animate-[floaty_6s_ease-in-out_infinite_reverse] rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">MSc</p>
            <p className="text-sm font-semibold">Data Science</p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <FiArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
