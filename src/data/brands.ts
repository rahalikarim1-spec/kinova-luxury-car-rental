import { brandExtras } from "./landing-extras";
import type { Brand, BrandKey } from "./types";

const baseBrands: Brand[] = [
  {
    key: "lamborghini",
    slug: "lamborghini",
    name: { en: "Lamborghini", ar: "لامبورغيني", ru: "Ламборгини" },
    title: {
      en: "Lamborghini Rental Dubai – Urus, Revuelto, Huracán",
      ar: "تأجير لامبورغيني في دبي – أوروس، ريفويلتو، هوراكان",
      ru: "Аренда Ламборгини в Дубае – Urus, Revuelto, Huracán",
    },
    description: {
      en: "Rent a Lamborghini in Dubai: Urus, Revuelto or Huracán EVO Spyder. See each model and check availability with KINOVA on WhatsApp, by phone or enquiry form.",
      ar: "استأجر لامبورغيني في دبي: أوروس أو ريفويلتو أو هوراكان إيفو سبايدر. تعرّف على كل موديل وتحقق من التوفر مع KINOVA.",
      ru: "Аренда Ламборгини (Lamborghini) в Дубае: Urus, Revuelto или Huracán EVO Spyder. Выберите модель и уточните наличие у KINOVA в WhatsApp, по телефону или через форму.",
    },
    h1: { en: "Lamborghini Rental Dubai", ar: "تأجير لامبورغيني في دبي", ru: "Аренда Ламборгини в Дубае" },
    intro: {
      en: "Three very different ways to drive a Lamborghini in Dubai: the five-seat Urus for everyday presence, the Revuelto as the brand's flagship V12 plug-in hybrid, and the Huracán EVO Spyder when you want a V10 with the roof down.",
      ar: "ثلاث طرق مختلفة لقيادة لامبورغيني في دبي: أوروس بخمسة مقاعد للحضور اليومي، وريفويلتو الرائدة بمحرك V12 الهجين، وهوراكان إيفو سبايدر لمن يريد V10 والسقف مفتوح.",
      ru: "Три совершенно разных способа почувствовать Lamborghini в Дубае: пятиместный Urus на каждый день, флагманский гибрид Revuelto с V12 и Huracán EVO Spyder с V10 и открытым верхом.",
    },
    body: {
      en: [
        "Which Lamborghini is right depends on who is in the car. The Urus is the practical one – room for four or five people and their luggage, with the performance Lamborghini is known for. The Revuelto and Huracán EVO Spyder are two-seaters built for the driver, and they suit couples, solo drivers and anyone chasing the full supercar experience.",
        "If photos matter, the Huracán EVO Spyder is the obvious pick for Dubai's coastal roads, while the Revuelto draws the most attention anywhere in the city. Tell KINOVA your dates, how many people are travelling and where you want to drive, and we will point you to the best fit.",
      ],
      ar: [
        "اختيار لامبورغيني المناسبة يعتمد على من سيركب معك. أوروس هي الأكثر عملية بمساحة لأربعة أو خمسة أشخاص وأمتعتهم مع الأداء المعروف عن لامبورغيني. أما ريفويلتو وهوراكان إيفو سبايدر فهما بمقعدين للسائق، وتناسبان الأزواج والسائقين المنفردين ومن يبحث عن تجربة السوبر كار الكاملة.",
        "أخبر KINOVA بتواريخك وعدد المسافرين ومكان القيادة وسنرشدك إلى الأنسب.",
      ],
      ru: [
        "Какая Lamborghini подойдёт, зависит от того, кто едет. Urus – самый практичный вариант: места для четверых-пятерых и багажа при фирменной динамике. Revuelto и Huracán EVO Spyder – двухместные, сделанные для водителя, они подходят парам и тем, кто хочет полноценный суперкар.",
        "Сообщите KINOVA даты, число пассажиров и маршрут – подскажем лучший вариант.",
      ],
    },
    faq: {
      en: [
        { q: "Which Lamborghini models can I enquire about?", a: "The current line-up includes the Lamborghini Urus, Revuelto and Huracán EVO Spyder. Availability changes by date, so message KINOVA with your dates to confirm." },
        { q: "Which Lamborghini is best for a group?", a: "The Urus is the only five-seat model in the line-up. The Revuelto and Huracán EVO Spyder are two-seaters." },
        { q: "Do I need to choose the exact model before contacting you?", a: "No. Tell us the experience you want – open-top, flagship or practical – and KINOVA will suggest options for your dates." },
      ],
      ar: [
        { q: "عن أي موديلات لامبورغيني يمكنني الاستفسار؟", a: "تشمل التشكيلة الحالية لامبورغيني أوروس وريفويلتو وهوراكان إيفو سبايدر. يتغير التوفر بحسب التاريخ، لذا راسل KINOVA بتواريخك للتأكيد." },
        { q: "أي لامبورغيني الأنسب لمجموعة؟", a: "أوروس هي الموديل الوحيد بخمسة مقاعد في التشكيلة. أما ريفويلتو وهوراكان إيفو سبايدر فبمقعدين." },
      ],
      ru: [
        { q: "О каких моделях Lamborghini можно спросить?", a: "В линейке: Lamborghini Urus, Revuelto и Huracán EVO Spyder. Наличие зависит от дат – напишите KINOVA, чтобы подтвердить." },
        { q: "Какая Lamborghini подойдёт для компании?", a: "Urus – единственная пятиместная модель в линейке. Revuelto и Huracán EVO Spyder – двухместные." },
      ],
    },
  },
  {
    key: "ferrari",
    slug: "ferrari",
    name: { en: "Ferrari", ar: "فيراري", ru: "Феррари" },
    title: {
      en: "Ferrari Rental Dubai – F8 Spider & SF90",
      ar: "تأجير فيراري في دبي – F8 سبايدر وSF90",
      ru: "Аренда Феррари в Дубае – F8 Spider и SF90",
    },
    description: {
      en: "Rent a Ferrari in Dubai: F8 Spider or SF90. Compare the models and request availability from KINOVA by WhatsApp, phone or enquiry form.",
      ar: "استأجر فيراري في دبي: F8 سبايدر أو SF90. قارن الموديلات واطلب التوفر من KINOVA.",
      ru: "Аренда Феррари (Ferrari) в Дубае: F8 Spider или SF90. Сравните модели и запросите наличие у KINOVA.",
    },
    h1: { en: "Ferrari Rental Dubai", ar: "تأجير فيراري في دبي", ru: "Аренда Феррари в Дубае" },
    intro: {
      en: "Two Ferraris, two characters. The F8 Spider is a twin-turbo V8 convertible built around the drive itself; the SF90 is a plug-in hybrid supercar that shows how far the brand has pushed performance.",
      ar: "فيراريان بشخصيتين. F8 سبايدر مكشوفة بمحرك V8 بتيربو مزدوج مبنية حول متعة القيادة، وSF90 سوبر كار هجينة تُظهر إلى أي مدى دفعت العلامة حدود الأداء.",
      ru: "Два Ferrari – два характера. F8 Spider – кабриолет с битурбо V8, созданный ради самого вождения; SF90 – гибридный суперкар, показывающий, как далеко марка продвинула динамику.",
    },
    body: {
      en: [
        "For most visitors the choice comes down to roof or no roof. The F8 Spider has a retractable hard top, so it works for a sunset drive along the coast and for a quieter run when the weather turns. The SF90 is the more technical car – plug-in hybrid power and a very different character from a traditional naturally-aspirated Ferrari.",
        "Both are two-seaters. If you are planning a longer rental or travelling with luggage, tell KINOVA when you enquire so the right car can be matched to your plans. The exact SF90 variant and model year are confirmed with each request.",
      ],
      ar: [
        "لمعظم الزوار يتلخص الاختيار في سقف أو بلا سقف. F8 سبايدر بسقف صلب قابل للطي فتناسب قيادة الغروب على الساحل. أما SF90 فهي الأكثر تقنية بقوة هجينة وشخصية مختلفة تماماً.",
        "كلتاهما بمقعدين. إذا كنت تخطط لإيجار أطول أو تسافر بأمتعة فأخبر KINOVA عند الاستفسار. تُؤكَّد نسخة SF90 وسنة الصنع مع كل طلب.",
      ],
      ru: [
        "Для большинства гостей выбор сводится к крыше. У F8 Spider складная жёсткая крыша – подходит и для заката на побережье, и для спокойной поездки. SF90 – более технологичный автомобиль с гибридной установкой и совсем иным характером.",
        "Оба автомобиля двухместные. Если планируете более длительную аренду или поездку с багажом, укажите это в запросе. Вариант SF90 и год выпуска подтверждаются по каждому запросу.",
      ],
    },
    faq: {
      en: [
        { q: "Which Ferrari models can I enquire about?", a: "The current line-up lists the Ferrari F8 Spider and the Ferrari SF90. Availability and the exact variant are confirmed for each request." },
        { q: "Is the F8 Spider a convertible?", a: "Yes. The F8 Spider has a retractable hard top." },
        { q: "How do I check Ferrari availability for my dates?", a: "Open the model page and use Check Availability, or message KINOVA on WhatsApp with the car and your dates." },
      ],
      ar: [
        { q: "عن أي موديلات فيراري يمكنني الاستفسار؟", a: "تشمل التشكيلة الحالية فيراري F8 سبايدر وفيراري SF90. يُؤكَّد التوفر والنسخة مع كل طلب." },
        { q: "هل F8 سبايدر مكشوفة؟", a: "نعم، F8 سبايدر بسقف صلب قابل للطي." },
      ],
      ru: [
        { q: "О каких моделях Ferrari можно спросить?", a: "В линейке: Ferrari F8 Spider и Ferrari SF90. Наличие и вариант подтверждаются по каждому запросу." },
        { q: "F8 Spider – это кабриолет?", a: "Да, у F8 Spider складная жёсткая крыша." },
      ],
    },
  },
  {
    key: "mclaren",
    slug: "mclaren",
    name: { en: "McLaren", ar: "ماكلارين", ru: "Макларен" },
    title: {
      en: "McLaren Rental Dubai – Artura & GT",
      ar: "تأجير ماكلارين في دبي – أرتورا وGT",
      ru: "Аренда Макларен в Дубае – Artura и GT",
    },
    description: {
      en: "Rent a McLaren in Dubai: Artura hybrid supercar or the grand-touring McLaren GT. Check availability with KINOVA on WhatsApp, phone or enquiry form.",
      ar: "استأجر ماكلارين في دبي: سوبر كار أرتورا الهجينة أو ماكلارين GT. تحقق من التوفر مع KINOVA.",
      ru: "Аренда Макларен (McLaren) в Дубае: гибридный суперкар Artura или грандтурер McLaren GT. Уточните наличие у KINOVA.",
    },
    h1: { en: "McLaren Rental Dubai", ar: "تأجير ماكلارين في دبي", ru: "Аренда Макларен в Дубае" },
    intro: {
      en: "McLaren builds cars around lightness and driver feedback. The Artura is its plug-in hybrid supercar; the McLaren GT is the one designed to cover distance comfortably, with room for luggage.",
      ar: "تبني ماكلارين سياراتها حول الخفة وإحساس السائق. أرتورا هي السوبر كار الهجينة، وماكلارين GT مصممة لقطع المسافات براحة ومساحة للأمتعة.",
      ru: "McLaren строит автомобили вокруг лёгкости и обратной связи. Artura – гибридный суперкар марки; McLaren GT создан для комфортных дальних поездок и позволяет взять багаж.",
    },
    body: {
      en: [
        "If you want the sharpest, most focused drive, ask about the Artura. If your plans include an airport run, a hotel check-in and a day out, the McLaren GT is the more sensible way to arrive in a McLaren without giving up the badge.",
        "McLaren is a popular choice for visitors who already know the brand from motorsport. Message KINOVA with the dates and we will confirm which model is available.",
      ],
      ar: [
        "إذا أردت القيادة الأكثر حدة وتركيزاً فاسأل عن أرتورا. وإذا كانت خطتك تشمل المطار والفندق ويوماً خارجياً فماكلارين GT هي الخيار الأنسب.",
        "ماكلارين خيار شائع لمن يعرف العلامة من رياضة المحركات. راسل KINOVA بتواريخك وسنؤكد الموديل المتاح.",
      ],
      ru: [
        "Если нужен самый острый и сосредоточенный драйв – спрашивайте про Artura. Если в планах аэропорт, заселение в отель и день в городе, McLaren GT – более разумный способ приехать на McLaren.",
        "McLaren часто выбирают те, кто знает марку по автоспорту. Напишите KINOVA даты, и мы подтвердим доступную модель.",
      ],
    },
    faq: {
      en: [
        { q: "What is the difference between the McLaren Artura and the McLaren GT?", a: "The Artura is a plug-in hybrid supercar focused on driving dynamics. The McLaren GT is a grand tourer designed for comfort over distance, with space for luggage." },
        { q: "Can I request both McLaren models in one enquiry?", a: "Yes. Mention both and your dates in the message and KINOVA will confirm what is available." },
        { q: "Are McLaren prices listed online?", a: "Pricing is currently shown as Price on Request. KINOVA confirms rates when you enquire." },
      ],
      ar: [
        { q: "ما الفرق بين ماكلارين أرتورا وماكلارين GT؟", a: "أرتورا سوبر كار هجينة تركز على ديناميكية القيادة، وماكلارين GT سيارة سياحية مصممة للراحة على المسافات مع مساحة للأمتعة." },
        { q: "هل الأسعار معروضة على الموقع؟", a: "الأسعار تُعرض حالياً عند الطلب. تؤكد KINOVA الأسعار عند الاستفسار." },
      ],
      ru: [
        { q: "В чём разница между McLaren Artura и McLaren GT?", a: "Artura – гибридный суперкар, нацеленный на динамику. McLaren GT – грандтурер для комфортных дальних поездок с багажным отделением." },
        { q: "Указаны ли цены на McLaren на сайте?", a: "Сейчас цена указана как «по запросу». KINOVA подтверждает тарифы при обращении." },
      ],
    },
  },
  {
    key: "rolls-royce",
    slug: "rolls-royce",
    name: { en: "Rolls-Royce", ar: "رولز رويس", ru: "Роллс-Ройс" },
    title: {
      en: "Rolls-Royce Rental Dubai – Ghost, Cullinan, Phantom",
      ar: "تأجير رولز رويس في دبي – غوست وكولينان وفانتوم",
      ru: "Аренда Роллс-Ройс в Дубае – Ghost, Cullinan, Phantom",
    },
    description: {
      en: "Rent a Rolls-Royce in Dubai: Ghost, Cullinan, Phantom or Wraith. Choose the model and check availability with KINOVA on WhatsApp, phone or enquiry form.",
      ar: "استأجر رولز رويس في دبي: غوست أو كولينان أو فانتوم أو رايث. اختر الموديل وتحقق من التوفر مع KINOVA.",
      ru: "Аренда Роллс-Ройс (Rolls-Royce) в Дубае: Ghost, Cullinan, Phantom или Wraith. Выберите модель и уточните наличие у KINOVA.",
    },
    h1: { en: "Rolls-Royce Rental Dubai", ar: "تأجير رولز رويس في دبي", ru: "Аренда Роллс-Ройс в Дубае" },
    intro: {
      en: "Rolls-Royce is less about speed and more about arrival. Choose the Ghost for refined everyday luxury, the Cullinan for the brand's SUV, the Phantom for the ultimate statement or the Wraith for a grand coupe.",
      ar: "رولز رويس ليست عن السرعة بقدر ما هي عن طريقة الوصول. اختر غوست للفخامة المصقولة، وكولينان للدفع الرباعي، وفانتوم لأقصى حضور، أو رايث للكوبيه الفاخرة.",
      ru: "Rolls-Royce – это не про скорость, а про то, как вы приезжаете. Ghost – утончённая роскошь на каждый день, Cullinan – внедорожник марки, Phantom – максимальное заявление, Wraith – большое купе.",
    },
    body: {
      en: [
        "Rolls-Royce rentals are popular for weddings, business arrivals, anniversaries and hotel evenings. The Ghost and Phantom are saloons with a focus on rear-seat comfort, the Cullinan adds ride height and space, and the Wraith is the driver's coupe in the family.",
        "If you would like to know whether a chauffeur arrangement is possible for your dates, mention it in your enquiry and KINOVA will confirm what can be offered.",
      ],
      ar: [
        "تشتهر رولز رويس في حفلات الزفاف ووصول رجال الأعمال والمناسبات وأمسيات الفنادق. غوست وفانتوم سيدان تركّز على راحة المقعد الخلفي، وكولينان تضيف الارتفاع والمساحة، ورايث هي كوبيه السائق في العائلة.",
        "إذا أردت معرفة إمكانية ترتيب سائق لتواريخك فاذكر ذلك في الاستفسار وستؤكد KINOVA ما يمكن تقديمه.",
      ],
      ru: [
        "Rolls-Royce часто выбирают для свадеб, деловых приездов, юбилеев и вечеров в отеле. Ghost и Phantom – седаны с упором на комфорт задних пассажиров, Cullinan добавляет клиренс и пространство, Wraith – купе для водителя.",
        "Если важно, возможна ли поездка с водителем на ваши даты, укажите это в запросе, и KINOVA подтвердит, что можно предложить.",
      ],
    },
    faq: {
      en: [
        { q: "Which Rolls-Royce models can I enquire about?", a: "The line-up includes the Rolls-Royce Ghost, Cullinan, Phantom and Wraith." },
        { q: "Which Rolls-Royce is best for a wedding or special occasion?", a: "The Phantom and Ghost are the classic choices for arrivals. Tell KINOVA the occasion and dates and we will advise on availability." },
        { q: "Can I ask about a chauffeur?", a: "You can include it in your enquiry. KINOVA will confirm whether it is possible for your dates." },
      ],
      ar: [
        { q: "عن أي موديلات رولز رويس يمكنني الاستفسار؟", a: "تشمل التشكيلة رولز رويس غوست وكولينان وفانتوم ورايث." },
        { q: "أي رولز رويس تناسب حفل زفاف أو مناسبة خاصة؟", a: "فانتوم وغوست الخياران الكلاسيكيان للوصول. أخبر KINOVA بالمناسبة والتواريخ." },
      ],
      ru: [
        { q: "О каких моделях Rolls-Royce можно спросить?", a: "В линейке: Rolls-Royce Ghost, Cullinan, Phantom и Wraith." },
        { q: "Какой Rolls-Royce лучше для свадьбы или особого случая?", a: "Phantom и Ghost – классический выбор для торжественного приезда. Укажите повод и даты, и мы подскажем." },
      ],
    },
  },
  {
    key: "porsche",
    slug: "porsche",
    name: { en: "Porsche", ar: "بورشه", ru: "Порше" },
    title: {
      en: "Porsche Rental Dubai – Boxster Roadster",
      ar: "تأجير بورشه في دبي – بوكستر",
      ru: "Аренда Порше в Дубае – Boxster",
    },
    description: {
      en: "Rent a Porsche Boxster in Dubai, a two-seat open-top roadster. Check availability with KINOVA on WhatsApp, phone or enquiry form.",
      ar: "استأجر بورشه بوكستر في دبي، رودستر مكشوفة بمقعدين. تحقق من التوفر مع KINOVA.",
      ru: "Аренда Porsche Boxster в Дубае – двухместный родстер с открытым верхом. Уточните наличие у KINOVA.",
    },
    h1: { en: "Porsche Rental Dubai", ar: "تأجير بورشه في دبي", ru: "Аренда Порше в Дубае" },
    intro: {
      en: "The Porsche Boxster is a mid-engine, two-seat roadster – a good entry point to open-top driving in Dubai when you want balance and precision more than raw power.",
      ar: "بورشه بوكستر رودستر بمحرك وسطي ومقعدين، بداية جيدة للقيادة المكشوفة في دبي عندما تريد التوازن والدقة أكثر من القوة الخام.",
      ru: "Porsche Boxster – двухместный родстер со среднемоторной компоновкой. Хороший вариант для поездки с открытым верхом в Дубае, если вам важны баланс и точность, а не только мощность.",
    },
    body: {
      en: [
        "The Boxster suits drivers who value handling and the experience of an open car at normal speeds, which is exactly how most Dubai driving works: coastal roads, Palm Jumeirah and an evening on Sheikh Zayed Road. It is also a sensible first step before moving up to a supercar.",
        "Tell KINOVA how long you need the car and whether you are travelling with luggage, so we can confirm the Boxster is the right fit for your plans.",
      ],
      ar: [
        "تناسب بوكستر السائقين الذين يقدّرون الثبات والقيادة في سيارة مكشوفة بسرعات عادية، وهذا ما تعنيه القيادة في دبي: الطرق الساحلية ونخلة جميرا ومساءً على شارع الشيخ زايد.",
        "أخبر KINOVA بمدة الإيجار وما إذا كنت تسافر بأمتعة لنتأكد أن بوكستر مناسبة لخطتك.",
      ],
      ru: [
        "Boxster подходит тем, кто ценит управляемость и ощущение открытой машины на обычных скоростях – а именно так и ездят по Дубаю: прибрежные дороги, Palm Jumeirah, вечер на Sheikh Zayed Road.",
        "Скажите KINOVA, на какой срок нужен автомобиль и едете ли вы с багажом, чтобы мы подтвердили, что Boxster вам подходит.",
      ],
    },
    faq: {
      en: [
        { q: "How many people fit in the Porsche Boxster?", a: "The Boxster is a two-seater." },
        { q: "Is the Boxster an open-top car?", a: "Yes, it is a roadster with a folding roof." },
      ],
      ar: [
        { q: "كم شخصاً تتسع بورشه بوكستر؟", a: "بوكستر بمقعدين." },
        { q: "هل بوكستر مكشوفة؟", a: "نعم، رودستر بسقف قابل للطي." },
      ],
      ru: [
        { q: "Сколько человек вмещает Porsche Boxster?", a: "Boxster – двухместный." },
        { q: "Boxster – это кабриолет?", a: "Да, это родстер со складной крышей." },
      ],
    },
  },
  {
    key: "range-rover",
    slug: "range-rover",
    name: { en: "Range Rover", ar: "رينج روفر", ru: "Рендж Ровер" },
    title: {
      en: "Range Rover Rental Dubai – Defender SUV",
      ar: "تأجير رينج روفر في دبي – ديفندر",
      ru: "Аренда Рендж Ровер в Дубае – Defender",
    },
    description: {
      en: "Rent a Range Rover Defender in Dubai: a capable, spacious luxury SUV for groups and desert-edge days. Check availability with KINOVA.",
      ar: "استأجر رينج روفر ديفندر في دبي: سيارة دفع رباعي فاخرة واسعة للمجموعات. تحقق من التوفر مع KINOVA.",
      ru: "Аренда Range Rover Defender в Дубае – вместительный люксовый внедорожник для компаний. Уточните наличие у KINOVA.",
    },
    h1: { en: "Range Rover Rental Dubai", ar: "تأجير رينج روفر في دبي", ru: "Аренда Рендж Ровер в Дубае" },
    intro: {
      en: "For passengers, luggage and a commanding view of the road, the Defender is the practical luxury option. It sits in the Land Rover family alongside Range Rover, and is listed here for customers who search for it by either name.",
      ar: "للركاب والأمتعة ورؤية مرتفعة للطريق، ديفندر هي الخيار الفاخر العملي. تنتمي إلى عائلة لاند روفر إلى جانب رينج روفر، ومدرجة هنا لمن يبحث عنها بأي من الاسمين.",
      ru: "Для пассажиров, багажа и высокой посадки Defender – практичный люксовый вариант. Он входит в семейство Land Rover вместе с Range Rover и представлен здесь для тех, кто ищет его под любым из названий.",
    },
    body: {
      en: [
        "The Defender suits families, groups and visitors who want something more versatile than a coupe: airport transfers with luggage, trips beyond the city and days when you want space more than speed.",
        "If you are looking for a specific Range Rover model rather than the Defender, mention it in your enquiry and KINOVA will confirm what can be arranged.",
      ],
      ar: [
        "تناسب ديفندر العائلات والمجموعات والزوار الذين يريدون سيارة أكثر تنوعاً من الكوبيه: نقل المطار مع الأمتعة والرحلات خارج المدينة.",
        "إذا كنت تبحث عن موديل رينج روفر محدد غير ديفندر فاذكره في استفسارك وستؤكد KINOVA المتاح.",
      ],
      ru: [
        "Defender подходит семьям, компаниям и гостям, которым нужно что-то более универсальное, чем купе: трансфер из аэропорта с багажом, поездки за город и дни, когда важнее пространство, чем скорость.",
        "Если вам нужна конкретная модель Range Rover, а не Defender, укажите это в запросе, и KINOVA подтвердит возможности.",
      ],
    },
    faq: {
      en: [
        { q: "Is the Defender a Range Rover?", a: "The Defender is part of the Land Rover family alongside Range Rover. KINOVA lists it as Range Rover Defender so customers can find it by either name." },
        { q: "Is it suitable for groups?", a: "It is a spacious SUV and a good option for groups and luggage. Confirm exact seating for the version available when you enquire." },
      ],
      ar: [
        { q: "هل ديفندر من رينج روفر؟", a: "ديفندر جزء من عائلة لاند روفر إلى جانب رينج روفر، وتُدرجها KINOVA باسم رينج روفر ديفندر ليسهل العثور عليها." },
        { q: "هل تناسب المجموعات؟", a: "هي سيارة دفع رباعي واسعة وخيار جيد للمجموعات والأمتعة. يُؤكَّد عدد المقاعد للنسخة المتاحة عند الاستفسار." },
      ],
      ru: [
        { q: "Defender – это Range Rover?", a: "Defender входит в семейство Land Rover вместе с Range Rover. KINOVA указывает его как Range Rover Defender, чтобы его было проще найти." },
        { q: "Подходит ли для компании?", a: "Это просторный внедорожник, хороший вариант для компании и багажа. Точное число мест для доступной версии уточняется при запросе." },
      ],
    },
  },
  {
    key: "chevrolet",
    slug: "chevrolet",
    name: { en: "Chevrolet", ar: "شيفروليه", ru: "Шевроле" },
    title: {
      en: "Chevrolet Rental Dubai – Corvette & American Sports Cars",
      ar: "تأجير شيفروليه في دبي – كورفيت وسيارات رياضية أمريكية",
      ru: "Аренда Шевроле в Дубае – Corvette и американские спорткары",
    },
    description: {
      en: "Rent a Chevrolet Corvette in Dubai: American sports-car performance in a mid-engine two-seater. Check availability with KINOVA.",
      ar: "استأجر شيفروليه كورفيت في دبي: أداء سيارة رياضية أمريكية بمحرك وسطي ومقعدين. تحقق من التوفر مع KINOVA.",
      ru: "Аренда Chevrolet Corvette в Дубае – американский спорткар со среднемоторной компоновкой. Уточните наличие у KINOVA.",
    },
    h1: { en: "Chevrolet Rental Dubai", ar: "تأجير شيفروليه في دبي", ru: "Аренда Шевроле в Дубае" },
    intro: {
      en: "The Corvette brings supercar proportions and an unmistakably American V8 attitude. It is the most accessible way into exotic-looking performance in the line-up.",
      ar: "تقدّم كورفيت أبعاد السوبر كار وروح V8 الأمريكية الواضحة، وهي أسهل مدخل إلى الأداء ذي المظهر الاستثنائي في التشكيلة.",
      ru: "Corvette – пропорции суперкара и узнаваемый американский характер V8. Самый доступный способ почувствовать экзотичную динамику в нашей линейке.",
    },
    body: {
      en: [
        "Recent Corvettes moved the engine behind the driver, which changed the car's balance and its look. For a visitor, that means a car that photographs like a supercar and drives with real purpose.",
        "Corvettes come in more than one body style and specification, so mention your preferences when you enquire and KINOVA will confirm what is available for your dates.",
      ],
      ar: [
        "نقلت كورفيت الحديثة المحرك خلف السائق مما غيّر توازن السيارة ومظهرها، فهي تبدو في الصور كسوبر كار وتقود بحيوية حقيقية.",
        "تتوفر كورفيت بأكثر من هيكل ومواصفات، لذا اذكر تفضيلاتك وستؤكد KINOVA المتاح لتواريخك.",
      ],
      ru: [
        "Современные Corvette перенесли двигатель за спину водителя, изменив баланс и внешний вид. Для гостя это автомобиль, который выглядит на фото как суперкар и едет всерьёз.",
        "Corvette бывает в разных кузовах и комплектациях – укажите пожелания, и KINOVA подтвердит, что доступно на ваши даты.",
      ],
    },
    faq: {
      en: [
        { q: "How many seats does the Corvette have?", a: "The Corvette is a two-seater." },
        { q: "Can I choose the body style?", a: "Mention your preference when you enquire. KINOVA will confirm what is available for your dates." },
      ],
      ar: [
        { q: "كم مقعداً في كورفيت؟", a: "كورفيت بمقعدين." },
        { q: "هل يمكنني اختيار نوع الهيكل؟", a: "اذكر تفضيلك عند الاستفسار وستؤكد KINOVA المتاح." },
      ],
      ru: [
        { q: "Сколько мест в Corvette?", a: "Corvette – двухместный." },
        { q: "Можно ли выбрать тип кузова?", a: "Укажите пожелание в запросе – KINOVA подтвердит, что доступно." },
      ],
    },
  },
  {
    key: "ford",
    slug: "ford",
    name: { en: "Ford", ar: "فورد", ru: "Форд" },
    title: {
      en: "Ford Rental Dubai – Mustang & American Muscle",
      ar: "تأجير فورد في دبي – موستانج وسيارات العضلات الأمريكية",
      ru: "Аренда Форд в Дубае – Mustang и американские маслкары",
    },
    description: {
      en: "Rent a Ford Mustang in Dubai: an iconic American muscle car with a V8 soundtrack. Check availability with KINOVA on WhatsApp or enquiry form.",
      ar: "استأجر فورد موستانج في دبي: سيارة العضلات الأمريكية الأيقونية. تحقق من التوفر مع KINOVA.",
      ru: "Аренда Ford Mustang в Дубае – культовый американский маслкар. Уточните наличие у KINOVA в WhatsApp или через форму.",
    },
    h1: { en: "Ford Rental Dubai", ar: "تأجير فورد في دبي", ru: "Аренда Форд в Дубае" },
    intro: {
      en: "The Mustang is the easiest car in the fleet to understand: classic muscle-car looks, a four-seat layout and a character that is more about fun than lap times.",
      ar: "موستانج هي أسهل سيارة في الأسطول للفهم: مظهر عضلات كلاسيكي وأربعة مقاعد وشخصية تهتم بالمتعة أكثر من الأزمنة.",
      ru: "Mustang – самый понятный автомобиль в автопарке: классический облик маслкара, четыре места и характер, в котором веселья больше, чем рекордов круга.",
    },
    body: {
      en: [
        "For visitors who want a distinctive car without stepping up to supercar territory, the Mustang is a strong option. It has the seating for a small group and the soundtrack people associate with American V8s.",
        "Specification and body style vary between Mustang models, so tell KINOVA what you prefer – coupe or open-top – and your dates, and the team will confirm what is available.",
      ],
      ar: [
        "لمن يريد سيارة مميزة دون الانتقال إلى عالم السوبر كار، موستانج خيار قوي. تتسع لمجموعة صغيرة وتقدم الصوت المرتبط بمحركات V8 الأمريكية.",
        "تختلف المواصفات والهيكل بين موديلات موستانج، لذا أخبر KINOVA بتفضيلك وتواريخك.",
      ],
      ru: [
        "Для гостей, которым нужен запоминающийся автомобиль без перехода в класс суперкаров, Mustang – сильный вариант. Места для небольшой компании и звук, который ассоциируется с американскими V8.",
        "Комплектация и кузов у Mustang различаются, поэтому укажите предпочтения и даты – KINOVA подтвердит, что доступно.",
      ],
    },
    faq: {
      en: [
        { q: "How many people can travel in a Mustang?", a: "The Mustang is configured as a four-seater, but rear space is best suited to short journeys." },
        { q: "Can I request a convertible Mustang?", a: "Mention it in your enquiry. KINOVA will confirm which body style is available for your dates." },
      ],
      ar: [
        { q: "كم شخصاً يمكنه السفر في موستانج؟", a: "موستانج بأربعة مقاعد، لكن المقاعد الخلفية تناسب الرحلات القصيرة." },
        { q: "هل يمكنني طلب موستانج مكشوفة؟", a: "اذكر ذلك في استفسارك وستؤكد KINOVA المتاح." },
      ],
      ru: [
        { q: "Сколько человек поместится в Mustang?", a: "Mustang – четырёхместный, но задний ряд лучше подходит для коротких поездок." },
        { q: "Можно ли запросить Mustang-кабриолет?", a: "Укажите это в запросе – KINOVA подтвердит доступный кузов." },
      ],
    },
  },
];

export const brands: Brand[] = baseBrands.map((b) => {
  const x = brandExtras[b.key];
  return {
    ...b,
    body: {
      en: [...b.body.en, x.body.en, ...(x.body2 ? [x.body2.en] : [])],
      ar: [...(b.body.ar ?? []), x.body.ar!, ...(x.body2 ? [x.body2.ar!] : [])],
      ru: [...(b.body.ru ?? []), x.body.ru!, ...(x.body2 ? [x.body2.ru!] : [])],
    },
    faq: { en: [...b.faq.en, ...x.faq.en], ar: [...(b.faq.ar ?? []), ...x.faq.ar!], ru: [...(b.faq.ru ?? []), ...x.faq.ru!] },
  };
});

export const brandByKey = (key: BrandKey) => brands.find((b) => b.key === key)!;
export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
