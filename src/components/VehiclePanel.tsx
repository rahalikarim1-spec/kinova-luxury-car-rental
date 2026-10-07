import type { Vehicle } from "@/data/types";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { priceLabel } from "@/lib/fleet";
import { whatsappMessage } from "@/lib/contact";
import { CallButton, CheckAvailabilityButton, WhatsAppButton } from "./CtaButtons";

/**
 * The conversion panel for a vehicle page. Rendered twice by the page: a sticky sidebar on desktop and an inline block on mobile
 * (on mobile the sticky bar at the bottom already follows the user).
 * One primary CTA (Check Availability), WhatsApp as secondary, Call as tertiary.
 */
export function VehiclePanel({ vehicle: v, locale, ctaLocation }: { vehicle: Vehicle; locale: Locale; ctaLocation: string }) {
  const d = getDictionary(locale);
  const price = priceLabel(v, locale, d);
  return (
    <div className="card p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted rtl:tracking-normal">{d.car.dailyRate}</p>
      <p className={`mt-1 text-2xl font-bold ${price.hasPrice ? "" : "text-soft"}`}>{price.text}</p>
      <p className="mt-1 text-xs text-muted">{d.car.panelNote}</p>
      <div className="mt-5 grid gap-3">
        <CheckAvailabilityButton locale={locale} href="#enquiry" ctaLocation={ctaLocation} vehicle={v} block />
        <WhatsAppButton locale={locale} message={whatsappMessage.car(locale, v)} ctaLocation={ctaLocation} vehicle={v} block label={d.cta.whatsapp} />
        <CallButton locale={locale} ctaLocation={ctaLocation} vehicle={v} block label={d.cta.call} />
      </div>
    </div>
  );
}
