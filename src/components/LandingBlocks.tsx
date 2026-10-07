import Link from "next/link";
import type { Vehicle } from "@/data/types";
import { getDictionary } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";
import { priceLabel } from "@/lib/fleet";
import { trackAttrs } from "@/lib/tracking";
import { CheckAvailabilityButton, vehicleTrackParams, WhatsAppButton } from "./CtaButtons";
import { SectionHeading } from "./SectionHeading";

/** Compact comparison of the cars on a brand/category page – real data only, every row links to the car page. */
export function ModelGuide({ vehicles, locale, ctaLocation }: { vehicles: Vehicle[]; locale: Locale; ctaLocation: string }) {
  const d = getDictionary(locale);
  return (
    <section className="section border-t border-line" aria-labelledby="compare-title">
      <div className="container-x">
        <SectionHeading id="compare-title" title={d.landing.compareTitle} sub={d.landing.compareSub} />
        <ul className="divide-y divide-line border-y border-line">
          {vehicles.map((v) => {
            const price = priceLabel(v, locale, d);
            return (
              <li key={v.id} className="grid gap-3 py-5 md:grid-cols-[1.3fr_1.6fr_auto] md:items-center md:gap-6">
                <div>
                  <h3 className="text-lg font-bold">
                    <Link href={localePath(locale, `/cars/${v.slug}/`)} className="hover:text-accent-strong" {...trackAttrs("select_vehicle", { cta_location: `${ctaLocation}_compare`, ...vehicleTrackParams(v) })}>{v.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{pick(v.highlight, locale)}</p>
                </div>
                <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-soft">
                  <div className="flex gap-1.5"><dt className="text-muted">{d.car.bodyType}:</dt><dd>{d.bodyTypes[v.bodyType]}</dd></div>
                  {v.seats && <div className="flex gap-1.5"><dt className="text-muted">{d.car.seats}:</dt><dd>{v.seats}</dd></div>}
                  {v.powertrain && <div className="flex gap-1.5"><dt className="text-muted">{d.landing.engine}:</dt><dd>{pick(v.powertrain, locale)}</dd></div>}
                  <div className="flex gap-1.5"><dt className="sr-only">{d.car.dailyRate}</dt><dd className="font-semibold text-white">{price.text}</dd></div>
                </dl>
                <Link href={`${localePath(locale, `/cars/${v.slug}/`)}#enquiry`} className="btn btn-secondary btn-sm" {...trackAttrs("check_availability", { cta_location: `${ctaLocation}_compare`, ...vehicleTrackParams(v) })}>{d.landing.checkModel}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Mid-page conversion band: one primary (Check Availability) + WhatsApp. */
export function InlineCTA({ locale, waMessage, ctaLocation }: { locale: Locale; waMessage: string; ctaLocation: string }) {
  const d = getDictionary(locale);
  return (
    <section className="py-12" aria-labelledby="mid-cta-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 rounded-sm border border-line bg-surface p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="mid-cta-title" className="text-2xl font-bold">{d.landing.midCtaTitle}</h2>
            <p className="mt-2 text-muted">{d.landing.midCtaText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CheckAvailabilityButton locale={locale} href={`${localePath(locale, "/contact/")}#enquiry`} ctaLocation={ctaLocation} />
            <WhatsAppButton locale={locale} message={waMessage} ctaLocation={ctaLocation} label={d.cta.whatsappUs} />
          </div>
        </div>
      </div>
    </section>
  );
}
