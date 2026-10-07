import { faqLd } from "@/lib/seo";
import { ChevronDown } from "./Icons";
import { JsonLd } from "./JsonLd";

/** Accessible, JS-free accordion (native <details>) with FAQPage JSON-LD built from the same items. */
export function FAQ({ items, heading, eyebrow, id }: { items: { q: string; a: string }[]; heading: string; eyebrow?: string; id?: string }) {
  if (!items.length) return null;
  return (
    <section id={id} className="section" aria-labelledby={`${id ?? "faq"}-title`}>
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id ?? "faq"}-title`} className="h-section mt-3">{heading}</h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 text-start text-base font-semibold text-white hover:text-accent-strong sm:text-lg">
                <span>{item.q}</span>
                <ChevronDown className="faq-chevron size-5 shrink-0 text-accent transition-transform" />
              </summary>
              <p className="pb-5 pe-8 leading-relaxed text-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqLd(items)} />
    </section>
  );
}
