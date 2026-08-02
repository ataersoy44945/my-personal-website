import { site, statusConfig } from './site'
import { socials } from './socials'

/** Stable brand SEO identity used by runtime Seo + static HTML. */
export const brandSeo = {
  name: site.name,
  alternateNames: ['FatalStroke', 'FatalStroke Live', 'fatalstrokelive'],
  titleDefaultTr: 'Ata Ersoy | Oyun Geliştirici & FatalStroke Live',
  titleDefaultEn: 'Ata Ersoy | Game Developer & FatalStroke Live',
  descriptionTr:
    'Ata Ersoy — İstanbul Kültür Üniversitesi Bilgisayar Programcılığı mezunu, oyun geliştirici ve FatalStroke Live yayıncısı. Resmi site: ataersoy.com.',
  descriptionEn:
    'Ata Ersoy — Computer Programming graduate, game developer, and FatalStroke Live streamer. Official site: ataersoy.com.',
  keywords: [
    'Ata Ersoy',
    'FatalStroke',
    'FatalStroke Live',
    'oyun geliştirici',
    'game developer',
    'ataersoy.com',
  ],
} as const

export function buildSiteJsonLd(lang: 'tr' | 'en') {
  const sameAs = [
    ...socials.map((s) => s.href),
    site.kickUrl,
    site.youtubeUrl,
    'https://fatalstroke.com',
  ]
  const uniqueSameAs = [...new Set(sameAs)]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.canonicalUrl}/#website`,
        name: site.name,
        alternateName: brandSeo.alternateNames,
        url: site.canonicalUrl,
        inLanguage: ['tr', 'en'],
        description:
          lang === 'tr' ? brandSeo.descriptionTr : brandSeo.descriptionEn,
        publisher: { '@id': `${site.canonicalUrl}/#person` },
        about: { '@id': `${site.canonicalUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${site.canonicalUrl}/#person`,
        name: site.name,
        alternateName: brandSeo.alternateNames,
        url: site.canonicalUrl,
        image: site.avatarUrl,
        email: site.email,
        jobTitle:
          lang === 'tr'
            ? 'Oyun geliştirici & yayıncı'
            : 'Game developer & streamer',
        description:
          lang === 'tr' ? brandSeo.descriptionTr : brandSeo.descriptionEn,
        homeLocation: {
          '@type': 'Place',
          name: statusConfig.location[lang],
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name:
            lang === 'tr'
              ? 'İstanbul Kültür Üniversitesi'
              : 'Istanbul Kultur University',
        },
        brand: {
          '@type': 'Brand',
          name: 'FatalStroke Live',
          url: 'https://fatalstroke.com',
        },
        sameAs: uniqueSameAs,
        knowsAbout: [
          'Game Development',
          'Oyun geliştirme',
          'React',
          'TypeScript',
          'Next.js',
          'Streaming',
          'FatalStroke Live',
        ],
        mainEntityOfPage: site.canonicalUrl,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${site.canonicalUrl}/#profilepage`,
        url: site.canonicalUrl,
        name: brandSeo.titleDefaultTr,
        mainEntity: { '@id': `${site.canonicalUrl}/#person` },
        inLanguage: ['tr', 'en'],
      },
    ],
  }
}
