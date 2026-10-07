import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { getBrandsWithVehicles } from "./fleet";
import { getDictionary } from "@/i18n";
import { pick, localePath, type Locale } from "@/i18n/config";

export interface NavItem { label: string; href: string; children?: { label: string; href: string }[] }

export function getNav(locale: Locale): NavItem[] {
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const brandLinks = getBrandsWithVehicles().map((b) => ({ label: pick(b.name, locale), href: lp(`/brands/${b.slug}/`) }));
  return [
    { label: d.nav.home, href: lp("/") },
    { label: d.nav.fleet, href: lp("/cars/") },
    { label: d.nav.brands, href: lp("/brands/"), children: [...brandLinks, { label: d.nav.allBrands, href: lp("/brands/") }] },
    { label: d.nav.categories, href: lp("/cars/"), children: categories.map((c) => ({ label: pick(c.name, locale), href: lp(`/${c.slug}/`) })) },
    { label: d.nav.services, href: lp("/services/") },
    { label: d.nav.dubaiRental, href: lp("/luxury-car-rental-dubai/") },
    { label: d.nav.about, href: lp("/about/") },
    { label: d.nav.contact, href: lp("/contact/") },
  ];
}

export { brands, categories };
