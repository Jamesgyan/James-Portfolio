import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export function StatCounter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
