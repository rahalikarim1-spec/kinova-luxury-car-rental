import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
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
  return buildMetadata({ locale, path: "/guides/", title: d.guides.metaTitle, description: d.guides.metaDescription });
}

export default async function GuidesIndex({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  if (locale !== "en") notFound(); // English-only section for now (see englishOnlyPrefixes)
  const d = getDictionary(locale);
  return (
    <PageShell locale={locale} path="/guides/" pageType="guides_index">
      <JsonLd data={itemListLd(guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}/` })), locale, d.guides.h1)} />
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.guides, path: "/guides/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{d.guides.h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{d.guides.intro}</p>
      </header>
      <section className="container-x pb-16" aria-label={d.guides.h1}>
        <ul className="grid gap-5 md:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <article className="card card-hover flex h-full flex-col p-6">
                <p className="text-xs text-muted">{g.readingMinutes} {d.guides.minutes}</p>
                <h2 className="mt-3 text-xl font-bold leading-snug"><Link href={localePath(locale, `/guides/${g.slug}/`)} className="hover:text-accent-strong">{g.title}</Link></h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{g.intro}</p>
                <Link href={localePath(locale, `/guides/${g.slug}/`)} className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent link-underline">{d.guides.read}</Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} />
    </PageShell>
  );
}
