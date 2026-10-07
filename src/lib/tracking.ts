/**
 * Tracking layer (GTM / GA4 ready). Nothing here contains IDs – see src/config/business.ts `site.gtmId`.
 *
 * Events: whatsapp_click, phone_click, form_start, form_submit, check_availability, view_vehicle,
 * view_vehicle_list, select_vehicle, language_change.
 *
 * Parameters: vehicle_name, vehicle_brand, vehicle_category, page_type, language, cta_location.
 *
 * Server components describe clicks declaratively with trackAttrs(); a single delegated listener
 * (components/Analytics.tsx) pushes them to window.dataLayer. Client code can call track() directly.
 */
export type TrackEvent =
  | "whatsapp_click"
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "check_availability"
  | "view_vehicle"
  | "view_vehicle_list"
  | "select_vehicle"
  | "language_change";

export type TrackParams = Partial<{
  vehicle_name: string;
  vehicle_brand: string;
  vehicle_category: string;
  page_type: string;
  language: string;
  cta_location: string;
  [key: string]: string | number | boolean | undefined;
}>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    __kinovaPage?: TrackParams;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const payload = { language: document.documentElement.lang, ...window.__kinovaPage, ...params };
  window.dataLayer.push({ event, ...payload });
  // GA4-only setups (no GTM) receive the same event through gtag.
  if (typeof window.gtag === "function") window.gtag("event", event, payload);
}

/** Spread onto any element: <a {...trackAttrs("whatsapp_click", { cta_location: "hero" })} /> */
export function trackAttrs(event: TrackEvent, params: TrackParams = {}) {
  const attrs: Record<string, string> = { "data-track": event };
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) attrs[`data-t-${k}`] = String(v);
  }
  return attrs;
}
