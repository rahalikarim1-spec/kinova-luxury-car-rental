import { business, isConfigured } from "@/config/business";

/** Tiny, client-safe module (no dictionaries). Used by server components and the booking form alike. */
export const hasWhatsAppNumber = () => isConfigured(business.whatsapp);

/**
 * With a configured number: https://wa.me/<number>?text=...
 * While the number is pending (demo): https://api.whatsapp.com/send?text=... which opens WhatsApp's contact
 * picker with the contextual message pre-filled – the flow is fully demonstrable without a fake number.
 */
export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  return hasWhatsAppNumber()
    ? `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`;
}
