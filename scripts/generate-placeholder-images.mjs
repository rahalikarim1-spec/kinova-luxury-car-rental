/**
 * Generates clearly-labelled DEMO placeholder artwork so the site looks complete before real photography exists.
 *   /public/images/cars/<slug>/{1,2,3}.svg   gallery + cards
 *   /public/images/cars/<slug>/og.png        1200x630 social image (needs `sharp`, optional)
 *   /public/images/hero.svg                  homepage hero scene
 *   /public/images/og-default.png
 * Replace them with real photos (see src/lib/images.ts). Run: npm run gen:images
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const out = join(root, "public/images");

const cars = [
  ["lamborghini-urus", "Lamborghini", "Urus", "suv", "#b8963e"],
  ["lamborghini-revuelto", "Lamborghini", "Revuelto", "coupe", "#b8963e"],
  ["lamborghini-huracan-evo-spyder", "Lamborghini", "Huracán EVO Spyder", "convertible", "#b8963e"],
  ["ferrari-f8-spider", "Ferrari", "F8 Spider", "convertible", "#a3262b"],
  ["ferrari-sf90", "Ferrari", "SF90", "coupe", "#a3262b"],
  ["mclaren-artura", "McLaren", "Artura", "coupe", "#c8641e"],
  ["mclaren-gt", "McLaren", "GT", "coupe", "#c8641e"],
  ["rolls-royce-ghost", "Rolls-Royce", "Ghost", "sedan", "#6b7a99"],
  ["rolls-royce-cullinan", "Rolls-Royce", "Cullinan", "suv", "#6b7a99"],
  ["rolls-royce-phantom", "Rolls-Royce", "Phantom", "sedan", "#6b7a99"],
  ["rolls-royce-wraith", "Rolls-Royce", "Wraith", "coupe", "#6b7a99"],
  ["range-rover-defender", "Range Rover", "Defender", "suv", "#4e6b4a"],
  ["porsche-boxster", "Porsche", "Boxster", "convertible", "#5f6b6d"],
  ["ford-mustang", "Ford", "Mustang", "coupe", "#3d5f94"],
  ["chevrolet-corvette", "Chevrolet", "Corvette", "coupe", "#b08a2e"],
];

const bodies = {
  coupe: "M300 640 C300 610 310 595 340 585 L470 560 C540 520 620 480 740 465 C820 458 900 470 960 500 L1180 570 C1230 585 1280 600 1300 625 L1300 640 Z",
  convertible: "M300 640 C300 610 310 595 340 585 L520 560 L820 545 L905 508 L940 512 L1180 572 C1230 585 1280 600 1300 625 L1300 640 Z",
  suv: "M290 645 L290 540 Q292 505 330 498 L470 470 Q520 400 640 385 L960 385 Q1060 395 1120 470 L1240 500 Q1300 515 1310 570 L1310 645 Z",
  sedan: "M290 640 L290 570 Q292 545 330 540 L450 530 Q520 440 700 425 L940 425 Q1050 440 1110 520 L1260 545 Q1310 560 1315 600 L1315 640 Z",
};
const windows = {
  coupe: "M660 522 C720 488 800 478 860 484 C910 492 945 512 975 528 Z",
  convertible: "M880 520 L905 510 L930 516 L915 530 Z",
  suv: "M520 460 Q560 410 650 400 L940 400 Q1020 410 1070 460 Z",
  sedan: "M540 520 Q600 450 720 440 L930 440 Q1010 452 1050 520 Z",
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function scene({ brand, model, type, tint, variant, w = 1600, h = 900, label = true }) {
  const flip = variant === 3;
  const zoom = variant === 2;
  const carTransform = zoom
    ? "translate(-420 -330) scale(1.55)"
    : flip
      ? "translate(1600 0) scale(-1 1)"
      : "";
  const lightX = variant === 3 ? 1000 : 600;
  const wheel = (cx) => `<circle cx="${cx}" cy="640" r="72" fill="#050506"/><circle cx="${cx}" cy="640" r="46" fill="#15151a" stroke="#6a6a74" stroke-width="3"/><circle cx="${cx}" cy="640" r="10" fill="#6a6a74"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(brand + " " + model)} demo image">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101014"/><stop offset="0.7" stop-color="#08080a"/><stop offset="1" stop-color="#050506"/></linearGradient>
<radialGradient id="glow" cx="${lightX / w}" cy="0.42" r="0.55"><stop offset="0" stop-color="${tint}" stop-opacity="0.38"/><stop offset="1" stop-color="${tint}" stop-opacity="0"/></radialGradient>
<linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4a54"/><stop offset="0.45" stop-color="#23232a"/><stop offset="1" stop-color="#0b0b0e"/></linearGradient>
<linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#17171c"/><stop offset="1" stop-color="#050506"/></linearGradient>
<linearGradient id="win" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7d8696" stop-opacity="0.55"/><stop offset="1" stop-color="#14141a" stop-opacity="0.9"/></linearGradient>
<filter id="blur"><feGaussianBlur stdDeviation="14"/></filter>
</defs>
<rect width="${w}" height="${h}" fill="url(#bg)"/>
<rect width="${w}" height="${h}" fill="url(#glow)"/>
<rect y="640" width="${w}" height="${h - 640}" fill="url(#floor)"/>
<line x1="0" y1="640" x2="${w}" y2="640" stroke="#ffffff" stroke-opacity="0.08"/>
<g transform="${carTransform}">
<ellipse cx="800" cy="668" rx="560" ry="26" fill="#000" opacity="0.65" filter="url(#blur)"/>
<path d="${bodies[type]}" fill="url(#body)" stroke="#ffffff" stroke-opacity="0.22" stroke-width="2"/>
<path d="${windows[type]}" fill="url(#win)"/>
<path d="${bodies[type]}" fill="none" stroke="${tint}" stroke-opacity="0.55" stroke-width="2" transform="translate(0 -3)"/>
${wheel(480)}${wheel(1130)}
</g>
${label ? `<text x="250" y="110" fill="#fff" fill-opacity="0.5" font-family="Helvetica,Arial,sans-serif" font-size="26" letter-spacing="10">${esc(brand.toUpperCase())}</text>
<text x="250" y="184" fill="#fff" fill-opacity="0.92" font-family="Helvetica,Arial,sans-serif" font-size="68" font-weight="700" letter-spacing="2">${esc(model)}</text>
<text x="${w - 250}" y="${h - 56}" text-anchor="end" fill="#fff" fill-opacity="0.35" font-family="Helvetica,Arial,sans-serif" font-size="20" letter-spacing="6">KINOVA · DEMO IMAGE</text>` : ""}
</svg>`;
}

function hero() {
  const towers = [[1020, 360, 44], [1075, 250, 36], [1120, 120, 12], [1135, 120, 12], [1190, 300, 52], [1260, 400, 60], [1330, 330, 46], [1400, 450, 70], [1480, 380, 50]]
    .map(([x, y, wd]) => `<rect x="${x}" y="${y}" width="${wd}" height="${640 - y}" fill="#0c0c10"/>`).join("");
  const spire = `<path d="M1127 640 L1120 150 L1127 40 L1134 150 L1140 640 Z" fill="#0e0e13"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Luxury supercar at dusk – demo hero image">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050507"/><stop offset="0.55" stop-color="#14121a"/><stop offset="0.8" stop-color="#2a2018"/><stop offset="1" stop-color="#0a0a0c"/></linearGradient>
<radialGradient id="sun" cx="0.62" cy="0.62" r="0.5"><stop offset="0" stop-color="#c8a971" stop-opacity="0.45"/><stop offset="1" stop-color="#c8a971" stop-opacity="0"/></radialGradient>
<linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a7a86"/><stop offset="0.5" stop-color="#2c2c34"/><stop offset="1" stop-color="#0c0c0f"/></linearGradient>
<linearGradient id="road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121216"/><stop offset="1" stop-color="#050506"/></linearGradient>
<filter id="blur"><feGaussianBlur stdDeviation="16"/></filter>
</defs>
<rect width="1920" height="1080" fill="url(#sky)"/><rect width="1920" height="1080" fill="url(#sun)"/>
<g transform="translate(160 150) scale(1.0)" opacity="0.95">${towers}${spire}</g>
<rect y="790" width="1920" height="290" fill="url(#road)"/>
<line x1="0" y1="790" x2="1920" y2="790" stroke="#fff" stroke-opacity="0.08"/>
<g transform="translate(330 150) scale(1.0)">
<ellipse cx="800" cy="668" rx="560" ry="28" fill="#000" opacity="0.7" filter="url(#blur)"/>
<path d="${bodies.coupe}" fill="url(#body)" stroke="#fff" stroke-opacity="0.25" stroke-width="2"/>
<path d="${windows.coupe}" fill="#12121a" fill-opacity="0.9"/>
<path d="${bodies.coupe}" fill="none" stroke="#c8a971" stroke-opacity="0.6" stroke-width="2" transform="translate(0 -3)"/>
<circle cx="480" cy="640" r="72" fill="#050506"/><circle cx="480" cy="640" r="46" fill="#15151a" stroke="#6a6a74" stroke-width="3"/>
<circle cx="1130" cy="640" r="72" fill="#050506"/><circle cx="1130" cy="640" r="46" fill="#15151a" stroke="#6a6a74" stroke-width="3"/>
</g>
</svg>`;
}

let sharp = null;
try { sharp = (await import("sharp")).default; } catch { console.warn("sharp not found – skipping PNG (OG) generation"); }

for (const [slug, brand, model, type, tint] of cars) {
  const dir = join(out, "cars", slug);
  mkdirSync(dir, { recursive: true });
  for (const variant of [1, 2, 3]) writeFileSync(join(dir, `${variant}.svg`), scene({ brand, model, type, tint, variant }));
  if (sharp) {
    const og = scene({ brand, model, type, tint, variant: 1 });
    await sharp(Buffer.from(og)).resize(1200, 630, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(join(dir, "og.png"));
  }
}
writeFileSync(join(out, "hero.svg"), hero());

const ogDefault = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<rect width="1200" height="630" fill="#08080a"/>
<radialGradient id="g" cx="0.7" cy="0.4" r="0.6"><stop offset="0" stop-color="#c8a971" stop-opacity="0.35"/><stop offset="1" stop-color="#c8a971" stop-opacity="0"/></radialGradient>
<rect width="1200" height="630" fill="url(#g)"/>
<text x="80" y="300" fill="#fff" font-family="Helvetica,Arial,sans-serif" font-size="120" font-weight="700" letter-spacing="24">KINOVA</text>
<rect x="84" y="332" width="120" height="3" fill="#c8a971"/>
<text x="84" y="400" fill="#fff" fill-opacity="0.75" font-family="Helvetica,Arial,sans-serif" font-size="38" letter-spacing="3">Luxury &amp; Supercar Rental · Dubai · UAE</text>
</svg>`;
if (sharp) await sharp(Buffer.from(ogDefault)).png({ compressionLevel: 9 }).toFile(join(out, "og-default.png"));
console.log(`Generated ${cars.length} vehicles, hero and OG images in public/images`);
