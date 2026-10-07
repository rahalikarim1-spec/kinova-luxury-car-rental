import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandByKey } from "@/data/brands";
import { categoryByKey } from "@/data/categories";
import { guideBySlug, guides } from "@/data/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkList } from "@/components/ContentSections";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { localePath, pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getVehicleBySlug } from "@/lib/fleet";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { absoluteUrl, articleLd, buildMetadata } from "@/lib/seo";

type P = LocaleParams<{ slug: string }>;
export const dynamicParams = false;
// English-only: only (en, slug) pairs are generated – no ar/ru pages exist for this section.
export const generateStaticParams = () => guides.map((g) => ({ locale: "en", slug: g.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await resolveLocale(params);
  const g = guideBySlug(slug);
  if (!g || locale !== "en") notFound();
  return buildMetadata({ locale, path: `/guides/${g.slug}/`, title: g.title, description: g.description, type: "article" });
}

export default async function GuidePage({ params }: P) {
  const { locale, slug } = await resolveLocale(params);
  const g = guideBySlug(slug);
  if (!g || locale !== "en") notFound();
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const cars = g.relatedCars.map((s) => getVehicleBySlug(s)!).filter(Boolean);
  return (
    <PageShell locale={locale} path={`/guides/${g.slug}/`} pageType="guide">
      <JsonLd data={articleLd({ headline: g.h1, description: g.description, url: absoluteUrl(lp(`/guides/${g.slug}/`)) })} />
      <div className="container-x pt-6">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.guides, path: "/guides/" }, { name: g.title, path: `/guides/${g.slug}/` }]} />
      </div>
      <article className="container-x max-w-3xl pb-16 pt-8">
        <header>
          <p className="text-sm text-muted">{g.readingMinutes} {d.guides.minutes} · {d.guides.updated}</p>
          <h1 className="h-display mt-3 !text-[clamp(2rem,5vw,3.25rem)]">{g.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-soft">{g.intro}</p>
        </header>
        <div className="prose-k mt-6">
          {g.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </section>
          ))}
        </div>
        <div className="mt-12 grid gap-8 border-t border-line pt-10">
          <LinkList title={d.nav.fleet} links={cars.map((v) => ({ href: lp(`/cars/${v.slug}/`), label: v.name }))} />
          <LinkList title={d.nav.categories} links={g.relatedCategories.map((k) => ({ href: lp(`/${categoryByKey(k).slug}/`), label: pick(categoryByKey(k).h1, locale) }))} />
          <LinkList title={d.nav.brands} links={g.relatedBrands.map((k) => ({ href: lp(`/brands/${brandByKey(k).slug}/`), label: pick(brandByKey(k).h1, locale) }))} />
        </div>
      </article>
      <FAQ items={g.faq} heading={d.faq.title} eyebrow={d.faq.eyebrow} id="guide-faq" />
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} />
    </PageShell>
  );
}
