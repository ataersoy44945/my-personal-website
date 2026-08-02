/** Shared build-time route + SEO copy for sitemap / prerender. */
export const siteUrl = 'https://ataersoy.com'

export const pages = [
  {
    pathTr: '/',
    pathEn: '/',
    titleTr: 'Ata Ersoy — Oyun geliştirici & FatalStroke Live',
    titleEn: 'Ata Ersoy — Game developer & FatalStroke Live',
    descTr:
      'İstanbul Kültür Üniversitesi Bilgisayar Programcılığı mezunu. Web, mobil, yazılım sistemleri ve aktif oyun geliştirme. FatalStroke Live.',
    descEn:
      'Computer Programming graduate. Web, mobile, software systems, and active game development. FatalStroke Live.',
  },
  {
    pathTr: '/hakkimda',
    pathEn: '/about',
    titleTr: 'Hakkımda · Ata Ersoy',
    titleEn: 'About · Ata Ersoy',
    descTr:
      'Mezun bilgisayar programcısı. Ürün çıkaran, oyun odağında ileri giden geliştirici. FatalStroke Live.',
    descEn:
      'Computer Programming graduate. Product builder turning focus to games. FatalStroke Live.',
  },
  {
    pathTr: '/projeler',
    pathEn: '/projects',
    titleTr: 'Projeler · Ata Ersoy',
    titleEn: 'Projects · Ata Ersoy',
    descTr: 'Marka siteleri, mobil uygulamalar, yazılım sistemleri ve AI projeleri.',
    descEn: 'Brand sites, mobile apps, software systems, and AI projects.',
  },
  {
    pathTr: '/stack',
    pathEn: '/stack',
    titleTr: 'Stack · Ata Ersoy',
    titleEn: 'Stack · Ata Ersoy',
    descTr: 'Kullandığım diller, framework’ler ve araçlar.',
    descEn: 'Languages, frameworks, and tools I work with.',
  },
  {
    pathTr: '/yayin',
    pathEn: '/stream',
    titleTr: 'Yayın · FatalStroke Live',
    titleEn: 'Stream · FatalStroke Live',
    descTr: 'FatalStroke Live — Kick ve YouTube yayın kimliği.',
    descEn: 'FatalStroke Live — Kick and YouTube stream identity.',
  },
  {
    pathTr: '/klipler',
    pathEn: '/clips',
    titleTr: 'Klipler · FatalStroke Live',
    titleEn: 'Clips · FatalStroke Live',
    descTr: 'Yayın klipleri ve öne çıkan anlar.',
    descEn: 'Stream clips and highlights.',
  },
  {
    pathTr: '/iletisim',
    pathEn: '/contact',
    titleTr: 'İletişim · Ata Ersoy',
    titleEn: 'Contact · Ata Ersoy',
    descTr: 'Proje, iş birliği veya yayın için iletişime geç.',
    descEn: 'Get in touch for projects, collabs, or streaming.',
  },
]

export const projectIds = [
  'datcia',
  'fatalstroke',
  'dencha',
  'weather-ai',
  'arac-kiralama',
  'kuyumcu',
  'depo-stok',
  'doktor-randevu',
  'seyahat',
  'yemek',
  'fitness',
  'kurs',
  'crm',
]

export function allPrerenderPaths() {
  const paths = new Set()
  for (const page of pages) {
    paths.add(page.pathTr)
    paths.add(page.pathEn)
  }
  for (const id of projectIds) {
    paths.add(`/projeler/${id}`)
    paths.add(`/projects/${id}`)
  }
  return [...paths]
}

export function pageMetaForPath(pathname) {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  for (const page of pages) {
    if (clean === page.pathTr) {
      return {
        lang: 'tr',
        title: page.titleTr,
        description: page.descTr,
        path: page.pathTr,
        altTr: page.pathTr,
        altEn: page.pathEn,
      }
    }
    if (clean === page.pathEn) {
      return {
        lang: 'en',
        title: page.titleEn,
        description: page.descEn,
        path: page.pathEn,
        altTr: page.pathTr,
        altEn: page.pathEn,
      }
    }
  }

  const trProject = clean.match(/^\/projeler\/([^/]+)$/)
  if (trProject) {
    return {
      lang: 'tr',
      title: `${trProject[1]} · Projeler · Ata Ersoy`,
      description: 'Ata Ersoy proje detayı.',
      path: clean,
      altTr: clean,
      altEn: `/projects/${trProject[1]}`,
    }
  }

  const enProject = clean.match(/^\/projects\/([^/]+)$/)
  if (enProject) {
    return {
      lang: 'en',
      title: `${enProject[1]} · Projects · Ata Ersoy`,
      description: 'Ata Ersoy project detail.',
      path: clean,
      altTr: `/projeler/${enProject[1]}`,
      altEn: clean,
    }
  }

  return null
}
