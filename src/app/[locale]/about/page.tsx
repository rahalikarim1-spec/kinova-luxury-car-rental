import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { whatsappMessage } from "@/lib/contact";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path: "/about/", title: d.about.metaTitle, description: d.about.metaDescription });
}

export default async function AboutPage({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const a = d.about;
  return (
    <PageShell locale={locale} path="/about/" pageType="about">
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.about, path: "/about/" }]} /></div>
      <header className="container-x pb-12 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{a.h1}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-soft sm:text-2xl">{a.lead}</p>
      </header>
      <section className="container-x pb-16" aria-label={a.h1}>
        <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {a.blocks.map((b) => (
            <li key={b.t} className="bg-surface p-7">
              <h2 className="text-lg font-bold">{b.t}</h2>
              <p className="mt-3 leading-relaxed text-muted">{b.d}</p>
            </li>
          ))}
        </ul>
      </section>
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} title={a.ctaTitle} sub={a.ctaText} />
    </PageShell>
  );
}
