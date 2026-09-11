import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 glass-strong">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            JG
          </span>
          <span className="hidden sm:inline">James<span className="text-[color:var(--neon-cyan)]">.</span></span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-[color:var(--accent)]/50 px-4 py-1.5 text-xs font-semibold text-[color:var(--accent)] transition-all hover:bg-[color:var(--accent)]/10 md:inline-flex"
        >
          Hire Me
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-4 bg-foreground" />
          <span className="mt-1 block h-0.5 w-4 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl p-3 glass-strong md:hidden">
          <div className="grid grid-cols-2 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
