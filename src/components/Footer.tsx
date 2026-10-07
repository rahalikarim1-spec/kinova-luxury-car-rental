import Link from "next/link";
import { business } from "@/config/business";
import { categories } from "@/data/categories";
import { getDictionary } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";
import { emailHref, phoneDisplay, phoneHref, whatsappMessage, whatsappUrl } from "@/lib/contact";
import { getBrandsWithVehicles, getFeaturedVehicles } from "@/lib/fleet";
import { trackAttrs } from "@/lib/tracking";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer({ locale, path }: { locale: Locale; path: string }) {
  const d = getDictionary(locale);
  const lp = (p: string) => localePath(locale, p);
  const phone = phoneDisplay();
  const col = "text-sm text-muted transition-colors hover:text-white inline-flex min-h-9 items-center";
  const head = "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white rtl:tracking-normal";
  return (
    <footer className="border-t border-line bg-surface" aria-label={d.siteName}>
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div className="max-w-sm">
          <Link href={lp("/")} aria-label={d.siteName}><Logo /></Link>
          <p className="mt-5 text-sm leading-relaxed text-muted">{d.footer.blurb}</p>
          <ul className="mt-6 space-y-1">
            <li>
              <a href={whatsappUrl(whatsappMessage.generic(locale))} target="_blank" rel="noopener noreferrer" className={`${col} gap-2 text-soft`} {...trackAttrs("whatsapp_click", { cta_location: "footer" })}>
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              {phone ? (
                <a href={phoneHref()!} className={`${col} gap-2 text-soft`} dir="ltr" {...trackAttrs("phone_click", { cta_location: "footer" })}><PhoneIcon className="size-4" /> {phone}</a>
              ) : (
                <span className={`${col} gap-2`}><PhoneIcon className="size-4" /> {d.footer.phonePending}</span>
              )}
            </li>
            <li>
              {emailHref() ? (
                <a href={emailHref()!} className={`${col} gap-2 text-soft`}><MailIcon className="size-4" /> {business.email}</a>
              ) : (
                <span className={`${col} gap-2`}><MailIcon className="size-4" /> {d.footer.emailPending}</span>
              )}
            </li>
          </ul>
        </div>

        <nav aria-label={d.footer.fleet}>
          <h2 className={head}>{d.footer.fleet}</h2>
          <ul>
            <li><Link className={col} href={lp("/cars/")}>{d.nav.fleet}</Link></li>
            {getFeaturedVehicles().slice(0, 6).map((v) => (
              <li key={v.slug}><Link className={col} href={lp(`/cars/${v.slug}/`)}>{v.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label={d.footer.brands}>
          <h2 className={head}>{d.footer.brands}</h2>
          <ul>
            {getBrandsWithVehicles().map((b) => (
              <li key={b.key}><Link className={col} href={lp(`/brands/${b.slug}/`)}>{pick(b.name, locale)}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label={d.footer.categories}>
          <h2 className={head}>{d.footer.categories}</h2>
          <ul>
            {categories.map((c) => (
              <li key={c.key}><Link className={col} href={lp(`/${c.slug}/`)}>{pick(c.name, locale)}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label={d.footer.company}>
          <h2 className={head}>{d.footer.company}</h2>
          <ul>
            <li><Link className={col} href={lp("/luxury-car-rental-dubai/")}>{d.nav.dubaiRental}</Link></li>
            <li><Link className={col} href={lp("/services/")}>{d.nav.services}</Link></li>
            {locale === "en" && <li><Link className={col} href={lp("/guides/")}>{d.nav.guides}</Link></li>}
            {locale === "en" && <li><Link className={col} href={lp("/locations/")}>{d.nav.locations}</Link></li>}
            <li><Link className={col} href={lp("/about/")}>{d.nav.about}</Link></li>
            <li><Link className={col} href={lp("/contact/")}>{d.nav.contact}</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.businessName}. {d.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link className="inline-flex min-h-9 items-center hover:text-white" href={lp("/privacy-policy/")}>{d.footer.privacy}</Link>
            <Link className="inline-flex min-h-9 items-center hover:text-white" href={lp("/terms/")}>{d.footer.terms}</Link>
            <LanguageSwitcher locale={locale} path={path} />
          </div>
        </div>
        <p className="container-x pb-6 text-[11px] text-muted/70">{d.common.demoNotice}</p>
      </div>
    </footer>
  );
}
