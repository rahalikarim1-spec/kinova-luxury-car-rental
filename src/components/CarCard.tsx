import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/data/types";
import { categoryByKey } from "@/data/categories";
import { brandByKey } from "@/data/brands";
import { getDictionary } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";
import { priceLabel } from "@/lib/fleet";
import { vehicleCover } from "@/lib/images";
import { whatsappMessage } from "@/lib/contact";
import { trackAttrs } from "@/lib/tracking";
import { vehicleTrackParams, WhatsAppButton } from "./CtaButtons";

interface Props { vehicle: Vehicle; locale: Locale; priority?: boolean; ctaLocation?: string; headingLevel?: "h2" | "h3" }

/** Premium vehicle card. Hierarchy: Car → Model → Price/PoR → Availability → CTA. */
export function CarCard({ vehicle: v, locale, priority = false, ctaLocation = "car_card", headingLevel: H = "h3" }: Props) {
  const d = getDictionary(locale);
  const img = vehicleCover(v, locale);
  const price = priceLabel(v, locale, d);
  const href = localePath(locale, `/cars/${v.slug}/`);
  const category = pick(categoryByKey(v.categories[0]).name, locale);
  const brand = pick(brandByKey(v.brand).name, locale);
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-surface-2" tabIndex={-1} aria-hidden="true" {...trackAttrs("select_vehicle", { cta_location: ctaLocation, ...vehicleTrackParams(v) })}>
        <Image
          src={img.src}
          alt=""
          fill
          sizes="(min-width:1280px) 384px, (min-width:768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          priority={priority}
          unoptimized={img.isPlaceholder}
        />
        <span className="absolute start-3 top-3 rounded-sm bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-soft backdrop-blur rtl:tracking-normal">{category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent rtl:tracking-normal">{brand}</p>
        <H className="mt-1 text-xl font-bold leading-tight">
          <Link href={href} className="hover:text-accent-strong" {...trackAttrs("select_vehicle", { cta_location: ctaLocation, ...vehicleTrackParams(v) })}>
            {v.model}
          </Link>
        </H>
        <p className="mt-1 text-sm text-muted">{pick(v.highlight, locale)}</p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
          <p className={`text-sm font-semibold ${price.hasPrice ? "text-white" : "text-soft"}`}>{price.text}</p>
          <span className="inline-flex items-center gap-1.5 text-xs text-ok"><span aria-hidden className="size-1.5 rounded-full bg-ok" />{d.common.available}</span>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <Link href={href} className="btn btn-primary btn-sm" aria-label={`${d.cta.viewDetails}: ${v.name}`} {...trackAttrs("select_vehicle", { cta_location: ctaLocation, ...vehicleTrackParams(v) })}>{d.cta.viewDetails}</Link>
          <WhatsAppButton locale={locale} message={whatsappMessage.car(locale, v)} ctaLocation={ctaLocation} vehicle={v} size="sm" label="" className="!px-3.5" />
        </div>
      </div>
    </article>
  );
}
