export type Clip = {
  id: string
  platform: 'youtube' | 'kick'
  title: { tr: string; en: string }
  description: { tr: string; en: string }
  href: string
  /** YouTube video id — varsa embed gösterilir */
  youtubeId?: string
}

/**
 * Kanalında video yayınladığında youtubeId alanını doldur.
 * Örn: youtubeId: 'dQw4w9WgXcQ'
 */
export const clips: Clip[] = [
  {
    id: 'kick-live',
    platform: 'kick',
    title: {
      tr: 'Kick — FatalStroke Live',
      en: 'Kick — FatalStroke Live',
    },
    description: {
      tr: 'Canlı yayınlar burada. Takip et, bildirim aç.',
      en: 'Live streams land here. Follow and turn on alerts.',
    },
    href: 'https://kick.com/fatalstrokelive',
  },
  {
    id: 'yt-channel',
    platform: 'youtube',
    title: {
      tr: 'YouTube kanalı',
      en: 'YouTube channel',
    },
    description: {
      tr: 'Yayın arşivi, highlight ve içerikler.',
      en: 'VODs, highlights and uploads.',
    },
    href: 'https://youtube.com/@fatalstrokelive',
  },
  {
    id: 'fatalstroke-site',
    platform: 'kick',
    title: {
      tr: 'fatalstroke.com',
      en: 'fatalstroke.com',
    },
    description: {
      tr: 'Oyun kimliği sitesi — yayın markası.',
      en: 'Gaming identity site — stream brand.',
    },
    href: 'https://fatalstroke.com',
  },
]

export const featuredYoutubeIds: string[] = [
  // Video yükleyince ID ekle: 'xxxxxxxxxxx'
]
