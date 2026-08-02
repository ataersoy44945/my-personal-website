export type Social = {
  id: string
  label: string
  handle: string
  href: string
  description: string
}

export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'ataersoy44945',
    href: 'https://github.com/ataersoy44945',
    description: 'Açık kaynak projeler ve kod arşivi',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@ata44945',
    href: 'https://instagram.com/ata44945',
    description: 'Günlük paylaşımlar ve hikâyeler',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'fatalstrokelive',
    href: 'https://youtube.com/@fatalstrokelive',
    description: 'Video içerikler ve yayın arşivi',
  },
  {
    id: 'kick',
    label: 'Kick',
    handle: 'fatalstrokelive',
    href: 'https://kick.com/fatalstrokelive',
    description: 'Canlı yayınlar — FatalStroke Live',
  },
]

export const streamLinks = {
  kick: 'https://kick.com/fatalstrokelive',
  youtube: 'https://youtube.com/@fatalstrokelive',
  site: 'https://fatalstroke.com',
}
