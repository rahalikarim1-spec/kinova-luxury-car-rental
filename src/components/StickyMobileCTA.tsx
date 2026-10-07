import { getDictionary } from "@/i18n";
import { type Locale } from "@/i18n/config";
import type { Vehicle } from "@/data/types";
import { CallButton, CheckAvailabilityButton, WhatsAppButton } from "./CtaButtons";

/** Mobile-only conversion bar: CALL · WHATSAPP · ENQUIRE. Always visible, thumb-reachable, 48px+ targets. */
export function StickyMobileCTA({ locale, waMessage, enquiryHref, vehicle }: { locale: Locale; waMessage: string; enquiryHref: string; vehicle?: Vehicle }) {
  const d = getDictionary(locale);
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-3 pt-2 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label={`${d.cta.call} / ${d.cta.whatsapp} / ${d.cta.enquire}`}
    >
      <div className="mx-auto grid max-w-xl grid-cols-[1fr_1fr_1.25fr] gap-2">
        <CallButton locale={locale} ctaLocation="sticky_mobile" vehicle={vehicle} size="sm" label={d.cta.call} className="!px-2" />
        <WhatsAppButton locale={locale} message={waMessage} ctaLocation="sticky_mobile" vehicle={vehicle} size="sm" label={d.cta.whatsapp} className="!px-2" />
        <CheckAvailabilityButton locale={locale} href={enquiryHref} ctaLocation="sticky_mobile" vehicle={vehicle} size="sm" label={d.cta.enquire} className="!px-2" />
      </div>
    </div>
  );
}
