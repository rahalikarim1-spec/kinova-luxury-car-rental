import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandByKey } from "@/data/brands";
import { categories, categoryBySlug, categoryByKey } from "@/data/categories";
import type { BrandKey } from "@/data/types";
import { Bullets, LinkList, SEOContentSection } from "@/components/ContentSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarGrid } from "@/components/CarGrid";
import { CTASection } from "@/components/CTASection";
import { ButtonLink, CheckAvailabilityButton, WhatsAppButton } from "@/components/CtaButtons";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { localePath, pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getVehiclesByCategory } from "@/lib/fleet";
import { vehicleOgImage } from "@/lib/images";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = LocaleParams<{ category: string }>;

/** Only the five category slugs exist at the root; everything else is a 404. */
export const dynamicParams = false;
export const generateStaticParams = () => categories.map((c) => ({ category: c.slug }));

const whyTitle = { en: "Why choose this category", ar: "لماذا تختار هذه الفئة", ru: "Почему стоит выбрать эту категорию" };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, category } = await resolveLocale(params);
  const c = categoryBySlug(category);
  if (!c) notFound();
  const cars = getVehiclesByCategory(c.key);
  return buildMetadata({ locale, path: `/${c.slug}/`, title: pick(c.title, locale), description: pick(c.description, locale), image: cars[0] ? vehicleOgImage(cars[0]) : undefined });
}

export default async function CategoryPage({ params }: P) {
  const { locale, category } = await resolveLocale(params);
  const c = categoryBySlug(category);
  if (!c) notFound();
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const cars = getVehiclesByCategory(c.key);
  const wa = whatsappMessage.category(locale, c);
  const brandKeys = [...new Set(cars.map((v) => v.brand))] as BrandKey[];

  return (
    <PageShell locale={locale} path={`/${c.slug}/`} pageType="category" waMessage={wa} trackContext={{ vehicle_category: c.key }} viewEvent="view_vehicle_list">
      <JsonLd data={itemListLd(cars.map((v) => ({ name: v.name, path: `/cars/${v.slug}/` })), locale, pick(c.h1, locale))} />
      <div className="container-x pt-6">
        <Breadcrumbs locale={locale} items={[{ name: pick(c.name, locale), path: `/${c.slug}/` }]} />
      </div>

      <header className="container-x pb-12 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{pick(c.h1, locale)}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-soft sm:text-lg">{pick(c.intro, locale)}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CheckAvailabilityButton locale={locale} href={`${lp("/contact/")}#enquiry`} ctaLocation="category_hero" />
          <WhatsAppButton locale={locale} message={wa} ctaLocation="category_hero" label={d.cta.whatsappUs} />
        </div>
      </header>

      <section className="container-x pb-16" aria-labelledby="cat-cars">
        <h2 id="cat-cars" className="mb-6 text-2xl font-bold">{pick(c.name, locale)}</h2>
        <CarGrid vehicles={cars} locale={locale} ctaLocation="category_page" priorityCount={3} />
        <div className="mt-8"><ButtonLink href={lp("/cars/")} variant="secondary" size="sm" arrow>{d.cta.viewFleet}</ButtonLink></div>
      </section>

      <div className="border-y border-line bg-surface/40">
        <SEOContentSection title={pick(c.name, locale)} sections={pick(c.sections, locale)} id="category-content" />
      </div>

      <section className="section" aria-labelledby="why-category">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <h2 id="why-category" className="h-section">{whyTitle[locale]}</h2>
          <Bullets items={pick(c.why, locale)} />
        </div>
      </section>

      <FAQ items={pick(c.faq, locale)} heading={d.faq.title} eyebrow={d.faq.eyebrow} id="category-faq" />

      <section className="border-t border-line py-12" aria-label={d.car.exploreMore}>
        <div className="container-x grid gap-8">
          <LinkList title={d.nav.categories} links={c.related.map((k) => ({ href: lp(`/${categoryByKey(k).slug}/`), label: pick(categoryByKey(k).h1, locale) }))} />
          <LinkList title={d.nav.brands} links={brandKeys.map((k) => ({ href: lp(`/brands/${brandByKey(k).slug}/`), label: pick(brandByKey(k).h1, locale) }))} />
        </div>
      </section>
      <CTASection locale={locale} waMessage={wa} />
    </PageShell>
  );
}
