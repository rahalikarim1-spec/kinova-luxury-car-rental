import type { Localized } from "@/i18n/config";

export type CategoryKey = "supercars" | "luxury-cars" | "sports-cars" | "luxury-suvs" | "convertibles";
export type BrandKey =
  | "lamborghini"
  | "ferrari"
  | "mclaren"
  | "rolls-royce"
  | "porsche"
  | "range-rover"
  | "chevrolet"
  | "ford";
export type BodyType = "suv" | "coupe" | "convertible" | "sedan";

export type Faq = { q: string; a: string };

export interface Vehicle {
  id: string;
  slug: string;
  brand: BrandKey;
  /** Model name without the brand, e.g. "Urus". */
  model: string;
  /** Marketing name shown to users, e.g. "Lamborghini Urus". */
  name: string;
  /** Exact model year – null until confirmed by the client. */
  year: number | null;
  /** First entry is the primary category. */
  categories: CategoryKey[];
  bodyType: BodyType;
  seats: number | null;
  /** Only filled when it is generally true for the model; otherwise null (shown as "confirm on enquiry"). */
  powertrain: Localized<string> | null;
  /** Prices in `currency`. null = "Price on Request". Fill in later; the UI and JSON-LD adapt automatically. */
  priceDaily: number | null;
  priceWeekly: number | null;
  priceMonthly: number | null;
  currency: string;
  featured: boolean;
  available: boolean;
  /** One-line card/tagline. */
  highlight: Localized<string>;
  description: Localized<string>;
  /** Two vehicle-specific "why rent this car" bullets; a category-level bullet is appended in the UI. */
  whyRent: Localized<string[]>;
}

export interface Brand {
  key: BrandKey;
  slug: string;
  name: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  h1: Localized<string>;
  intro: Localized<string>;
  body: Localized<string[]>;
  faq: Localized<Faq[]>;
}

export interface Category {
  key: CategoryKey;
  /** URL slug at the site root, e.g. "supercar-rental-dubai". */
  slug: string;
  name: Localized<string>;
  /** Short label used on cards. */
  blurb: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  h1: Localized<string>;
  intro: Localized<string>;
  sections: Localized<{ h: string; p: string }[]>;
  why: Localized<string[]>;
  faq: Localized<Faq[]>;
  related: CategoryKey[];
}
