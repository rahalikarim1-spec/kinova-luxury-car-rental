import type { CategoryKey, Vehicle } from "@/data/types";
import { pick, type Locale, type Localized } from "@/i18n/config";
import { formatPrice } from "./fleet";

/** Category-level copy shared by vehicle pages (the vehicle-specific text lives in src/data/vehicles.ts). */
const suitedFor: Record<CategoryKey, Localized<string[]>> = {
  supercars: {
    en: ["Visitors who want the headline Dubai driving experience", "Couples and solo drivers", "Photo shoots and special-occasion days"],
    ar: ["الزوار الذين يريدون تجربة القيادة الأبرز في دبي", "الأزواج والسائقون المنفردون", "جلسات التصوير وأيام المناسبات الخاصة"],
    ru: ["Гости, которым нужен главный драйв Дубая", "Пары и одиночные водители", "Фотосессии и особые дни"],
  },
  "luxury-cars": {
    en: ["Business arrivals and executive travel", "Weddings, anniversaries and formal evenings", "Visitors who value comfort and presence"],
    ar: ["وصول الأعمال وسفر التنفيذيين", "حفلات الزفاف والذكرى والأمسيات الرسمية", "الزوار الذين يقدّرون الراحة والحضور"],
    ru: ["Деловые приезды и поездки руководителей", "Свадьбы, юбилеи и торжественные вечера", "Гости, ценящие комфорт и статус"],
  },
  "sports-cars": {
    en: ["Drivers who want an engaging, characterful car", "First-time performance renters", "Several days of coast and city driving"],
    ar: ["السائقون الذين يريدون سيارة ممتعة بشخصية", "من يستأجر سيارة أداء لأول مرة", "عدة أيام من القيادة الساحلية والمدينة"],
    ru: ["Водители, которым нужна живая машина с характером", "Те, кто арендует мощный автомобиль впервые", "Несколько дней езды по побережью и городу"],
  },
  "luxury-suvs": {
    en: ["Groups, families and airport arrivals with luggage", "Visitors who want a higher seating position", "Longer stays and trips beyond the city"],
    ar: ["المجموعات والعائلات ووصول المطار مع الأمتعة", "الزوار الذين يريدون وضعية جلوس أعلى", "الإقامات الأطول والرحلات خارج المدينة"],
    ru: ["Компании, семьи и приезд из аэропорта с багажом", "Гости, которым нужна высокая посадка", "Долгие поездки и выезды за город"],
  },
  convertibles: {
    en: ["Coastal drives and sunset photos", "Couples and special days", "Anyone who wants the full open-air Dubai experience"],
    ar: ["القيادة الساحلية وصور الغروب", "الأزواج والأيام الخاصة", "كل من يريد تجربة دبي الكاملة في الهواء الطلق"],
    ru: ["Поездки вдоль побережья и закатные фото", "Пары и особые дни", "Все, кто хочет почувствовать Дубай с открытым верхом"],
  },
};

const generalWhy: Localized<string> = {
  en: "Simple enquiry – share your dates and KINOVA confirms availability and pricing",
  ar: "استفسار بسيط – شارك تواريخك وتؤكد KINOVA التوفر والسعر",
  ru: "Простой запрос – укажите даты, и KINOVA подтвердит наличие и стоимость",
};

export const getSuitedFor = (v: Vehicle, locale: Locale) => pick(suitedFor[v.categories[0]], locale);
export const getWhyRent = (v: Vehicle, locale: Locale) => [...pick(v.whyRent, locale), pick(generalWhy, locale)];

const faqTemplates: Record<
  Locale,
  {
    availQ: string; availA: string;
    priceQ: string; priceOnRequest: string; priceKnown: string;
    docsQ: string; docsA: string;
    locQ: string; locA: string;
  }
> = {
  en: {
    availQ: "How do I check availability for the {name}?",
    availA: "Use Check Availability on this page, message KINOVA on WhatsApp or call. Your request names the {name}, so the team can confirm availability for your dates directly.",
    priceQ: "How much does it cost to rent the {name}?",
    priceOnRequest: "Pricing is currently shown as Price on Request. KINOVA confirms the rate for your dates when you enquire.",
    priceKnown: "Rates start from {price} per day. Final pricing depends on dates and rental conditions and is confirmed by KINOVA.",
    docsQ: "What documents may be required to rent the {name}?",
    docsA: "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm the documents required for your booking.",
    locQ: "Can I request a specific pick-up or delivery location?",
    locA: "Add your preferred location to the enquiry form or WhatsApp message. KINOVA confirms what is possible for your location and dates.",
  },
  ar: {
    availQ: "كيف أتحقق من توفر {name}؟",
    availA: "استخدم زر تحقق من التوفر في هذه الصفحة أو راسل KINOVA عبر واتساب أو اتصل. يذكر طلبك {name} ليتمكن الفريق من تأكيد التوفر لتواريخك مباشرة.",
    priceQ: "كم تكلفة استئجار {name}؟",
    priceOnRequest: "يُعرض السعر حالياً عند الطلب. تؤكد KINOVA السعر لتواريخك عند الاستفسار.",
    priceKnown: "تبدأ الأسعار من {price} في اليوم. يعتمد السعر النهائي على التواريخ وشروط الإيجار وتؤكده KINOVA.",
    docsQ: "ما المستندات التي قد تكون مطلوبة لاستئجار {name}؟",
    docsA: "قد تختلف المتطلبات بحسب حالة الإقامة وشروط الإيجار. تواصل مع KINOVA لتأكيد المستندات المطلوبة لحجزك.",
    locQ: "هل يمكنني طلب موقع استلام أو توصيل محدد؟",
    locA: "أضف الموقع المفضل لديك في نموذج الاستفسار أو رسالة واتساب. تؤكد KINOVA الممكن لموقعك وتواريخك.",
  },
  ru: {
    availQ: "Как проверить наличие {name}?",
    availA: "Нажмите «Проверить наличие» на этой странице, напишите KINOVA в WhatsApp или позвоните. В вашем запросе указан {name}, поэтому команда сможет сразу подтвердить наличие на ваши даты.",
    priceQ: "Сколько стоит аренда {name}?",
    priceOnRequest: "Сейчас цена указана как «по запросу». KINOVA подтверждает тариф на ваши даты при обращении.",
    priceKnown: "Тарифы от {price} в сутки. Итоговая цена зависит от дат и условий аренды и подтверждается KINOVA.",
    docsQ: "Какие документы могут понадобиться для аренды {name}?",
    docsA: "Требования могут различаться в зависимости от статуса резидентства и условий аренды. Свяжитесь с KINOVA, чтобы уточнить необходимые документы.",
    locQ: "Можно ли указать место получения или доставки?",
    locA: "Укажите удобное место в форме или сообщении WhatsApp. KINOVA подтвердит, что возможно для вашей локации и дат.",
  },
};

export function getVehicleFaq(v: Vehicle, locale: Locale) {
  const f = faqTemplates[locale];
  const fill = (s: string) => s.replaceAll("{name}", v.name);
  const priceA =
    v.priceDaily == null
      ? f.priceOnRequest
      : f.priceKnown.replace("{price}", formatPrice(v.priceDaily, v.currency, locale));
  return [
    { q: fill(f.availQ), a: fill(f.availA) },
    { q: fill(f.priceQ), a: priceA },
    { q: fill(f.docsQ), a: f.docsA },
    { q: f.locQ, a: f.locA },
  ];
}
