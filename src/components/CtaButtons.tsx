import Link from "next/link";
import type { ReactNode } from "react";
import type { Vehicle } from "@/data/types";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { phoneHref, whatsappUrl, hasPhone } from "@/lib/contact";
import { trackAttrs, type TrackParams } from "@/lib/tracking";
import { getPrimaryCategory } from "@/lib/fleet";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export const vehicleTrackParams = (v?: Vehicle): TrackParams =>
  v ? { vehicle_name: v.name, vehicle_brand: v.brand, vehicle_category: getPrimaryCategory(v).key } : {};

interface Common {
  locale: Locale;
  ctaLocation: string;
  vehicle?: Vehicle;
  className?: string;
  size?: "md" | "sm";
  block?: boolean;
  variant?: "primary" | "secondary";
  label?: string;
}

const cls = (c: Common, fallback: "primary" | "secondary") =>
  `btn btn-${c.variant ?? fallback} ${c.size === "sm" ? "btn-sm" : ""} ${c.block ? "btn-block" : ""} ${c.className ?? ""}`;

/** Contextual WhatsApp link: the message (and selected vehicle) is prepared automatically. */
export function WhatsAppButton({ message, ...c }: Common & { message: string }) {
  const d = getDictionary(c.locale);
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cls(c, "secondary")}
      aria-label={c.label === "" ? d.cta.whatsapp : undefined}
      {...trackAttrs("whatsapp_click", { cta_location: c.ctaLocation, ...vehicleTrackParams(c.vehicle) })}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {c.label !== "" && <span>{c.label ?? d.cta.whatsapp}</span>}
    </a>
  );
}

/** tel: link when a real number is configured; otherwise routes to the contact page (never a fake number). */
export function CallButton({ ...c }: Common) {
  const d = getDictionary(c.locale);
  const href = phoneHref() ?? `${localePath(c.locale, "/contact/")}#contact-options`;
  return (
    <a
      href={href}
      className={cls(c, "secondary")}
      {...trackAttrs("phone_click", { cta_location: c.ctaLocation, phone_configured: hasPhone(), ...vehicleTrackParams(c.vehicle) })}
    >
      <PhoneIcon className="size-5 shrink-0" />
      <span>{c.label ?? d.cta.call}</span>
    </a>
  );
}

/** Primary conversion: scrolls to / opens the enquiry form. */
export function CheckAvailabilityButton({ href, ...c }: Common & { href: string }) {
  const d = getDictionary(c.locale);
  return (
    <Link
      href={href}
      className={cls(c, "primary")}
      {...trackAttrs("check_availability", { cta_location: c.ctaLocation, ...vehicleTrackParams(c.vehicle) })}
    >
      <span>{c.label ?? d.cta.checkAvailability}</span>
    </Link>
  );
}

export function ButtonLink({
  href, children, variant = "primary", size = "md", block, className = "", arrow, track,
}: { href: string; children: ReactNode; variant?: "primary" | "secondary"; size?: "md" | "sm"; block?: boolean; className?: string; arrow?: boolean; track?: ReturnType<typeof trackAttrs> }) {
  return (
    <Link href={href} className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${block ? "btn-block" : ""} ${className}`} {...track}>
      <span>{children}</span>
      {arrow && <ArrowIcon className="size-4 shrink-0" />}
    </Link>
  );
}
