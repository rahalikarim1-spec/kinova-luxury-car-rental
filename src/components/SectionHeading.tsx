import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, sub, action, as: Tag = "h2", id }: { eyebrow?: string; title: string; sub?: string; action?: ReactNode; as?: "h2" | "h1"; id?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag id={id} className="h-section mt-3">{title}</Tag>
        {sub && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
      </div>
      {action}
    </div>
  );
}
