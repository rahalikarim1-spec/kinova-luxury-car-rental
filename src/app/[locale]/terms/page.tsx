import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata } from "@/lib/seo";

const path = "/terms/";

/** Legal placeholder – intentionally noindex and excluded from the sitemap until KINOVA provides final text. */
export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path, title: d.legal.termsTitle, description: d.legal.placeholder, noindex: true });
}

export default async function Page({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return (
    <PageShell locale={locale} path={path} pageType="legal">
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.legal.termsTitle, path }]} /></div>
      <div className="container-x pb-24 pt-8">
        <h1 className="h-display !text-[clamp(2rem,5vw,3.25rem)]">{d.legal.termsTitle}</h1>
        <p className="prose-k mt-6 max-w-2xl">{d.legal.placeholder}</p>
      </div>
    </PageShell>
  );
}
