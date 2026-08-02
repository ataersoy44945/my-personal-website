export type ExploreItem = {
  titleKey: 'about' | 'projects' | 'stack' | 'stream' | 'clips' | 'contact'
  descriptionKey: 'about' | 'projects' | 'stack' | 'stream' | 'clips' | 'contact'
  to: string
}

export const exploreItems: ExploreItem[] = [
  { titleKey: 'about', descriptionKey: 'about', to: '/hakkimda' },
  { titleKey: 'projects', descriptionKey: 'projects', to: '/projeler' },
  { titleKey: 'stack', descriptionKey: 'stack', to: '/stack' },
  { titleKey: 'stream', descriptionKey: 'stream', to: '/yayin' },
  { titleKey: 'clips', descriptionKey: 'clips', to: '/klipler' },
  { titleKey: 'contact', descriptionKey: 'contact', to: '/iletisim' },
]
