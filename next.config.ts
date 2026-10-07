import type { NextConfig } from "next";
import { redirectRules } from "./src/config/redirects";

/**
 * Locale routing without middleware:
 *  - English lives at "/" (internally /en/*) via rewrites, so every page stays statically generated.
 *  - /ar/* and /ru/* map directly to app/[locale].
 *  - /en/* is 301-redirected to the unprefixed URL so there is a single English URL per page.
 */
const notPrefixed = "(?!(?:ar|ru|en)(?:/|$)).+";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600, 1920],
  },
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*/", permanent: true },
      ...redirectRules,
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/", destination: "/en" },
        { source: `/:path(${notPrefixed})`, destination: "/en/:path" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
