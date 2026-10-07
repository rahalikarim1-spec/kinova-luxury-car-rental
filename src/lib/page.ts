import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

export type LocaleParams<T extends object = object> = { params: Promise<{ locale: string } & T> };

/** Resolve + validate the locale param (404 for anything unknown). */
export async function resolveLocale<T extends object>(params: Promise<{ locale: string } & T>) {
  const p = await params;
  if (!isLocale(p.locale)) notFound();
  return { ...p, locale: p.locale as Locale };
}
