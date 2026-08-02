export type ProjectCategory = 'Web' | 'Mobil' | 'Yazılım' | 'AI'

export type Localized = { tr: string; en: string }

export type Project = {
  id: string
  title: string
  description: Localized
  longDescription: Localized
  role: Localized
  features: Localized[]
  outcome: Localized
  category: ProjectCategory
  tags: string[]
  github: string
  live?: string
  accent: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'datcia',
    title: 'Datcia Kuyumculuk',
    description: {
      tr: 'Datcia kuyumculuk markası için uçtan uca modern vitrin. Next.js + TypeScript ile ürün odaklı, hızlı arayüz.',
      en: 'End-to-end modern storefront for Datcia jewelry. Product-focused, fast UI with Next.js + TypeScript.',
    },
    longDescription: {
      tr: 'Lüks bir kuyumculuk markasının dijital yüzünü sıfırdan kurdum. Amaç: ürünü merkeze alan, hızlı yüklenen ve mobil uyumlu bir vitrin. Tipografi, boşluk, ürün kartları ve gezinme akışı markanın estetiğine göre kurgulandı — “güzel site” değil, satılabilir bir dijital mağaza deneyimi.',
      en: 'Built a luxury jewelry brand’s digital face from scratch. Goal: a product-first, fast, mobile-ready storefront. Typography, spacing, product cards, and navigation follow the brand — not just a pretty site, a sellable digital shop experience.',
    },
    role: {
      tr: 'Ön yüz geliştirme, arayüz tasarımı, Next.js kurulumu ve ürün vitrin akışı.',
      en: 'Frontend development, UI design, Next.js setup, and product storefront flow.',
    },
    features: [
      {
        tr: 'Next.js + TypeScript ile modern, tip güvenli mimari',
        en: 'Modern type-safe architecture with Next.js + TypeScript',
      },
      {
        tr: 'Ürün odaklı hero ve koleksiyon sunumu',
        en: 'Product-focused hero and collection presentation',
      },
      {
        tr: 'Mobil öncelikli, hızlı yüklenen arayüz',
        en: 'Mobile-first, fast-loading interface',
      },
      {
        tr: 'Markaya özel tipografi ve görsel dil',
        en: 'Brand-specific typography and visual language',
      },
    ],
    outcome: {
      tr: 'Markanın web’de nasıl durması gerektiğini netleştiren, canlıya alınabilir bir ürün vitrini.',
      en: 'A shippable product storefront that defines how the brand should feel on the web.',
    },
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ataersoy44945/Datcia-Site',
    live: 'https://datcia.com',
    accent: '#d4a017',
    image: '/projects/datcia.jpg',
    featured: true,
  },
  {
    id: 'fatalstroke',
    title: 'FatalStroke Gaming',
    description: {
      tr: 'Kendi yayın markamın kimlik sitesi. fatalstroke.com üzerinde canlı — oyun ve stream yüzeyi.',
      en: 'Identity site for my stream brand. Live at fatalstroke.com — games and stream surface.',
    },
    longDescription: {
      tr: 'FatalStroke Live’ın ana dijital kimliğini kendim tasarlayıp kodladım. Kick ve YouTube’a hızlı geçiş, güçlü görsel dil ve sade bir landing yapısı. Amaç: yayıncıyı değil, markayı hatırlatmak — “GAME ON. ALWAYS.” çizgisini tek ekranda net göstermek.',
      en: 'I designed and coded FatalStroke Live’s main digital identity myself. Fast paths to Kick and YouTube, strong visual language, clean landing. Goal: make the brand stick — land “GAME ON. ALWAYS.” in one screen.',
    },
    role: {
      tr: 'Marka sitesi tasarımı, HTML/CSS/JS geliştirme, domain ve yayın bağlantıları.',
      en: 'Brand site design, HTML/CSS/JS development, domain and stream links.',
    },
    features: [
      {
        tr: 'Canlı yayın ve sosyal kanallara tek tık erişim',
        en: 'One-click access to live stream and social channels',
      },
      {
        tr: 'Oyun / stream odaklı koyu görsel kimlik',
        en: 'Dark gaming/stream visual identity',
      },
      {
        tr: 'Hızlı, hafif landing — gereksiz katman yok',
        en: 'Fast, lightweight landing — no bloat',
      },
      {
        tr: 'fatalstroke.com üzerinde production yayını',
        en: 'Production deploy on fatalstroke.com',
      },
    ],
    outcome: {
      tr: 'Kendi yayın markamı kodla büyütebildiğimin kanıtı — canlıda çalışan kimlik yüzeyi.',
      en: 'Proof I can grow my own stream brand in code — a live identity surface.',
    },
    category: 'Web',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ataersoy44945/Fatalstroke-Gaming-Site',
    live: 'https://fatalstroke.com',
    accent: '#ff6a1a',
    image: '/projects/fatalstroke.jpg',
    featured: true,
  },
  {
    id: 'dencha',
    title: 'Dencha Kuyumculuk App',
    description: {
      tr: 'Dencha için App Store odaklı React Native mobil uygulama — ürün keşfi ve sepet akışı.',
      en: 'App Store–focused React Native app for Dencha — product discovery and cart flow.',
    },
    longDescription: {
      tr: 'Kuyumculuk ürünlerini mobil deneyime taşıyan React Native uygulama. Ürün grid’i, favori ve sepet akışı; koyu arayüz + altın tonlarla lüks hissi korunarak mobil platforma uyarlandı. Web vitrininden farklı olarak dokunmatik kullanım ve App Store sunumu önceliklendi.',
      en: 'A React Native app that brings jewelry products to mobile. Product grid, favorites, and cart — luxury feel kept with dark UI and gold accents. Touch-first and App Store presentation prioritized over a web storefront.',
    },
    role: {
      tr: 'React Native geliştirme, mobil UI/UX, ürün ve sepet ekranları.',
      en: 'React Native development, mobile UI/UX, product and cart screens.',
    },
    features: [
      {
        tr: 'TypeScript ile React Native uygulama iskeleti',
        en: 'React Native app scaffold with TypeScript',
      },
      {
        tr: 'Ürün listesi, detay ve sepete ekleme akışı',
        en: 'Product list, detail, and add-to-cart flow',
      },
      {
        tr: 'Markaya uygun koyu + altın mobil arayüz',
        en: 'Brand-aligned dark + gold mobile UI',
      },
      {
        tr: 'App Store odaklı ekran düzeni ve navigasyon',
        en: 'App Store–oriented layout and navigation',
      },
    ],
    outcome: {
      tr: 'Markanın mobil kanala açılan somut ürünü — e-ticaret hissi veren native deneyim.',
      en: 'Concrete mobile channel for the brand — a native experience that feels like commerce.',
    },
    category: 'Mobil',
    tags: ['TypeScript', 'React Native'],
    github:
      'https://github.com/ataersoy44945/Denchakuyumculukappstoreuygulamas-',
    accent: '#c9a227',
    image: '/projects/dencha.jpg',
    featured: true,
  },
  {
    id: 'weather-ai',
    title: 'Weather AI Chatbot',
    description: {
      tr: 'Sohbet arayüzüyle hava durumu sunan AI chatbot — konuşma + tahmin kartları.',
      en: 'AI chatbot that delivers weather through chat — conversation + forecast cards.',
    },
    longDescription: {
      tr: 'Klasik hava durumu sitesi yerine sohbet deneyimi kurdum. Kullanıcı doğal dilde soruyor; asistan yanıtı metin + görsel tahmin kartlarıyla veriyor. Amaç: AI’yi soyut demo olmaktan çıkarıp kullanılabilir bir ürün arayüzüne bağlamak.',
      en: 'Built a chat experience instead of a classic weather site. Users ask in natural language; the assistant answers with text plus visual forecast cards. Goal: turn AI from an abstract demo into a usable product UI.',
    },
    role: {
      tr: 'Python tabanlı asistan mantığı, sohbet UI ve tahmin sunumu.',
      en: 'Python assistant logic, chat UI, and forecast presentation.',
    },
    features: [
      {
        tr: 'Sohbet balonlarıyla doğal dil etkileşimi',
        en: 'Natural-language interaction with chat bubbles',
      },
      {
        tr: 'Güncel ve haftalık tahmin kartları',
        en: 'Current and weekly forecast cards',
      },
      {
        tr: 'Konum / birim gibi yardımcı kontroller',
        en: 'Helper controls like location / units',
      },
      {
        tr: 'AI yanıtı + ürün UI birleşimi',
        en: 'Combined AI response + product UI',
      },
    ],
    outcome: {
      tr: 'AI’yi hava durumu ürününe çeviren pratik bir chatbot prototipi.',
      en: 'A practical chatbot prototype that turns AI into a weather product.',
    },
    category: 'AI',
    tags: ['Python', 'AI', 'CSS'],
    github: 'https://github.com/ataersoy44945/weather-ai-chatbot',
    accent: '#3d9bff',
    image: '/projects/weather-ai.jpg',
    featured: true,
  },
  {
    id: 'arac-kiralama',
    title: 'Araç Kiralama Sistemi',
    description: {
      tr: 'PyQt6 ve OOP ile araç kiralama / paylaşım yönetim sistemi — panel, harita, rezervasyon.',
      en: 'Vehicle rental/sharing management system with PyQt6 and OOP — panels, map, bookings.',
    },
    longDescription: {
      tr: 'Nesne tabanlı mimariyle araç filosunu yöneten bir masaüstü sistem. Müşteri ve admin panelleri, rezervasyon akışı ve harita üzerinden konum görünümü hedeflendi. Katmanlı yapı sayesinde iş kuralları arayüzden ayrıldı — büyüyebilir bir yazılım iskeleti.',
      en: 'A desktop system managing a vehicle fleet with OOP architecture. Customer and admin panels, booking flow, and map-based locations. Layered structure keeps business rules off the UI — a scalable software skeleton.',
    },
    role: {
      tr: 'OOP modelleme, PyQt arayüz, rezervasyon ve yönetim akışları.',
      en: 'OOP modeling, PyQt UI, booking and admin flows.',
    },
    features: [
      {
        tr: 'Müşteri ve yönetici için ayrı paneller',
        en: 'Separate panels for customers and admins',
      },
      {
        tr: 'Araç listesi, durum ve rezervasyon yönetimi',
        en: 'Vehicle list, status, and reservation management',
      },
      {
        tr: 'Harita / konum odaklı görünüm entegrasyonu',
        en: 'Map/location-oriented view integration',
      },
      {
        tr: 'Katmanlı OOP mimari (model – arayüz ayrımı)',
        en: 'Layered OOP architecture (model–UI separation)',
      },
    ],
    outcome: {
      tr: 'Gerçek işletme senaryosuna yakın, OOP prensipleriyle kurulmuş tam kapsamlı bir masaüstü sistem.',
      en: 'A full desktop system built on OOP principles, close to a real business scenario.',
    },
    category: 'Yazılım',
    tags: ['Python', 'OOP', 'PyQt'],
    github: 'https://github.com/ataersoy44945/Arac-Kiralama-Sistemi',
    accent: '#4ade80',
    image: '/projects/arac-kiralama.jpg',
  },
  {
    id: 'kuyumcu',
    title: 'Kuyumcu Sistemi',
    description: {
      tr: 'Kuyumculuk işletmeleri için stok, gramaj ve işlem yönetim sistemi.',
      en: 'Stock, gram weight, and operations system for jewelry businesses.',
    },
    longDescription: {
      tr: 'Kuyumculuk sektörüne özel ihtiyaçları (ürün, gramaj, stok, işlem) merkeze alan bir yönetim yazılımı. Amaç: manuel takibi azaltıp işletmenin günlük operasyonunu yazılıma taşımak. OOP ile veri ve işlem katmanları düzenli tutuldu.',
      en: 'Management software centered on jewelry-specific needs (products, gram weight, stock, operations). Goal: reduce manual tracking and move daily ops into software. OOP keeps data and process layers clean.',
    },
    role: {
      tr: 'Alan modelleme, stok/işlem akışları, Python ile sistem geliştirme.',
      en: 'Domain modeling, stock/ops flows, system development in Python.',
    },
    features: [
      {
        tr: 'Ürün ve stok kayıt yönetimi',
        en: 'Product and stock record management',
      },
      {
        tr: 'İşlem / satış odaklı operasyon ekranları',
        en: 'Transaction/sales-oriented operation screens',
      },
      {
        tr: 'Kuyumculuğa özel alan mantığı (gramaj, stok)',
        en: 'Jewelry-specific domain logic (weight, stock)',
      },
      {
        tr: 'Nesne tabanlı, genişletilebilir yapı',
        en: 'Object-oriented, extensible structure',
      },
    ],
    outcome: {
      tr: 'Sektöre özel bir yazılım çözümü — genel stok uygulamasından daha odaklı bir ürün.',
      en: 'A sector-specific software solution — more focused than a generic stock app.',
    },
    category: 'Yazılım',
    tags: ['Python', 'OOP', 'Stok'],
    github: 'https://github.com/ataersoy44945/Kuyumcu-Sistemi',
    accent: '#fbbf24',
    image: '/projects/kuyumcu.jpg',
  },
  {
    id: 'depo-stok',
    title: 'Depo ve Stok Yönetimi',
    description: {
      tr: 'Depo süreçleri, stok hareketleri ve envanter takibi için yönetim yazılımı.',
      en: 'Management software for warehouse flows, stock movements, and inventory.',
    },
    longDescription: {
      tr: 'Depo operasyonunu sayılara bağlayan bir sistem: giriş-çıkış, stok seviyeleri ve hareket geçmişi. Amaç; envanterin nerede, ne kadar olduğunu anlık görebilmek ve operasyon hatalarını azaltmak.',
      en: 'A system that ties warehouse ops to numbers: inbound/outbound, stock levels, and movement history. Goal: know where and how much inventory is, and cut operational errors.',
    },
    role: {
      tr: 'Stok hareket modeli, depo paneli ve raporlama iskeleti.',
      en: 'Stock movement model, warehouse panel, and reporting skeleton.',
    },
    features: [
      {
        tr: 'Stok giriş / çıkış ve hareket kayıtları',
        en: 'Inbound/outbound stock and movement logs',
      },
      {
        tr: 'Depo ürün listesi ve seviye takibi',
        en: 'Warehouse product list and level tracking',
      },
      {
        tr: 'Operasyon paneli ve özet görünümler',
        en: 'Ops panel and summary views',
      },
      {
        tr: 'Yönetim yazılımı odaklı sade arayüz',
        en: 'Clean UI focused on management software',
      },
    ],
    outcome: {
      tr: 'Depo süreçlerini dijitalleştiren, ölçeklenebilir bir stok yönetim temeli.',
      en: 'A scalable stock-management foundation that digitizes warehouse flows.',
    },
    category: 'Yazılım',
    tags: ['Python', 'Stok', 'Yönetim'],
    github: 'https://github.com/ataersoy44945/Depo-ve-Stok-Y-netim-Sistemi',
    accent: '#a78bfa',
    image: '/projects/depo-stok.jpg',
  },
  {
    id: 'doktor-randevu',
    title: 'Online Doktor Randevu',
    description: {
      tr: 'Hasta–doktor randevularını dijitalleştiren online randevu sistemi.',
      en: 'Online appointment system that digitizes patient–doctor bookings.',
    },
    longDescription: {
      tr: 'Sağlık randevusunu kâğıt / telefon sürecinden çıkarıp dijital akışa taşıyan bir sistem. Doktor listesi, takvim slotları ve hasta rezervasyonu temel senaryoları kapsar. Amaç: zaman çakışmalarını azaltmak ve randevu sürecini netleştirmek.',
      en: 'Moves health appointments off paper/phone into a digital flow. Covers doctor lists, calendar slots, and patient booking. Goal: reduce conflicts and clarify the appointment process.',
    },
    role: {
      tr: 'Randevu akışı tasarımı, arayüz ve temel rezervasyon mantığı.',
      en: 'Appointment flow design, UI, and core booking logic.',
    },
    features: [
      {
        tr: 'Doktor / branş listesi ve seçim',
        en: 'Doctor/specialty list and selection',
      },
      {
        tr: 'Takvim ve uygun saat slotları',
        en: 'Calendar and available time slots',
      },
      {
        tr: 'Hasta randevu oluşturma akışı',
        en: 'Patient appointment creation flow',
      },
      {
        tr: 'Sağlık ürününe uygun sade panel dili',
        en: 'Clean panel language fit for a health product',
      },
    ],
    outcome: {
      tr: 'Gerçek hayattaki randevu problemini yazılımla çözen, anlaşılır bir ürün iskeleti.',
      en: 'A clear product skeleton that solves a real-world appointment problem in software.',
    },
    category: 'Yazılım',
    tags: ['Randevu', 'Python', 'UI'],
    github: 'https://github.com/ataersoy44945/Online-Doktor-Randevu-Sistemi',
    accent: '#22d3ee',
    image: '/projects/doktor-randevu.jpg',
  },
  {
    id: 'seyahat',
    title: 'Seyahat Planlama',
    description: {
      tr: 'Rotaları, günleri ve planları organize eden seyahat planlama uygulaması.',
      en: 'Travel planning app to organize routes, days, and itineraries.',
    },
    longDescription: {
      tr: 'Seyahat planını dağınık notlardan çıkarıp yapılandırılmış bir akışa çevirir: rota, gün planı, favoriler. Amaç; gezi hazırlığını tek yerde toplamak ve kullanıcıya net bir itinerary sunmak.',
      en: 'Turns messy trip notes into a structured flow: routes, day plans, favorites. Goal: gather trip prep in one place and give a clear itinerary.',
    },
    role: {
      tr: 'Planlama modeli, rota/itinerary UI ve kullanıcı akışı.',
      en: 'Planning model, route/itinerary UI, and user flow.',
    },
    features: [
      {
        tr: 'Rota ve destinasyon planlama',
        en: 'Route and destination planning',
      },
      {
        tr: 'Günlük itinerary düzenleme',
        en: 'Day-by-day itinerary editing',
      },
      {
        tr: 'Favori yerler / listeler',
        en: 'Favorite places / lists',
      },
      {
        tr: 'Seyahat odaklı sade panel deneyimi',
        en: 'Travel-focused clean panel experience',
      },
    ],
    outcome: {
      tr: 'Kişisel seyahat organizasyonunu dijitalleştiren kullanışlı bir planlama aracı.',
      en: 'A practical planning tool that digitizes personal trip organization.',
    },
    category: 'Yazılım',
    tags: ['Planlama', 'Python', 'UI'],
    github: 'https://github.com/ataersoy44945/Seyahat-planlama',
    accent: '#fb7185',
    image: '/projects/seyahat.jpg',
  },
  {
    id: 'yemek',
    title: 'Yemek Tarifleri',
    description: {
      tr: 'Tarifleri keşfetmek, kaydetmek ve yönetmek için Python tabanlı yemek uygulaması.',
      en: 'Python food app to discover, save, and manage recipes.',
    },
    longDescription: {
      tr: 'Tarifleri dağınık yerlerden toplayıp tek bir keşif + yönetim deneyimine bağlar. Malzeme, süre ve tarif kartlarıyla mutfak içeriğini düzenli hale getirir. Amaç: basit ama tatmin edici bir içerik ürünü çıkarmak.',
      en: 'Connects recipes from scattered places into one discovery + management experience. Organizes kitchen content with ingredients, timing, and recipe cards. Goal: ship a simple but satisfying content product.',
    },
    role: {
      tr: 'Tarif veri modeli, keşif arayüzü ve içerik yönetimi.',
      en: 'Recipe data model, discovery UI, and content management.',
    },
    features: [
      {
        tr: 'Tarif kartları ve detay görünümü',
        en: 'Recipe cards and detail view',
      },
      {
        tr: 'Malzeme / süre bilgisi sunumu',
        en: 'Ingredients / timing presentation',
      },
      {
        tr: 'Keşfet ve favori / kayıt akışları',
        en: 'Discover and favorite/save flows',
      },
      {
        tr: 'Python ile içerik odaklı uygulama iskeleti',
        en: 'Content-focused app skeleton in Python',
      },
    ],
    outcome: {
      tr: 'İçerik ürünü olarak tarif yönetimini netleştiren pratik bir mutfak uygulaması.',
      en: 'A practical kitchen app that clarifies recipe management as a content product.',
    },
    category: 'Yazılım',
    tags: ['Python', 'İçerik', 'UI'],
    github: 'https://github.com/ataersoy44945/Yemek-Tarifleri',
    accent: '#f97316',
    image: '/projects/yemek.jpg',
  },
  {
    id: 'fitness',
    title: 'Fitness Takip',
    description: {
      tr: 'Antrenman, ilerleme ve günlük hedefleri takip eden fitness uygulaması.',
      en: 'Fitness app tracking workouts, progress, and daily goals.',
    },
    longDescription: {
      tr: 'Antrenmanları “yaptım / yapmadım”dan çıkarıp ölçülebilir ilerlemeye çevirir: set, tekrar, kalori ve haftalık streak. Amaç; kullanıcının kendi performansını görmesi ve motivasyonu koruması.',
      en: 'Turns workouts from “did / didn’t” into measurable progress: sets, reps, calories, weekly streak. Goal: let users see their performance and stay motivated.',
    },
    role: {
      tr: 'Takip modeli, ilerleme paneli ve antrenman kayıt akışı.',
      en: 'Tracking model, progress panel, and workout log flow.',
    },
    features: [
      {
        tr: 'Antrenman kaydı (set / tekrar)',
        en: 'Workout logging (sets / reps)',
      },
      {
        tr: 'İlerleme ve özet grafikler',
        en: 'Progress and summary charts',
      },
      {
        tr: 'Günlük / haftalık hedef takibi',
        en: 'Daily / weekly goal tracking',
      },
      {
        tr: 'Fitness ürününe uygun koyu, enerjik arayüz',
        en: 'Dark, energetic UI fit for a fitness product',
      },
    ],
    outcome: {
      tr: 'Kişisel spor disiplinini yazılımla destekleyen takip ürünü.',
      en: 'A tracking product that supports personal training discipline with software.',
    },
    category: 'Yazılım',
    tags: ['Fitness', 'Takip', 'Python'],
    github: 'https://github.com/ataersoy44945/Fitness-Takip',
    accent: '#34d399',
    image: '/projects/fitness.jpg',
  },
  {
    id: 'kurs',
    title: 'Online Kurs Platformu',
    description: {
      tr: 'Çevrimiçi eğitim içerikleri için kurs keşfi ve ilerleme platformu.',
      en: 'Course discovery and progress platform for online learning content.',
    },
    longDescription: {
      tr: 'Eğitim içeriğini listeleyip ilerlemeyi görünür kılan bir öğrenme yüzeyi. Kurs kartları, ders listesi ve ilerleme çubuğu ile “ne izledim, ne kaldı?” sorusuna cevap verir. Amaç: online eğitimi dağınık videolardan çıkarıp platform deneyimine çevirmek.',
      en: 'A learning surface that lists education content and makes progress visible. Course cards, lesson lists, and progress bars answer “what did I watch, what’s left?” Goal: turn online learning from scattered videos into a platform experience.',
    },
    role: {
      tr: 'Kurs / ders yapısı, ilerleme UI ve platform iskeleti.',
      en: 'Course/lesson structure, progress UI, and platform skeleton.',
    },
    features: [
      {
        tr: 'Kurs katalogu ve kart görünümü',
        en: 'Course catalog and card view',
      },
      {
        tr: 'Ders listesi ve içerik paneli',
        en: 'Lesson list and content panel',
      },
      {
        tr: 'İlerleme çubuğu / tamamlanma takibi',
        en: 'Progress bar / completion tracking',
      },
      {
        tr: 'Eğitim ürününe uygun net gezinme',
        en: 'Clear navigation fit for an education product',
      },
    ],
    outcome: {
      tr: 'Online eğitimi ürünleştiren, ilerlemeyi görünür kılan bir platform temeli.',
      en: 'A platform foundation that productizes online learning and makes progress visible.',
    },
    category: 'Web',
    tags: ['Eğitim', 'Platform', 'UI'],
    github: 'https://github.com/ataersoy44945/Online-Kurs-Platformu',
    accent: '#60a5fa',
    image: '/projects/kurs.jpg',
  },
  {
    id: 'crm',
    title: 'Basit CRM Sistemi',
    description: {
      tr: 'Müşteri, fırsat ve iletişim takibini sade tutan CRM sistemi.',
      en: 'CRM system that keeps customer, deal, and contact tracking simple.',
    },
    longDescription: {
      tr: 'Küçük ekipler / bireysel kullanım için sadeleştirilmiş müşteri ilişkileri yönetimi. Müşteri kayıtları, durum ve fırsat pipeline’ı ile “kimle ne konuştum?” bilgisini kaybetmemeyi hedefler. Karmaşık enterprise CRM yerine hızlı kullanılabilir bir iskelet.',
      en: 'Simplified CRM for small teams / solo use. Customer records, status, and a deal pipeline aim to never lose “who did I talk to?” Faster, usable skeleton vs heavy enterprise CRM.',
    },
    role: {
      tr: 'CRM veri modeli, müşteri paneli ve pipeline görünümü.',
      en: 'CRM data model, customer panel, and pipeline view.',
    },
    features: [
      {
        tr: 'Müşteri kayıtları ve durum alanları',
        en: 'Customer records and status fields',
      },
      {
        tr: 'Fırsat / pipeline panosu',
        en: 'Deal / pipeline board',
      },
      {
        tr: 'Son iletişim ve takip notları',
        en: 'Last contact and follow-up notes',
      },
      {
        tr: 'Sade, hızlı kullanılabilir yönetim arayüzü',
        en: 'Simple, fast-to-use management UI',
      },
    ],
    outcome: {
      tr: 'İş geliştirme sürecini düzenleyen, hafif ve anlaşılır bir CRM temeli.',
      en: 'A light, clear CRM foundation that organizes business development.',
    },
    category: 'Yazılım',
    tags: ['CRM', 'Python', 'Yönetim'],
    github: 'https://github.com/ataersoy44945/Basit-CRM-sistemi',
    accent: '#e879f9',
    image: '/projects/crm.jpg',
  },
]

export const categories: Array<ProjectCategory | 'Tümü'> = [
  'Tümü',
  'Web',
  'Mobil',
  'Yazılım',
  'AI',
]
