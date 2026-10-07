"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/tracking";

interface Option { value: string; label: string; href: string }

/**
 * Quick car search. Instead of generating filter URLs (duplicate-content risk) it routes to the dedicated,
 * indexable landing page: brand page first, otherwise category page, otherwise the fleet.
 */
export function QuickSearch({ brands, categories, fleetHref, labels }: {
  brands: Option[]; categories: Option[]; fleetHref: string;
  labels: { title: string; brand: string; category: string; allBrands: string; allCategories: string; submit: string; hint: string };
}) {
  const uid = useId();
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const b = brands.find((x) => x.value === brand);
    const c = categories.find((x) => x.value === category);
    track("view_vehicle_list", { cta_location: "quick_search", filter_brand: brand || "all", filter_category: category || "all" });
    router.push(b?.href ?? c?.href ?? fleetHref);
  };
  const lab = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-muted rtl:tracking-normal";

  return (
    <form onSubmit={go} role="search" aria-label={labels.title} className="card relative z-10 grid gap-4 border-line bg-surface/95 p-5 shadow-2xl shadow-black/50 backdrop-blur sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end lg:p-6">
      <div>
        <label htmlFor={`${uid}-b`} className={lab}>{labels.brand}</label>
        <select id={`${uid}-b`} className="field" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">{labels.allBrands}</option>
          {brands.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${uid}-c`} className={lab}>{labels.category}</label>
        <select id={`${uid}-c`} className="field" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">{labels.allCategories}</option>
          {categories.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary sm:col-span-2 lg:col-span-1">{labels.submit}</button>
      <p className="text-xs text-muted sm:col-span-2 lg:col-span-3">{labels.hint}</p>
    </form>
  );
}
