/**
 * SINGLE SOURCE OF TRUTH for business identity and contact details.
 * Replace the PENDING values once (or set the NEXT_PUBLIC_* env vars on Vercel) and the whole site updates:
 * header, sticky bars, WhatsApp links, forms, footer, JSON-LD.
 *
 * Nothing in this file is displayed as a fact while it is still a placeholder (see src/lib/contact.ts).
 */

const env = (value: string | undefined, fallback: string) => (value && value.trim() ? value.trim() : fallback);

export const PENDING = "PENDING" as const;

export const business = {
  businessName: "KINOVA",
  legalName: PENDING as string, // official registered name – pending
  tagline: "Luxury & Supercar Rental",
  serviceArea: "United Arab Emirates",
  primaryCity: "Dubai",
  countryCode: "AE",
  defaultLocale: "en" as const,
  currency: "AED",

  /** Digits only, international format without "+", e.g. "971501234567". PENDING until confirmed. */
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, PENDING),
  /** International format, e.g. "+971 4 000 0000". PENDING until confirmed. */
  phone: env(process.env.NEXT_PUBLIC_PHONE_NUMBER, PENDING),
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, PENDING),
  /** Do NOT invent. Leave PENDING until a real address (or none) is confirmed. */
  address: PENDING as string,

  /** Social profiles – add real URLs later; empty entries are never rendered or output in JSON-LD. */
  social: { instagram: "", facebook: "", tiktok: "", youtube: "" },

  /** Logo is a typographic wordmark until an official logo is supplied (see components/Logo.tsx). */
  logoPath: "",

  /** Business rules that the client has not confirmed yet. Surfaced as "confirm on enquiry" in the UI. */
  rentalTerms: {
    deposit: PENDING,
    mileageLimit: PENDING,
    delivery: PENDING,
    requiredDocuments: PENDING,
    insurance: PENDING,
    minimumAge: PENDING,
  },
} as const;

export const isConfigured = (value: string) => value !== PENDING && value.trim() !== "";

export const site = {
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    "http://localhost:3000"
  ).replace(/\/$/, ""),
  demoNoindex: process.env.NEXT_PUBLIC_DEMO_NOINDEX === "true",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
};
