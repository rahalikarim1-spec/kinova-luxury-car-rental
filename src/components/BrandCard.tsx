import Link from "next/link";
import type { Brand } from "@/data/types";
import { getDictionary } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";
import { getVehiclesByBrand } from "@/lib/fleet";
import { ArrowIcon } from "./Icons";

export function BrandCard({ brand, locale }: { brand: Brand; locale: Locale }) {
  const d = getDictionary(locale);
  const count = getVehiclesByBrand(brand.key).length;
  return (
    <Link href={localePath(locale, `/brands/${brand.slug}/`)} className="card group flex min-h-32 flex-col justify-between p-5 transition hover:bg-surface-2">
      <span className="text-lg font-bold tracking-tight">{pick(brand.name, locale)}</span>
      <span className="mt-6 flex items-center justify-between text-sm text-muted">
        <span>{count} {count === 1 ? d.brandsSection.model : d.brandsSection.models}</span>
        <ArrowIcon className="size-4 text-accent transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
