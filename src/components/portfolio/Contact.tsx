import { useState } from "react";
import { z } from "zod";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiCheck,
} from "react-icons/fi";
import { Reveal } from "./fx/Reveal";
import { SectionHeading } from "./About";
import { useSiteSettings, waLink } from "@/hooks/useSiteSettings";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export function Contact() {
  const { settings } = useSiteSettings();
  const profile = settings;

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [msg, setMsg] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const errs: Record<string, string> = {};

      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }

      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    const d = parsed.data;

    const text = `New message from your portfolio

Name: ${d.name}
Email: ${d.email}
Subject: ${d.subject}

${d.message}`;

    const win = window.open(
      waLink(settings.whatsapp, text),
      "_blank",
      "noopener,noreferrer"
    );

    if (!win) {
      setStatus("error");
      setMsg(
        "Please allow pop-ups so WhatsApp can open, or message me directly."
      );
      return;
    }

    setStatus("sent");
    setMsg(
      "WhatsApp opened — just tap send and the message lands in my chat."
    );

    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          sub="Open to full-time roles, freelance work and collaborations."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl p-8 glass neon-border">
              <div className="space-y-5">
                <InfoRow
                  Icon={FiMail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />

                <InfoRow
                  Icon={FiPhone}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone}`}
                />

                <InfoRow
                  Icon={FiMapPin}
                  label="Location"
                  value={profile.location}
                />

                <InfoRow
                  Icon={FiGithub}
                  label="GitHub"
                  value="github.com/Jamesgyan"
                  href={profile.github}
                  external
                />

                <InfoRow
                  Icon={FiLinkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/jamesgyanpakash"
                  href={profile.linkedin}
                  external
                />
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Prefer email? Reach me directly at{" "}
                <a
                  className="text-[color:var(--neon-cyan)] hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl p-8 glass"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={onChange}
                  error={errors.name}
                />

                <Field
                  name="email"
                  type="email"
                  label="Email"
                  value={values.email}
                  onChange={onChange}
                  error={errors.email}
                />
              </div>

              <div className="mt-4">
                <Field
                  name="subject"
                  label="Subject"
                  value={values.subject}
                  onChange={onChange}
                  error={errors.subject}
                />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--neon-cyan)]"
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[color:var(--neon-blue)] disabled:opacity-60"
              >
                {status === "sent" ? (
                  <FiCheck />
                ) : (
                  <FiSend className="transition-transform group-hover:translate-x-0.5" />
                )}

                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Sent"
                    : "Send Message"}
              </button>

              {msg && (
                <p
                  className={`mt-4 text-sm ${
                    status === "sent"
                      ? "text-[color:var(--neon-cyan)]"
                      : "text-muted-foreground"
                  }`}
                >
                  {msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--neon-cyan)]"
      />

      {error && (
        <p className="mt-1 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

function InfoRow({
  Icon,
  label,
  value,
  href,
  external = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="group flex items-center gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary text-[color:var(--neon-cyan)] transition-all group-hover:border-[color:var(--neon-cyan)] group-hover:shadow-[var(--shadow-neon-cyan)]">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (!href) {
    return inner;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}