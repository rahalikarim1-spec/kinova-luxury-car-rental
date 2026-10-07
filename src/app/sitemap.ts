import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { locations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { defaultLocale, localeMeta, localePath } from "@/i18n/config";
import { absoluteUrl, availableLocalesFor } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

/** Indexable URLs only (legal placeholders are noindex and therefore excluded). Each entry lists its hreflang alternates. */
const entries: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/cars/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/brands/", priority: 0.7, changeFrequency: "monthly" },
  ...categories.map((c) => ({ path: `/${c.slug}/`, priority: 0.9, changeFrequency: "weekly" as const })),
  ...brands.map((b) => ({ path: `/brands/${b.slug}/`, priority: 0.8, changeFrequency: "weekly" as const })),
  ...vehicles.map((v) => ({ path: `/cars/${v.slug}/`, priority: 0.8, changeFrequency: "weekly" as const })),
  { path: "/services/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/", priority: 0.6, changeFrequency: "weekly" },
  ...guides.map((g) => ({ path: `/guides/${g.slug}/`, priority: 0.6, changeFrequency: "monthly" as const })),
  { path: "/locations/", priority: 0.5, changeFrequency: "monthly" },
  ...locations.map((l) => ({ path: `/locations/${l.slug}/`, priority: 0.6, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.flatMap(({ path, priority, changeFrequency }) => {
    const available = availableLocalesFor(path);
    const languages: Record<string, string> = {};
    for (const l of available) languages[localeMeta[l].hreflang] = absoluteUrl(localePath(l, path));
    languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));
    return available.map((l) => ({
      url: absoluteUrl(localePath(l, path)),
      changeFrequency,
      priority,
      ...(available.length > 1 ? { alternates: { languages } } : {}),
    }));
  });
}

