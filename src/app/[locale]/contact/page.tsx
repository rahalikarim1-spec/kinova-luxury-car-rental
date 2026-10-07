import type { Metadata } from "next";
import { business } from "@/config/business";
import { vehicles } from "@/data/vehicles";
import { BookingForm } from "@/components/BookingForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/CtaButtons";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/i18n";
import { emailHref, phoneDisplay, phoneHref, whatsappMessage } from "@/lib/contact";
import { resolveLocale, type LocaleParams } from "@/lib/page";
import { buildMetadata } from "@/lib/seo";
import { trackAttrs } from "@/lib/tracking";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  return buildMetadata({ locale, path: "/contact/", title: d.contact.metaTitle, description: d.contact.metaDescription });
}

export default async function ContactPage({ params }: LocaleParams) {
  const { locale } = await resolveLocale(params);
  const d = getDictionary(locale);
  const c = d.contact;
  const phone = phoneDisplay();
  const email = emailHref();
  const card = "card flex flex-col gap-3 p-6";
  return (
    <PageShell locale={locale} path="/contact/" pageType="contact" enquiryHref="#enquiry">
      <div className="container-x pt-6"><Breadcrumbs locale={locale} items={[{ name: d.nav.contact, path: "/contact/" }]} /></div>
      <header className="container-x pb-10 pt-8">
        <h1 className="h-display max-w-4xl !text-[clamp(2rem,5.5vw,3.75rem)]">{c.title}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{c.intro}</p>
      </header>

      <section id="contact-options" className="container-x scroll-mt-24 pb-12" aria-label={c.title}>
        <div className="grid gap-4 md:grid-cols-3">
          <div className={card}>
            <WhatsAppIcon className="size-6 text-accent" />
            <h2 className="text-lg font-bold">{c.whatsappTitle}</h2>
            <p className="text-sm text-muted">{c.whatsappText}</p>
            <WhatsAppButton locale={locale} message={whatsappMessage.generic(locale)} ctaLocation="contact_page" label={d.cta.chatWhatsapp} className="mt-auto" />
          </div>
          <div className={card}>
            <PhoneIcon className="size-6 text-accent" />
            <h2 className="text-lg font-bold">{c.phoneTitle}</h2>
            {phone ? (
              <>
                <p className="text-sm text-muted">{c.phoneText}</p>
                <a href={phoneHref()!} dir="ltr" className="btn btn-secondary mt-auto" {...trackAttrs("phone_click", { cta_location: "contact_page", phone_configured: true })}>{phone}</a>
              </>
            ) : (
              <p className="text-sm text-muted">{c.phonePending}</p>
            )}
          </div>
          <div className={card}>
            <MailIcon className="size-6 text-accent" />
            <h2 className="text-lg font-bold">{c.emailTitle}</h2>
            {email ? <a href={email} className="link-underline text-soft">{business.email}</a> : <p className="text-sm text-muted">{c.emailPending}</p>}
          </div>
        </div>
        <div className="card mt-4 flex items-start gap-4 p-6">
          <PinIcon className="mt-0.5 size-6 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold">{c.areaTitle}</h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{c.areaText}</p>
          </div>
        </div>
      </section>

      <section id="enquiry" className="container-x scroll-mt-24 pb-20" aria-labelledby="enquiry-title">
        <h2 id="enquiry-title" className="mb-6 text-2xl font-bold">{c.formTitle}</h2>
        <div className="max-w-3xl">
          <BookingForm
            locale={locale}
            dict={{ form: d.form, chatWhatsapp: d.cta.chatWhatsapp }}
            vehicles={vehicles.map((x) => ({ slug: x.slug, name: x.name, brand: x.brand, category: x.categories[0] }))}
            source="contact_page"
            followUpTemplate={d.whatsappMessages.afterForm}
          />
        </div>
      </section>
    </PageShell>
  );
}
