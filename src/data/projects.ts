export type ProjectCategory = 'Web' | 'Mobil' | 'Yazılım' | 'AI'

export type Project = {
  id: string
  title: string
  description: { tr: string; en: string }
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
      tr: 'Datcia kuyumculuk markası için modern web sitesi. Next.js ve TypeScript ile ürün odaklı arayüz.',
      en: 'Modern jewelry brand website for Datcia. Product-focused UI with Next.js and TypeScript.',
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
      tr: 'Oyun ve yayın kimliği için web sitesi. fatalstroke.com üzerinde yayında.',
      en: 'Gaming and stream identity site. Live at fatalstroke.com.',
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
      tr: 'Dencha kuyumculuk için App Store odaklı mobil uygulama.',
      en: 'App Store–focused mobile app for Dencha jewelry.',
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
      tr: 'Hava durumunu sohbet arayüzüyle sunan AI chatbot.',
      en: 'AI chatbot that delivers weather through a chat UI.',
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
