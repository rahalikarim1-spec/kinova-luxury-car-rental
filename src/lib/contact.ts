import { business, isConfigured } from "@/config/business";
import { hasWhatsAppNumber, whatsappUrl } from "./whatsapp-url";
import { pick, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n";
import type { Vehicle, Brand, Category } from "@/data/types";
import type { Location } from "@/data/locations";

/**
 * All contact links are built here from src/config/business.ts. Components never hard-code numbers.
 * Placeholders are never shown as facts: when a value is PENDING the helpers return null / safe fallbacks.
 */
export const hasPhone = () => isConfigured(business.phone);
export const hasEmail = () => isConfigured(business.email);

export const phoneDisplay = () => (hasPhone() ? business.phone : null);
export const phoneHref = () => (hasPhone() ? `tel:${business.phone.replace(/[^\d+]/g, "")}` : null);
export const emailHref = () => (hasEmail() ? `mailto:${business.email}` : null);

export const whatsappMessage = {
  generic: (l: Locale) => getDictionary(l).whatsappMessages.generic,
  car: (l: Locale, v: Vehicle) => t(getDictionary(l).whatsappMessages.car, { car: v.name }),
  brand: (l: Locale, b: Brand) => t(getDictionary(l).whatsappMessages.brand, { brand: pick(b.name, l) }),
  category: (l: Locale, c: Category) => t(getDictionary(l).whatsappMessages.category, { category: pick(c.name, l) }),
  location: (l: Locale, loc: Location) => t(getDictionary(l).whatsappMessages.location, { area: loc.area }),
  afterForm: (l: Locale, ref: string) => t(getDictionary(l).whatsappMessages.afterForm, { ref }),
};

export { hasWhatsAppNumber, whatsappUrl };
