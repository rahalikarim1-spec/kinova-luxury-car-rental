import type { BrandKey, CategoryKey } from "./types";

/**
 * Local SEO architecture. Only a few high-quality pages – NOT mass-generated doorway pages.
 * Add a location only when there is genuinely distinct, useful local content to write.
 * Next candidates (not yet published): business-bay, jumeirah.
 * English only for now (see englishOnlyPrefixes in src/i18n/config.ts).
 */
export interface Location {
  slug: string;
  area: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h: string; p: string }[];
  bestFor: { carSlug: string; reason: string }[];
  relatedCategories: CategoryKey[];
  relatedBrands: BrandKey[];
  faq: { q: string; a: string }[];
}

export const locations: Location[] = [
  {
    slug: "dubai-marina",
    area: "Dubai Marina",
    title: "Luxury Car Rental near Dubai Marina",
    description:
      "Planning to stay in Dubai Marina or JBR? See which supercars and luxury cars suit the waterfront and ask KINOVA about availability for your dates.",
    h1: "Luxury Car Rental for Dubai Marina & JBR",
    intro:
      "Dubai Marina is built around the waterfront: towers on one side, the promenade and yachts on the other, and the coast road a few minutes away. It is one of the most photographed parts of the city, and the cars that suit it are the ones that look good at low speed.",
    sections: [
      {
        h: "What the Marina drive is like",
        p: "Marina and the neighbouring JBR beachfront are busy, pedestrian-heavy and built for slow, scenic driving – the loop around the Marina, the beachfront roads and the connection to Sheikh Zayed Road for longer trips. Traffic can be heavy in the evenings and at weekends, so a car that is comfortable in stop-start conditions matters as much as one that is fast.",
      },
      {
        h: "Which cars suit the area",
        p: "Open-top cars such as the Lamborghini Huracán EVO Spyder or Ferrari F8 Spider are the obvious choices for evenings along the waterfront. For groups staying in the area, a luxury SUV keeps everyone together. If you are visiting for a short stay, a Porsche Boxster is a relaxed way to enjoy the coast.",
      },
      {
        h: "Where you want the car",
        p: "Tell KINOVA the hotel or building you are staying at and your dates. Delivery and pick-up arrangements are confirmed by the team when you enquire – nothing is assumed in advance.",
      },
    ],
    bestFor: [
      { carSlug: "lamborghini-huracan-evo-spyder", reason: "Open-top V10 for the waterfront at sunset" },
      { carSlug: "ferrari-f8-spider", reason: "Roof-down coastal driving with a retractable hard top" },
      { carSlug: "porsche-boxster", reason: "A relaxed, approachable roadster for a short stay" },
    ],
    relatedCategories: ["convertibles", "supercars", "luxury-suvs"],
    relatedBrands: ["lamborghini", "ferrari", "porsche"],
    faq: [
      { q: "Can I ask for a car near my hotel in Dubai Marina?", a: "Yes. Include your hotel or building and your dates in the enquiry. KINOVA confirms what is possible for your location." },
      { q: "Which car works best for an evening in the Marina?", a: "Open-top cars are the usual choice for the waterfront. Message KINOVA to check which ones are free on your dates." },
    ],
  },
  {
    slug: "downtown-dubai",
    area: "Downtown Dubai",
    title: "Luxury Car Rental near Downtown Dubai",
    description:
      "Staying near the Burj Khalifa and Dubai Mall? Find the luxury cars and supercars that suit Downtown Dubai and ask KINOVA about availability.",
    h1: "Luxury Car Rental for Downtown Dubai",
    intro:
      "Downtown Dubai is where the city shows off: the Burj Khalifa, Dubai Mall, the Opera and Boulevard dining all sit within a short drive of each other. It is also where the way you arrive makes the biggest difference.",
    sections: [
      {
        h: "Arrival matters here",
        p: "Hotels and restaurants in Downtown have valet-style arrivals, and the area rewards a car with presence. A flagship Rolls-Royce suits dinner and events; a supercar suits a night out and photographs against the skyline.",
      },
      {
        h: "Practical driving notes",
        p: "Downtown is compact but busy, especially around major events and evenings, and parking is mostly through valet or managed car parks. Low supercars need a little care on ramps and entrances; a luxury sedan or SUV is simpler for frequent short hops.",
      },
      {
        h: "Which cars suit the area",
        p: "The Rolls-Royce Ghost and Phantom are the natural fit for business arrivals and formal evenings. The Lamborghini Revuelto and McLaren Artura make a statement for a night out. For a group, the Rolls-Royce Cullinan or Lamborghini Urus keeps the party in one car.",
      },
    ],
    bestFor: [
      { carSlug: "rolls-royce-ghost", reason: "Refined arrivals for dinners, hotels and events" },
      { carSlug: "lamborghini-revuelto", reason: "A statement supercar against the skyline" },
      { carSlug: "rolls-royce-cullinan", reason: "Space and presence for groups" },
    ],
    relatedCategories: ["luxury-cars", "supercars", "luxury-suvs"],
    relatedBrands: ["rolls-royce", "lamborghini", "mclaren"],
    faq: [
      { q: "Is a supercar practical for Downtown Dubai?", a: "It works well for evenings and photos, but low cars need care at some entrances and ramps. A luxury sedan or SUV is simpler for frequent short trips." },
      { q: "Can I request a car for a Downtown hotel or event?", a: "Yes. Share the hotel or event and your dates and KINOVA will confirm availability and arrangements." },
    ],
  },
  {
    slug: "palm-jumeirah",
    area: "Palm Jumeirah",
    title: "Luxury Car Rental for Palm Jumeirah",
    description:
      "Heading to Palm Jumeirah? See which supercars and luxury cars suit the Palm's crescent and trunk roads, and ask KINOVA about availability.",
    h1: "Luxury Car Rental for Palm Jumeirah",
    intro:
      "Palm Jumeirah is a destination in itself: resorts, beach clubs and residences laid out along a single trunk road and a wide crescent. It is a place to arrive in style and cruise rather than rush.",
    sections: [
      {
        h: "A drive built for cruising",
        p: "The Palm is relaxed, scenic and comparatively low-speed, with strict traffic management. The pleasure is in the setting and the arrival at the resort or beach club rather than outright speed – which suits cars that are comfortable and look the part.",
      },
      {
        h: "Which cars suit the area",
        p: "Convertibles are the classic choice, with the sea on both sides and the skyline behind you. A Rolls-Royce Cullinan or Ghost suits resort arrivals and family stays. The Range Rover Defender is a practical option for days with beach gear and luggage.",
      },
      {
        h: "Planning your rental",
        p: "Tell KINOVA which resort or residence you are staying at and for how long. The team will confirm availability and how the car can be arranged for your location.",
      },
    ],
    bestFor: [
      { carSlug: "ferrari-f8-spider", reason: "Open-air cruising along the crescent" },
      { carSlug: "rolls-royce-cullinan", reason: "Resort arrivals with luggage and passengers" },
      { carSlug: "range-rover-defender", reason: "Practical space for beach days and family stays" },
    ],
    relatedCategories: ["convertibles", "luxury-suvs", "luxury-cars"],
    relatedBrands: ["ferrari", "rolls-royce", "range-rover"],
    faq: [
      { q: "Which car is best for a resort stay on the Palm?", a: "A luxury SUV or Rolls-Royce suits resort arrivals and luggage; a convertible suits cruising. KINOVA can advise based on your plans." },
      { q: "Can I ask for a car at my Palm Jumeirah resort?", a: "Yes. Include the resort name and your dates in the enquiry and KINOVA will confirm what is possible." },
    ],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
