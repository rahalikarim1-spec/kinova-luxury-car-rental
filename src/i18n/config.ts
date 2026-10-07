export const locales = ["en", "ar", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; name: string; dir: "ltr" | "rtl"; hreflang: string; og: string }
> = {
  en: { label: "EN", name: "English", dir: "ltr", hreflang: "en-AE", og: "en_AE" },
  ar: { label: "العربية", name: "العربية", dir: "rtl", hreflang: "ar-AE", og: "ar_AE" },
  ru: { label: "RU", name: "Русский", dir: "ltr", hreflang: "ru-AE", og: "ru_RU" },
};

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/**
 * Sections that currently exist in English only (long-form editorial / local content).
 * They are excluded from ar/ru routes, hreflang clusters and the sitemap, and the language
 * switcher sends visitors to the translated home instead of a duplicate-content page.
 * Remove a prefix here once its translations are written.
 */
export const englishOnlyPrefixes = ["/guides", "/locations"] as const;

export const isEnglishOnlyPath = (path: string) =>
  englishOnlyPrefixes.some((p) => path === p || path.startsWith(`${p}/`));

const normalise = (path: string) => {
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/")) p += "/";
  return p;
};

/** localePath("ar", "/cars/") -> "/ar/cars/"; localePath("en", "/cars/") -> "/cars/" */
export function localePath(locale: Locale, path: string = "/"): string {
  const p = normalise(path);
  if (locale === defaultLocale) return p;
  return p === "/" ? `/${locale}/` : `/${locale}${p}`;
}

/** Strip a leading /ar or /ru from a pathname. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) {
      return { locale: l, path: normalise(pathname.slice(l.length + 1) || "/") };
    }
  }
  return { locale: defaultLocale, path: normalise(pathname) };
}

export type Localized<T> = { en: T } & Partial<Record<Exclude<Locale, "en">, T>>;
export const pick = <T,>(value: Localized<T>, locale: Locale): T => value[locale] ?? value.en;
