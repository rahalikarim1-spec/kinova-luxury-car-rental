import Link from "next/link";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export interface Crumb { name: string; path: string }

/** Visible breadcrumb trail + BreadcrumbList JSON-LD from the same data (always in sync). The last crumb is the current page. */
export function Breadcrumbs({ locale, items }: { locale: Locale; items: Crumb[] }) {
  const d = getDictionary(locale);
  const all: Crumb[] = [{ name: d.common.home, path: "/" }, ...items];
  return (
    <nav aria-label={d.common.breadcrumb} className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="py-1 text-soft">{c.name}</span>
              ) : (
                <Link href={localePath(locale, c.path)} className="py-1 transition-colors hover:text-white">{c.name}</Link>
              )}
              {!last && <span aria-hidden className="select-none text-line rtl:-scale-x-100">/</span>}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbLd(all, locale)} />
    </nav>
  );
}
