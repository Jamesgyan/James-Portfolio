import { profile } from "@/lib/portfolio-data";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const quick = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border pt-16">
      {/* Top neon line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "var(--border)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 pb-10">
        {/* Quote */}
        <div className="text-center">
          <p className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="gradient-text">
              "Turning Ideas into Intelligent Digital Experiences."
            </span>
          </p>
        </div>

        {/* Footer columns */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Software Developer · Data Scientist · Application Developer
              based in {profile.location}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </p>

            <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
              {quick.map((q) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="text-muted-foreground transition-colors hover:text-[color:var(--neon-cyan)]"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect
            </p>

            <div className="flex gap-3">
              <SocialA
                href={profile.github}
                label="GitHub"
                Icon={FiGithub}
              />

              <SocialA
                href={profile.linkedin}
                label="LinkedIn"
                Icon={FiLinkedin}
              />

              <SocialA
                href={`mailto:${profile.email}`}
                label="Email"
                Icon={FiMail}
                external={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          {/* Lovable */}
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--neon-cyan)]"
            aria-label="Built with Lovable"
          >
            Built with
            <span className="font-medium text-foreground transition-colors group-hover:text-[color:var(--neon-cyan)]">
              Lovable
            </span>
            <FiHeart className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialA({
  href,
  label,
  Icon,
  external = true,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-[color:var(--neon-cyan)] hover:text-[color:var(--neon-cyan)] hover:shadow-[var(--shadow-neon-cyan)]"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}