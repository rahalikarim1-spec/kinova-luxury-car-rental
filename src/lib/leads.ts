import type { EnquiryInput } from "./enquiry";

/**
 * Lead sink. The demo validates enquiries but does not store them.
 * Production options (pick one, no code change in the UI):
 *  - set LEAD_WEBHOOK_URL (Zapier / Make / n8n / Slack / CRM webhook) – handled below
 *  - replace this function with a database/CRM/email call (Resend, HubSpot, Airtable, Supabase…)
 */
export async function saveLead(lead: EnquiryInput & { reference: string; receivedAt: string }): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  const { company: _honeypot, ...payload } = lead;
  const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Lead webhook responded ${res.status}`);
}
