"use client";

import { useEffect, useId, useRef, useState } from "react";
import { validateEnquiry, todayIsoDate, type EnquiryErrors, type EnquiryInput } from "@/lib/enquiry";
import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/whatsapp-url";
import type { Dictionary } from "@/i18n/en";
import { AlertIcon, CheckIcon, WhatsAppIcon } from "./Icons";

type Status = "idle" | "submitting" | "success" | "error";
interface VehicleOption { slug: string; name: string; brand: string; category: string }

const empty = (vehicle: string): EnquiryInput => ({
  name: "", phone: "", email: "", vehicle, start: "", end: "", location: "", message: "", consent: false, company: "",
});

/**
 * Reusable enquiry form. States: idle · submitting (button locked, no double submit) · success · error.
 * `defaultVehicle` pre-selects the car when the form lives on a vehicle page.
 */
export function BookingForm({
  locale, dict, vehicles, defaultVehicle = "", source, followUpTemplate,
}: {
  locale: string;
  dict: { form: Dictionary["form"]; chatWhatsapp: string };
  vehicles: VehicleOption[];
  defaultVehicle?: string;
  /** e.g. "vehicle_page" | "contact_page" – sent with the lead and tracking events. */
  source: string;
  /** Localized WhatsApp follow-up text containing a {ref} placeholder for the lead reference. */
  followUpTemplate: string;
}) {
  const f = dict.form;
  const uid = useId();
  const [values, setValues] = useState<EnquiryInput>(() => empty(defaultVehicle));
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState("");
  const [today, setToday] = useState("");
  const started = useRef(false);
  const lock = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => setToday(todayIsoDate()), []);
  useEffect(() => setValues((v) => ({ ...v, vehicle: defaultVehicle })), [defaultVehicle]);

  const vehicle = vehicles.find((v) => v.slug === values.vehicle);
  const trackVehicle = vehicle ? { vehicle_name: vehicle.name, vehicle_brand: vehicle.brand, vehicle_category: vehicle.category } : {};

  const set = <K extends keyof EnquiryInput>(k: K, v: EnquiryInput[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k as keyof EnquiryErrors]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { cta_location: source, ...trackVehicle });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lock.current) return; // prevents double submission even on very fast double taps
    const errs = validateEnquiry(values, today || todayIsoDate());
    setErrors(errs);
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    lock.current = true;
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, locale, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (res.status === 422 && data.errors) { setErrors(data.errors); setStatus("idle"); lock.current = false; return; }
        throw new Error("failed");
      }
      setReference(data.reference);
      setStatus("success");
      track("form_submit", { cta_location: source, ...trackVehicle });
    } catch {
      setStatus("error");
      lock.current = false;
    }
  };

  const reset = () => { setValues(empty(defaultVehicle)); setErrors({}); setStatus("idle"); setReference(""); lock.current = false; started.current = false; };

  if (status === "success") {
    return (
      <div className="card p-6 sm:p-8" role="status" aria-live="polite">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-ok/15 text-ok"><CheckIcon className="size-6" /></span>
        <h3 className="mt-5 text-2xl font-bold">{f.successTitle}</h3>
        <p className="mt-3 text-soft">{f.successText}</p>
        <p className="mt-4 text-sm text-muted">{f.successRef}: <span className="font-mono text-white" dir="ltr">{reference}</span></p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl(followUpTemplate.replace("{ref}", reference))} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-track="whatsapp_click" data-t-cta_location={`${source}_success`}>
            <WhatsAppIcon className="size-5" /> {dict.chatWhatsapp}
          </a>
          <button type="button" className="btn btn-secondary" onClick={reset}>{f.new}</button>
        </div>
        <p className="mt-6 text-xs text-muted">{f.demoNote}</p>
      </div>
    );
  }

  const busy = status === "submitting";
  const id = (n: string) => `${uid}-${n}`;
  const err = (k: keyof EnquiryErrors) => errors[k];
  const errText: Record<keyof EnquiryErrors, string> = f.errors;
  const FieldError = ({ k }: { k: keyof EnquiryErrors }) => (err(k) ? <p id={id(`${k}-err`)} className="mt-1.5 text-sm text-danger">{errText[k]}</p> : null);
  const aria = (k: keyof EnquiryErrors) => ({ "aria-invalid": err(k) ? true : undefined, "aria-describedby": err(k) ? id(`${k}-err`) : undefined }) as const;
  const label = "mb-1.5 block text-sm font-medium text-soft";
  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form onSubmit={submit} noValidate onFocus={onStart} className="card p-5 sm:p-8" aria-busy={busy}>
      {hasErrors && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mb-5 flex items-start gap-3 rounded-sm border border-danger/40 bg-danger/10 p-3 text-sm text-danger">
          <AlertIcon className="mt-0.5 size-5 shrink-0" /> {f.fixErrors}
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="mb-5 rounded-sm border border-danger/40 bg-danger/10 p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-danger"><AlertIcon className="size-5" /> {f.errorTitle}</p>
          <p className="mt-1 text-soft">{f.errorText}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>{f.name} <span className="text-accent" aria-hidden>*</span></label>
          <input id={id("name")} name="name" className="field" autoComplete="name" required value={values.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
          <FieldError k="name" />
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>{f.phone} <span className="text-accent" aria-hidden>*</span></label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" dir="ltr" className="field text-start" autoComplete="tel" required value={values.phone} onChange={(e) => set("phone", e.target.value)} {...aria("phone")} />
          <FieldError k="phone" />
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>{f.email}</label>
          <input id={id("email")} name="email" type="email" dir="ltr" className="field text-start" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
          <FieldError k="email" />
        </div>
        <div>
          <label htmlFor={id("vehicle")} className={label}>{f.vehicle}</label>
          <select id={id("vehicle")} name="vehicle" className="field" value={values.vehicle} onChange={(e) => { set("vehicle", e.target.value); const v = vehicles.find((x) => x.slug === e.target.value); if (v) track("select_vehicle", { cta_location: `${source}_form`, vehicle_name: v.name, vehicle_brand: v.brand, vehicle_category: v.category }); }}>
            <option value="">{f.notSure}</option>
            {vehicles.map((v) => <option key={v.slug} value={v.slug}>{v.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={id("start")} className={label}>{f.start} <span className="text-accent" aria-hidden>*</span></label>
          <input id={id("start")} name="start" type="date" className="field" min={today} required value={values.start} onChange={(e) => set("start", e.target.value)} {...aria("start")} />
          <FieldError k="start" />
        </div>
        <div>
          <label htmlFor={id("end")} className={label}>{f.end} <span className="text-accent" aria-hidden>*</span></label>
          <input id={id("end")} name="end" type="date" className="field" min={values.start || today} required value={values.end} onChange={(e) => set("end", e.target.value)} {...aria("end")} />
          <FieldError k="end" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("location")} className={label}>{f.location}</label>
          <input id={id("location")} name="location" className="field" placeholder={f.locationPh} value={values.location} onChange={(e) => set("location", e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className={label}>{f.message}</label>
          <textarea id={id("message")} name="message" rows={4} className="field resize-y" placeholder={f.messagePh} value={values.message} onChange={(e) => set("message", e.target.value)} />
        </div>
        {/* Honeypot: invisible to people and assistive tech; bots fill it. */}
        <div aria-hidden className="absolute -start-[9999px] h-0 w-0 overflow-hidden">
          <label>Company<input tabIndex={-1} autoComplete="off" name="company" value={values.company} onChange={(e) => set("company", e.target.value)} /></label>
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-soft">
            <input type="checkbox" name="consent" className="mt-0.5 size-5 shrink-0 accent-[#c8a971]" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} {...aria("consent")} />
            <span>{f.consent}</span>
          </label>
          <FieldError k="consent" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mt-7" disabled={busy}>{busy ? f.sending : f.submit}</button>
      <p className="mt-4 text-xs text-muted">{f.demoNote}</p>
    </form>
  );
}
