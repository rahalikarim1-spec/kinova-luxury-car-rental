import { ar } from "./ar";
import { en, type Dictionary } from "./en";
import { ru } from "./ru";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, ar, ru };
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export type { Dictionary };

/** Replace {placeholders} in dictionary strings. */
export const t = (template: string, vars: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
