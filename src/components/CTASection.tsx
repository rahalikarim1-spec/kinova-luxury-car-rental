import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { ButtonLink, WhatsAppButton } from "./CtaButtons";

export function CTASection({ locale, waMessage, title, sub, ctaLocation = "final_cta" }: { locale: Locale; waMessage: string; title?: string; sub?: string; ctaLocation?: string }) {
  const d = getDictionary(locale);
  return (
    <section className="section" aria-labelledby="final-cta-title">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgb(200_169_113/0.18),transparent)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="final-cta-title" className="h-section">{title ?? d.finalCta.title}</h2>
            <p className="mt-4 text-base text-muted sm:text-lg">{sub ?? d.finalCta.sub}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={localePath(locale, "/cars/")} arrow>{d.cta.browseCars}</ButtonLink>
              <WhatsAppButton locale={locale} message={waMessage} ctaLocation={ctaLocation} label={d.cta.chatWhatsapp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
