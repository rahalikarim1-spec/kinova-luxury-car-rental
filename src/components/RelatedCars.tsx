import type { Vehicle } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { CarGrid } from "./CarGrid";
import { SectionHeading } from "./SectionHeading";

export function RelatedCars({ vehicles, locale, title, ctaLocation = "related_cars" }: { vehicles: Vehicle[]; locale: Locale; title: string; ctaLocation?: string }) {
  if (!vehicles.length) return null;
  return (
    <section className="section border-t border-line" aria-labelledby="related-cars-title">
      <div className="container-x">
        <SectionHeading id="related-cars-title" title={title} />
        <CarGrid vehicles={vehicles} locale={locale} ctaLocation={ctaLocation} />
      </div>
    </section>
  );
}
