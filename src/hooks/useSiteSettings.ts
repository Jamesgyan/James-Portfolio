import { useCallback, useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";

export type SiteSettings = {
  photo: string;
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
};

export const defaultSettings: SiteSettings = {
  photo: "",
  name: profile.name,
  tagline: profile.tagline,
  location: profile.location,
  email: profile.email,
  phone: profile.phone,
  whatsapp: "917619246688",
  github: profile.github,
  linkedin: profile.linkedin,
};

const KEY = "portfolio.settings.v1";
const EVENT = "portfolio-settings-change";

export function readSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultSettings;
    return { ...defaultSettings, ...(JSON.parse(raw) as Partial<SiteSettings>) };
  } catch {
    return defaultSettings;
  }
}

export function writeSettings(next: SiteSettings) {
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function clearSettings() {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENT));
}

/** Reads saved settings after hydration; falls back to CV defaults on the server. */
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    const sync = () => setSettings(readSettings());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((next: SiteSettings) => {
    writeSettings(next);
    setSettings(next);
  }, []);

  const reset = useCallback(() => {
    clearSettings();
    setSettings(defaultSettings);
  }, []);

  return { settings, save, reset };
}

/** Digits-only WhatsApp number with country code. */
export function waNumber(raw: string) {
  const digits = (raw || "").replace(/\D/g, "");
  if (!digits) return defaultSettings.whatsapp;
  return digits.length === 10 ? `91${digits}` : digits;
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${waNumber(number)}?text=${encodeURIComponent(text)}`;
}
