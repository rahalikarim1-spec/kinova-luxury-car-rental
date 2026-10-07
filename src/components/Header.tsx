import Link from "next/link";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { getNav } from "@/lib/nav";
import { whatsappMessage, whatsappUrl } from "@/lib/contact";
import { trackAttrs } from "@/lib/tracking";
import { ButtonLink } from "./CtaButtons";
import { ChevronDown, WhatsAppIcon } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header({ locale, path, waMessage }: { locale: Locale; path: string; waMessage?: string }) {
  const d = getDictionary(locale);
  const nav = getNav(locale);
  const message = waMessage ?? whatsappMessage.generic(locale);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-4">
        <Link href={localePath(locale, "/")} aria-label={`${d.siteName} – ${d.nav.home}`} className="shrink-0 py-2">
          <Logo />
        </Link>

        <nav aria-label={d.nav.primary} className="hidden xl:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className="inline-flex min-h-11 items-center gap-1 px-3 text-[13px] font-medium text-soft transition-colors hover:text-white focus-visible:text-white">
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5 opacity-70" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute start-0 top-full z-10 w-64 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="rounded-sm border border-line bg-surface p-2 shadow-2xl shadow-black/60">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link href={c.href} className="block rounded-sm px-3 py-2.5 text-sm text-soft hover:bg-white/5 hover:text-white">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} path={path} className="hidden sm:flex" />
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={d.cta.whatsapp}
            className="hidden size-11 items-center justify-center rounded-sm border border-line text-white transition-colors hover:border-white/50 lg:inline-flex"
            {...trackAttrs("whatsapp_click", { cta_location: "header" })}
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <ButtonLink href={`${localePath(locale, "/contact/")}#enquiry`} size="sm" className="hidden lg:inline-flex" track={trackAttrs("check_availability", { cta_location: "header" })}>
            {d.cta.bookCar}
          </ButtonLink>
          <MobileMenu openLabel={d.nav.openMenu} closeLabel={d.nav.closeMenu}>
            <nav aria-label={d.nav.primary} className="pt-2">
              <ul className="divide-y divide-line border-y border-line">
                {nav.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <details className="group">
                        <summary className="flex min-h-14 cursor-pointer items-center justify-between text-lg font-semibold">
                          {item.label}
                          <ChevronDown className="faq-chevron size-5 text-accent transition-transform" />
                        </summary>
                        <ul className="pb-3 ps-3">
                          {item.children.map((c) => (
                            <li key={c.href + c.label}>
                              <Link href={c.href} className="flex min-h-12 items-center text-base text-soft">{c.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link href={item.href} className="flex min-h-14 items-center text-lg font-semibold">{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={`${localePath(locale, "/contact/")}#enquiry`} block track={trackAttrs("check_availability", { cta_location: "mobile_menu" })}>{d.cta.bookCar}</ButtonLink>
              <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block" {...trackAttrs("whatsapp_click", { cta_location: "mobile_menu" })}>
                <WhatsAppIcon className="size-5" /><span>{d.cta.whatsappUs}</span>
              </a>
            </div>
            <LanguageSwitcher locale={locale} path={path} className="mt-6 justify-center" />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
