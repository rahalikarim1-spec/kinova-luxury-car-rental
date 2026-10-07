import type { BrandKey, Vehicle } from "./types";

/**
 * VEHICLE DATA SOURCE
 * ------------------------------------------------------------------
 * Replace/extend this array (or swap it for a database/CMS call – every consumer goes through src/lib/fleet.ts).
 *  - priceDaily / priceWeekly / priceMonthly: numbers in AED. null => "Price on Request".
 *  - year: null until confirmed.
 *  - images: placeholders live in /public/images/cars/<slug>/ (see src/lib/images.ts).
 */

type Seed = Omit<Vehicle, "id" | "model" | "name" | "year" | "priceDaily" | "priceWeekly" | "priceMonthly" | "currency" | "available"> & {
  model: string;
  brandName: string;
};

const seeds: Seed[] = [
  {
    slug: "lamborghini-urus", brand: "lamborghini", brandName: "Lamborghini", model: "Urus",
    categories: ["luxury-suvs", "supercars"], bodyType: "suv", seats: 5, featured: true,
    powertrain: { en: "Twin-turbo V8", ar: "V8 بتيربو مزدوج", ru: "Битурбо V8" },
    highlight: { en: "Super SUV with room for five", ar: "دفع رباعي خارق بخمسة مقاعد", ru: "Суперкроссовер на пять мест" },
    description: {
      en: "The Lamborghini Urus is the one that lets a group share the experience. It pairs a twin-turbo V8 with a five-seat cabin and real luggage space, so airport pick-ups, family days and city nights all work in the same car – while still looking and sounding unmistakably like a Lamborghini.",
      ar: "لامبورغيني أوروس هي السيارة التي تتيح لمجموعة كاملة مشاركة التجربة. تجمع محرك V8 بتيربو مزدوج مع مقصورة بخمسة مقاعد ومساحة أمتعة حقيقية، فتصلح لاستقبال المطار وأيام العائلة وليالي المدينة مع حضور وصوت لامبورغيني الواضحين.",
      ru: "Lamborghini Urus позволяет разделить впечатления всей компании. Битурбо V8, пятиместный салон и реальный багажник – одна машина подходит и для аэропорта, и для семейного дня, и для вечера в городе, оставаясь узнаваемой Lamborghini.",
    },
    whyRent: {
      en: ["Five seats and luggage space with supercar character", "A single car for groups who would otherwise split into two"],
      ar: ["خمسة مقاعد ومساحة أمتعة بطابع السوبر كار", "سيارة واحدة لمجموعات كانت ستنقسم إلى سيارتين"],
      ru: ["Пять мест и багажник при характере суперкара", "Одна машина для компании, которой иначе понадобились бы две"],
    },
  },
  {
    slug: "lamborghini-revuelto", brand: "lamborghini", brandName: "Lamborghini", model: "Revuelto",
    categories: ["supercars"], bodyType: "coupe", seats: 2, featured: true,
    powertrain: { en: "V12 plug-in hybrid", ar: "V12 هجينة قابلة للشحن", ru: "V12, подключаемый гибрид" },
    highlight: { en: "Flagship V12 plug-in hybrid", ar: "الرائدة V12 الهجينة", ru: "Флагманский гибрид V12" },
    description: {
      en: "The Revuelto is Lamborghini's flagship: a V12 plug-in hybrid that carries the brand's V12 tradition into a new era. It is built for a single purpose – to be the most dramatic car on the road – and it delivers that wherever it goes in Dubai.",
      ar: "ريفويلتو هي سيارة لامبورغيني الرائدة: V12 هجينة قابلة للشحن تنقل تقليد الـ V12 إلى حقبة جديدة. مبنية لغرض واحد: أن تكون أكثر السيارات إثارة على الطريق، وهي تفعل ذلك أينما ذهبت في دبي.",
      ru: "Revuelto – флагман Lamborghini: подключаемый гибрид с V12, переносящий традицию марки в новую эпоху. У неё одна задача – быть самой эффектной машиной на дороге, и в Дубае она справляется с ней везде.",
    },
    whyRent: {
      en: ["The newest flagship from Lamborghini", "A two-seater built for the driver and the photo"],
      ar: ["أحدث سيارة رائدة من لامبورغيني", "بمقعدين مبنية للسائق وللصورة"],
      ru: ["Новейший флагман Lamborghini", "Двухместный автомобиль для водителя и для фотографий"],
    },
  },
  {
    slug: "lamborghini-huracan-evo-spyder", brand: "lamborghini", brandName: "Lamborghini", model: "Huracán EVO Spyder",
    categories: ["supercars", "convertibles"], bodyType: "convertible", seats: 2, featured: true,
    powertrain: { en: "V10", ar: "V10", ru: "V10" },
    highlight: { en: "V10 with the roof down", ar: "V10 والسقف مفتوح", ru: "V10 с открытым верхом" },
    description: {
      en: "A naturally recognisable V10 sound, an open cabin and Lamborghini design: the Huracán EVO Spyder is the open-top supercar most people picture when they think of Dubai. It is a natural fit for coastal drives, sunset photos and a weekend with the roof down.",
      ar: "صوت V10 مميز وسقف مفتوح وتصميم لامبورغيني: هوراكان إيفو سبايدر هي السوبر كار المكشوفة التي يتخيلها معظم الناس عند التفكير في دبي. تناسب القيادة الساحلية وصور الغروب وعطلة نهاية الأسبوع بسقف مفتوح.",
      ru: "Узнаваемый звук V10, открытый салон и дизайн Lamborghini: Huracán EVO Spyder – тот самый открытый суперкар, который представляют многие, думая о Дубае. Идеален для поездок вдоль побережья, закатных фото и выходных без крыши.",
    },
    whyRent: {
      en: ["Open-top V10 – the classic Dubai supercar picture", "A strong choice for couples and special days"],
      ar: ["V10 مكشوفة – صورة السوبر كار الكلاسيكية في دبي", "خيار قوي للأزواج والأيام الخاصة"],
      ru: ["Открытый V10 – классический образ суперкара в Дубае", "Сильный выбор для пар и особых дней"],
    },
  },
  {
    slug: "ferrari-f8-spider", brand: "ferrari", brandName: "Ferrari", model: "F8 Spider",
    categories: ["supercars", "convertibles"], bodyType: "convertible", seats: 2, featured: true,
    powertrain: { en: "Twin-turbo V8", ar: "V8 بتيربو مزدوج", ru: "Битурбо V8" },
    highlight: { en: "Twin-turbo V8 convertible", ar: "مكشوفة V8 بتيربو مزدوج", ru: "Кабриолет с битурбо V8" },
    description: {
      en: "The Ferrari F8 Spider combines a twin-turbo V8 with a retractable hard top, so it is as comfortable on a quiet evening run as it is on a bright coastal morning. It is a driver's Ferrari – responsive, focused and instantly recognisable.",
      ar: "تجمع فيراري F8 سبايدر بين V8 بتيربو مزدوج وسقف صلب قابل للطي، فهي مريحة في أمسية هادئة كما في صباح ساحلي مشرق. فيراري للسائق: سريعة الاستجابة ومركّزة ومعروفة فوراً.",
      ru: "Ferrari F8 Spider сочетает битурбо V8 и складную жёсткую крышу – одинаково хороша и на тихой вечерней поездке, и на солнечном побережье. Ferrari для водителя: отзывчивая, сосредоточенная и мгновенно узнаваемая.",
    },
    whyRent: {
      en: ["Retractable hard top for open-air or closed-roof driving", "The Ferrari badge with a driver-focused V8"],
      ar: ["سقف صلب قابل للطي للقيادة المفتوحة أو المغلقة", "شعار فيراري مع V8 موجّهة للسائق"],
      ru: ["Складная жёсткая крыша – езда с открытым или закрытым верхом", "Шильдик Ferrari и V8, ориентированный на водителя"],
    },
  },
  {
    slug: "ferrari-sf90", brand: "ferrari", brandName: "Ferrari", model: "SF90",
    categories: ["supercars"], bodyType: "coupe", seats: 2, featured: true,
    powertrain: { en: "Plug-in hybrid V8", ar: "V8 هجينة قابلة للشحن", ru: "V8, подключаемый гибрид" },
    highlight: { en: "Ferrari plug-in hybrid supercar", ar: "سوبر كار فيراري هجينة", ru: "Гибридный суперкар Ferrari" },
    description: {
      en: "The Ferrari SF90 shows what the brand does when performance engineering gets a fresh start: a plug-in hybrid supercar with technology you can feel from the first press of the throttle. Exact variant and model year are confirmed with each request.",
      ar: "تُظهر فيراري SF90 ما تفعله العلامة عندما تبدأ هندسة الأداء من جديد: سوبر كار هجينة قابلة للشحن بتقنية تشعر بها من أول ضغطة على دواسة الوقود. تُؤكَّد النسخة وسنة الصنع مع كل طلب.",
      ru: "Ferrari SF90 показывает, что делает марка, когда инженерия динамики начинает с чистого листа: подключаемый гибридный суперкар с технологиями, ощутимыми с первого нажатия на газ. Вариант и год выпуска подтверждаются по каждому запросу.",
    },
    whyRent: {
      en: ["Hybrid Ferrari performance at the technical front of the brand", "A statement car for anyone who knows the badge"],
      ar: ["أداء فيراري الهجين في طليعة تقنيات العلامة", "سيارة بيان لكل من يعرف الشعار"],
      ru: ["Гибридная динамика Ferrari на переднем крае технологий марки", "Автомобиль-заявление для тех, кто знает марку"],
    },
  },
  {
    slug: "mclaren-artura", brand: "mclaren", brandName: "McLaren", model: "Artura",
    categories: ["supercars"], bodyType: "coupe", seats: 2, featured: true,
    powertrain: { en: "Plug-in hybrid V6", ar: "V6 هجينة قابلة للشحن", ru: "V6, подключаемый гибрид" },
    highlight: { en: "Lightweight hybrid supercar", ar: "سوبر كار هجينة خفيفة", ru: "Лёгкий гибридный суперкар" },
    description: {
      en: "The McLaren Artura is the brand's plug-in hybrid supercar, designed around low weight and driver feedback. It rewards drivers who care about how a car feels as much as how it looks, and it is less common on Dubai's roads than the usual Italian suspects.",
      ar: "ماكلارين أرتورا هي السوبر كار الهجينة للعلامة، مصممة حول الوزن المنخفض وإحساس السائق. تكافئ من يهتم بإحساس السيارة قدر مظهرها، وهي أقل شيوعاً على طرق دبي من الأسماء الإيطالية المعتادة.",
      ru: "McLaren Artura – гибридный суперкар марки, созданный вокруг малого веса и обратной связи. Он вознаграждает тех, кому важно, как машина ощущается, не меньше, чем как выглядит, и встречается на дорогах Дубая реже привычных итальянцев.",
    },
    whyRent: {
      en: ["Driver-focused hybrid with a very different character to the Italians", "A less common sight on the road"],
      ar: ["هجينة موجّهة للسائق بشخصية مختلفة تماماً عن الإيطاليات", "مشهد أقل شيوعاً على الطريق"],
      ru: ["Гибрид для водителя с характером, не похожим на итальянцев", "Реже встречается на дороге"],
    },
  },
  {
    slug: "mclaren-gt", brand: "mclaren", brandName: "McLaren", model: "GT",
    categories: ["sports-cars"], bodyType: "coupe", seats: 2, featured: false,
    powertrain: { en: "Twin-turbo V8", ar: "V8 بتيربو مزدوج", ru: "Битурбо V8" },
    highlight: { en: "Grand tourer with luggage space", ar: "سيارة سياحية بمساحة أمتعة", ru: "Грандтурер с багажом" },
    description: {
      en: "The McLaren GT is the McLaren you can travel in. It keeps the brand's lightweight engineering but adds comfort and luggage space, which makes it a sensible pick for a multi-day rental with hotels, shopping and longer drives.",
      ar: "ماكلارين GT هي ماكلارين التي يمكنك السفر بها. تحتفظ بهندسة العلامة الخفيفة وتضيف الراحة ومساحة الأمتعة، فهي خيار منطقي لإيجار متعدد الأيام مع الفنادق والتسوق والقيادات الأطول.",
      ru: "McLaren GT – это McLaren, на котором можно путешествовать. Сохраняя лёгкую инженерию марки, он добавляет комфорт и место для багажа – разумный выбор для аренды на несколько дней с отелями, шопингом и дальними поездками.",
    },
    whyRent: {
      en: ["Comfort and luggage space with McLaren engineering", "Suited to multi-day rentals and longer drives"],
      ar: ["راحة ومساحة أمتعة مع هندسة ماكلارين", "مناسبة للإيجار متعدد الأيام والقيادات الأطول"],
      ru: ["Комфорт и багаж при инженерии McLaren", "Подходит для аренды на несколько дней и дальних поездок"],
    },
  },
  {
    slug: "rolls-royce-ghost", brand: "rolls-royce", brandName: "Rolls-Royce", model: "Ghost",
    categories: ["luxury-cars"], bodyType: "sedan", seats: 5, featured: true,
    powertrain: { en: "V12", ar: "V12", ru: "V12" },
    highlight: { en: "Refined everyday flagship", ar: "الرائدة الراقية للاستخدام اليومي", ru: "Утончённый флагман на каждый день" },
    description: {
      en: "The Rolls-Royce Ghost is understated by Rolls-Royce standards: a quiet, beautifully finished flagship saloon that rewards passengers and drivers alike. It suits business arrivals, hotel evenings and any occasion where calm matters more than noise.",
      ar: "رولز رويس غوست متحفظة بمعايير رولز رويس: سيارة سيدان رائدة هادئة متقنة الصنع تكافئ الركاب والسائق معاً. تناسب وصول الأعمال وأمسيات الفنادق وكل مناسبة يكون فيها الهدوء أهم من الضجيج.",
      ru: "Rolls-Royce Ghost по меркам Rolls-Royce сдержан: тихий, безупречно отделанный флагманский седан, радующий и пассажиров, и водителя. Подходит для деловых приездов, вечеров в отеле и любых случаев, где спокойствие важнее шума.",
    },
    whyRent: {
      en: ["Quiet, composed and finished to a very high standard", "The most versatile Rolls-Royce for business or leisure"],
      ar: ["هادئة ومتزنة ومتقنة بمعيار عالٍ جداً", "أكثر رولز رويس تنوعاً للأعمال أو الترفيه"],
      ru: ["Тихий, собранный, с очень высоким качеством отделки", "Самый универсальный Rolls-Royce для бизнеса и отдыха"],
    },
  },
  {
    slug: "rolls-royce-cullinan", brand: "rolls-royce", brandName: "Rolls-Royce", model: "Cullinan",
    categories: ["luxury-suvs", "luxury-cars"], bodyType: "suv", seats: null, featured: true,
    powertrain: { en: "V12", ar: "V12", ru: "V12" },
    highlight: { en: "The Rolls-Royce SUV", ar: "دفع رباعي رولز رويس", ru: "Внедорожник Rolls-Royce" },
    description: {
      en: "The Cullinan is the Rolls-Royce for people who want a commanding seating position and space for luggage without losing the brand's quiet luxury. It is a strong choice for family arrivals, airport transfers and longer stays.",
      ar: "كولينان هي رولز رويس لمن يريد وضعية جلوس مرتفعة ومساحة للأمتعة دون خسارة الفخامة الهادئة للعلامة. خيار قوي لوصول العائلات ونقل المطار والإقامات الأطول.",
      ru: "Cullinan – Rolls-Royce для тех, кому нужна высокая посадка и место для багажа без потери тихой роскоши марки. Сильный выбор для приезда семьёй, трансферов из аэропорта и долгих поездок.",
    },
    whyRent: {
      en: ["Rolls-Royce comfort with SUV space and ride height", "A distinctive arrival for families and groups"],
      ar: ["راحة رولز رويس مع مساحة الدفع الرباعي وارتفاعه", "وصول مميز للعائلات والمجموعات"],
      ru: ["Комфорт Rolls-Royce с простором и клиренсом внедорожника", "Эффектный приезд для семей и компаний"],
    },
  },
  {
    slug: "rolls-royce-phantom", brand: "rolls-royce", brandName: "Rolls-Royce", model: "Phantom",
    categories: ["luxury-cars"], bodyType: "sedan", seats: null, featured: false,
    powertrain: { en: "V12", ar: "V12", ru: "V12" },
    highlight: { en: "The ultimate Rolls-Royce statement", ar: "أقصى بيان لرولز رويس", ru: "Главное заявление Rolls-Royce" },
    description: {
      en: "The Phantom sits at the top of the Rolls-Royce range. Its presence is the point: weddings, major arrivals and moments where the car is part of the occasion all call for it. Ask KINOVA about availability well in advance for peak dates.",
      ar: "فانتوم في قمة تشكيلة رولز رويس. حضورها هو الغاية: حفلات الزفاف والوصولات الكبرى واللحظات التي تكون فيها السيارة جزءاً من المناسبة. اسأل KINOVA عن التوفر مبكراً لمواعيد الذروة.",
      ru: "Phantom – вершина линейки Rolls-Royce. Его присутствие и есть смысл: свадьбы, важные приезды и события, где автомобиль – часть торжества. Для пиковых дат спрашивайте KINOVA о наличии заранее.",
    },
    whyRent: {
      en: ["The top of the Rolls-Royce range", "Made for weddings, major arrivals and milestone events"],
      ar: ["قمة تشكيلة رولز رويس", "مصممة لحفلات الزفاف والوصولات الكبرى والمناسبات الفارقة"],
      ru: ["Вершина линейки Rolls-Royce", "Для свадеб, важных приездов и знаковых событий"],
    },
  },
  {
    slug: "rolls-royce-wraith", brand: "rolls-royce", brandName: "Rolls-Royce", model: "Wraith",
    categories: ["luxury-cars"], bodyType: "coupe", seats: 4, featured: false,
    powertrain: { en: "V12", ar: "V12", ru: "V12" },
    highlight: { en: "Grand coupe with a V12", ar: "كوبيه فاخرة بمحرك V12", ru: "Большое купе с V12" },
    description: {
      en: "The Wraith is the Rolls-Royce for the driver: a long, sweeping coupe with a V12 that favours effortless progress over aggression. It is the right pick when you want to drive a Rolls-Royce rather than be driven in one.",
      ar: "رايث هي رولز رويس للسائق: كوبيه طويلة انسيابية بمحرك V12 تفضّل التقدم السلس على العدوانية. الخيار المناسب عندما تريد قيادة رولز رويس لا أن تُقاد فيها.",
      ru: "Wraith – Rolls-Royce для водителя: длинное плавное купе с V12, предпочитающим лёгкость хода агрессии. Выбор для тех, кто хочет сам водить Rolls-Royce, а не быть пассажиром.",
    },
    whyRent: {
      en: ["A Rolls-Royce that is as rewarding to drive as to ride in", "Four seats in a long, elegant coupe"],
      ar: ["رولز رويس ممتعة في القيادة كما في الركوب", "أربعة مقاعد في كوبيه طويلة أنيقة"],
      ru: ["Rolls-Royce, за рулём которого так же приятно, как и сидеть сзади", "Четыре места в длинном элегантном купе"],
    },
  },
  {
    slug: "range-rover-defender", brand: "range-rover", brandName: "Range Rover", model: "Defender",
    categories: ["luxury-suvs"], bodyType: "suv", seats: null, featured: false,
    powertrain: null,
    highlight: { en: "Capable luxury SUV", ar: "دفع رباعي فاخر قادر", ru: "Проходимый люксовый внедорожник" },
    description: {
      en: "The Defender combines a distinctive silhouette with genuine capability and a premium cabin. It is the practical choice in the fleet for groups, luggage and drives that go beyond the city.",
      ar: "تجمع ديفندر بين هيكل مميز وقدرة حقيقية ومقصورة فاخرة. هي الخيار العملي في الأسطول للمجموعات والأمتعة والرحلات خارج المدينة.",
      ru: "Defender сочетает узнаваемый силуэт, настоящую проходимость и премиальный салон. Практичный выбор в автопарке для компаний, багажа и поездок за пределы города.",
    },
    whyRent: {
      en: ["Space, ride height and a distinctive look", "Practical for groups and trips beyond the city"],
      ar: ["مساحة وارتفاع ومظهر مميز", "عملية للمجموعات والرحلات خارج المدينة"],
      ru: ["Простор, клиренс и узнаваемый облик", "Практичен для компаний и поездок за город"],
    },
  },
  {
    slug: "porsche-boxster", brand: "porsche", brandName: "Porsche", model: "Boxster",
    categories: ["sports-cars", "convertibles"], bodyType: "convertible", seats: 2, featured: false,
    powertrain: null,
    highlight: { en: "Balanced open-top roadster", ar: "رودستر مكشوفة متوازنة", ru: "Сбалансированный родстер" },
    description: {
      en: "The Porsche Boxster is the roadster for people who enjoy driving at normal speeds: balanced, precise and immediately easy to place on the road. It is a very approachable way to try open-top driving in Dubai.",
      ar: "بورشه بوكستر هي الرودستر لمن يستمتع بالقيادة بسرعات عادية: متوازنة ودقيقة وسهلة التموضع على الطريق فوراً. طريقة سهلة جداً لتجربة القيادة المكشوفة في دبي.",
      ru: "Porsche Boxster – родстер для тех, кто любит ездить на обычных скоростях: сбалансированный, точный и сразу понятный на дороге. Очень доступный способ попробовать открытый автомобиль в Дубае.",
    },
    whyRent: {
      en: ["Precise handling and an open cabin", "An easy first open-top rental"],
      ar: ["ثبات دقيق ومقصورة مفتوحة", "أول تجربة سهلة للإيجار المكشوف"],
      ru: ["Точная управляемость и открытый салон", "Лёгкая первая аренда кабриолета"],
    },
  },
  {
    slug: "ford-mustang", brand: "ford", brandName: "Ford", model: "Mustang",
    categories: ["sports-cars"], bodyType: "coupe", seats: 4, featured: false,
    powertrain: null,
    highlight: { en: "Iconic American muscle car", ar: "سيارة العضلات الأمريكية الأيقونية", ru: "Культовый американский маслкар" },
    description: {
      en: "The Ford Mustang is a car almost everyone recognises. Four seats, muscle-car looks and a lively character make it a fun, relaxed way to enjoy Dubai without the weight of a supercar rental.",
      ar: "فورد موستانج سيارة يعرفها الجميع تقريباً. أربعة مقاعد ومظهر عضلات وشخصية حيوية تجعلها طريقة ممتعة ومريحة للاستمتاع بدبي دون ثقل إيجار سوبر كار.",
      ru: "Ford Mustang узнают почти все. Четыре места, облик маслкара и живой характер – весёлый и непринуждённый способ увидеть Дубай без «веса» аренды суперкара.",
    },
    whyRent: {
      en: ["Four seats and instantly recognisable looks", "A fun, approachable step up from a standard rental"],
      ar: ["أربعة مقاعد ومظهر يُعرف فوراً", "خطوة ممتعة وسهلة تتجاوز الإيجار العادي"],
      ru: ["Четыре места и узнаваемый облик", "Весёлый и доступный шаг вверх от обычной аренды"],
    },
  },
  {
    slug: "chevrolet-corvette", brand: "chevrolet", brandName: "Chevrolet", model: "Corvette",
    categories: ["sports-cars"], bodyType: "coupe", seats: 2, featured: false,
    powertrain: null,
    highlight: { en: "Mid-engine American performance", ar: "أداء أمريكي بمحرك وسطي", ru: "Среднемоторная американская динамика" },
    description: {
      en: "The Chevrolet Corvette delivers supercar proportions and a V8 character at a more approachable level. For visitors who want an exotic-looking car with real performance, it is one of the most interesting options in the line-up.",
      ar: "تقدم شيفروليه كورفيت أبعاد السوبر كار وطابع V8 بمستوى أقرب. للزوار الذين يريدون سيارة بمظهر استثنائي وأداء حقيقي، هي من أكثر الخيارات إثارة في التشكيلة.",
      ru: "Chevrolet Corvette даёт пропорции суперкара и характер V8 на более доступном уровне. Для гостей, которым нужен экзотичный автомобиль с реальной динамикой, это один из самых интересных вариантов в линейке.",
    },
    whyRent: {
      en: ["Supercar proportions with American V8 character", "A strong value-for-experience option when pricing is confirmed"],
      ar: ["أبعاد سوبر كار مع طابع V8 الأمريكي", "خيار قوي من حيث التجربة مقابل القيمة عند تأكيد الأسعار"],
      ru: ["Пропорции суперкара и американский характер V8", "Сильный вариант по соотношению впечатлений и цены после уточнения тарифов"],
    },
  },
];

export const vehicles: Vehicle[] = seeds.map(({ brandName, model, ...rest }) => ({
  ...rest,
  id: rest.slug,
  model,
  name: `${brandName} ${model}`,
  year: null,
  priceDaily: null,
  priceWeekly: null,
  priceMonthly: null,
  currency: "AED",
  available: true,
}));

export type { BrandKey };
