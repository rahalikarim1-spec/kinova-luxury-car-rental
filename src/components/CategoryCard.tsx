import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/types";
import { localePath, pick, type Locale } from "@/i18n/config";
import { getVehiclesByCategory } from "@/lib/fleet";
import { vehicleCover } from "@/lib/images";
import { ArrowIcon } from "./Icons";

export function CategoryCard({ category, locale }: { category: Category; locale: Locale }) {
  const first = getVehiclesByCategory(category.key)[0];
  const img = first ? vehicleCover(first, locale) : null;
  return (
    <Link href={localePath(locale, `/${category.slug}/`)} className="card group relative isolate flex min-h-60 flex-col justify-end overflow-hidden p-5">
      {img && <Image src={img.src} alt="" fill sizes="(min-width:1024px) 20vw, (min-width:640px) 45vw, 100vw" className="-z-10 object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" unoptimized={img.isPlaceholder} loading="lazy" />}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      <h3 className="text-xl font-bold">{pick(category.name, locale)}</h3>
      <p className="mt-1 text-sm text-soft">{pick(category.blurb, locale)}</p>
      <ArrowIcon className="absolute end-5 top-5 size-5 text-accent transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}
