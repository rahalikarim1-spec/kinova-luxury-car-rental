import type { Vehicle } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { CarCard } from "./CarCard";

export function CarGrid({ vehicles, locale, ctaLocation, priorityCount = 0, headingLevel }: { vehicles: Vehicle[]; locale: Locale; ctaLocation?: string; priorityCount?: number; headingLevel?: "h2" | "h3" }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((v, i) => (
        <li key={v.id} data-id={v.id}>
          <CarCard vehicle={v} locale={locale} ctaLocation={ctaLocation} priority={i < priorityCount} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
