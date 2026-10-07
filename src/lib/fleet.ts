import { brandByKey, brands } from "@/data/brands";
import { categoryByKey } from "@/data/categories";
import { vehicles } from "@/data/vehicles";
import type { Brand, BrandKey, Category, CategoryKey, Vehicle } from "@/data/types";
import { pick, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";

/**
 * Data-access layer. Today it reads static arrays; swap these functions for DB/CMS calls later
 * (vehicles, prices, availability) without touching components.
 */
export const getVehicles = (): Vehicle[] => vehicles;
export const getVehicleBySlug = (slug: string) => vehicles.find((v) => v.slug === slug);
export const getFeaturedVehicles = () => vehicles.filter((v) => v.featured);
export const getVehiclesByBrand = (key: BrandKey) => vehicles.filter((v) => v.brand === key);
export const getVehiclesByCategory = (key: CategoryKey) => vehicles.filter((v) => v.categories.includes(key));
export const getPrimaryCategory = (v: Vehicle): Category => categoryByKey(v.categories[0]);
export const getBrand = (v: Vehicle): Brand => brandByKey(v.brand);
export const hasPrices = () => vehicles.some((v) => v.priceDaily != null);
export const getBrandsWithVehicles = () => brands.filter((b) => getVehiclesByBrand(b.key).length > 0);

/** Same brand first, then same primary category, de-duplicated. */
export function getRelatedVehicles(v: Vehicle, limit = 4): Vehicle[] {
  const sameBrand = vehicles.filter((x) => x.brand === v.brand && x.id !== v.id);
  const sameCat = vehicles.filter((x) => x.id !== v.id && x.categories.some((c) => v.categories.includes(c)));
  const seen = new Set<string>();
  return [...sameBrand, ...sameCat].filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true))).slice(0, limit);
}

export function formatPrice(amount: number, currency: string, locale: Locale) {
  const tag = locale === "ar" ? "ar-AE" : locale === "ru" ? "ru-RU" : "en-AE";
  return new Intl.NumberFormat(tag, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

/** "AED 1,500 / day" or the localized "Price on Request". */
export function priceLabel(v: Vehicle, locale: Locale, d: Dictionary): { text: string; hasPrice: boolean } {
  if (v.priceDaily == null) return { text: d.price.onRequest, hasPrice: false };
  return { text: `${formatPrice(v.priceDaily, v.currency, locale)} ${d.price.perDay}`, hasPrice: true };
}

export const localizedName = (b: Brand | Category, locale: Locale) => pick(b.name, locale);
