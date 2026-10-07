"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Logo } from "@/components/Logo";

const copy = {
  en: { title: "Page not found", text: "The page you are looking for does not exist or has moved.", home: "Back to home", fleet: "Browse the fleet", base: "" },
  ar: { title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.", home: "العودة إلى الرئيسية", fleet: "تصفّح الأسطول", base: "/ar" },
  ru: { title: "Страница не найдена", text: "Такой страницы нет или она была перенесена.", home: "На главную", fleet: "Смотреть автопарк", base: "/ru" },
} as const;

/** Rendered for notFound() calls and unknown slugs inside a locale; localized from the route param. */
export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const c = copy[(params?.locale as keyof typeof copy) ?? "en"] ?? copy.en;
  return (
    <main id="main" className="container-x flex min-h-svh flex-col items-center justify-center py-20 text-center">
      <Link href={`${c.base}/`} aria-label="KINOVA"><Logo /></Link>
      <p className="eyebrow mt-14">404</p>
      <h1 className="h-display mt-4 !text-[clamp(2rem,6vw,3.5rem)]">{c.title}</h1>
      <p className="mt-4 max-w-md text-muted">{c.text}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={`${c.base}/`} className="btn btn-primary">{c.home}</Link>
        <Link href={`${c.base}/cars/`} className="btn btn-secondary">{c.fleet}</Link>
      </div>
    </main>
  );
}
