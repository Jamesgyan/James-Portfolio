import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { FiArrowLeft, FiCheck, FiTrash2, FiUpload } from "react-icons/fi";
import { defaultSettings, readSettings, useSiteSettings, type SiteSettings } from "@/hooks/useSiteSettings";

export const Route = createFileRoute("/edit")({
  head: () => ({
    meta: [
      { title: "Edit Portfolio Details — James Gyan Prakash H" },
      {
        name: "description",
        content:
          "Private editor to update the portfolio photo, contact details and WhatsApp number saved on this device.",
      },
      { property: "og:title", content: "Edit Portfolio Details" },
      { property: "og:description", content: "Update your portfolio photo, contact details and WhatsApp number." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: EditPage,
});

function EditPage() {
  const { save, reset } = useSiteSettings();
  const [form, setForm] = useState<SiteSettings>(defaultSettings);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => setForm(readSettings()), []);

  const set = (k: keyof SiteSettings, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setSaved(false);
  };

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return setError("Please choose an image file.");
    if (file.size > 3 * 1024 * 1024) return setError("Image is larger than 3 MB — pick a smaller one.");
    setError("");
    const reader = new FileReader();
    reader.onload = () => set("photo", String(reader.result));
    reader.readAsDataURL(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    save(form);
    setSaved(true);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <FiArrowLeft /> Back to portfolio
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">Edit your details</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Changes are saved in this browser only, and apply instantly across the site.
      </p>

      <form onSubmit={onSubmit} className="mt-8 rounded-3xl p-8 glass">
        <div className="flex flex-wrap items-center gap-5">
          <div className="h-24 w-24 overflow-hidden rounded-full border border-border bg-secondary">
            {form.photo ? (
              <img src={form.photo} alt="Selected profile" className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center text-xs text-muted-foreground">No photo</div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <FiUpload /> Upload photo
            </button>
            {form.photo && (
              <button
                type="button"
                onClick={() => set("photo", "")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium"
              >
                <FiTrash2 /> Remove
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={onPhoto} className="hidden" />
          </div>
        </div>
        {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Input label="Name" value={form.name} onChange={(v) => set("name", v)} />
          <Input label="Location" value={form.location} onChange={(v) => set("location", v)} />
          <Input label="Email" value={form.email} onChange={(v) => set("email", v)} />
          <Input label="Phone" value={form.phone} onChange={(v) => set("phone", v)} />
          <Input
            label="WhatsApp number (with country code)"
            value={form.whatsapp}
            onChange={(v) => set("whatsapp", v)}
          />
          <Input label="GitHub URL" value={form.github} onChange={(v) => set("github", v)} />
          <Input label="LinkedIn URL" value={form.linkedin} onChange={(v) => set("linkedin", v)} />
        </div>

        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Tagline</label>
          <textarea
            rows={3}
            value={form.tagline}
            onChange={(e) => set("tagline", e.target.value)}
            className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {saved ? <FiCheck /> : null} {saved ? "Saved" : "Save changes"}
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              setForm(defaultSettings);
              setSaved(false);
            }}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium"
          >
            Reset to defaults
          </button>
        </div>
      </form>
    </main>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
      />
    </div>
  );
}
