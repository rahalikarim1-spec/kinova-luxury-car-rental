import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { homeFaq } from "@/data/home-faq";
import { CarGrid } from "@/components/CarGrid";
import { BrandCard } from "@/components/BrandCard";
import { CategoryCard } from "@/components/CategoryCard";
import { SEOContentSection, LinkList } from "@/components/ContentSections";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { QuickSearch } from "@/components/QuickSearch";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/CtaButtons";
import { getDictionary } from "@/i18n";
import { localePath, pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getBrandsWithVehicles, getVehicleBySlug } from "@/lib/fleet";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd, organizationLd, websiteLd } from "@/lib/seo";
import { trackAttrs } from "@/lib/tracking";

const featuredSlugs = ["lamborghini-revuelto", "ferrari-sf90", "lamborghini-urus", "rolls-royce-ghost", "mclaren-artura", "ferrari-f8-spider"];
const popularModelSlugs = ["lamborghini-urus", "ferrari-f8-spider", "rolls-royce-cullinan", "mclaren-artura", "range-rover-defender", "chevrolet-corvette"];

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path: "/", title: d.meta.homeTitle, description: d.meta.homeDescription });
}

export default async function HomePage({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const featured = featuredSlugs.map((s) => getVehicleBySlug(s)!).filter(Boolean);
  const popularModels = popularModelSlugs.map((s) => getVehicleBySlug(s)!).filter(Boolean);
  const waGeneric = whatsappMessage.generic(locale);

  return (
    <PageShell locale={locale} path="/" pageType="home" waMessage={waGeneric}>
      <JsonLd data={[organizationLd(locale), websiteLd(locale), itemListLd(featured.map((v) => ({ name: v.name, path: `/cars/${v.slug}/` })), locale, d.featured.title)]} />
      <Hero locale={locale} />

      <section className="container-x relative z-10 -mt-12 sm:-mt-16" aria-label={d.search.title}>
        <QuickSearch
          fleetHref={lp("/cars/")}
          brands={getBrandsWithVehicles().map((b) => ({ value: b.key, label: pick(b.name, locale), href: lp(`/brands/${b.slug}/`) }))}
          categories={categories.map((c) => ({ value: c.key, label: pick(c.name, locale), href: lp(`/${c.slug}/`) }))}
          labels={d.search}
        />
      </section>

      <section className="section" aria-labelledby="featured-title">
        <div className="container-x">
          <SectionHeading
            id="featured-title"
            eyebrow={d.featured.eyebrow}
            title={d.featured.title}
            sub={d.featured.sub}
            action={<ButtonLink href={lp("/cars/")} variant="secondary" size="sm" arrow track={trackAttrs("view_vehicle_list", { cta_location: "home_featured" })}>{d.cta.viewFleet}</ButtonLink>}
          />
          <CarGrid vehicles={featured} locale={locale} ctaLocation="home_featured" />
        </div>
      </section>

      <section className="section border-t border-line bg-surface/40" aria-labelledby="brands-title">
        <div className="container-x">
          <SectionHeading id="brands-title" eyebrow={d.brandsSection.eyebrow} title={d.brandsSection.title} sub={d.brandsSection.sub} />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {brands.map((b) => <li key={b.key}><BrandCard brand={b} locale={locale} /></li>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-title">
        <div className="container-x">
          <SectionHeading id="categories-title" eyebrow={d.categoriesSection.eyebrow} title={d.categoriesSection.title} sub={d.categoriesSection.sub} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c) => <li key={c.key}><CategoryCard category={c} locale={locale} /></li>)}
          </ul>
        </div>
      </section>

      <section className="section border-y border-line bg-surface/40" aria-labelledby="why-title">
        <div className="container-x">
          <SectionHeading id="why-title" eyebrow={d.why.eyebrow} title={d.why.title} />
          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {d.why.items.map((it, i) => (
              <li key={it.t} className="bg-surface p-6">
                <span className="text-sm font-semibold text-accent" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container-x">
          <SectionHeading id="how-title" eyebrow={d.how.eyebrow} title={d.how.title} />
          <ol className="grid gap-8 md:grid-cols-4">
            {d.how.steps.map((s, i) => (
              <li key={s.t} className="relative border-t border-accent/50 pt-5">
                <span className="text-4xl font-bold text-white/15" aria-hidden>{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="border-t border-line">
        <SEOContentSection eyebrow={d.seo.eyebrow} title={d.seo.title} paragraphs={d.seo.paragraphs} cta={{ href: lp("/supercar-rental-dubai/"), label: d.seo.cta }} id="rent-supercar" />
      </div>

      <section className="section border-t border-line bg-surface/40" aria-labelledby="popular-title">
        <div className="container-x">
          <SectionHeading id="popular-title" eyebrow={d.popular.eyebrow} title={d.popular.title} sub={d.popular.sub} />
          <div className="grid gap-8 md:grid-cols-3">
            <LinkList title={d.nav.brands} links={getBrandsWithVehicles().map((b) => ({ href: lp(`/brands/${b.slug}/`), label: pick(b.name, locale) }))} />
            <LinkList title={d.nav.fleet} links={popularModels.map((v) => ({ href: lp(`/cars/${v.slug}/`), label: v.name }))} />
            <LinkList title={d.nav.categories} links={categories.map((c) => ({ href: lp(`/${c.slug}/`), label: pick(c.h1, locale) }))} />
          </div>
          <p className="mt-8 text-sm text-muted">
            <Link href={lp("/luxury-car-rental-dubai/")} className="link-underline">{d.nav.dubaiRental}</Link>
          </p>
        </div>
      </section>

      <FAQ items={pick(homeFaq, locale)} heading={d.faq.title} eyebrow={d.faq.eyebrow} />
      <CTASection locale={locale} waMessage={waGeneric} />
    </PageShell>
  );
}
