import Image from "next/image";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { ButtonLink, CheckAvailabilityButton, WhatsAppButton } from "./CtaButtons";

/** Hero: one H1, one primary action, one secondary action. LCP image is preloaded (priority). */
export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <Image src="/images/hero.svg" alt="" fill priority sizes="100vw" className="-z-10 object-cover object-[62%_center] sm:object-center" unoptimized />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent rtl:bg-gradient-to-l" />
      <div className="container-x flex min-h-[78svh] flex-col justify-end pb-24 pt-28 sm:min-h-[84svh] sm:pb-28 lg:pb-32">
        <p className="eyebrow">{d.hero.eyebrow}</p>
        <h1 id="hero-title" className="h-display mt-4 max-w-4xl">{d.hero.h1}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg">{d.hero.sub}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={localePath(locale, "/cars/")} arrow>{d.cta.exploreCars}</ButtonLink>
          <WhatsAppButton locale={locale} message={whatsappMessage.generic(locale)} ctaLocation="hero" label={d.cta.whatsappUs} />
          <CheckAvailabilityButton locale={locale} href={`${localePath(locale, "/contact/")}#enquiry`} ctaLocation="hero" variant="secondary" className="!border-transparent !bg-transparent !px-2 text-soft underline decoration-accent/60 underline-offset-8 hover:!bg-transparent hover:text-white hidden lg:inline-flex" />
        </div>
        <p className="mt-5 text-sm text-muted">{d.hero.note}</p>
      </div>
    </section>
  );
}
