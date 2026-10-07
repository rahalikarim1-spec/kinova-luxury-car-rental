import type { ReactNode } from "react";
import type { Vehicle } from "@/data/types";
import { localePath, type Locale } from "@/i18n/config";
import { whatsappMessage } from "@/lib/contact";
import type { TrackEvent, TrackParams } from "@/lib/tracking";
import { vehicleTrackParams } from "./CtaButtons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageTracker } from "./PageTracker";
import { StickyMobileCTA } from "./StickyMobileCTA";

interface Props {
  locale: Locale;
  /** Locale-less path of the page, e.g. "/cars/lamborghini-urus/". Used by the language switcher. */
  path: string;
  pageType: string;
  /** Contextual WhatsApp message for header/mobile bar. Defaults to the generic message. */
  waMessage?: string;
  /** Where the sticky mobile "Enquire" button goes. Defaults to the contact form. */
  enquiryHref?: string;
  vehicle?: Vehicle;
  viewEvent?: TrackEvent;
  trackContext?: TrackParams;
  children: ReactNode;
}

/** Common page frame: header, footer, sticky mobile CTA and page-level tracking context. */
export function PageShell({ locale, path, pageType, waMessage, enquiryHref, vehicle, viewEvent, trackContext, children }: Props) {
  const message = waMessage ?? whatsappMessage.generic(locale);
  return (
    <>
      <Header locale={locale} path={path} waMessage={message} />
      <main id="main" className="has-sticky-bar">
        {children}
      </main>
      <Footer locale={locale} path={path} />
      <StickyMobileCTA locale={locale} waMessage={message} enquiryHref={enquiryHref ?? `${localePath(locale, "/contact/")}#enquiry`} vehicle={vehicle} />
      <PageTracker context={{ page_type: pageType, ...vehicleTrackParams(vehicle), ...trackContext }} event={viewEvent} />
    </>
  );
}
