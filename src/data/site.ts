export const site = {
  name: 'Ata Ersoy',
  handle: 'fatalstrokelive',
  email: 'ataersoy44945@gmail.com',
  discord: 'ata44945',
  /** Discord numeric user ID varsa profil linki çalışır */
  discordUserId: '',
  discordUrl: 'https://discord.com/users/ata44945',
  canonicalUrl: 'https://ataersoy.com',
  githubUser: 'ataersoy44945',
  /** Gerçek fotoğrafını `public/about.jpg` + `about.webp` olarak koy */
  aboutImage: '/about.webp',
  aboutImageFallback: '/about.jpg',
  avatarUrl: 'https://avatars.githubusercontent.com/u/249717574?v=4',
  kickUrl: 'https://kick.com/fatalstrokelive',
  youtubeUrl: 'https://youtube.com/@fatalstrokelive',
  /** Formspree form ID — boşsa FormSubmit.co (email) kullanılır */
  formspreeId: '',
  analytics: {
    plausibleDomain: '',
    umami: {
      scriptSrc: '',
      websiteId: '',
    },
  },
} as const

export const statusConfig = {
  activity: {
    tr: 'Kod yazıyor & yayın planlıyor',
    en: 'Coding & planning streams',
  },
  location: {
    tr: 'İstanbul',
    en: 'Istanbul',
  },
  forceLive: false,
  kickUsername: 'fatalstrokelive',
} as const

export function getDiscordUrl() {
  return site.discordUserId
    ? `https://discord.com/users/${site.discordUserId}`
    : site.discordUrl
}
