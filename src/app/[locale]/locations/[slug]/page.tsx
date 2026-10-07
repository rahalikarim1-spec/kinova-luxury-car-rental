import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandByKey } from "@/data/brands";
import { categoryByKey } from "@/data/categories";
import { locationBySlug, locations } from "@/data/locations";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarGrid } from "@/components/CarGrid";
import { LinkList } from "@/components/ContentSections";
import { CTASection } from "@/components/CTASection";
import { CheckAvailabilityButton, WhatsAppButton } from "@/components/CtaButtons";
import { FAQ } from "@/components/FAQ";
import { PageShell } from "@/components/PageShell";
import { getDictionary, t } from "@/i18n";
import { localePath, pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getVehicleBySlug } from "@/lib/fleet";
import { vehicleOgImage } from "@/lib/images";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata } from "@/lib/seo";

type P = LocaleParams<{ slug: string }>;
export const dynamicParams = false;
// English-only: only (en, slug) pairs are generated – no ar/ru pages exist for this section.
export const generateStaticParams = () => locations.map((l) => ({ locale: "en", slug: l.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await resolveLocale(params);
  const l = locationBySlug(slug);
  if (!l || locale !== "en") notFound();
  const first = getVehicleBySlug(l.bestFor[0].carSlug);
  return buildMetadata({ locale, path: `/locations/${l.slug}/`, title: l.title, description: l.description, image: first ? vehicleOgImage(first) : undefined });
}

export default async function LocationPage({ params }: P) {
  const { locale, slug } = await resolveLocale(params);
  const l = locationBySlug(slug);
  if (!l || locale !== "en") notFound();
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const cars = l.bestFor.map((b) => ({ car: getVehicleBySlug(b.carSlug)!, reason: b.reason })).filter((x) => x.car);
  const wa = whatsappMessage.location(locale, l);
  return (
    <PageShell locale={locale} path={`/locations/${l.slug}/`} pageType="location" waMessage={wa} trackContext={{ location: l.slug }}>
      <div className="container-x pt-6">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.locations, path: "/locations/" }, { name: l.area, path: `/locations/${l.slug}/` }]} />
      </div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{l.h1}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-soft sm:text-lg">{l.intro}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CheckAvailabilityButton locale={locale} href={`${lp("/contact/")}#enquiry`} ctaLocation="location_hero" />
          <WhatsAppButton locale={locale} message={wa} ctaLocation="location_hero" label={t(d.locations.askLocation, { area: l.area })} />
        </div>
      </header>

      <section className="container-x pb-12" aria-label={l.area}>
        <div className="prose-k max-w-3xl">
          {l.sections.map((s) => (
            <div key={s.h}><h2>{s.h}</h2><p>{s.p}</p></div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">{d.locations.note}</p>
      </section>

      <section className="container-x pb-16" aria-labelledby="loc-cars">
        <h2 id="loc-cars" className="mb-6 text-2xl font-bold">{d.locations.related}</h2>
        <CarGrid vehicles={cars.map((c) => c.car)} locale={locale} ctaLocation="location_page" />
        <ul className="mt-6 grid gap-2 text-sm text-muted md:grid-cols-3">
          {cars.map((c) => <li key={c.car.slug}><strong className="text-soft">{c.car.name}:</strong> {c.reason}</li>)}
        </ul>
      </section>

      <FAQ items={l.faq} heading={d.faq.title} eyebrow={d.faq.eyebrow} id="location-faq" />

      <section className="border-t border-line py-12" aria-label={d.car.exploreMore}>
        <div className="container-x grid gap-8">
          <LinkList title={d.nav.categories} links={l.relatedCategories.map((k) => ({ href: lp(`/${categoryByKey(k).slug}/`), label: pick(categoryByKey(k).h1, locale) }))} />
          <LinkList title={d.nav.brands} links={l.relatedBrands.map((k) => ({ href: lp(`/brands/${brandByKey(k).slug}/`), label: pick(brandByKey(k).h1, locale) }))} />
          <LinkList title={d.nav.locations} links={locations.filter((x) => x.slug !== l.slug).map((x) => ({ href: lp(`/locations/${x.slug}/`), label: x.area }))} />
        </div>
      </section>
      <CTASection locale={locale} waMessage={wa} />
    </PageShell>
  );
}
