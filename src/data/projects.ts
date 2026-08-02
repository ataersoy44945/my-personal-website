export type ProjectCategory = 'Web' | 'Mobil' | 'Yazılım' | 'AI'

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  github: string
  live?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'datcia',
    title: 'Datcia Kuyumculuk',
    description:
      'Datcia kuyumculuk markası için modern web sitesi. Next.js ve TypeScript ile geliştirilmiş ürün odaklı arayüz.',
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ataersoy44945/Datcia-Site',
    featured: true,
  },
  {
    id: 'fatalstroke',
    title: 'FatalStroke Gaming',
    description:
      'Oyun ve yayın kimliği için web tabanlı site. fatalstroke.com üzerinde yayında.',
    category: 'Web',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ataersoy44945/Fatalstroke-Gaming-Site',
    live: 'https://fatalstroke.com',
    featured: true,
  },
  {
    id: 'dencha',
    title: 'Dencha Kuyumculuk App',
    description:
      'Dencha kuyumculuk için App Store odaklı mobil uygulama. TypeScript ile geliştirildi.',
    category: 'Mobil',
    tags: ['TypeScript', 'React Native'],
    github:
      'https://github.com/ataersoy44945/Denchakuyumculukappstoreuygulamas-',
    featured: true,
  },
  {
    id: 'weather-ai',
    title: 'Weather AI Chatbot',
    description:
      'Hava durumu bilgilerini sohbet arayüzü üzerinden sunan yapay zekâ destekli chatbot.',
    category: 'AI',
    tags: ['Python', 'AI', 'CSS'],
    github: 'https://github.com/ataersoy44945/weather-ai-chatbot',
    featured: true,
  },
  {
    id: 'arac-kiralama',
    title: 'Araç Kiralama Sistemi',
    description:
      'Nesne tabanlı mimariyle geliştirilmiş araç kiralama ve yönetim sistemi.',
    category: 'Yazılım',
    tags: ['Python', 'OOP'],
    github: 'https://github.com/ataersoy44945/Arac-Kiralama-Sistemi',
  },
  {
    id: 'kuyumcu',
    title: 'Kuyumcu Sistemi',
    description:
      'Kuyumculuk işletmeleri için nesne tabanlı stok ve işlem yönetim sistemi.',
    category: 'Yazılım',
    tags: ['Python', 'OOP'],
    github: 'https://github.com/ataersoy44945/Kuyumcu-Sistemi',
  },
  {
    id: 'depo-stok',
    title: 'Depo ve Stok Yönetimi',
    description:
      'Depo süreçlerini takip etmek ve stok hareketlerini yönetmek için yazılım çözümü.',
    category: 'Yazılım',
    tags: ['Yönetim', 'Stok'],
    github: 'https://github.com/ataersoy44945/Depo-ve-Stok-Y-netim-Sistemi',
  },
  {
    id: 'doktor-randevu',
    title: 'Online Doktor Randevu',
    description:
      'Hasta ve doktor randevularını dijitalleştiren çevrimiçi randevu sistemi.',
    category: 'Yazılım',
    tags: ['Randevu', 'Web'],
    github: 'https://github.com/ataersoy44945/Online-Doktor-Randevu-Sistemi',
  },
  {
    id: 'seyahat',
    title: 'Seyahat Planlama',
    description:
      'Seyahat rotalarını ve planlarını organize etmeye yardımcı uygulama.',
    category: 'Yazılım',
    tags: ['Planlama'],
    github: 'https://github.com/ataersoy44945/Seyahat-planlama',
  },
  {
    id: 'yemek',
    title: 'Yemek Tarifleri',
    description:
      'Tarifleri keşfetmek ve yönetmek için Python tabanlı yemek tarifleri projesi.',
    category: 'Yazılım',
    tags: ['Python'],
    github: 'https://github.com/ataersoy44945/Yemek-Tarifleri',
  },
  {
    id: 'fitness',
    title: 'Fitness Takip',
    description:
      'Antrenman ve fitness ilerlemesini takip etmek için geliştirilmiş uygulama.',
    category: 'Yazılım',
    tags: ['Takip', 'Fitness'],
    github: 'https://github.com/ataersoy44945/Fitness-Takip',
  },
  {
    id: 'kurs',
    title: 'Online Kurs Platformu',
    description:
      'Çevrimiçi eğitim içeriklerini sunmak için kurs platformu iskeleti.',
    category: 'Web',
    tags: ['Eğitim', 'Platform'],
    github: 'https://github.com/ataersoy44945/Online-Kurs-Platformu',
  },
  {
    id: 'crm',
    title: 'Basit CRM Sistemi',
    description:
      'Müşteri ilişkilerini yönetmek için sade ve işlevsel CRM çözümü.',
    category: 'Yazılım',
    tags: ['CRM'],
    github: 'https://github.com/ataersoy44945/Basit-CRM-sistemi',
  },
]

export const categories: Array<ProjectCategory | 'Tümü'> = [
  'Tümü',
  'Web',
  'Mobil',
  'Yazılım',
  'AI',
]
