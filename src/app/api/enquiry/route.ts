import { NextResponse } from "next/server";
import { validateEnquiry, todayIsoDate, type EnquiryInput } from "@/lib/enquiry";
import { saveLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const input: EnquiryInput = {
    name: clip(body.name, 120),
    phone: clip(body.phone, 40),
    email: clip(body.email, 160),
    vehicle: clip(body.vehicle, 80),
    start: clip(body.start, 10),
    end: clip(body.end, 10),
    location: clip(body.location, 200),
    message: clip(body.message, 2000),
    consent: body.consent === true,
    company: clip(body.company, 80),
    locale: clip(body.locale, 5),
    source: clip(body.source, 80),
  };

  const reference = `KIN-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  // Honeypot: pretend success so bots learn nothing.
  if (input.company) return NextResponse.json({ ok: true, reference });

  // Server-side date check uses UTC-12 so users anywhere (incl. UAE, UTC+4) are never rejected for "today".
  const yesterday = new Date(Date.now() - 36 * 3600 * 1000);
  const errors = validateEnquiry(input, todayIsoDate(yesterday));
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  try {
    await saveLead({ ...input, reference, receivedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, reference });
}
