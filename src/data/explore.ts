export type ExploreItem = {
  title: string
  description: string
  to: string
}

export const exploreItems: ExploreItem[] = [
  {
    title: 'Hakkımda',
    description: 'Eğitim yolculuğum, ilgi alanlarım ve kim olduğum',
    to: '/hakkimda',
  },
  {
    title: 'Projeler',
    description: 'GitHub’daki çalışmalarım ve canlı site linkleri',
    to: '/projeler',
  },
  {
    title: 'Stack',
    description: 'Kullandığım teknolojiler, diller ve araçlar',
    to: '/stack',
  },
  {
    title: 'Yayın',
    description: 'Kick ve YouTube üzerinden FatalStroke Live',
    to: '/yayin',
  },
  {
    title: 'İletişim',
    description: 'Sosyal medya hesaplarım ve bağlantılar',
    to: '/iletisim',
  },
]
