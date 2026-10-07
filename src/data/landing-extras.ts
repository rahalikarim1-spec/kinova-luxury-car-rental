import type { Localized } from "@/i18n/config";
import type { BrandKey, CategoryKey, Faq } from "./types";

/**
 * Additional landing-page depth, written natively per language (not translated word-for-word).
 * Merged into brands.ts / categories.ts so every locale ends with the same structure:
 * brands: 3 body paragraphs + 4 FAQs · categories: 4 content sections + 4 FAQs.
 */
export const brandExtras: Record<BrandKey, { body: Localized<string>; body2?: Localized<string>; faq: Localized<Faq[]> }> = {
  lamborghini: {
    body: {
      en: "Weekends, public holidays and the winter high season are usually the busiest periods, so enquire early if your dates are fixed. Say whether you plan to drive in the city, along the coast or on longer highway runs – it helps KINOVA recommend between the Urus, Revuelto and Huracán EVO Spyder.",
      ar: "نصيحة قبل الحجز: الطلب على السيارات الفاخرة يكون عادةً أعلى في عطلات نهاية الأسبوع والمواسم السياحية، فإن كانت تواريخك ثابتة فاسأل مبكراً. وإذا ذكرت هل تنوي القيادة داخل المدينة أو على الكورنيش أو في رحلات أطول، سيسهل على KINOVA ترشيح أوروس أو ريفويلتو أو هوراكان سبايدر لك.",
      ru: "Совет перед запросом: в выходные, праздники и высокий сезон спрос на яркие авто обычно выше, поэтому при фиксированных датах пишите заранее. Укажите, где планируете ездить – по городу, вдоль побережья или на длинных трассах: так KINOVA быстрее подскажет, что выбрать – Urus, Revuelto или Huracán EVO Spyder.",
    },
    faq: {
      en: [{ q: "Which Lamborghini is best for photos and video?", a: "The Huracán EVO Spyder and Revuelto are the most photogenic of the three. If you plan a shoot or filming, mention it in your enquiry so KINOVA can confirm whether it fits the rental conditions." }],
      ar: [
        { q: "أي لامبورغيني الأفضل أمام الكاميرا؟", a: "هوراكان إيفو سبايدر وريفويلتو الأكثر لفتاً للانتباه في الصور والفيديو. وإذا كنت تخطط لجلسة تصوير فاذكر ذلك في استفسارك لتؤكد KINOVA ما إذا كان يتوافق مع شروط الإيجار." },
        { q: "هل أستطيع معرفة السعر قبل أن أحدد الموديل؟", a: "الأسعار تُعرض حالياً عند الطلب، لذا أرسل تواريخك وعدد الركاب ومكان القيادة، وستقترح KINOVA الموديل الأنسب مع السعر المؤكد لتواريخك." },
      ],
      ru: [
        { q: "Какая Lamborghini лучше всего смотрится на фото и видео?", a: "Самые эффектные в кадре – Huracán EVO Spyder и Revuelto. Если планируете съёмку, укажите это в запросе: KINOVA подтвердит, допускают ли это условия аренды." },
        { q: "Можно ли узнать цену до выбора модели?", a: "Сейчас цены указываются по запросу. Напишите даты, число пассажиров и маршрут – KINOVA предложит модель и подтвердит стоимость на ваши даты." },
      ],
    },
  },
  ferrari: {
    body: {
      en: "Ferrari rentals are usually decided by the kind of day you want: a bright coastal drive points to the F8 Spider, while an evening statement or a first look at hybrid supercar technology points to the SF90. Tell KINOVA your dates, how long you need the car and whether luggage matters, and the right model usually becomes obvious.",
      ar: "غالباً ما يُحسم اختيار فيراري بنوع اليوم الذي تتخيله: نهار مشمس على الكورنيش يناسب F8 سبايدر، وأمسية لافتة أو رغبة في تجربة تقنية السوبر كار الهجينة تناسب SF90. أخبر KINOVA بتواريخك ومدة الإيجار وهل الأمتعة مهمة، وغالباً سيتضح الموديل الأنسب.",
      ru: "Выбор Ferrari обычно зависит от того, какой день вы себе представляете: солнечная поездка по побережью – это F8 Spider, а яркий вечерний выезд или знакомство с гибридной технологией суперкаров – SF90. Напишите KINOVA даты, срок аренды и важен ли багаж – так выбор становится очевидным.",
    },
    faq: {
      en: [{ q: "Can I rent a Ferrari for a single evening?", a: "Rental length is part of what you ask about. Send KINOVA the dates and times you have in mind and the team will confirm what is possible for each model." }],
      ar: [
        { q: "هل أستطيع استئجار فيراري لأمسية واحدة؟", a: "مدة الإيجار جزء مما تسأل عنه. أرسل لـ KINOVA الوقت الذي تفكر فيه وسيؤكد الفريق المتاح لكل موديل." },
        { q: "ما الفرق عملياً بين F8 سبايدر وSF90؟", a: "F8 سبايدر أقرب إلى فيراري الكلاسيكية بمحرك V8 بتيربو مزدوج وسقف قابل للطي، أما SF90 فهجينة قابلة للشحن بطابع تقني مختلف. كلتاهما بمقعدين، ويُفضَّل ذكر خطتك ليرشح لك الفريق الأنسب." },
      ],
      ru: [
        { q: "Можно ли взять Ferrari на один вечер?", a: "Срок аренды – часть вашего запроса. Напишите KINOVA желаемые дату и время, и команда подтвердит, что возможно по каждой модели." },
        { q: "Чем F8 Spider отличается от SF90 за рулём?", a: "F8 Spider ближе к классической Ferrari: битурбо V8 и складная крыша. SF90 – подключаемый гибрид с более технологичным характером. Оба двухместные – расскажите о планах, и команда подскажет вариант." },
      ],
    },
  },
  mclaren: {
    body: {
      en: "McLaren is often a second-time choice for supercar renters who have already tried the Italian names and want something different. If that sounds like you, say so when you enquire – KINOVA can talk through how the Artura and the McLaren GT differ in character before you commit.",
      ar: "تُختار ماكلارين كثيراً من عشاق السوبر كار الذين جرّبوا الأسماء الإيطالية ويبحثون عن شيء مختلف. إن كنت منهم فاذكر ذلك عند الاستفسار، وستوضح لك KINOVA الفرق في الطابع بين أرتورا وماكلارين GT قبل أن تقرر.",
      ru: "McLaren часто выбирают те, кто уже ездил на итальянских суперкарах и хочет чего-то другого. Если это про вас, напишите об этом – KINOVA расскажет, как по характеру различаются Artura и McLaren GT, прежде чем вы определитесь.",
    },
    faq: {
      en: [{ q: "Is the McLaren GT practical for luggage?", a: "It is the McLaren designed with luggage space in mind. Tell KINOVA how many bags you will carry and the team will confirm the car fits your plans." }],
      ar: [
        { q: "هل ماكلارين GT عملية للأمتعة؟", a: "هي ماكلارين المصممة مع مراعاة مساحة الأمتعة. أخبر KINOVA بعدد الحقائب وسيؤكد الفريق أن السيارة تناسب خطتك." },
        { q: "لمن تناسب أرتورا أكثر؟", a: "تناسب من يهتم بإحساس القيادة والاستجابة أكثر من الاستعراض، وهي خيار مميز لمن يريد سوبر كار هجينة أقل ظهوراً على الطرق." },
      ],
      ru: [
        { q: "Практичен ли McLaren GT для багажа?", a: "Это тот McLaren, который проектировался с расчётом на багаж. Сообщите KINOVA, сколько сумок у вас будет, и команда подтвердит, что автомобиль подходит." },
        { q: "Кому больше подойдёт Artura?", a: "Тем, кому важнее ощущение от вождения и отклик, чем показной эффект. Это вариант для желающих гибридный суперкар, который встречается на дорогах реже." },
      ],
    },
  },
  "rolls-royce": {
    body: {
      en: "For weddings and photo-led occasions, give KINOVA the date and timing of the event as early as you can; flagship cars are usually the first to be asked about for peak dates. For business use, mention whether you need the car for a single arrival or across several days so the right model and arrangement can be confirmed.",
      ar: "في حفلات الزفاف والمناسبات المصوّرة، أعطِ KINOVA موعد المناسبة وتوقيتها مبكراً قدر الإمكان، فالسيارات الرائدة هي الأكثر طلباً في المواعيد المزدحمة. وللأعمال، اذكر هل تحتاج السيارة لوصول واحد أم لعدة أيام ليتم تأكيد الموديل والترتيب المناسبين.",
      ru: "Для свадьбы и других событий с фотосъёмкой сообщите KINOVA дату и время как можно раньше: флагманы чаще всего запрашивают на пиковые даты. Для делового использования напишите, нужен ли автомобиль на один приезд или на несколько дней, чтобы подтвердить подходящую модель и формат.",
    },
    faq: {
      en: [{ q: "Which Rolls-Royce suits a family?", a: "The Cullinan and the Ghost offer the most practical seating in the line-up. Seat counts can vary by version, so share your group size and KINOVA will confirm." }],
      ar: [
        { q: "أي رولز رويس تناسب العائلة؟", a: "كولينان وغوست الأكثر عملية من حيث المقاعد. قد يختلف عدد المقاعد بين النسخ، لذا شارك حجم عائلتك وستؤكد KINOVA." },
        { q: "ما الفرق بين غوست وفانتوم؟", a: "غوست أكثر تحفظاً وتناسب الاستخدام المتنوع، بينما فانتوم هي القمة في الحضور والمساحة وتُختار للمناسبات الكبرى." },
      ],
      ru: [
        { q: "Какой Rolls-Royce подойдёт для семьи?", a: "Наиболее практичны по местам Cullinan и Ghost. Число мест зависит от версии – напишите, сколько вас, и KINOVA подтвердит." },
        { q: "Чем Ghost отличается от Phantom?", a: "Ghost сдержаннее и универсальнее, Phantom – вершина линейки по статусу и пространству; его чаще выбирают для крупных событий." },
      ],
    },
  },
  porsche: {
    body: {
      en: "A roadster rental works best when you tell us the season and time of day you plan to drive – open-top driving is at its best in the cooler months and in the evening. If you want a Porsche for several days, ask KINOVA what is possible for longer rentals.",
      ar: "تنجح تجربة الرودستر أكثر حين تخبرنا بموسم القيادة ووقتها؛ فالقيادة المكشوفة في أفضل حالاتها في الأشهر الأبرد وفي المساء. وإن أردت بورشه لعدة أيام فاسأل KINOVA عن الممكن للإيجارات الأطول.",
      ru: "Аренда родстера удачнее, если вы сообщите сезон и время суток для поездок: езда без крыши особенно приятна в прохладные месяцы и вечером. Если Porsche нужен на несколько дней, спросите KINOVA, что возможно при более длительной аренде.",
    },
    body2: {
      en: "Many renters pair a roadster day with something larger on another day of the trip – for example the Boxster for the coast and a luxury SUV for airport transfers or group outings. If that is your plan, ask KINOVA about both in one enquiry.",
      ar: "كثيراً ما يجمع المستأجرون بين يوم بالرودستر ويوم بسيارة أكبر ضمن الرحلة نفسها، مثل بوكستر للكورنيش وسيارة دفع رباعي فاخرة للمطار أو الخروج مع المجموعة. إن كانت هذه خطتك فاسأل KINOVA عن الاثنتين في استفسار واحد.",
      ru: "Многие сочетают день на родстере с днём на более вместительной машине – например, Boxster для побережья и люксовый внедорожник для трансфера из аэропорта или поездки с компанией. Если вы планируете так же, спросите KINOVA про оба варианта в одном запросе.",
    },
    faq: {
      en: [{ q: "Is the Boxster a good first sports-car rental?", a: "Yes. It is balanced and approachable, which makes it a comfortable step into performance driving before moving up to a supercar." }, { q: "Can I enquire about two cars in one request?", a: "Yes. Mention both cars and the dates for each in your message or form and KINOVA will confirm what is available." }],
      ar: [
        { q: "هل بوكستر مناسبة لأول تجربة سيارة رياضية؟", a: "نعم، فهي متوازنة وسهلة القيادة، وتُعد خطوة مريحة نحو القيادة الرياضية قبل الانتقال إلى سوبر كار." },
        { q: "هل تتسع حقائب السفر في بوكستر؟", a: "مساحة الأمتعة محدودة كأي رودستر بمقعدين، لذا أخبر KINOVA بما ستحمله." },
      ],
      ru: [
        { q: "Подходит ли Boxster для первой аренды спорткара?", a: "Да: он сбалансированный и понятный, поэтому это комфортный шаг к динамичной езде перед переходом на суперкар." },
        { q: "Поместится ли багаж в Boxster?", a: "Как у любого двухместного родстера, багажник небольшой – сообщите KINOVA, что планируете везти." },
      ],
    },
  },
  "range-rover": {
    body: {
      en: "If your plans include travel beyond Dubai, mention the route in your enquiry so KINOVA can confirm what the rental conditions allow. Families and groups should add passenger and luggage numbers, because seating can differ between versions of the Defender.",
      ar: "إذا كانت خطتك تتضمن السفر خارج دبي فاذكر المسار في الاستفسار لتؤكد KINOVA ما تسمح به شروط الإيجار. وعلى العائلات والمجموعات إضافة عدد الركاب والحقائب، فقد يختلف عدد المقاعد بين نسخ ديفندر.",
      ru: "Если вы планируете выезжать за пределы Дубая, укажите маршрут в запросе – KINOVA подтвердит, что допускают условия аренды. Семьям и компаниям стоит указать число пассажиров и багажа: места могут отличаться в зависимости от версии Defender.",
    },
    body2: {
      en: "The Defender also works as a second car in a trip built around a supercar: use the sports car for an evening or a coastal run, and the Defender for days that involve luggage, passengers or longer distances.",
      ar: "تصلح ديفندر أيضاً كسيارة ثانية في رحلة تدور حول سوبر كار: السيارة الرياضية لأمسية أو قيادة ساحلية، وديفندر للأيام التي تتطلب أمتعة أو ركاباً أو مسافات أطول.",
      ru: "Defender хорошо работает и как вторая машина в поездке, построенной вокруг суперкара: спорткар – для вечера или поездки по побережью, а Defender – для дней с багажом, пассажирами и большими расстояниями.",
    },
    faq: {
      en: [{ q: "Can I drive the Defender outside Dubai?", a: "Tell KINOVA where you plan to go. Whether a route is covered depends on the rental conditions, which are confirmed per booking." }, { q: "Is the Defender a good second car alongside a supercar?", a: "Yes. Many trips use a supercar for special moments and a practical SUV for the rest. Ask KINOVA about both cars together." }],
      ar: [
        { q: "هل أستطيع قيادة ديفندر خارج دبي؟", a: "أخبر KINOVA بوجهتك. يعتمد ذلك على شروط الإيجار التي تُؤكَّد مع كل حجز." },
        { q: "هل ديفندر خيار جيد لأيام الشاطئ والعائلة؟", a: "نعم، فهي واسعة ومرتفعة وعملية للحقائب والمعدات، وتُعد من أكثر السيارات ملاءمة للمجموعات." },
      ],
      ru: [
        { q: "Можно ли ездить на Defender за пределами Дубая?", a: "Скажите KINOVA, куда планируете ехать. Допустимость маршрута зависит от условий аренды, которые подтверждаются по каждому бронированию." },
        { q: "Подходит ли Defender для пляжа и семейных поездок?", a: "Да, он просторный, с высокой посадкой и удобен для багажа и снаряжения – один из самых практичных вариантов для компании." },
      ],
    },
  },
  chevrolet: {
    body: {
      en: "The Corvette is often chosen by visitors who want an exotic-looking car with a different, more approachable character. Pricing is currently Price on Request, so send your dates and KINOVA will confirm the rate and which body style is available.",
      ar: "كثيراً ما يختار الزوار كورفيت لأنها تقدم مظهراً استثنائياً بطابع مختلف وأكثر قرباً. الأسعار تُعرض حالياً عند الطلب، فأرسل تواريخك وستؤكد KINOVA السعر ونوع الهيكل المتاح.",
      ru: "Corvette часто выбирают гости, которым нужен экзотичный облик, но с более доступным характером. Цена сейчас указана «по запросу» – отправьте даты, и KINOVA подтвердит тариф и доступный тип кузова.",
    },
    body2: {
      en: "If you are comparing the Corvette with a European supercar, treat it as the more approachable route into mid-engine driving, and compare it with the McLaren GT or Porsche Boxster on the sports car page before deciding.",
      ar: "إن كنت تقارن كورفيت بسوبر كار أوروبية فانظر إليها كمدخل أقرب إلى القيادة بمحرك وسطي، وقارنها بماكلارين GT أو بورشه بوكستر في صفحة السيارات الرياضية قبل أن تقرر.",
      ru: "Если вы сравниваете Corvette с европейским суперкаром, смотрите на него как на более доступный путь к среднемоторной езде и сопоставьте с McLaren GT или Porsche Boxster на странице спорткаров, прежде чем решить.",
    },
    faq: {
      en: [{ q: "Is the Corvette a supercar?", a: "It is not usually classed as one, but its mid-engine layout gives it supercar proportions. If you want a full supercar, see the supercar category; if you want character and performance, the Corvette is a strong fit." }, { q: "How does the Corvette compare with the McLaren GT?", a: "The Corvette is the more approachable mid-engine option, while the McLaren GT focuses on comfort and luggage space with McLaren engineering. Both are listed under sports cars for comparison." }],
      ar: [
        { q: "هل كورفيت تُعد سوبر كار؟", a: "لا تُصنَّف عادةً كذلك، لكن محركها الوسطي يمنحها أبعاد السوبر كار. للسوبر كار الكاملة راجع فئة السوبر كار، ومن يريد شخصية وأداءً فكورفيت مناسبة." },
        { q: "ماذا أختار إن أردت سيارة أمريكية في دبي؟", a: "كورفيت للأداء بمحرك وسطي، وموستانج للمظهر الكلاسيكي ومقاعد أكثر. يمكنك مقارنة الاثنتين في صفحة الأسطول." },
      ],
      ru: [
        { q: "Corvette – это суперкар?", a: "Обычно его не относят к суперкарам, но среднемоторная компоновка даёт пропорции суперкара. Нужен полноценный суперкар – смотрите категорию суперкаров; важны характер и динамика – Corvette подойдёт." },
        { q: "Что выбрать из американских авто в Дубае?", a: "Corvette – для динамики и среднемоторной компоновки, Mustang – для классического облика и большего числа мест. Обе модели можно сравнить в автопарке." },
      ],
    },
  },
  ford: {
    body: {
      en: "Because the Mustang comes in several specifications, the most useful thing you can tell KINOVA is the experience you want – open air, a relaxed city car or a weekend of fun – and your dates. The team will confirm which version is available and the rental details.",
      ar: "لأن موستانج تتوفر بعدة مواصفات، فأفضل ما تخبر به KINOVA هو التجربة التي تريدها – قيادة مكشوفة أو سيارة مريحة للمدينة أو عطلة ممتعة – مع تواريخك، وسيؤكد الفريق النسخة المتاحة وتفاصيل الإيجار.",
      ru: "Mustang бывает в разных версиях, поэтому лучше всего сообщить KINOVA, какой опыт вам нужен – открытая езда, спокойный городской автомобиль или весёлые выходные, – и даты. Команда подтвердит доступную версию и детали аренды.",
    },
    body2: {
      en: "If you like the Mustang's relaxed character but need more space or more drama, compare it with the Defender for groups or the Corvette for a sharper sports-car feel before sending your request.",
      ar: "إن أعجبك طابع موستانج المريح لكنك تحتاج مساحة أكبر أو إثارة أكثر، فقارنها بديفندر للمجموعات أو بكورفيت لإحساس رياضي أحدّ قبل إرسال طلبك.",
      ru: "Если вам нравится спокойный характер Mustang, но нужно больше места или больше эмоций, сравните его с Defender для компании или с Corvette для более острого спортивного ощущения, прежде чем отправлять запрос: так ответ KINOVA будет точнее и придёт быстрее.",
    },
    faq: {
      en: [{ q: "Is the Mustang good for first-time performance renters?", a: "Yes. It is approachable and familiar, and gives a taste of muscle-car character without the demands of a supercar." }, { q: "What should I compare the Mustang with?", a: "For more space look at the Range Rover Defender; for a sharper feel look at the Chevrolet Corvette or Porsche Boxster. The sports car page lists the options side by side." }],
      ar: [
        { q: "هل موستانج مناسبة لمن يستأجر سيارة أداء لأول مرة؟", a: "نعم، فهي مألوفة وسهلة التعامل وتمنحك طابع سيارات العضلات دون متطلبات السوبر كار." },
        { q: "هل تتسع موستانج لأربعة أشخاص؟", a: "مقاعدها أربعة، لكن الخلفية أنسب للرحلات القصيرة، لذا أخبر KINOVA بخطتك." },
      ],
      ru: [
        { q: "Подходит ли Mustang для первой аренды мощного авто?", a: "Да, он понятный и знакомый и даёт ощущение маслкара без требований суперкара." },
        { q: "Поместится ли в Mustang компания из четырёх человек?", a: "Мест четыре, но задний ряд лучше для коротких поездок – расскажите KINOVA о планах." },
      ],
    },
  },
};

export const categoryExtras: Record<CategoryKey, { section: Localized<{ h: string; p: string }>; faq: Localized<Faq[]> }> = {
  supercars: {
    section: {
      en: { h: "Planning your enquiry", p: "For the fastest answer, send your dates, the number of people, how much luggage you will carry and where you would like the car. If you are undecided between models, ask KINOVA to compare two or three for your trip – the answer is usually clearer than any spec sheet." },
      ar: { h: "كيف تجهّز استفسارك", p: "للحصول على أسرع رد أرسل تواريخك وعدد الأشخاص وحجم الأمتعة والمكان الذي تريد السيارة فيه. وإن ترددت بين موديلات فاطلب من KINOVA مقارنة اثنين أو ثلاثة لرحلتك؛ فالإجابة غالباً أوضح من أي ورقة مواصفات." },
      ru: { h: "Как подготовить запрос", p: "Чтобы получить ответ быстрее, укажите даты, число людей, объём багажа и место, где нужен автомобиль. Если вы выбираете между моделями, попросите KINOVA сравнить две-три под вашу поездку – так ответ обычно понятнее любых характеристик." },
    },
    faq: {
      en: [{ q: "Which supercar is best for a first-time renter?", a: "An open-top car such as the Huracán EVO Spyder or F8 Spider is a popular first pick, while the Revuelto and SF90 suit anyone chasing the latest hybrid technology. Tell KINOVA your experience level and plans and the team will suggest a fit." }],
      ar: [{ q: "أي سوبر كار تناسب من يستأجر لأول مرة؟", a: "المكشوفة مثل هوراكان سبايدر وF8 سبايدر خيار أول شائع، أما ريفويلتو وSF90 فتناسب من يريد أحدث تقنيات الهجين. أخبر KINOVA بخبرتك وخطتك وسيقترح الفريق الأنسب." }],
      ru: [{ q: "Какой суперкар лучше для первой аренды?", a: "Популярный первый выбор – открытые Huracán EVO Spyder или F8 Spider; Revuelto и SF90 – для тех, кому интересны новейшие гибридные технологии. Расскажите KINOVA об опыте и планах, и команда подскажет вариант." }],
    },
  },
  "luxury-cars": {
    section: {
      en: { h: "What to tell us for an occasion", p: "For weddings, anniversaries and corporate arrivals, share the date, timing and where the car needs to be. Early notice helps for busy dates, and you can ask whether any extras you have in mind are possible." },
      ar: { h: "ماذا تذكر عند طلب مناسبة", p: "في حفلات الزفاف والذكرى ووصول الشركات، شارك التاريخ والتوقيت والمكان الذي يجب أن تكون فيه السيارة. الإبلاغ المبكر يفيد في المواعيد المزدحمة، ويمكنك السؤال عن أي إضافات تفكر فيها." },
      ru: { h: "Что указать для события", p: "Для свадьбы, юбилея или делового приезда сообщите дату, время и место подачи автомобиля. Заранее лучше на загруженные даты; заодно можно спросить о пожеланиях, которые у вас есть." },
    },
    faq: {
      en: [{ q: "Is a luxury car better than a supercar for business travel?", a: "For business arrivals, comfort and presence usually matter more than speed, so a flagship sedan or SUV is the common choice. Tell KINOVA the schedule and the team will recommend a fit." }],
      ar: [{ q: "هل السيارة الفاخرة أفضل من السوبر كار لرحلات العمل؟", a: "عادةً تكون الراحة والحضور أهم من السرعة في رحلات العمل، لذا تُفضَّل السيدان أو الدفع الرباعي الرائد. أخبر KINOVA بجدولك وسيوصي الفريق بالأنسب." }],
      ru: [{ q: "Что лучше для деловой поездки – люкс или суперкар?", a: "Для деловых поездок комфорт и статус обычно важнее скорости, поэтому чаще берут флагманский седан или внедорожник. Расскажите KINOVA о расписании, и команда посоветует вариант." }],
    },
  },
  "sports-cars": {
    section: {
      en: { h: "Matching the car to your plans", p: "A few days of coast and city driving suits the Boxster or Mustang; a longer trip with bags suits the McLaren GT; and the Corvette is the pick when you want mid-engine drama. Tell KINOVA your plans and we will narrow it down." },
      ar: { h: "اختر السيارة بحسب خطتك", p: "أيام من القيادة على الساحل والمدينة تناسب بوكستر أو موستانج، ورحلة أطول بحقائب تناسب ماكلارين GT، وكورفيت هي الخيار لمن يريد إثارة المحرك الوسطي. أخبر KINOVA بخطتك وسنضيّق الخيارات." },
      ru: { h: "Подбор авто под ваш план", p: "Несколько дней по побережью и городу – Boxster или Mustang; поездка подольше с багажом – McLaren GT; Corvette – если хочется эффекта среднемоторной компоновки. Расскажите KINOVA о планах, и мы сузим выбор." },
    },
    faq: {
      en: [{ q: "How is a sports car different from a supercar rental?", a: "Sports cars keep the focus on engaging driving and are generally more approachable, while supercars add extra drama and presence. The supercar category lists the full range if you want to compare." }],
      ar: [{ q: "ما الفرق بين السيارة الرياضية والسوبر كار عند الإيجار؟", a: "الرياضية تركز على متعة القيادة وهي أقرب للمستخدم عموماً، بينما تضيف السوبر كار مزيداً من الإثارة والحضور. تجد في فئة السوبر كار القائمة الكاملة للمقارنة." }],
      ru: [{ q: "Чем аренда спорткара отличается от аренды суперкара?", a: "Спорткары делают упор на интересное вождение и в целом доступнее, суперкары добавляют эффектности и статуса. Для сравнения откройте категорию суперкаров." }],
    },
  },
  "luxury-suvs": {
    section: {
      en: { h: "Seats, bags and where you are going", p: "List the number of passengers and bags, and say whether you will stay in the city or travel further. That is enough for KINOVA to recommend between the Urus, Cullinan and Defender and confirm seating for the version available." },
      ar: { h: "المقاعد والحقائب والوجهة", p: "اذكر عدد الركاب والحقائب وهل ستبقى في المدينة أم ستسافر أبعد. هذا يكفي لتوصي KINOVA بين أوروس وكولينان وديفندر وتؤكد المقاعد للنسخة المتاحة." },
      ru: { h: "Места, багаж и маршрут", p: "Укажите число пассажиров и чемоданов и скажите, останетесь ли вы в городе или поедете дальше. Этого достаточно, чтобы KINOVA посоветовала между Urus, Cullinan и Defender и подтвердила число мест для доступной версии." },
    },
    faq: {
      en: [{ q: "Which luxury SUV is the most comfortable?", a: "The Rolls-Royce Cullinan is the comfort-focused option, the Lamborghini Urus leads on performance and the Defender on capability. Pick based on what matters most for your trip." }],
      ar: [{ q: "أي سيارة دفع رباعي فاخرة هي الأكثر راحة؟", a: "كولينان هي الأكثر تركيزاً على الراحة، وأوروس الأقوى أداءً، وديفندر الأكثر قدرة. اختر بحسب ما يهمك في رحلتك." }],
      ru: [{ q: "Какой люксовый внедорожник самый комфортный?", a: "Самый комфортный по замыслу – Rolls-Royce Cullinan, лидер по динамике – Lamborghini Urus, по проходимости – Defender. Выбирайте по тому, что важнее в поездке." }],
    },
  },
  convertibles: {
    section: {
      en: { h: "Roof, season and time of day", p: "Tell KINOVA when you plan to drive: early mornings and evenings are the most comfortable open-top windows in warm months. We can also advise which convertible keeps luggage and passengers in mind." },
      ar: { h: "السقف والموسم ووقت اليوم", p: "أخبر KINOVA بموعد قيادتك: الصباح الباكر والمساء أنسب أوقات القيادة المكشوفة في الأشهر الحارة. ويمكننا أيضاً الإرشاد إلى المكشوفة الأنسب للأمتعة والركاب." },
      ru: { h: "Крыша, сезон и время суток", p: "Сообщите KINOVA, когда планируете ездить: ранние утра и вечера – самое комфортное время для кабриолета в тёплые месяцы. Также подскажем, какой кабриолет лучше учитывает багаж и пассажиров." },
    },
    faq: {
      en: [{ q: "Which convertible is the most comfortable on longer drives?", a: "The Porsche Boxster is the most relaxed of the three; the Spyder and Spider put more emphasis on performance. Tell KINOVA your route and we will advise." }],
      ar: [{ q: "أي سيارة مكشوفة أكثر راحة في المسافات الأطول؟", a: "بورشه بوكستر الأكثر هدوءاً بين الثلاث، بينما تركز سبايدر على الأداء. أخبر KINOVA بمسارك وسنرشدك." }],
      ru: [{ q: "Какой кабриолет комфортнее в длинных поездках?", a: "Porsche Boxster – самый спокойный из трёх, Spyder и Spider больше про динамику. Расскажите KINOVA о маршруте, и мы подскажем." }],
    },
  },
};
