import type { BrandKey, CategoryKey } from "./types";

/**
 * Content hub architecture (/guides/). Demo set of three quality guides, English only.
 * Planned (not yet written, no thin placeholder pages): Ferrari Rental Dubai Guide, Supercar Rental for Tourists in Dubai,
 * Luxury Cars for Business Trips in Dubai, Dubai Supercar Rental Requirements (needs client-confirmed conditions).
 */
export interface Guide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  readingMinutes: number;
  sections: { h: string; p: string[] }[];
  relatedBrands: BrandKey[];
  relatedCategories: CategoryKey[];
  relatedCars: string[];
  faq: { q: string; a: string }[];
}

export const guides: Guide[] = [
  {
    slug: "best-supercars-to-rent-in-dubai",
    title: "Best Supercars to Rent in Dubai",
    description:
      "A practical guide to choosing a supercar rental in Dubai: Lamborghini, Ferrari and McLaren compared by driving experience, seats and use.",
    h1: "Best Supercars to Rent in Dubai",
    intro:
      "There is no single best supercar – there is the right one for your trip. This guide compares the supercars in the KINOVA line-up by what you actually want from the drive.",
    readingMinutes: 5,
    sections: [
      {
        h: "If you want the loudest, most theatrical drive",
        p: [
          "Start with the Lamborghini Huracán EVO Spyder: a V10 with the roof down is the classic Dubai supercar experience. If you want the flagship of the brand, the Lamborghini Revuelto is a V12 plug-in hybrid designed to be the most dramatic car on any road.",
        ],
      },
      {
        h: "If you want a driver-focused Ferrari or McLaren",
        p: [
          "The Ferrari F8 Spider pairs a twin-turbo V8 with a retractable hard top, which makes it as usable on a quiet evening as on a bright coastal morning. The McLaren Artura is lighter in character – a plug-in hybrid built around driver feedback and less commonly seen on the road.",
          "The Ferrari SF90 is the technical showpiece: a plug-in hybrid supercar for people who want to experience how far the brand has pushed performance.",
        ],
      },
      {
        h: "If you need more than two seats",
        p: [
          "Every supercar above is a two-seater. If you are travelling as a group, the Lamborghini Urus gives you five seats and luggage space with Lamborghini character. It is the practical way to bring supercar attitude to a family or friends trip.",
        ],
      },
      {
        h: "What to ask before you decide",
        p: [
          "Requirements for renting vary by residency status and rental conditions, and deposit, mileage and insurance terms are confirmed per booking. Ask about all of them in your first message so there are no surprises.",
          "Include your dates, number of passengers, luggage and where you plan to drive. KINOVA will confirm which supercars are available and recommend the best match.",
        ],
      },
    ],
    relatedBrands: ["lamborghini", "ferrari", "mclaren"],
    relatedCategories: ["supercars", "convertibles", "luxury-suvs"],
    relatedCars: ["lamborghini-huracan-evo-spyder", "ferrari-f8-spider", "mclaren-artura", "lamborghini-urus"],
    faq: [
      { q: "Which supercar is best for a first-time renter?", a: "It depends on the experience you want. An open-top car such as the Huracán EVO Spyder or F8 Spider is a popular first choice; KINOVA can advise based on your plans." },
      { q: "Can I rent a supercar for a single day?", a: "Rental duration is part of what you ask about. Tell KINOVA the number of days you need and the team will confirm what is possible." },
    ],
  },
  {
    slug: "luxury-car-rental-dubai-complete-guide",
    title: "Luxury Car Rental in Dubai: Complete Guide",
    description:
      "How to choose and enquire about a luxury car rental in Dubai: model types, occasions, what to ask, and how to make the process quick.",
    h1: "Luxury Car Rental in Dubai: Complete Guide",
    intro:
      "Renting a luxury car in Dubai is easier when you know what to ask for. This guide covers the main choices – sedan, SUV, coupe or supercar – and the questions worth asking before you commit.",
    readingMinutes: 6,
    sections: [
      {
        h: "Start with the occasion",
        p: [
          "A wedding, a business arrival, a family trip and a weekend of driving all call for different cars. Rolls-Royce suits arrivals and formal events; luxury SUVs suit groups and luggage; a supercar suits the drive itself.",
        ],
      },
      {
        h: "Sedan, SUV, coupe or supercar?",
        p: [
          "A luxury sedan such as the Rolls-Royce Ghost or Phantom is best when comfort and presence matter most. A luxury SUV such as the Rolls-Royce Cullinan, Lamborghini Urus or Range Rover Defender suits groups. Coupes and supercars put the driving first and usually offer limited luggage space.",
        ],
      },
      {
        h: "What to include in your enquiry",
        p: [
          "The more specific the first message, the quicker the answer. Include the car (or the kind of car), your start and end dates, the number of passengers and bags, and where you would like to collect or receive the car.",
          "Pricing, deposit, mileage and insurance conditions are confirmed per booking. Ask about them upfront.",
        ],
      },
      {
        h: "Documents and requirements",
        p: [
          "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm the documents required for your booking before you travel.",
        ],
      },
    ],
    relatedBrands: ["rolls-royce", "lamborghini", "range-rover"],
    relatedCategories: ["luxury-cars", "luxury-suvs", "supercars"],
    relatedCars: ["rolls-royce-ghost", "rolls-royce-cullinan", "lamborghini-urus", "range-rover-defender"],
    faq: [
      { q: "How do I start a luxury car rental enquiry?", a: "Open a car page and use Check Availability, or message KINOVA on WhatsApp with the car and your dates." },
      { q: "Can I rent a luxury car if I am visiting Dubai?", a: "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm what you will need." },
    ],
  },
  {
    slug: "lamborghini-rental-dubai-what-to-know",
    title: "Lamborghini Rental in Dubai: What to Know",
    description:
      "Choosing between the Lamborghini Urus, Revuelto and Huracán EVO Spyder for a Dubai rental: seats, character and who each car suits.",
    h1: "Lamborghini Rental in Dubai: What to Know",
    intro:
      "Three Lamborghinis, three very different rentals. Here is how to choose between the Urus, the Revuelto and the Huracán EVO Spyder.",
    readingMinutes: 4,
    sections: [
      {
        h: "Lamborghini Urus – the one for groups",
        p: [
          "The Urus is a five-seat super SUV with a twin-turbo V8. It is the Lamborghini that works for airport pick-ups, family days and nights out in the same car.",
        ],
      },
      {
        h: "Lamborghini Revuelto – the flagship",
        p: [
          "The Revuelto is a V12 plug-in hybrid and the brand's current flagship. It is a two-seater for drivers who want the most dramatic option available.",
        ],
      },
      {
        h: "Lamborghini Huracán EVO Spyder – the open-top V10",
        p: [
          "The Huracán EVO Spyder is the V10 convertible. Choose it for coastal driving, photos and the feeling of an open supercar in the Dubai evening.",
        ],
      },
      {
        h: "Before you enquire",
        p: [
          "Lamborghinis are low, wide and offer limited luggage space apart from the Urus. Tell KINOVA how many people are travelling, your dates and your plans, and the team will confirm which model is available.",
        ],
      },
    ],
    relatedBrands: ["lamborghini"],
    relatedCategories: ["supercars", "convertibles", "luxury-suvs"],
    relatedCars: ["lamborghini-urus", "lamborghini-revuelto", "lamborghini-huracan-evo-spyder"],
    faq: [
      { q: "Which Lamborghini has the most seats?", a: "The Urus, with five seats. The Revuelto and Huracán EVO Spyder are two-seaters." },
      { q: "Which Lamborghini is open-top?", a: "The Huracán EVO Spyder is the convertible model in the line-up." },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
