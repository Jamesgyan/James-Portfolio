import { useEffect } from "react";
import { useHydrated } from "@/hooks/useHydrated";

export function LenisProvider() {
  const hydrated = useHydrated();
  useEffect(() => {
    if (!hydrated) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({ duration: 1.15, smoothWheel: true }) as unknown as typeof lenis;
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [hydrated]);
  return null;
}
