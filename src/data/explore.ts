export type ExploreItem = {
  titleKey: 'about' | 'projects' | 'stack' | 'stream' | 'clips' | 'contact'
  descriptionKey: 'about' | 'projects' | 'stack' | 'stream' | 'clips' | 'contact'
  route: 'about' | 'projects' | 'stack' | 'stream' | 'clips' | 'contact'
}

export const exploreItems: ExploreItem[] = [
  { titleKey: 'about', descriptionKey: 'about', route: 'about' },
  { titleKey: 'projects', descriptionKey: 'projects', route: 'projects' },
  { titleKey: 'stack', descriptionKey: 'stack', route: 'stack' },
  { titleKey: 'stream', descriptionKey: 'stream', route: 'stream' },
  { titleKey: 'clips', descriptionKey: 'clips', route: 'clips' },
  { titleKey: 'contact', descriptionKey: 'contact', route: 'contact' },
]
