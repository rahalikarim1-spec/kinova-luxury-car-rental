import type { Category, CategoryKey } from "./types";

export const categories: Category[] = [
  {
    key: "supercars",
    slug: "supercar-rental-dubai",
    name: { en: "Supercars", ar: "سوبر كار", ru: "Суперкары" },
    blurb: { en: "Lamborghini, Ferrari, McLaren", ar: "لامبورغيني، فيراري، ماكلارين", ru: "Lamborghini, Ferrari, McLaren" },
    title: { en: "Supercar Rental Dubai – Lamborghini, Ferrari, McLaren", ar: "تأجير سوبر كار في دبي – لامبورغيني وفيراري وماكلارين", ru: "Аренда суперкаров в Дубае – Lamborghini, Ferrari, McLaren" },
    description: {
      en: "Rent a supercar in Dubai. Compare Lamborghini, Ferrari and McLaren models and check availability with KINOVA on WhatsApp, phone or enquiry form.",
      ar: "استأجر سوبر كار في دبي. قارن موديلات لامبورغيني وفيراري وماكلارين وتحقق من التوفر مع KINOVA.",
      ru: "Аренда суперкара в Дубае. Сравните модели Lamborghini, Ferrari и McLaren и уточните наличие у KINOVA.",
    },
    h1: { en: "Supercar Rental Dubai", ar: "تأجير سوبر كار في دبي", ru: "Аренда суперкаров в Дубае" },
    intro: {
      en: "For the drive people travel to Dubai to experience. Choose from Lamborghini, Ferrari and McLaren supercars, then check availability for your dates in a message.",
      ar: "للقيادة التي يسافر الناس إلى دبي من أجلها. اختر من سيارات لامبورغيني وفيراري وماكلارين ثم تحقق من التوفر لتواريخك برسالة.",
      ru: "Для поездки, ради которой многие и летят в Дубай. Выберите суперкар Lamborghini, Ferrari или McLaren и уточните наличие на ваши даты одним сообщением.",
    },
    sections: {
      en: [
        { h: "What counts as a supercar?", p: "Supercars are the cars built around performance and presence first – mid-engine layouts, dramatic styling and engines that are an event in themselves. In the KINOVA line-up that includes the Lamborghini Revuelto and Huracán EVO Spyder, the Ferrari F8 Spider and SF90, and the McLaren Artura." },
        { h: "Choosing between models", p: "Open-top cars such as the Huracán EVO Spyder and F8 Spider reward coastal drives and sunset photos. Plug-in hybrids such as the Revuelto, SF90 and Artura show the newest direction in supercar engineering. If you need more than two seats, the Lamborghini Urus brings supercar character to a five-seat SUV." },
        { h: "Practical points for visitors", p: "Supercars are low, wide and usually offer very limited luggage space, so plan accordingly. Requirements for renting vary by residency status and rental conditions – contact KINOVA early to confirm what you will need for your dates." },
      ],
      ar: [
        { h: "ما هي السوبر كار؟", p: "السوبر كار هي السيارات المبنية حول الأداء والحضور أولاً: محرك وسطي وتصميم لافت ومحركات تُعد حدثاً بحد ذاتها. في تشكيلة KINOVA تشمل لامبورغيني ريفويلتو وهوراكان إيفو سبايدر وفيراري F8 سبايدر وSF90 وماكلارين أرتورا." },
        { h: "الاختيار بين الموديلات", p: "السيارات المكشوفة مثل هوراكان سبايدر وF8 سبايدر تناسب القيادة الساحلية وصور الغروب. والهجينة مثل ريفويلتو وSF90 وأرتورا تمثل أحدث اتجاهات هندسة السوبر كار. وإذا احتجت أكثر من مقعدين فأوروس تقدم طابع السوبر كار في سيارة دفع رباعي بخمسة مقاعد." },
        { h: "نقاط عملية للزوار", p: "السوبر كار منخفضة وعريضة ومساحة الأمتعة فيها محدودة جداً، فخطط لذلك. تختلف متطلبات الاستئجار بحسب حالة الإقامة وشروط الإيجار، لذا تواصل مع KINOVA مبكراً لتأكيد ما ستحتاجه." },
      ],
      ru: [
        { h: "Что считается суперкаром?", p: "Суперкары – автомобили, в первую очередь созданные ради динамики и эффекта: среднемоторная компоновка, яркий дизайн и двигатели, которые сами по себе событие. В линейке KINOVA это Lamborghini Revuelto и Huracán EVO Spyder, Ferrari F8 Spider и SF90, McLaren Artura." },
        { h: "Как выбрать модель", p: "Открытые Huracán EVO Spyder и F8 Spider хороши для поездок вдоль побережья и закатных фото. Гибриды Revuelto, SF90 и Artura показывают новейшее направление в суперкарах. Если нужно больше двух мест, Lamborghini Urus даёт характер суперкара в пятиместном внедорожнике." },
        { h: "Практические моменты для гостей", p: "Суперкары низкие и широкие, багажник у них очень небольшой – учитывайте это. Требования к аренде зависят от статуса резидентства и условий аренды – свяжитесь с KINOVA заранее, чтобы уточнить, что понадобится." },
      ],
    },
    why: {
      en: ["Maximum drama: engines, sound and styling that regular rentals cannot match", "A direct route to the models people actually search for", "Several formats – open-top, hybrid or SUV – so you can match the car to the trip"],
      ar: ["أقصى إثارة: محركات وصوت وتصميم لا تقدمه السيارات العادية", "طريق مباشر إلى الموديلات التي يبحث عنها الناس", "عدة صيغ – مكشوفة أو هجينة أو دفع رباعي – لتناسب السيارة رحلتك"],
      ru: ["Максимум эмоций: двигатели, звук и дизайн, недоступные обычной аренде", "Прямой путь к моделям, которые ищут чаще всего", "Разные форматы – открытые, гибридные или внедорожник – под вашу поездку"],
    },
    faq: {
      en: [
        { q: "Which supercars can I rent with KINOVA?", a: "The current line-up includes the Lamborghini Revuelto and Huracán EVO Spyder, the Ferrari F8 Spider and SF90, and the McLaren Artura. The Lamborghini Urus is also available to enquire about for those who need more space." },
        { q: "How do I check supercar availability?", a: "Open a model page and use Check Availability, or message KINOVA on WhatsApp with the car and your dates." },
        { q: "Can I rent a supercar as a tourist?", a: "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm the documents required for your booking." },
      ],
      ar: [
        { q: "ما سيارات السوبر كار التي يمكنني استئجارها من KINOVA؟", a: "تشمل التشكيلة الحالية لامبورغيني ريفويلتو وهوراكان إيفو سبايدر وفيراري F8 سبايدر وSF90 وماكلارين أرتورا، كما يمكن الاستفسار عن أوروس لمن يحتاج مساحة أكبر." },
        { q: "كيف أتحقق من توفر السوبر كار؟", a: "افتح صفحة الموديل واضغط تحقق من التوفر أو راسل KINOVA عبر واتساب مع السيارة وتواريخك." },
        { q: "هل يمكن للسائح استئجار سوبر كار؟", a: "قد تختلف المتطلبات بحسب حالة الإقامة وشروط الإيجار. تواصل مع KINOVA لتأكيد المستندات المطلوبة لحجزك." },
      ],
      ru: [
        { q: "Какие суперкары можно арендовать у KINOVA?", a: "В линейке: Lamborghini Revuelto и Huracán EVO Spyder, Ferrari F8 Spider и SF90, McLaren Artura. Также можно спросить про Lamborghini Urus, если нужно больше места." },
        { q: "Как проверить наличие суперкара?", a: "Откройте страницу модели и нажмите «Проверить наличие» или напишите KINOVA в WhatsApp с моделью и датами." },
        { q: "Может ли турист арендовать суперкар?", a: "Требования могут различаться в зависимости от статуса резидентства и условий аренды. Свяжитесь с KINOVA, чтобы уточнить необходимые документы." },
      ],
    },
    related: ["sports-cars", "convertibles", "luxury-suvs"],
  },
  {
    key: "luxury-cars",
    slug: "luxury-car-rental-dubai",
    name: { en: "Luxury Cars", ar: "سيارات فاخرة", ru: "Люксовые авто" },
    blurb: { en: "Rolls-Royce Ghost, Phantom, Wraith", ar: "رولز رويس غوست وفانتوم ورايث", ru: "Rolls-Royce Ghost, Phantom, Wraith" },
    title: { en: "Luxury Car Rental Dubai – Rolls-Royce & Premium Sedans", ar: "تأجير سيارات فاخرة في دبي – رولز رويس وسيدان فاخرة", ru: "Аренда люксовых авто в Дубае – Rolls-Royce и премиум-седаны" },
    description: {
      en: "Luxury car rental in Dubai: Rolls-Royce Ghost, Phantom, Wraith and Cullinan. Built for arrivals, business and occasions. Check availability with KINOVA.",
      ar: "تأجير سيارات فاخرة في دبي: رولز رويس غوست وفانتوم ورايث وكولينان. للوصول والأعمال والمناسبات. تحقق من التوفر مع KINOVA.",
      ru: "Аренда люксовых авто в Дубае: Rolls-Royce Ghost, Phantom, Wraith и Cullinan. Для приездов, бизнеса и событий. Уточните наличие у KINOVA.",
    },
    h1: { en: "Luxury Car Rental Dubai", ar: "تأجير سيارات فاخرة في دبي", ru: "Аренда люксовых авто в Дубае" },
    intro: {
      en: "When the goal is comfort, status and a calm arrival rather than raw speed. Rolls-Royce flagships anchor this category.",
      ar: "عندما يكون الهدف الراحة والمكانة ووصولاً هادئاً لا السرعة الخام. تتصدر رولز رويس هذه الفئة.",
      ru: "Когда важны комфорт, статус и спокойный приезд, а не скорость. Эту категорию возглавляют флагманы Rolls-Royce.",
    },
    sections: {
      en: [
        { h: "Luxury is about how you arrive", p: "A luxury car rental in Dubai is usually chosen for an occasion: a business meeting, a wedding, an anniversary dinner or simply a few days of travelling in comfort. The Rolls-Royce Ghost and Phantom are built around refinement and rear-seat comfort, the Cullinan adds SUV space, and the Wraith is the grand coupe of the group." },
        { h: "Business and executive use", p: "For executives, presence matters as much as comfort. A flagship saloon or SUV changes how a meeting starts. If you would like to ask about driver arrangements or multi-day schedules, include that in your enquiry so KINOVA can confirm what is possible." },
        { h: "Luxury cars vs. supercars", p: "Choose a luxury car if you value quiet, space and ride quality. Choose a supercar if you want the driving to be the main event. Many visitors take a Rolls-Royce for the evening and ask about a supercar for a separate day." },
      ],
      ar: [
        { h: "الفخامة في طريقة الوصول", p: "تُختار السيارة الفاخرة في دبي عادةً لمناسبة: اجتماع عمل أو زفاف أو عشاء ذكرى أو أيام من التنقل المريح. غوست وفانتوم مبنيتان حول الرقي وراحة المقعد الخلفي، وكولينان تضيف مساحة الدفع الرباعي، ورايث هي الكوبيه الكبيرة بين المجموعة." },
        { h: "للأعمال والتنفيذيين", p: "بالنسبة للتنفيذيين، الحضور بأهمية الراحة. إذا أردت السؤال عن ترتيبات السائق أو جداول متعددة الأيام فاذكر ذلك في الاستفسار لتؤكد KINOVA الممكن." },
        { h: "الفاخرة أم السوبر كار؟", p: "اختر الفاخرة إن كنت تقدّر الهدوء والمساحة وجودة الركوب، واختر السوبر كار إن أردت القيادة نفسها حدثاً رئيسياً. يأخذ كثيرون رولز رويس للأمسية ويسألون عن سوبر كار ليوم آخر." },
      ],
      ru: [
        { h: "Роскошь – это то, как вы приезжаете", p: "Люксовый автомобиль в Дубае обычно выбирают для события: деловая встреча, свадьба, юбилейный ужин или несколько дней комфортных поездок. Rolls-Royce Ghost и Phantom созданы вокруг изысканности и комфорта задних пассажиров, Cullinan добавляет простор внедорожника, Wraith – большое купе." },
        { h: "Для бизнеса и руководителей", p: "Для руководителей статус важен не меньше комфорта. Если хотите узнать про водителя или многодневное расписание, укажите это в запросе, и KINOVA подтвердит возможности." },
        { h: "Люкс или суперкар?", p: "Выбирайте люкс, если цените тишину, простор и плавность хода. Выбирайте суперкар, если главное – сам процесс вождения. Многие берут Rolls-Royce на вечер и спрашивают про суперкар на другой день." },
      ],
    },
    why: {
      en: ["Calm, spacious and made for arrivals", "Flagship models people recognise instantly", "Well suited to business travel, weddings and special occasions"],
      ar: ["هادئة وواسعة ومصممة للوصول", "موديلات رائدة يعرفها الجميع فوراً", "مناسبة للسفر التجاري وحفلات الزفاف والمناسبات الخاصة"],
      ru: ["Спокойные, просторные и созданные для эффектного приезда", "Флагманы, которые узнают с первого взгляда", "Подходят для деловых поездок, свадеб и особых случаев"],
    },
    faq: {
      en: [
        { q: "How can I rent a luxury car in Dubai?", a: "Choose a car from the fleet, then send an enquiry through the form, WhatsApp or phone with your dates. KINOVA confirms availability and the rental details with you." },
        { q: "Which luxury cars are available to enquire about?", a: "The line-up includes the Rolls-Royce Ghost, Phantom, Wraith and Cullinan." },
        { q: "What documents may be required?", a: "Requirements can vary depending on residency status and rental conditions. Contact KINOVA to confirm the documents required for your booking." },
      ],
      ar: [
        { q: "كيف أستأجر سيارة فاخرة في دبي؟", a: "اختر سيارة من الأسطول ثم أرسل استفساراً عبر النموذج أو واتساب أو الهاتف مع تواريخك. تؤكد KINOVA التوفر وتفاصيل الإيجار معك." },
        { q: "أي سيارات فاخرة يمكن الاستفسار عنها؟", a: "تشمل التشكيلة رولز رويس غوست وفانتوم ورايث وكولينان." },
        { q: "ما المستندات المطلوبة؟", a: "قد تختلف المتطلبات بحسب حالة الإقامة وشروط الإيجار. تواصل مع KINOVA لتأكيد المستندات المطلوبة لحجزك." },
      ],
      ru: [
        { q: "Как арендовать люксовый автомобиль в Дубае?", a: "Выберите авто в автопарке и отправьте запрос через форму, WhatsApp или по телефону с датами. KINOVA подтвердит наличие и детали аренды." },
        { q: "Какие люксовые авто можно запросить?", a: "В линейке: Rolls-Royce Ghost, Phantom, Wraith и Cullinan." },
        { q: "Какие документы могут понадобиться?", a: "Требования могут различаться в зависимости от статуса резидентства и условий аренды. Свяжитесь с KINOVA, чтобы уточнить необходимые документы." },
      ],
    },
    related: ["luxury-suvs", "supercars", "sports-cars"],
  },
  {
    key: "sports-cars",
    slug: "sports-car-rental-dubai",
    name: { en: "Sports Cars", ar: "سيارات رياضية", ru: "Спорткары" },
    blurb: { en: "McLaren GT, Corvette, Mustang, Boxster", ar: "ماكلارين GT وكورفيت وموستانج وبوكستر", ru: "McLaren GT, Corvette, Mustang, Boxster" },
    title: { en: "Sports Car Rental Dubai – Corvette, Mustang, Boxster", ar: "تأجير سيارات رياضية في دبي – كورفيت وموستانج وبوكستر", ru: "Аренда спорткаров в Дубае – Corvette, Mustang, Boxster" },
    description: {
      en: "Sports car rental in Dubai: Chevrolet Corvette, Ford Mustang, Porsche Boxster and McLaren GT. Fun to drive and easy to enquire. Check availability with KINOVA.",
      ar: "تأجير سيارات رياضية في دبي: شيفروليه كورفيت وفورد موستانج وبورشه بوكستر وماكلارين GT. تحقق من التوفر مع KINOVA.",
      ru: "Аренда спорткаров в Дубае: Chevrolet Corvette, Ford Mustang, Porsche Boxster и McLaren GT. Уточните наличие у KINOVA.",
    },
    h1: { en: "Sports Car Rental Dubai", ar: "تأجير سيارات رياضية في دبي", ru: "Аренда спорткаров в Дубае" },
    intro: {
      en: "Fast, fun and more approachable than a full supercar. This is the category for drivers who want a car with character and an engaging drive.",
      ar: "سريعة وممتعة وأكثر قرباً من السوبر كار الكاملة. هذه الفئة لمن يريد سيارة بشخصية وقيادة ممتعة.",
      ru: "Быстро, весело и доступнее полноценного суперкара. Категория для тех, кто хочет автомобиль с характером и увлекательной ездой.",
    },
    sections: {
      en: [
        { h: "Sports car or supercar?", p: "A sports car keeps the driving at the centre without the drama of a supercar. The Porsche Boxster is a precise, balanced roadster, the Chevrolet Corvette brings mid-engine V8 performance, the Ford Mustang is the classic muscle car, and the McLaren GT covers distance in comfort with a McLaren badge." },
        { h: "Who it suits", p: "First-time performance renters, couples, and visitors who want an enjoyable car for several days of driving. Several of these models can be driven open-top, which suits Dubai's weather for much of the year." },
        { h: "Making the most of it", p: "Tell KINOVA the length of your rental and your driving plans – coastal roads, a day trip or city driving – and we will point you to the most fitting model." },
      ],
      ar: [
        { h: "رياضية أم سوبر كار؟", p: "السيارة الرياضية تبقي القيادة في المركز دون درامية السوبر كار. بوكستر رودستر دقيقة ومتوازنة، وكورفيت تقدم أداء V8 بمحرك وسطي، وموستانج سيارة العضلات الكلاسيكية، وماكلارين GT تقطع المسافات براحة بشعار ماكلارين." },
        { h: "لمن تناسب", p: "لمن يستأجر سيارة أداء لأول مرة والأزواج والزوار الذين يريدون سيارة ممتعة لعدة أيام. يمكن قيادة عدد من هذه الموديلات مكشوفة وهذا يناسب طقس دبي معظم العام." },
        { h: "للاستفادة القصوى", p: "أخبر KINOVA بمدة الإيجار وخطتك – طرق ساحلية أو رحلة يوم أو قيادة داخل المدينة – وسنرشدك للموديل الأنسب." },
      ],
      ru: [
        { h: "Спорткар или суперкар?", p: "Спорткар оставляет вождение в центре, но без театральности суперкара. Porsche Boxster – точный и сбалансированный родстер, Chevrolet Corvette – среднемоторный V8, Ford Mustang – классический маслкар, McLaren GT – комфортный грандтурер с шильдиком McLaren." },
        { h: "Кому подойдёт", p: "Тем, кто арендует мощный автомобиль впервые, парам и гостям, которым нужен приятный автомобиль на несколько дней. Некоторые модели можно ездить с открытым верхом, что подходит климату Дубая большую часть года." },
        { h: "Как выбрать лучше", p: "Скажите KINOVA срок аренды и планы – побережье, поездка на день или город, и мы подскажем подходящую модель." },
      ],
    },
    why: {
      en: ["More approachable than a full supercar, with real character", "A wide spread of styles – roadster, muscle car, mid-engine and grand tourer", "Good for several days of driving"],
      ar: ["أقرب من السوبر كار الكاملة وبشخصية حقيقية", "تنوع في الأساليب – رودستر وعضلات ومحرك وسطي وسياحية", "مناسبة لعدة أيام من القيادة"],
      ru: ["Доступнее полноценного суперкара и с настоящим характером", "Разные стили – родстер, маслкар, среднемоторный и грандтурер", "Хороши для нескольких дней вождения"],
    },
    faq: {
      en: [
        { q: "Which sports cars are in the line-up?", a: "The Porsche Boxster, Chevrolet Corvette, Ford Mustang and McLaren GT." },
        { q: "Which is best for open-top driving?", a: "The Porsche Boxster is a roadster. Ask KINOVA about convertible versions of the Mustang or Corvette for your dates." },
        { q: "Can I request a sports car through WhatsApp?", a: "Yes. Use the WhatsApp button on any car page and the message is prepared with the model name." },
      ],
      ar: [
        { q: "ما السيارات الرياضية في التشكيلة؟", a: "بورشه بوكستر وشيفروليه كورفيت وفورد موستانج وماكلارين GT." },
        { q: "أيها الأفضل للقيادة المكشوفة؟", a: "بورشه بوكستر رودستر. اسأل KINOVA عن النسخ المكشوفة من موستانج أو كورفيت لتواريخك." },
        { q: "هل يمكنني طلب سيارة رياضية عبر واتساب؟", a: "نعم. استخدم زر واتساب في أي صفحة سيارة وستُجهَّز الرسالة باسم الموديل." },
      ],
      ru: [
        { q: "Какие спорткары есть в линейке?", a: "Porsche Boxster, Chevrolet Corvette, Ford Mustang и McLaren GT." },
        { q: "Что лучше для езды с открытым верхом?", a: "Porsche Boxster – родстер. Про кабриолет-версии Mustang или Corvette спросите KINOVA на ваши даты." },
        { q: "Можно ли запросить спорткар через WhatsApp?", a: "Да. Нажмите кнопку WhatsApp на странице любого авто – сообщение подготовлено с названием модели." },
      ],
    },
    related: ["supercars", "convertibles", "luxury-cars"],
  },
  {
    key: "luxury-suvs",
    slug: "luxury-suv-rental-dubai",
    name: { en: "Luxury SUVs", ar: "دفع رباعي فاخر", ru: "Люксовые внедорожники" },
    blurb: { en: "Urus, Cullinan, Defender", ar: "أوروس وكولينان وديفندر", ru: "Urus, Cullinan, Defender" },
    title: { en: "Luxury SUV Rental Dubai – Urus, Cullinan, Defender", ar: "تأجير سيارات دفع رباعي فاخرة في دبي – أوروس وكولينان وديفندر", ru: "Аренда люксовых внедорожников в Дубае – Urus, Cullinan" },
    description: {
      en: "Luxury SUV rental in Dubai: Lamborghini Urus, Rolls-Royce Cullinan and Range Rover Defender. Space, comfort and presence. Check availability with KINOVA.",
      ar: "تأجير سيارات دفع رباعي فاخرة في دبي: لامبورغيني أوروس ورولز رويس كولينان ورينج روفر ديفندر. تحقق من التوفر مع KINOVA.",
      ru: "Аренда люксовых внедорожников в Дубае: Lamborghini Urus, Rolls-Royce Cullinan и Range Rover Defender. Уточните наличие у KINOVA.",
    },
    h1: { en: "Luxury SUV Rental Dubai", ar: "تأجير سيارات دفع رباعي فاخرة في دبي", ru: "Аренда люксовых внедорожников в Дубае" },
    intro: {
      en: "Space for people and luggage without giving up the badge. Three very different luxury SUVs cover performance, refinement and capability.",
      ar: "مساحة للأشخاص والأمتعة دون التنازل عن الشعار. ثلاث سيارات دفع رباعي فاخرة مختلفة تغطي الأداء والرقي والقدرة.",
      ru: "Место для людей и багажа без отказа от статуса. Три очень разных люксовых внедорожника – динамика, утончённость и проходимость.",
    },
    sections: {
      en: [
        { h: "Three SUVs, three personalities", p: "The Lamborghini Urus is the performance SUV, with supercar attitude and room for five. The Rolls-Royce Cullinan is the refined one, focused on comfort and presence. The Range Rover Defender is the capable, practical option with a distinctive look." },
        { h: "When an SUV makes sense", p: "Airport arrivals with luggage, family trips, groups of friends, and days when you want a higher seating position. For many visitors the SUV is the only way to keep the whole group in a single premium car." },
        { h: "Tell us who is travelling", p: "Include the number of passengers and bags in your enquiry. Seat counts can vary between versions, so KINOVA confirms the details for the vehicle available on your dates." },
      ],
      ar: [
        { h: "ثلاث سيارات وثلاث شخصيات", p: "لامبورغيني أوروس هي سيارة الأداء بطابع السوبر كار ومساحة لخمسة. ورولز رويس كولينان هي الراقية التي تركز على الراحة والحضور. ورينج روفر ديفندر الخيار العملي القادر بمظهر مميز." },
        { h: "متى يكون الدفع الرباعي منطقياً", p: "وصول المطار مع الأمتعة، رحلات العائلة، مجموعات الأصدقاء، والأيام التي تريد فيها وضعية جلوس أعلى. لكثير من الزوار هو الطريقة الوحيدة لجمع المجموعة في سيارة فاخرة واحدة." },
        { h: "أخبرنا من يسافر", p: "اذكر عدد الركاب والحقائب في استفسارك. قد يختلف عدد المقاعد بين النسخ، وتؤكد KINOVA التفاصيل للسيارة المتاحة في تواريخك." },
      ],
      ru: [
        { h: "Три внедорожника – три характера", p: "Lamborghini Urus – внедорожник-перформанс с характером суперкара и местами на пятерых. Rolls-Royce Cullinan – утончённый, с упором на комфорт и статус. Range Rover Defender – проходимый и практичный, с узнаваемым внешним видом." },
        { h: "Когда нужен внедорожник", p: "Приезд из аэропорта с багажом, семейные поездки, компания друзей и дни, когда хочется более высокой посадки. Для многих гостей это единственный способ уместить всех в одном премиальном автомобиле." },
        { h: "Расскажите, кто едет", p: "Укажите число пассажиров и чемоданов. Число мест может отличаться по версиям, KINOVA подтвердит детали для доступного на ваши даты авто." },
      ],
    },
    why: {
      en: ["Room for groups and luggage", "From performance (Urus) to refinement (Cullinan) to capability (Defender)", "Practical for airport arrivals and family trips"],
      ar: ["مساحة للمجموعات والأمتعة", "من الأداء (أوروس) إلى الرقي (كولينان) إلى القدرة (ديفندر)", "عملية لوصول المطار ورحلات العائلة"],
      ru: ["Место для компании и багажа", "От динамики (Urus) до утончённости (Cullinan) и проходимости (Defender)", "Практичны для приезда из аэропорта и семейных поездок"],
    },
    faq: {
      en: [
        { q: "Which luxury SUVs can I enquire about?", a: "The Lamborghini Urus, Rolls-Royce Cullinan and Range Rover Defender." },
        { q: "Which SUV is best for a group?", a: "Share your group size and luggage when you enquire. KINOVA confirms seating for the version available for your dates." },
        { q: "Do you serve locations across the UAE?", a: "KINOVA serves Dubai and the wider UAE. Tell us your preferred location in your enquiry and we will confirm what is possible." },
      ],
      ar: [
        { q: "عن أي سيارات دفع رباعي فاخرة يمكنني الاستفسار؟", a: "لامبورغيني أوروس ورولز رويس كولينان ورينج روفر ديفندر." },
        { q: "أيها الأفضل لمجموعة؟", a: "شارك حجم مجموعتك وأمتعتك عند الاستفسار. تؤكد KINOVA عدد المقاعد للنسخة المتاحة." },
        { q: "هل تخدمون مواقع داخل الإمارات؟", a: "تخدم KINOVA دبي وبقية الإمارات. أخبرنا بموقعك المفضل وسنؤكد الممكن." },
      ],
      ru: [
        { q: "О каких люксовых внедорожниках можно спросить?", a: "Lamborghini Urus, Rolls-Royce Cullinan и Range Rover Defender." },
        { q: "Какой внедорожник лучше для компании?", a: "Укажите число людей и багажа в запросе. KINOVA подтвердит число мест для доступной версии." },
        { q: "Работаете ли вы по другим местам в ОАЭ?", a: "KINOVA работает в Дубае и по ОАЭ. Укажите удобное место в запросе, и мы подтвердим возможности." },
      ],
    },
    related: ["luxury-cars", "supercars", "sports-cars"],
  },
  {
    key: "convertibles",
    slug: "convertible-car-rental-dubai",
    name: { en: "Convertibles", ar: "سيارات مكشوفة", ru: "Кабриолеты" },
    blurb: { en: "Huracán Spyder, F8 Spider, Boxster", ar: "هوراكان سبايدر وF8 سبايدر وبوكستر", ru: "Huracán Spyder, F8 Spider, Boxster" },
    title: { en: "Convertible Car Rental Dubai – Spyder, Spider, Roadster", ar: "تأجير سيارات مكشوفة في دبي – سبايدر ورودستر", ru: "Аренда кабриолетов в Дубае – Spyder, Spider, Roadster" },
    description: {
      en: "Convertible car rental in Dubai: Lamborghini Huracán EVO Spyder, Ferrari F8 Spider and Porsche Boxster. Open-top driving made easy to enquire.",
      ar: "تأجير سيارات مكشوفة في دبي: لامبورغيني هوراكان إيفو سبايدر وفيراري F8 سبايدر وبورشه بوكستر. تحقق من التوفر مع KINOVA.",
      ru: "Аренда кабриолетов в Дубае: Lamborghini Huracán EVO Spyder, Ferrari F8 Spider и Porsche Boxster. Уточните наличие у KINOVA.",
    },
    h1: { en: "Convertible Car Rental Dubai", ar: "تأجير سيارات مكشوفة في دبي", ru: "Аренда кабриолетов в Дубае" },
    intro: {
      en: "Roof down, skyline up. Open-top cars turn a drive in Dubai into the main event – choose a Lamborghini Spyder, a Ferrari Spider or a Porsche roadster.",
      ar: "السقف مفتوح والأفق أمامك. السيارات المكشوفة تجعل القيادة في دبي الحدث الرئيسي – اختر لامبورغيني سبايدر أو فيراري سبايدر أو بورشه رودستر.",
      ru: "Крыша убрана – город перед глазами. Кабриолет превращает поездку по Дубаю в главное событие: выберите Lamborghini Spyder, Ferrari Spider или родстер Porsche.",
    },
    sections: {
      en: [
        { h: "Why go open-top in Dubai?", p: "Dubai's coastline, long boulevards and evening skyline are made for open cars. Cooler months make roof-down driving comfortable through much of the day; in summer, evenings and early mornings are the natural windows." },
        { h: "Spyder, Spider, roadster", p: "The Lamborghini Huracán EVO Spyder pairs a V10 with an open cabin. The Ferrari F8 Spider brings a twin-turbo V8 and a retractable hard top. The Porsche Boxster is the lighter, more accessible roadster of the three." },
        { h: "Plan around the weather and your luggage", p: "Open-top cars have limited luggage space and the roof position is a daily decision. Tell KINOVA your dates and what you plan to carry and we will help match the right car." },
      ],
      ar: [
        { h: "لماذا القيادة المكشوفة في دبي؟", p: "ساحل دبي وشوارعها الطويلة وأفقها المسائي مصنوعة للسيارات المكشوفة. الأشهر الأبرد تجعل القيادة والسقف مفتوح مريحة معظم اليوم، وفي الصيف تكون المساءات والصباحات الباكرة هي الأنسب." },
        { h: "سبايدر وسبايدر ورودستر", p: "لامبورغيني هوراكان إيفو سبايدر تجمع V10 مع مقصورة مفتوحة. وفيراري F8 سبايدر تقدم V8 بتيربو مزدوج وسقفاً صلباً قابلاً للطي. وبورشه بوكستر هي الرودستر الأخف والأسهل." },
        { h: "خطط حسب الطقس والأمتعة", p: "للسيارات المكشوفة مساحة أمتعة محدودة. أخبر KINOVA بتواريخك وما ستحمله لنساعدك في اختيار السيارة المناسبة." },
      ],
      ru: [
        { h: "Зачем кабриолет в Дубае?", p: "Побережье Дубая, длинные бульвары и вечерний силуэт города созданы для открытых машин. В прохладные месяцы ездить без крыши комфортно большую часть дня; летом лучше вечер и раннее утро." },
        { h: "Spyder, Spider, родстер", p: "Lamborghini Huracán EVO Spyder сочетает V10 с открытым салоном. Ferrari F8 Spider – битурбо V8 и складная жёсткая крыша. Porsche Boxster – самый лёгкий и доступный из трёх родстер." },
        { h: "Учитывайте погоду и багаж", p: "У кабриолетов небольшой багажник. Сообщите KINOVA даты и что планируете везти – поможем подобрать подходящий автомобиль." },
      ],
    },
    why: {
      en: ["The best way to experience Dubai's coastline and skyline", "Three distinct styles: V10 Spyder, V8 Spider and a balanced roadster", "Natural for photos, couples and special days"],
      ar: ["أفضل طريقة لتجربة ساحل دبي وأفقها", "ثلاثة أساليب: V10 سبايدر وV8 سبايدر ورودستر متوازنة", "مثالية للصور والأزواج والأيام الخاصة"],
      ru: ["Лучший способ увидеть побережье и силуэт Дубая", "Три стиля: V10 Spyder, V8 Spider и сбалансированный родстер", "Отлично для фото, пар и особых дней"],
    },
    faq: {
      en: [
        { q: "Which convertibles can I enquire about?", a: "The Lamborghini Huracán EVO Spyder, Ferrari F8 Spider and Porsche Boxster." },
        { q: "Is open-top driving comfortable in Dubai?", a: "It depends on the season and time of day. Evenings and cooler months are the most comfortable; KINOVA can advise when you enquire." },
        { q: "Will my luggage fit?", a: "Open-top cars have limited luggage space. Tell KINOVA what you plan to carry and the team will advise on the best match." },
      ],
      ar: [
        { q: "عن أي سيارات مكشوفة يمكنني الاستفسار؟", a: "لامبورغيني هوراكان إيفو سبايدر وفيراري F8 سبايدر وبورشه بوكستر." },
        { q: "هل القيادة المكشوفة مريحة في دبي؟", a: "تعتمد على الموسم ووقت اليوم. المساء والأشهر الأبرد هي الأكثر راحة، وتنصحك KINOVA عند الاستفسار." },
        { q: "هل ستتسع أمتعتي؟", a: "مساحة الأمتعة في السيارات المكشوفة محدودة. أخبر KINOVA بما ستحمله وسترشدك للأنسب." },
      ],
      ru: [
        { q: "О каких кабриолетах можно спросить?", a: "Lamborghini Huracán EVO Spyder, Ferrari F8 Spider и Porsche Boxster." },
        { q: "Комфортно ли ездить без крыши в Дубае?", a: "Зависит от сезона и времени суток. Комфортнее всего вечером и в прохладные месяцы; KINOVA подскажет при запросе." },
        { q: "Поместится ли мой багаж?", a: "В кабриолетах мало места для багажа. Скажите KINOVA, что планируете везти, и мы подскажем лучший вариант." },
      ],
    },
    related: ["supercars", "sports-cars", "luxury-cars"],
  },
];

export const categoryByKey = (key: CategoryKey) => categories.find((c) => c.key === key)!;
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
