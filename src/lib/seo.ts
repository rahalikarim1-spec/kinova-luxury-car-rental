import type { Metadata } from "next";
import { business, isConfigured, site } from "@/config/business";
import { defaultLocale, isEnglishOnlyPath, localeMeta, localePath, locales, type Locale } from "@/i18n/config";
import { DEFAULT_OG_IMAGE } from "./images";

export const absoluteUrl = (path: string) => `${site.url}${path}`;

/** Locales in which a given path exists (English-only sections have a single entry). */
export const availableLocalesFor = (path: string): Locale[] => (isEnglishOnlyPath(path) ? [defaultLocale] : [...locales]);

export function buildAlternates(locale: Locale, path: string): NonNullable<Metadata["alternates"]> {
  const available = availableLocalesFor(path);
  const languages: Record<string, string> = {};
  for (const l of available) languages[localeMeta[l].hreflang] = absoluteUrl(localePath(l, path));
  languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));
  return {
    canonical: absoluteUrl(localePath(locale, path)),
    // A single-language page must not claim alternates it does not have.
    languages: available.length > 1 ? languages : undefined,
  };
}

interface MetaInput {
  locale: Locale;
  /** Locale-less path, e.g. "/cars/lamborghini-urus/". */
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
}

export function buildMetadata({ locale, path, title, description, image, noindex, type = "website" }: MetaInput): Metadata {
  const fullTitle = title.includes(business.businessName) ? title : `${title} | ${business.businessName}`;
  const url = absoluteUrl(localePath(locale, path));
  const og = absoluteUrl(image ?? DEFAULT_OG_IMAGE);
  const available = availableLocalesFor(path);
  return {
    title: { absolute: fullTitle },
    description,
    alternates: buildAlternates(locale, path),
    robots: site.demoNoindex
      ? { index: false, follow: false }
      : noindex
        ? { index: false, follow: true }
        : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type,
      url,
      siteName: business.businessName,
      title: fullTitle,
      description,
      locale: localeMeta[locale].og,
      alternateLocale: available.filter((l) => l !== locale).map((l) => localeMeta[l].og),
      images: [{ url: og, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [og] },
  };
}

/* ------------------------------ JSON-LD builders ------------------------------ */

type Json = Record<string, unknown>;
const ctx = "https://schema.org";

export const orgId = () => `${site.url}/#organization`;

export function organizationLd(locale: Locale): Json {
  const sameAs = Object.values(business.social).filter(Boolean);
  return {
    "@context": ctx,
    "@type": "Organization",
    "@id": orgId(),
    name: business.businessName,
    url: absoluteUrl(localePath(locale, "/")),
    description: "Luxury and supercar rental enquiries in Dubai and across the United Arab Emirates.",
    areaServed: { "@type": "Country", name: business.serviceArea },
    // Only real, confirmed data is ever emitted – no placeholders, ratings, reviews or addresses.
    ...(isConfigured(business.phone) ? { telephone: business.phone } : {}),
    ...(isConfigured(business.email) ? { email: business.email } : {}),
    ...(business.logoPath ? { logo: absoluteUrl(business.logoPath) } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd(locale: Locale): Json {
  return {
    "@context": ctx,
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: business.businessName,
    url: absoluteUrl("/"),
    inLanguage: locales.map((l) => localeMeta[l].hreflang),
    publisher: { "@id": orgId() },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[], locale: Locale): Json {
  return {
    "@context": ctx,
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(localePath(locale, it.path)),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]): Json {
  return {
    "@context": ctx,
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function itemListLd(items: { name: string; path: string }[], locale: Locale, name?: string): Json {
  return {
    "@context": ctx,
    "@type": "ItemList",
    ...(name ? { name } : {}),
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(localePath(locale, it.path)),
    })),
  };
}

export interface VehicleLdInput {
  name: string;
  brand: string;
  description: string;
  category: string;
  image: string;
  url: string;
  priceDaily: number | null;
  currency: string;
  year: number | null;
}

export function vehicleLd(v: VehicleLdInput): Json {
  return {
    "@context": ctx,
    "@type": ["Product", "Car"],
    name: v.name,
    description: v.description,
    brand: { "@type": "Brand", name: v.brand },
    category: v.category,
    image: absoluteUrl(v.image),
    url: v.url,
    ...(v.year ? { vehicleModelDate: String(v.year) } : {}),
    // Offer only when a real price exists. Never fabricated.
    ...(v.priceDaily != null
      ? {
          offers: {
            "@type": "Offer",
            url: v.url,
            priceCurrency: v.currency,
            price: v.priceDaily,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: v.priceDaily,
              priceCurrency: v.currency,
              unitCode: "DAY",
            },
            seller: { "@id": orgId() },
          },
        }
      : {}),
  };
}

export function articleLd(a: { headline: string; description: string; url: string }): Json {
  return {
    "@context": ctx,
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    mainEntityOfPage: a.url,
    author: { "@id": orgId() },
    publisher: { "@id": orgId() },
    inLanguage: "en-AE",
  };
}
