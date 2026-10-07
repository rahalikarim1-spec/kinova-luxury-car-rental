import type { Localized } from "@/i18n/config";
import type { Faq } from "./types";

const docs = {
  en: "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm the documents required for your booking.",
  ar: "قد تختلف المتطلبات بحسب حالة الإقامة وشروط الإيجار. تواصل مع KINOVA لتأكيد المستندات المطلوبة لحجزك.",
  ru: "Требования могут различаться в зависимости от статуса резидентства и условий аренды. Свяжитесь с KINOVA, чтобы уточнить необходимые документы.",
};

export const homeFaq: Localized<Faq[]> = {
  en: [
    { q: "How can I rent a luxury car in Dubai?", a: "Choose a car from the fleet, then send your request through WhatsApp, by phone or with the enquiry form. KINOVA confirms availability for your dates and agrees the rental details with you." },
    { q: "How do I check vehicle availability?", a: "Open any car page and use Check Availability, or message KINOVA on WhatsApp with the car and your dates. Availability is confirmed per request rather than shown live on the site." },
    { q: "Can tourists rent cars in Dubai?", a: `Visitors regularly enquire about luxury and supercar rentals. ${docs.en}` },
    { q: "What documents may be required?", a: docs.en },
    { q: "Can I request the car through WhatsApp?", a: "Yes. Every car page has a WhatsApp button that opens a message with the vehicle already named, so you only need to add your dates." },
    { q: "Do you serve locations across the UAE?", a: "KINOVA is built around Dubai and the wider UAE. Tell us where you would like the car in your enquiry and the team will confirm what is possible." },
  ],
  ar: [
    { q: "كيف يمكنني استئجار سيارة فاخرة في دبي؟", a: "اختر سيارة من الأسطول ثم أرسل طلبك عبر واتساب أو الهاتف أو نموذج الاستفسار. تؤكد KINOVA التوفر لتواريخك وتتفق معك على تفاصيل الإيجار." },
    { q: "كيف أتحقق من توفر السيارة؟", a: "افتح صفحة أي سيارة واضغط تحقق من التوفر، أو راسل KINOVA عبر واتساب مع السيارة وتواريخك. يتم تأكيد التوفر عند كل طلب وليس بشكل مباشر على الموقع." },
    { q: "هل يمكن للسياح استئجار السيارات في دبي؟", a: `يستفسر الزوار بانتظام عن تأجير السيارات الفاخرة والسوبر كار. ${docs.ar}` },
    { q: "ما المستندات التي قد تكون مطلوبة؟", a: docs.ar },
    { q: "هل يمكنني طلب السيارة عبر واتساب؟", a: "نعم. في كل صفحة سيارة زر واتساب يفتح رسالة تحمل اسم المركبة مسبقاً، فتحتاج فقط إلى إضافة تواريخك." },
    { q: "هل تخدمون مواقع داخل الإمارات؟", a: "تقوم KINOVA على دبي وبقية الإمارات. أخبرنا بالمكان الذي تريد السيارة فيه وسيؤكد الفريق الممكن." },
  ],
  ru: [
    { q: "Как арендовать люксовый автомобиль в Дубае?", a: "Выберите авто в автопарке и отправьте запрос через WhatsApp, по телефону или через форму. KINOVA подтвердит наличие на ваши даты и согласует детали аренды." },
    { q: "Как проверить наличие автомобиля?", a: "Откройте страницу авто и нажмите «Проверить наличие» или напишите KINOVA в WhatsApp с моделью и датами. Наличие подтверждается по каждому запросу, а не отображается на сайте в реальном времени." },
    { q: "Могут ли туристы арендовать авто в Дубае?", a: `Гости регулярно интересуются арендой люксовых авто и суперкаров. ${docs.ru}` },
    { q: "Какие документы могут понадобиться?", a: docs.ru },
    { q: "Можно ли запросить авто через WhatsApp?", a: "Да. На странице каждого авто есть кнопка WhatsApp, открывающая сообщение с уже указанной моделью – останется добавить даты." },
    { q: "Работаете ли вы по всем ОАЭ?", a: "KINOVA ориентирована на Дубай и ОАЭ. Укажите в запросе, где вам нужен автомобиль, и команда подтвердит возможности." },
  ],
};
