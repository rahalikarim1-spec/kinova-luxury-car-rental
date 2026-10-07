"use client";

import { useId, useMemo, useState } from "react";
import type { BodyType, BrandKey, CategoryKey } from "@/data/types";
import { track } from "@/lib/tracking";

export interface FleetItem {
  id: string;
  brand: BrandKey;
  categories: CategoryKey[];
  bodyType: BodyType;
  priceDaily: number | null;
}

interface Option { value: string; label: string }
interface Labels {
  filters: string; brand: string; category: string; type: string; maxPrice: string; all: string;
  results: string; resultOne: string; reset: string; noResults: string; noResultsHelp: string;
}

/**
 * Client-side filter. State is NOT written to the URL, so filtering can never create crawlable parameter
 * combinations or duplicate pages. All cards are server-rendered (full list is in the HTML for crawlers);
 * this component only toggles their visibility through the `data-id` hooks it receives as `children`.
 * Price filter renders only once real prices exist in the data.
 */
export function FleetBrowser({
  items, brands, categories, types, priceSteps, labels, currency, children, noResultsAction,
}: {
  items: FleetItem[];
  brands: Option[];
  categories: Option[];
  types: Option[];
  priceSteps: number[];
  labels: Labels;
  currency: string;
  children: React.ReactNode;
  noResultsAction?: React.ReactNode;
}) {
  const uid = useId();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const visibleIds = useMemo(() => {
    const ids = new Set<string>();
    for (const it of items) {
      if (brand && it.brand !== brand) continue;
      if (category && !it.categories.includes(category as CategoryKey)) continue;
      if (type && it.bodyType !== type) continue;
      if (maxPrice && (it.priceDaily == null || it.priceDaily > Number(maxPrice))) continue;
      ids.add(it.id);
    }
    return ids;
  }, [items, brand, category, type, maxPrice]);

  const active = Boolean(brand || category || type || maxPrice);
  const onChange = (name: string, value: string, set: (v: string) => void) => { set(value); track("view_vehicle_list", { filter_name: name, filter_value: value || "all", cta_location: "fleet_filter" }); };
  const reset = () => { setBrand(""); setCategory(""); setType(""); setMaxPrice(""); };

  const Select = ({ id, label, value, options, set, name }: { id: string; label: string; value: string; options: Option[]; set: (v: string) => void; name: string }) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-muted rtl:tracking-normal">{label}</label>
      <select id={id} className="field" value={value} onChange={(e) => onChange(name, e.target.value, set)}>
        <option value="">{labels.all}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <style>{`.fleet-grid [data-id]{display:none}${[...visibleIds].map((id) => `.fleet-grid [data-id="${id}"]{display:block}`).join("")}`}</style>
      <form role="search" aria-label={labels.filters} onSubmit={(e) => e.preventDefault()} className="card grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-5">
        <Select id={`${uid}-brand`} label={labels.brand} value={brand} options={brands} set={setBrand} name="brand" />
        <Select id={`${uid}-cat`} label={labels.category} value={category} options={categories} set={setCategory} name="category" />
        <Select id={`${uid}-type`} label={labels.type} value={type} options={types} set={setType} name="type" />
        {priceSteps.length > 0 && (
          <Select id={`${uid}-price`} label={labels.maxPrice} value={maxPrice} options={priceSteps.map((p) => ({ value: String(p), label: `${currency} ${p.toLocaleString("en-US")}` }))} set={setMaxPrice} name="max_price" />
        )}
      </form>

      <div className="mt-5 flex min-h-11 items-center justify-between gap-4 text-sm text-muted" role="status" aria-live="polite">
        <p><span className="font-semibold text-white">{visibleIds.size}</span> {visibleIds.size === 1 ? labels.resultOne : labels.results}</p>
        {active && <button type="button" onClick={reset} className="inline-flex min-h-11 items-center px-2 text-accent hover:text-accent-strong underline underline-offset-4">{labels.reset}</button>}
      </div>

      <div className="fleet-grid mt-3">{children}</div>

      {visibleIds.size === 0 && (
        <div className="card mt-6 p-8 text-center">
          <p className="text-lg font-semibold">{labels.noResults}</p>
          <p className="mt-2 text-muted">{labels.noResultsHelp}</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="btn btn-primary btn-sm">{labels.reset}</button>
            {noResultsAction}
          </div>
        </div>
      )}
    </div>
  );
}
