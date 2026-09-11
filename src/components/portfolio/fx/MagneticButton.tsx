import { useRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";

type Common = { children: ReactNode; variant?: "primary" | "ghost" | "outline"; className?: string };

function base(variant: Common["variant"]) {
  const v =
    variant === "ghost"
      ? "bg-secondary hover:bg-secondary text-foreground border border-border"
      : variant === "outline"
        ? "bg-transparent text-foreground border border-border hover:border-[color:var(--accent)]"
        : "text-primary-foreground border border-transparent bg-primary hover:bg-[color:var(--neon-blue)]";
  return `group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${v}`;
}

function useMagnet() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return { ref, onMove, onLeave };
}

export function MagneticButton({
  children,
  variant,
  className = "",
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  const m = useMagnet();
  return (
    <button
      ref={m.ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={m.onMove}
      onMouseLeave={m.onLeave}
      className={`${base(variant)} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function MagneticLink({
  children,
  variant,
  className = "",
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const m = useMagnet();
  return (
    <a
      ref={m.ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={m.onMove}
      onMouseLeave={m.onLeave}
      className={`${base(variant)} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
