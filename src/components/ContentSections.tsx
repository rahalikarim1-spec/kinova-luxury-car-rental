import Link from "next/link";
import type { ReactNode } from "react";

/** Editorial SEO block: useful long-form copy with optional internal-link CTA. */
export function SEOContentSection({ eyebrow, title, paragraphs, sections, cta, id }: {
  eyebrow?: string; title: string; paragraphs?: string[]; sections?: { h: string; p: string }[]; cta?: { href: string; label: string }; id?: string;
}) {
  return (
    <section className="section" aria-labelledby={`${id ?? "seo"}-title`} id={id}>
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id ?? "seo"}-title`} className="h-section mt-3">{title}</h2>
          {cta && <Link href={cta.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-[0.14em] text-accent link-underline rtl:tracking-normal">{cta.label}</Link>}
        </div>
        <div className="prose-k">
          {paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          {sections?.map((s) => (
            <div key={s.h}>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  if (!links.length) return null;
  return (
    <nav aria-label={title}>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted rtl:tracking-normal">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-11 items-center rounded-sm border border-line px-4 text-sm text-soft transition hover:border-accent hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Bullets({ items, icon }: { items: string[]; icon?: ReactNode }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-soft">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent">{icon}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
