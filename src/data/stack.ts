export type StackGroup = {
  title: { tr: string; en: string }
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: { tr: 'Diller', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    title: { tr: 'Framework & Kütüphane', en: 'Frameworks & Libraries' },
    items: ['React', 'Next.js', 'React Native', 'Node.js', 'Framer Motion'],
  },
  {
    title: { tr: 'Araçlar', en: 'Tools' },
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Tailwind CSS', 'Netlify'],
  },
  {
    title: { tr: 'Odak Alanları', en: 'Focus areas' },
    items: [
      'Oyun geliştirme',
      'Ürün odaklı web',
      'Mobil uygulamalar',
      'Nesne tabanlı tasarım',
      'Yayın & marka',
    ],
  },
]
