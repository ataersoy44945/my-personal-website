export type Social = {
  id: string
  label: string
  handle: string
  href: string
  description: { tr: string; en: string }
}

export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'ataersoy44945',
    href: 'https://github.com/ataersoy44945',
    description: {
      tr: 'Açık kaynak projeler ve kod arşivi',
      en: 'Open-source projects and code archive',
    },
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@ata44945',
    href: 'https://instagram.com/ata44945',
    description: {
      tr: 'Günlük paylaşımlar ve hikâyeler',
      en: 'Daily posts and stories',
    },
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'fatalstrokelive',
    href: 'https://youtube.com/@fatalstrokelive',
    description: {
      tr: 'Video içerikler ve yayın arşivi',
      en: 'Videos and stream archive',
    },
  },
  {
    id: 'kick',
    label: 'Kick',
    handle: 'fatalstrokelive',
    href: 'https://kick.com/fatalstrokelive',
    description: {
      tr: 'Canlı yayınlar — FatalStroke Live',
      en: 'Live streams — FatalStroke Live',
    },
  },
  {
    id: 'discord',
    label: 'Discord',
    handle: 'ata44945',
    href: 'https://discord.com/users/ata44945',
    description: {
      tr: 'Direkt mesaj için Discord',
      en: 'Reach me on Discord',
    },
  },
]

export const streamLinks = {
  kick: 'https://kick.com/fatalstrokelive',
  youtube: 'https://youtube.com/@fatalstrokelive',
  site: 'https://fatalstroke.com',
}
