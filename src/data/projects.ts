export type ProjectCategory = 'Web' | 'Mobil' | 'Yazılım' | 'AI'

export type Project = {
  id: string
  title: string
  description: { tr: string; en: string }
  longDescription?: { tr: string; en: string }
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
      tr: 'Markanın dijital vitrinini sıfırdan kurdum: tipografi, ürün kartları, mobil uyum ve gezinme akışı. Lüks bir markanın web’de nasıl durması gerektiğine dair net bir ürün çıktısı.',
      en: 'Built the brand’s digital storefront from scratch: typography, product cards, mobile fit, and navigation. A clear product outcome for how a luxury brand should feel on the web.',
    },
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ataersoy44945/Datcia-Site',
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
      tr: 'FatalStroke Live markasının ana dijital yüzeyi. Kick / YouTube bağlantıları, görsel dil ve hızlı landing. Kendi markamı kodla büyüttüğüm kanıt.',
      en: 'The main digital surface for FatalStroke Live — Kick/YouTube links, visual language, fast landing. Proof I can grow my own brand in code.',
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
      tr: 'Mobilde lüks ürün deneyimi: koyu arayüz, altın tonlar, net kartlar. Marka uygulamasını mobil platforma taşıyan somut bir iş.',
      en: 'Luxury product experience on mobile: dark UI, gold accents, clear cards. Concrete work bringing a brand app to mobile.',
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
      tr: 'Kullanıcı sorularını doğal dilde yanıtlayan, tahmin kartlarıyla zenginleştirilmiş bir asistan. AI ile ürün arayüzünü birleştiren pratik bir proje.',
      en: 'A natural-language assistant enriched with forecast cards. Practical work combining AI with a product UI.',
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
      tr: 'Nesne tabanlı mimariyle araç kiralama ve yönetim sistemi.',
      en: 'OOP vehicle rental and management system.',
    },
    category: 'Yazılım',
    tags: ['Python', 'OOP'],
    github: 'https://github.com/ataersoy44945/Arac-Kiralama-Sistemi',
    accent: '#4ade80',
    image: '/projects/arac-kiralama.jpg',
  },
  {
    id: 'kuyumcu',
    title: 'Kuyumcu Sistemi',
    description: {
      tr: 'Kuyumculuk işletmeleri için stok ve işlem yönetim sistemi.',
      en: 'Stock and operations system for jewelry businesses.',
    },
    category: 'Yazılım',
    tags: ['Python', 'OOP'],
    github: 'https://github.com/ataersoy44945/Kuyumcu-Sistemi',
    accent: '#fbbf24',
    image: '/projects/kuyumcu.jpg',
  },
  {
    id: 'depo-stok',
    title: 'Depo ve Stok Yönetimi',
    description: {
      tr: 'Depo süreçleri ve stok hareketlerini yönetmek için yazılım.',
      en: 'Software for warehouse flows and stock movements.',
    },
    category: 'Yazılım',
    tags: ['Yönetim', 'Stok'],
    github: 'https://github.com/ataersoy44945/Depo-ve-Stok-Y-netim-Sistemi',
    accent: '#a78bfa',
    image: '/projects/depo-stok.jpg',
  },
  {
    id: 'doktor-randevu',
    title: 'Online Doktor Randevu',
    description: {
      tr: 'Hasta ve doktor randevularını dijitalleştiren sistem.',
      en: 'System that digitizes patient–doctor appointments.',
    },
    category: 'Yazılım',
    tags: ['Randevu', 'Web'],
    github: 'https://github.com/ataersoy44945/Online-Doktor-Randevu-Sistemi',
    accent: '#22d3ee',
    image: '/projects/doktor-randevu.jpg',
  },
  {
    id: 'seyahat',
    title: 'Seyahat Planlama',
    description: {
      tr: 'Seyahat rotalarını ve planlarını organize eden uygulama.',
      en: 'App to organize travel routes and plans.',
    },
    category: 'Yazılım',
    tags: ['Planlama'],
    github: 'https://github.com/ataersoy44945/Seyahat-planlama',
    accent: '#fb7185',
    image: '/projects/seyahat.jpg',
  },
  {
    id: 'yemek',
    title: 'Yemek Tarifleri',
    description: {
      tr: 'Tarifleri keşfetmek ve yönetmek için Python projesi.',
      en: 'Python project to discover and manage recipes.',
    },
    category: 'Yazılım',
    tags: ['Python'],
    github: 'https://github.com/ataersoy44945/Yemek-Tarifleri',
    accent: '#f97316',
    image: '/projects/yemek.jpg',
  },
  {
    id: 'fitness',
    title: 'Fitness Takip',
    description: {
      tr: 'Antrenman ve fitness ilerlemesini takip uygulaması.',
      en: 'Workout and fitness progress tracker.',
    },
    category: 'Yazılım',
    tags: ['Takip', 'Fitness'],
    github: 'https://github.com/ataersoy44945/Fitness-Takip',
    accent: '#34d399',
    image: '/projects/fitness.jpg',
  },
  {
    id: 'kurs',
    title: 'Online Kurs Platformu',
    description: {
      tr: 'Çevrimiçi eğitim içerikleri için kurs platformu.',
      en: 'Course platform for online learning content.',
    },
    category: 'Web',
    tags: ['Eğitim', 'Platform'],
    github: 'https://github.com/ataersoy44945/Online-Kurs-Platformu',
    accent: '#60a5fa',
    image: '/projects/kurs.jpg',
  },
  {
    id: 'crm',
    title: 'Basit CRM Sistemi',
    description: {
      tr: 'Müşteri ilişkilerini yönetmek için sade CRM.',
      en: 'Simple CRM for managing customer relationships.',
    },
    category: 'Yazılım',
    tags: ['CRM'],
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
