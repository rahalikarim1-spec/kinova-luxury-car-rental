import { getDictionary } from "@/i18n";
import { isEnglishOnlyPath, localeMeta, localePath, locales, type Locale } from "@/i18n/config";
import { trackAttrs } from "@/lib/tracking";

/**
 * Plain crawlable links (no JS). `path` is the locale-less path of the current page.
 * English-only sections (guides, locations) send visitors to the translated home instead of a page that does not exist.
 */
export function LanguageSwitcher({ locale, path, className = "" }: { locale: Locale; path: string; className?: string }) {
  const d = getDictionary(locale);
  return (
    <nav aria-label={d.nav.language} className={`flex items-center ${className}`}>
      <ul className="flex items-center" dir="ltr">
        {locales.map((l, i) => {
          const target = l !== "en" && isEnglishOnlyPath(path) ? "/" : path;
          const current = l === locale;
          return (
            <li key={l} className="flex items-center">
              {i > 0 && <span aria-hidden className="text-line">|</span>}
              <a
                href={localePath(l, target)}
                lang={l === "en" ? "en" : l}
                hrefLang={localeMeta[l].hreflang}
                aria-current={current ? "true" : undefined}
                className={`inline-flex min-h-11 min-w-9 items-center justify-center px-2 text-[13px] font-semibold transition-colors ${current ? "text-accent" : "text-muted hover:text-white"}`}
                {...trackAttrs("language_change", { to_language: l, cta_location: "language_switcher" })}
              >
                {localeMeta[l].label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
