import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandByKey } from "@/data/brands";
import { categoryByKey } from "@/data/categories";
import { vehicles } from "@/data/vehicles";
import { BookingForm } from "@/components/BookingForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Bullets, LinkList } from "@/components/ContentSections";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedCars } from "@/components/RelatedCars";
import { VehicleGallery } from "@/components/VehicleGallery";
import { VehiclePanel } from "@/components/VehiclePanel";
import { getDictionary, t } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import { getRelatedVehicles, getVehicleBySlug, priceLabel } from "@/lib/fleet";
import { vehicleImages, vehicleOgImage } from "@/lib/images";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { absoluteUrl, buildMetadata, vehicleLd } from "@/lib/seo";
import { getSuitedFor, getVehicleFaq, getWhyRent } from "@/lib/vehicle-content";

type P = LocaleParams<{ slug: string }>;

export const dynamicParams = false;
export const generateStaticParams = () => vehicles.map((v) => ({ slug: v.slug }));

const h1: Record<Locale, (n: string) => string> = {
  en: (n) => `${n} Rental in Dubai`,
  ar: (n) => `تأجير ${n} في دبي`,
  ru: (n) => `Аренда ${n} в Дубае`,
};
const desc: Record<Locale, (n: string, h: string) => string> = {
  en: (n, h) => `Rent the ${n} in Dubai – ${h}. Check availability and pricing with KINOVA on WhatsApp, phone or the enquiry form.`,
  ar: (n, h) => `استأجر ${n} في دبي – ${h}. تحقق من التوفر والسعر مع KINOVA عبر واتساب أو الهاتف أو نموذج الاستفسار.`,
  ru: (n, h) => `Аренда ${n} в Дубае – ${h}. Уточните наличие и цену у KINOVA в WhatsApp, по телефону или через форму.`,
};

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await resolveLocale(params);
  const v = getVehicleBySlug(slug);
  if (!v) notFound();
  return buildMetadata({
    locale,
    path: `/cars/${v.slug}/`,
    title: h1[locale](v.name),
    description: desc[locale](v.name, pick(v.highlight, locale)),
    image: vehicleOgImage(v),
  });
}

export default async function CarPage({ params }: P) {
  const { locale, slug } = await resolveLocale(params);
  const v = getVehicleBySlug(slug);
  if (!v) notFound();

  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const brand = brandByKey(v.brand);
  const primary = categoryByKey(v.categories[0]);
  const images = vehicleImages(v, locale);
  const price = priceLabel(v, locale, d);
  const faq = getVehicleFaq(v, locale);
  const related = getRelatedVehicles(v, 3);
  const brandName = pick(brand.name, locale);
  const pending = d.common.confirmOnEnquiry;

  const rows: { k: string; v: React.ReactNode }[] = [
    { k: d.car.brand, v: <Link href={lp(`/brands/${brand.slug}/`)} className="link-underline">{brandName}</Link> },
    { k: d.car.model, v: v.model },
    { k: d.car.category, v: v.categories.map((c, i) => (
        <span key={c}>{i > 0 && ", "}<Link href={lp(`/${categoryByKey(c).slug}/`)} className="link-underline">{pick(categoryByKey(c).name, locale)}</Link></span>
      )) },
    { k: d.car.bodyType, v: d.bodyTypes[v.bodyType] },
    ...(v.seats ? [{ k: d.car.seats, v: t(d.car.seatsValue, { n: v.seats }) }] : []),
    ...(v.powertrain ? [{ k: d.car.powertrain, v: pick(v.powertrain, locale) }] : []),
    { k: d.car.year, v: v.year ? String(v.year) : pending },
    { k: d.car.dailyRate, v: price.text },
    { k: d.car.deposit, v: pending },
    { k: d.car.mileage, v: pending },
    { k: d.car.insurance, v: pending },
  ];

  const waMessage = whatsappMessage.car(locale, v);
  const categoryLinks = v.categories.map((c) => ({ href: lp(`/${categoryByKey(c).slug}/`), label: pick(categoryByKey(c).h1, locale) }));

  return (
    <PageShell locale={locale} path={`/cars/${v.slug}/`} pageType="vehicle" waMessage={waMessage} enquiryHref="#enquiry" vehicle={v} viewEvent="view_vehicle">
      <JsonLd
        data={vehicleLd({
          name: v.name,
          brand: brandName,
          description: pick(v.description, locale),
          category: pick(primary.name, locale),
          image: images[0].src.endsWith(".svg") ? vehicleOgImage(v) : images[0].src,
          url: absoluteUrl(lp(`/cars/${v.slug}/`)),
          priceDaily: v.priceDaily,
          currency: v.currency,
          year: v.year,
        })}
      />
      <div className="container-x pt-6">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.fleet, path: "/cars/" }, { name: v.name, path: `/cars/${v.slug}/` }]} />
      </div>

      <div className="container-x grid gap-10 pb-16 pt-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="min-w-0">
          <header className="mb-6">
            <p className="eyebrow"><Link href={lp(`/brands/${brand.slug}/`)} className="hover:text-accent-strong">{brandName}</Link></p>
            <h1 className="h-display mt-3 !text-[clamp(2rem,5vw,3.5rem)]">{h1[locale](v.name)}</h1>
            <p className="mt-3 text-lg text-muted">{pick(v.highlight, locale)}</p>
          </header>

          <VehicleGallery images={images} labels={{ gallery: d.car.gallery, prev: d.car.prev, next: d.car.next, imageOf: d.car.imageOf, demo: d.car.demoImage }} />

          <div className="mt-8 lg:hidden"><VehiclePanel vehicle={v} locale={locale} ctaLocation="vehicle_inline" /></div>

          <section className="mt-12" aria-labelledby="about-car">
            <h2 id="about-car" className="h-section !text-3xl">{v.name}</h2>
            <p className="prose-k mt-4">{pick(v.description, locale)}</p>
          </section>

          <section className="mt-12" aria-labelledby="key-info">
            <h2 id="key-info" className="text-2xl font-bold">{d.car.keyInfo}</h2>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {rows.map((r) => (
                <div key={r.k} className="grid grid-cols-[9rem_1fr] gap-4 py-3.5 text-sm sm:grid-cols-[12rem_1fr] sm:text-base">
                  <dt className="text-muted">{r.k}</dt>
                  <dd className={r.v === pending ? "text-soft" : "font-medium"}>{r.v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <section aria-labelledby="why-rent">
              <h2 id="why-rent" className="text-2xl font-bold">{t(d.car.whyRent, { model: v.name })}</h2>
              <div className="mt-5"><Bullets items={getWhyRent(v, locale)} /></div>
            </section>
            <section aria-labelledby="suited">
              <h2 id="suited" className="text-2xl font-bold">{d.car.suitedFor}</h2>
              <div className="mt-5"><Bullets items={getSuitedFor(v, locale)} /></div>
            </section>
          </div>

          <section id="enquiry" className="mt-14 scroll-mt-24" aria-labelledby="enquiry-title">
            <h2 id="enquiry-title" className="text-2xl font-bold">{d.car.enquirySection}</h2>
            <p className="mb-6 mt-2 max-w-xl text-muted">{d.car.enquiryIntro}</p>
            <BookingForm
              locale={locale}
              dict={{ form: d.form, chatWhatsapp: d.cta.chatWhatsapp }}
              vehicles={vehicles.map((x) => ({ slug: x.slug, name: x.name, brand: x.brand, category: x.categories[0] }))}
              defaultVehicle={v.slug}
              source="vehicle_page"
              followUpTemplate={d.whatsappMessages.afterForm}
            />
          </section>
        </div>

        <aside className="hidden lg:block" aria-label={d.car.enquirySection}>
          <div className="sticky top-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted rtl:tracking-normal">{v.name}</p>
            <VehiclePanel vehicle={v} locale={locale} ctaLocation="vehicle_sticky_panel" />
          </div>
        </aside>
      </div>

      <FAQ items={faq} heading={t(d.car.faq, { model: v.name })} eyebrow={d.faq.eyebrow} id="car-faq" />
      <RelatedCars vehicles={related} locale={locale} title={d.car.related} />

      <section className="border-t border-line py-12" aria-label={d.car.exploreMore}>
        <div className="container-x grid gap-8 md:grid-cols-2">
          <LinkList title={d.car.exploreMore} links={[{ href: lp(`/brands/${brand.slug}/`), label: t(d.car.relatedBrand, { brand: brandName }) }, ...categoryLinks]} />
          <LinkList title={d.nav.dubaiRental} links={[{ href: lp("/luxury-car-rental-dubai/"), label: pick(categoryByKey("luxury-cars").h1, locale) }, { href: lp("/cars/"), label: d.nav.fleet }]} />
        </div>
      </section>
    </PageShell>
  );
}
