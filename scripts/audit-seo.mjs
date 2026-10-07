/**
 * SEO / link audit. Crawls every URL in /sitemap.xml of a running server and verifies:
 *  one H1 · unique title & description · canonical · hreflang reciprocity · html lang/dir · no noindex on indexable pages ·
 *  valid JSON-LD · image alt · internal links resolve (no 404, no redirects) · no orphan pages · robots.txt.
 * Usage: npm run build && npx next start -p 3100 &  then  BASE=http://localhost:3100 npm run audit:seo
 */
const BASE = (process.env.BASE || "http://localhost:3100").replace(/\/$/, "");
const problems = [];
const warn = (url, msg) => problems.push(`${url}  ${msg}`);

const get = async (path, init = {}) => fetch(BASE + path, { redirect: "manual", ...init });
const text = async (path) => (await get(path)).text();

const sitemap = await text("/sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const origin = new URL(locs[0]).origin;
const toPath = (u) => new URL(u, origin).pathname;
const paths = [...new Set(locs.map(toPath))];
console.log(`Sitemap: ${locs.length} URLs (canonical origin ${origin}), crawling ${BASE}`);

const titles = new Map(), descs = new Map(), h1s = new Map();
const inlinks = new Map(paths.map((p) => [p, 0]));
const allLinks = new Map(); // href -> source
const pageInfo = new Map();
const landing = new Map();
const faqQ = new Map();
const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1];
const decode = (s = "") => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (s) => decode(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

for (const p of paths) {
  const res = await get(p);
  if (res.status !== 200) { warn(p, `status ${res.status}`); continue; }
  const html = await res.text();
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = decode(attr((html.match(/<meta name="description"[^>]*>/) || [""])[0], "content") || "");
  const canonical = attr((html.match(/<link rel="canonical"[^>]*>/) || [""])[0], "href");
  const robots = attr((html.match(/<meta name="robots"[^>]*>/) || [""])[0], "content") || "";
  const h1 = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => strip(m[0]));
  const htmlTag = (html.match(/<html[^>]*>/) || [""])[0];
  const alternates = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((m) => [m[1], m[2]]);

  if (!title) warn(p, "missing <title>");
  if (title.length > 70) warn(p, `title long (${title.length}): ${title}`);
  if (!desc) warn(p, "missing meta description");
  if (desc.length > 170) warn(p, `description long (${desc.length})`);
  if (desc && desc.length < 70) warn(p, `description short (${desc.length})`);
  if (h1.length !== 1) warn(p, `expected 1 <h1>, found ${h1.length}`);
  if (/noindex/.test(robots)) warn(p, `indexable URL has robots="${robots}"`);
  if (canonical !== origin + p) warn(p, `canonical ${canonical} != ${origin + p}`);
  if (!/og:title/.test(html) || !/og:image/.test(html) || !/twitter:card/.test(html)) warn(p, "missing Open Graph / Twitter tags");

  const lang = attr(htmlTag, "lang"), dir = attr(htmlTag, "dir");
  const expLang = p.startsWith("/ar/") || p === "/ar/" ? "ar-AE" : p.startsWith("/ru/") || p === "/ru/" ? "ru-AE" : "en-AE";
  if (lang !== expLang) warn(p, `html lang=${lang}, expected ${expLang}`);
  if ((expLang === "ar-AE") !== (dir === "rtl")) warn(p, `html dir=${dir}`);

  // titles/descriptions/h1 unique across the site
  for (const [map, val, label] of [[titles, title, "title"], [descs, desc, "description"], [h1s, h1[0], "h1"]]) {
    if (!val) continue;
    if (map.has(val)) warn(p, `duplicate ${label} (also ${map.get(val)})`); else map.set(val, p);
  }

  // JSON-LD syntactically valid & no fabricated fields
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1]);
      const s = JSON.stringify(j);
      if (/aggregateRating|"review"|ratingValue|streetAddress/.test(s)) warn(p, "JSON-LD contains rating/review/address data");
      if (/"priceCurrency"/.test(s) && !/Offer/.test(s)) warn(p, "price without Offer");
    } catch (e) { warn(p, `invalid JSON-LD: ${e.message}`); }
  }

  // images
  for (const img of html.matchAll(/<img\b[^>]*>/g)) if (!/ alt=/.test(img[0])) warn(p, `img without alt: ${img[0].slice(0, 80)}`);

  // collect internal links
  const links = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => decode(m[1]));
  for (const href of links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    if (!allLinks.has(clean)) allLinks.set(clean, p);
    if (clean !== p && inlinks.has(clean)) inlinks.set(clean, inlinks.get(clean) + 1);
  }
  pageInfo.set(p, { alternates, canonical });

  // landing-page depth / CRO / linking checks (brand + category pages)
  const isLanding = /^(\/(ar|ru))?\/(brands\/[^/]+|supercar-rental-dubai|luxury-car-rental-dubai|sports-car-rental-dubai|luxury-suv-rental-dubai|convertible-car-rental-dubai)\/$/.test(p);
  if (isLanding) {
    const main = (html.match(/<main[\s\S]*<\/main>/) || [""])[0].replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ");
    const words = strip(main).split(" ").filter(Boolean).length;
    const key = p.replace(/^\/(ar|ru)\//, "/");
    const loc = p.startsWith("/ar/") ? "ar" : p.startsWith("/ru/") ? "ru" : "en";
    landing.set(`${loc}:${key}`, words);
    const faqs = [...html.matchAll(/"@type":"Question","name":"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    if (faqs.length < 4) warn(p, `only ${faqs.length} FAQ items (need >= 4)`);
    for (const q of faqs) {
      const k = `${loc}:${q}`;
      if (faqQ.has(k)) warn(p, `FAQ question duplicated on ${faqQ.get(k)}: ${q.slice(0, 60)}`); else faqQ.set(k, p);
    }
    const internal = new Set(links.filter((h) => h.startsWith("/") && !h.startsWith("//")).map((h) => h.split("#")[0]));
    if (internal.size < 14) warn(p, `only ${internal.size} distinct internal links`);
    if (!/api\.whatsapp\.com|wa\.me/.test(main)) warn(p, "no WhatsApp CTA in main content");
    if (!/data-track="check_availability"/.test(main)) warn(p, "no Check Availability CTA in main content");
    if (!/Check Availability|تحقق من التوفر|Проверить наличие/i.test(main)) warn(p, "Check Availability label missing");
  }
}

// hreflang reciprocity + consistency
for (const [p, info] of pageInfo) {
  if (!info.alternates.length) {
    if (/^\/(ar|ru)\//.test(p)) warn(p, "translated page without hreflang cluster");
    continue;
  }
  const self = info.alternates.find(([, h]) => toPath(h) === p);
  if (!self) warn(p, "hreflang cluster does not include itself");
  if (!info.alternates.some(([l]) => l === "x-default")) warn(p, "missing x-default");
  for (const [lang, href] of info.alternates) {
    const other = pageInfo.get(toPath(href));
    if (!other) { warn(p, `hreflang ${lang} -> ${href} is not a crawled indexable page`); continue; }
    if (!other.alternates.some(([, h]) => toPath(h) === p)) warn(p, `hreflang ${lang} -> ${toPath(href)} does not link back (no reciprocity)`);
  }
}

// every internal link resolves directly (no 404, no redirect hop)
for (const [href, from] of allLinks) {
  const res = await get(href);
  if (res.status === 200) continue;
  if (res.status >= 300 && res.status < 400) warn(from, `link ${href} redirects to ${res.headers.get("location")}`);
  else warn(from, `link ${href} -> ${res.status}`);
}

// orphans
for (const [p, n] of inlinks) if (n === 0 && p !== "/") warn(p, "orphan page (no internal links point to it)");

// language parity of landing pages (Arabic packs more meaning per word, so its threshold is lower; structure – sections, FAQs, CTAs, links – is asserted separately)
const wordsOf = (loc, key) => landing.get(`${loc}:${key}`);
for (const k of [...landing.keys()].filter((x) => x.startsWith("en:")).map((x) => x.slice(3))) {
  const en = wordsOf("en", k);
  for (const [loc, min] of [["ar", 0.75], ["ru", 0.8]]) {
    const w = wordsOf(loc, k);
    if (!w) { warn(k, `${loc} landing page missing from crawl`); continue; }
    if (w < en * min) warn(`${loc}${k}`, `thin vs English: ${w} words vs ${en} (min ${Math.round(en * min)})`);
  }
}
console.log("Landing word counts (en / ar / ru):");
for (const k of [...landing.keys()].filter((x) => x.startsWith("en:")).map((x) => x.slice(3))) console.log(`  ${k.padEnd(40)} ${wordsOf("en", k)} / ${wordsOf("ar", k)} / ${wordsOf("ru", k)}`);

// robots.txt
const robots = await text("/robots.txt");
if (!/User-Agent: \*/i.test(robots) || !/Sitemap:/i.test(robots)) warn("/robots.txt", "robots.txt missing UA or Sitemap");
if (/^Disallow: \/\s*$/m.test(robots)) warn("/robots.txt", "robots.txt blocks the whole site");

// 404 handling
const nf = await get("/definitely-not-a-page/");
if (nf.status !== 404) warn("/definitely-not-a-page/", `expected 404, got ${nf.status}`);

console.log(`\nCrawled ${pageInfo.size} pages, checked ${allLinks.size} unique internal links.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(" - " + p);
  process.exitCode = 1;
} else console.log("\nSEO audit passed: no problems found.");
