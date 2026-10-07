/**
 * Redirect architecture: legacy / alias URLs -> canonical URLs (301).
 * Add rows here when slugs change or when an old site is migrated; they are applied in next.config.ts
 * for English and mirrored for /ar and /ru.
 */
type Rule = { source: string; destination: string; permanent: true };

const aliases: Array<[string, string]> = [
  ["/fleet", "/cars/"],
  ["/vehicles", "/cars/"],
  ["/supercars", "/supercar-rental-dubai/"],
  ["/luxury-cars", "/luxury-car-rental-dubai/"],
  ["/dubai-car-rental", "/luxury-car-rental-dubai/"],
  ["/sports-cars", "/sports-car-rental-dubai/"],
  ["/suv-rental-dubai", "/luxury-suv-rental-dubai/"],
  ["/convertibles", "/convertible-car-rental-dubai/"],
  ["/blog", "/guides/"],
];

export const redirectRules: Rule[] = ["", "/ar", "/ru"].flatMap((prefix) =>
  aliases.map(([from, to]) => ({
    source: `${prefix}${from}`,
    destination: `${prefix}${to}`,
    permanent: true as const,
  })),
);
