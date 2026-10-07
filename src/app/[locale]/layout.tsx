import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { site } from "@/config/business";
import { Analytics } from "@/components/Analytics";
import { getDictionary } from "@/i18n";
import { isLocale, localeMeta, locales } from "@/i18n/config";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap", variable: "--f-inter" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--f-arabic", preload: false });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070709",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "KINOVA",
  formatDetection: { telephone: false, email: false, address: false },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const meta = localeMeta[locale];
  const d = getDictionary(locale);
  return (
    <html lang={meta.hreflang} dir={meta.dir} className={`${inter.variable} ${arabic.variable}`}>
      <body>
        {site.gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="gtm" />
          </noscript>
        )}
        <a href="#main" className="sr-only z-[100] bg-accent px-4 py-3 font-semibold text-black focus:not-sr-only focus:fixed focus:start-3 focus:top-3">{d.nav.skip}</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
