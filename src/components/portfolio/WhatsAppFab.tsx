import { FiMessageCircle } from "react-icons/fi";
import { useSiteSettings, waLink } from "@/hooks/useSiteSettings";

export function WhatsAppFab() {
  const { settings } = useSiteSettings();
  const href = waLink(settings.whatsapp, `Hi ${settings.name}, I found your portfolio and would like to connect.`);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
    >
      <FiMessageCircle className="h-6 w-6" />
    </a>
  );
}
