"use client";

import Script from "next/script";
import { useEffect } from "react";
import { site } from "@/config/business";
import { track, type TrackEvent } from "@/lib/tracking";

/**
 * GTM / GA4 loader + ONE delegated click listener that turns `data-track` attributes into dataLayer events.
 * Nothing loads unless NEXT_PUBLIC_GTM_ID / NEXT_PUBLIC_GA4_ID is set. Events are still pushed to window.dataLayer
 * without IDs, so the layer can be inspected in the console during the demo.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const params: Record<string, string> = {};
      for (const attr of Array.from(el.attributes)) {
        if (attr.name.startsWith("data-t-")) params[attr.name.slice(7)] = attr.value;
      }
      track(el.dataset.track as TrackEvent, params);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      {site.gtmId && (
        <Script id="gtm" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');
        `}</Script>
      )}
      {!site.gtmId && site.ga4Id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());gtag('config','${site.ga4Id}');
          `}</Script>
        </>
      )}
    </>
  );
}
