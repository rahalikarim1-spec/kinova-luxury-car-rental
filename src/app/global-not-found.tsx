import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Logo } from "@/components/Logo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--f-inter" });

export const metadata: Metadata = {
  title: { absolute: "Page not found | KINOVA" },
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

/** Handles URLs that match no route at all (the localized not-found handles notFound() inside a locale). */
export default function GlobalNotFound() {
  return (
    <html lang="en-AE" dir="ltr" className={inter.variable}>
      <body>
        <main className="container-x flex min-h-svh flex-col items-center justify-center py-20 text-center">
          <a href="/" aria-label="KINOVA"><Logo /></a>
          <p className="eyebrow mt-14">404</p>
          <h1 className="h-display mt-4 !text-[clamp(2rem,6vw,3.5rem)]">Page not found</h1>
          <p className="mt-4 max-w-md text-muted">The page you are looking for does not exist or has moved.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/" className="btn btn-primary">Back to home</a>
            <a href="/cars/" className="btn btn-secondary">Browse the fleet</a>
          </div>
          <p className="mt-10 text-sm text-muted"><a className="link-underline" href="/ar/">العربية</a> · <a className="link-underline" href="/ru/">Русский</a></p>
        </main>
      </body>
    </html>
  );
}
