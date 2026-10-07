import type { Metadata } from "next";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import type { BodyType } from "@/data/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarGrid } from "@/components/CarGrid";
import { CTASection } from "@/components/CTASection";
import { WhatsAppButton } from "@/components/CtaButtons";
import { FleetBrowser } from "@/components/FleetBrowser";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { pick } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getBrandsWithVehicles, getVehicles, hasPrices } from "@/lib/fleet";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata, itemListLd } from "@/lib/seo";

const titles = {
  en: { title: "Luxury & Supercar Fleet in Dubai", description: "Browse the KINOVA fleet: Lamborghini, Ferrari, McLaren, Rolls-Royce, Porsche and more. Filter by brand, category or body type and check availability." },
  ar: { title: "أسطول السيارات الفاخرة والسوبر كار في دبي", description: "تصفّح أسطول KINOVA: لامبورغيني وفيراري وماكلارين ورولز رويس وبورشه وغيرها. صفِّ حسب العلامة أو الفئة أو نوع الهيكل وتحقق من التوفر." },
  ru: { title: "Автопарк люксовых авто и суперкаров в Дубае", description: "Автопарк KINOVA: Lamborghini, Ferrari, McLaren, Rolls-Royce, Porsche и другие. Фильтр по бренду, категории и типу кузова, проверка наличия." },
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  return buildMetadata({ locale, path: "/cars/", ...titles[locale] });
}

export default async function FleetPage({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const vehicles = getVehicles();
  const priced = hasPrices();
  const maxPrice = Math.max(0, ...vehicles.map((v) => v.priceDaily ?? 0));
  const steps = priced ? [1000, 2000, 3000, 5000, 8000, 12000].filter((s) => s <= maxPrice * 1.5) : [];
  const types: BodyType[] = ["suv", "coupe", "convertible", "sedan"];
  const wa = whatsappMessage.generic(locale);

  return (
    <PageShell locale={locale} path="/cars/" pageType="fleet" waMessage={wa} viewEvent="view_vehicle_list">
      <JsonLd data={itemListLd(vehicles.map((v) => ({ name: v.name, path: `/cars/${v.slug}/` })), locale, d.fleet.h1)} />
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.fleet, path: "/cars/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{d.fleet.h1}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{d.fleet.intro}</p>
      </header>
      <section className="container-x pb-16" aria-label={d.fleet.filters}>
        <FleetBrowser
          currency="AED"
          items={vehicles.map((v) => ({ id: v.id, brand: v.brand, categories: v.categories, bodyType: v.bodyType, priceDaily: v.priceDaily }))}
          brands={getBrandsWithVehicles().map((b) => ({ value: b.key, label: pick(b.name, locale) }))}
          categories={categories.map((c) => ({ value: c.key, label: pick(c.name, locale) }))}
          types={types.map((t) => ({ value: t, label: d.bodyTypes[t] }))}
          priceSteps={steps}
          labels={d.fleet}
          noResultsAction={<WhatsAppButton locale={locale} message={wa} ctaLocation="fleet_no_results" size="sm" label={d.cta.whatsappUs} />}
        >
          <CarGrid vehicles={vehicles} locale={locale} ctaLocation="fleet_grid" priorityCount={3} />
        </FleetBrowser>
      </section>
      <CTASection locale={locale} waMessage={wa} />
    </PageShell>
  );
}
