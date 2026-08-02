export type StackGroup = {
  title: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Diller',
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    title: 'Framework & Kütüphane',
    items: ['React', 'Next.js', 'React Native', 'Node.js'],
  },
  {
    title: 'Araçlar',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Odak Alanları',
    items: [
      'Web geliştirme',
      'Mobil uygulamalar',
      'Nesne tabanlı tasarım',
      'Yayın & içerik',
    ],
  },
]
