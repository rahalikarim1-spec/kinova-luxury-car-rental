import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/CtaButtons";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { localePath } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path: "/services/", title: d.services.metaTitle, description: d.services.metaDescription });
}

export default async function ServicesPage({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const s = d.services;
  return (
    <PageShell locale={locale} path="/services/" pageType="services">
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.services, path: "/services/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{s.h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{s.intro}</p>
      </header>

      <section className="container-x pb-12" aria-labelledby="primary-service">
        <div className="card grid gap-6 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{d.common.available}</p>
            <h2 id="primary-service" className="h-section mt-3">{s.primaryTitle}</h2>
            <p className="mt-4 max-w-xl text-soft">{s.primaryText}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href={localePath(locale, "/cars/")} arrow>{d.cta.browseCars}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-x pb-16" aria-labelledby="formats">
        <h2 id="formats" className="text-2xl font-bold">{s.exampleTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">{s.exampleNote}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((it) => (
            <li key={it.t} className="card p-6">
              <span className="inline-block rounded-sm border border-line px-2 py-0.5 text-[11px] uppercase tracking-[0.14em] text-muted rtl:tracking-normal">{s.tbc}</span>
              <h3 className="mt-4 text-lg font-bold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
            </li>
          ))}
        </ul>
      </section>
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} title={s.ctaTitle} sub={s.ctaText} />
    </PageShell>
  );
}
