import { business } from "@/config/business";

/** Typographic wordmark until an official logo is supplied (set business.logoPath and swap here). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`} dir="ltr">
      <span className="text-[1.45rem] font-bold tracking-[0.34em] text-white" style={{ fontFamily: "var(--f-inter), sans-serif" }}>
        {business.businessName}
      </span>
      <span className="mt-1.5 block h-px w-8 bg-accent" aria-hidden />
    </span>
  );
}
