import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { localePath } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path: "/locations/", title: d.locations.metaTitle, description: d.locations.metaDescription });
}

export default async function LocationsIndex({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  if (locale !== "en") notFound();
  const d = getDictionary(locale);
  return (
    <PageShell locale={locale} path="/locations/" pageType="locations_index">
      <JsonLd data={itemListLd(locations.map((l) => ({ name: l.area, path: `/locations/${l.slug}/` })), locale, d.locations.h1)} />
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.locations, path: "/locations/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{d.locations.h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{d.locations.intro}</p>
      </header>
      <section className="container-x pb-16" aria-label={d.locations.h1}>
        <ul className="grid gap-5 md:grid-cols-3">
          {locations.map((l) => (
            <li key={l.slug}>
              <article className="card card-hover flex h-full flex-col p-6">
                <h2 className="text-xl font-bold"><Link href={localePath(locale, `/locations/${l.slug}/`)} className="hover:text-accent-strong">{l.area}</Link></h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{l.intro.split(". ")[0]}.</p>
                <Link href={localePath(locale, `/locations/${l.slug}/`)} className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent link-underline">{d.locations.explore}</Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} />
    </PageShell>
  );
}
