import type { Metadata } from "next";
import { brands } from "@/data/brands";
import { BrandCard } from "@/components/BrandCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { pick, type Locale } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd } from "@/lib/seo";

const copy: Record<Locale, { title: string; description: string; h1: string; intro: string }> = {
  en: { title: "Luxury & Supercar Brands to Rent in Dubai", description: "Rent Lamborghini, Ferrari, McLaren, Rolls-Royce, Porsche, Range Rover, Chevrolet or Ford in Dubai. Pick a brand to see models and check availability.", h1: "Luxury & Supercar Brands in Dubai", intro: "Start from the marque you have in mind. Each brand page lists its models, explains how to choose between them and lets you check availability." },
  ar: { title: "علامات السيارات الفاخرة والسوبر كار للإيجار في دبي", description: "استأجر لامبورغيني أو فيراري أو ماكلارين أو رولز رويس أو بورشه أو رينج روفر أو شيفروليه أو فورد في دبي. اختر العلامة لعرض الموديلات.", h1: "علامات السيارات الفاخرة والسوبر كار في دبي", intro: "ابدأ من العلامة التي تفكر فيها. تعرض كل صفحة علامة موديلاتها وتشرح كيف تختار بينها وتتيح لك التحقق من التوفر." },
  ru: { title: "Бренды люксовых авто и суперкаров в аренду в Дубае", description: "Аренда Lamborghini, Ferrari, McLaren, Rolls-Royce, Porsche, Range Rover, Chevrolet или Ford в Дубае. Выберите бренд, чтобы увидеть модели.", h1: "Бренды люксовых авто и суперкаров в Дубае", intro: "Начните с марки, которую вы имеете в виду. На странице бренда – модели, подсказки по выбору и проверка наличия." },
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  return buildMetadata({ locale, path: "/brands/", title: copy[locale].title, description: copy[locale].description });
}

export default async function BrandsIndex({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const c = copy[locale];
  return (
    <PageShell locale={locale} path="/brands/" pageType="brands_index">
      <JsonLd data={itemListLd(brands.map((b) => ({ name: pick(b.name, locale), path: `/brands/${b.slug}/` })), locale, c.h1)} />
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.brands, path: "/brands/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{c.intro}</p>
      </header>
      <section className="container-x pb-16" aria-label={d.nav.brands}>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {brands.map((b) => <li key={b.key}><BrandCard brand={b} locale={locale} /></li>)}
        </ul>
      </section>
      <CTASection locale={locale} waMessage={whatsappMessage.generic(locale)} />
    </PageShell>
  );
}
