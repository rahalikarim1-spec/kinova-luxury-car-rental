/** Shared (client + server) enquiry validation. Keep error keys in sync with dictionary.form.errors. */
export interface EnquiryInput {
  name: string;
  phone: string;
  email: string;
  vehicle: string; // slug or ""
  start: string; // yyyy-mm-dd
  end: string;
  location: string;
  message: string;
  consent: boolean;
  /** Honeypot – must stay empty. */
  company?: string;
  locale?: string;
  source?: string;
}

export type EnquiryErrors = Partial<Record<"name" | "phone" | "email" | "start" | "end" | "consent", true>>;

const phoneOk = (v: string) => {
  const digits = v.replace(/[\s()+.-]/g, "");
  return /^\d{7,15}$/.test(digits);
};
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function validateEnquiry(i: EnquiryInput, todayIso: string): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (i.name.trim().length < 2) e.name = true;
  if (!phoneOk(i.phone.trim())) e.phone = true;
  if (i.email.trim() && !emailOk(i.email.trim())) e.email = true;
  if (!i.start || i.start < todayIso) e.start = true;
  if (!i.end || (i.start && i.end < i.start)) e.end = true;
  if (!i.consent) e.consent = true;
  return e;
}

export const todayIsoDate = (d = new Date()) => {
  const z = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
};
