"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

interface Img { src: string; alt: string; isPlaceholder: boolean }

export function VehicleGallery({ images, labels }: { images: Img[]; labels: { gallery: string; prev: string; next: string; imageOf: string; demo: string } }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  const cur = images[i];
  const btn = "absolute top-1/2 z-10 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur transition hover:bg-ink focus-visible:bg-ink";
  return (
    <section aria-roledescription="carousel" aria-label={labels.gallery}>
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line bg-surface-2"
        tabIndex={0}
        onKeyDown={(e) => {
          const rtl = document.documentElement.dir === "rtl";
          if (e.key === "ArrowRight") go(rtl ? -1 : 1);
          if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
        }}
      >
        <Image key={cur.src} src={cur.src} alt={cur.alt} fill priority={i === 0} sizes="(min-width:1024px) 62vw, 100vw" className="object-cover" unoptimized={cur.isPlaceholder} />
        {n > 1 && (
          <>
            <button type="button" className={`${btn} start-3`} onClick={() => go(-1)} aria-label={labels.prev}><ChevronLeft className="size-6" /></button>
            <button type="button" className={`${btn} end-3`} onClick={() => go(1)} aria-label={labels.next}><ChevronRight className="size-6" /></button>
          </>
        )}
        {cur.isPlaceholder && <p className="absolute bottom-3 start-3 rounded-sm bg-ink/75 px-2 py-1 text-[11px] text-muted backdrop-blur">{labels.demo}</p>}
        <p className="sr-only" aria-live="polite">{labels.imageOf.replace("{n}", String(i + 1)).replace("{total}", String(n))}</p>
      </div>
      {n > 1 && (
        <ul className="mt-3 grid grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <li key={img.src}>
              <button type="button" onClick={() => setI(idx)} aria-current={idx === i} aria-label={labels.imageOf.replace("{n}", String(idx + 1)).replace("{total}", String(n))} className={`relative block aspect-[16/10] w-full overflow-hidden rounded-sm border transition ${idx === i ? "border-accent" : "border-line opacity-70 hover:opacity-100"}`}>
                <Image src={img.src} alt="" fill sizes="20vw" className="object-cover" loading="lazy" unoptimized={img.isPlaceholder} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
