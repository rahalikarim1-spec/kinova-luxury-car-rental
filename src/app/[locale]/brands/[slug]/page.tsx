import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandBySlug, brands } from "@/data/brands";
import { categoryByKey } from "@/data/categories";
import type { CategoryKey } from "@/data/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarGrid } from "@/components/CarGrid";
import { LinkList } from "@/components/ContentSections";
import { CTASection } from "@/components/CTASection";
import { CheckAvailabilityButton, WhatsAppButton } from "@/components/CtaButtons";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { localePath, pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getVehiclesByBrand } from "@/lib/fleet";
import { vehicleOgImage } from "@/lib/images";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = LocaleParams<{ slug: string }>;
export const dynamicParams = false;
export const generateStaticParams = () => brands.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await resolveLocale(params);
  const b = brandBySlug(slug);
  if (!b) notFound();
  const cars = getVehiclesByBrand(b.key);
  return buildMetadata({ locale, path: `/brands/${b.slug}/`, title: pick(b.title, locale), description: pick(b.description, locale), image: cars[0] ? vehicleOgImage(cars[0]) : undefined });
}

export default async function BrandPage({ params }: P) {
  const { locale, slug } = await resolveLocale(params);
  const b = brandBySlug(slug);
  if (!b) notFound();
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const cars = getVehiclesByBrand(b.key);
  const name = pick(b.name, locale);
  const wa = whatsappMessage.brand(locale, b);
  const catKeys = [...new Set(cars.flatMap((c) => c.categories))] as CategoryKey[];
  const otherBrands = brands.filter((x) => x.key !== b.key);

  return (
    <PageShell locale={locale} path={`/brands/${b.slug}/`} pageType="brand" waMessage={wa} trackContext={{ vehicle_brand: b.key }} viewEvent="view_vehicle_list">
      <JsonLd data={itemListLd(cars.map((v) => ({ name: v.name, path: `/cars/${v.slug}/` })), locale, pick(b.h1, locale))} />
      <div className="container-x pt-6">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.brands, path: "/brands/" }, { name, path: `/brands/${b.slug}/` }]} />
      </div>

      <header className="container-x pb-12 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{pick(b.h1, locale)}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-soft sm:text-lg">{pick(b.intro, locale)}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CheckAvailabilityButton locale={locale} href={`${lp("/contact/")}#enquiry`} ctaLocation="brand_hero" />
          <WhatsAppButton locale={locale} message={wa} ctaLocation="brand_hero" label={d.cta.whatsappUs} />
        </div>
      </header>

      <section className="container-x pb-16" aria-labelledby="brand-models">
        <h2 id="brand-models" className="mb-6 text-2xl font-bold">{name} – {d.nav.fleet}</h2>
        <CarGrid vehicles={cars} locale={locale} ctaLocation="brand_page" priorityCount={3} />
      </section>

      <section className="section border-y border-line bg-surface/40" aria-labelledby="brand-guide">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <h2 id="brand-guide" className="h-section">{name}</h2>
          <div className="prose-k">{pick(b.body, locale).map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
        </div>
      </section>

      <FAQ items={pick(b.faq, locale)} heading={`${name} – ${d.faq.title}`} eyebrow={d.faq.eyebrow} id="brand-faq" />

      <section className="border-t border-line py-12" aria-label={d.car.exploreMore}>
        <div className="container-x grid gap-8">
          <LinkList title={d.nav.categories} links={catKeys.map((k) => ({ href: lp(`/${categoryByKey(k).slug}/`), label: pick(categoryByKey(k).h1, locale) }))} />
          <LinkList title={d.nav.brands} links={otherBrands.map((x) => ({ href: lp(`/brands/${x.slug}/`), label: pick(x.h1, locale) }))} />
        </div>
      </section>
      <CTASection locale={locale} waMessage={wa} />
    </PageShell>
  );
}
