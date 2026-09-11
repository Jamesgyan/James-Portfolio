import { useEffect, useRef, useState } from "react";
import { FiDownload, FiLoader, FiAlertCircle } from "react-icons/fi";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const RESUME_URL = resumeAsset.url;
const RESUME_NAME = "James_Gyan_Prakash_CV.pdf";

type Status = "idle" | "loading" | "error";

export function ResumeButton({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const download = async () => {
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch(RESUME_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = RESUME_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch {
      // Fallback: open the PDF directly in a new tab
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      setStatus("error");
      timer.current = setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <button
      type="button"
      onClick={download}
      disabled={status === "loading"}
      aria-busy={status === "loading"}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--neon-blue)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 ${className}`}
    >
      {status === "loading" ? (
        <>
          <FiLoader className="animate-spin" /> Preparing…
        </>
      ) : status === "error" ? (
        <>
          <FiAlertCircle /> Opened in new tab
        </>
      ) : (
        <>
          <FiDownload /> Download Resume
        </>
      )}
    </button>
  );
}
