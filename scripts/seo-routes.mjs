/** Shared build-time route + SEO copy for sitemap / prerender. */
export const siteUrl = 'https://ataersoy.com'

export const pages = [
  {
    pathTr: '/',
    pathEn: '/',
    titleTr: 'Ata Ersoy | Oyun Geliştirici & FatalStroke Live',
    titleEn: 'Ata Ersoy | Game Developer & FatalStroke Live',
    descTr:
      'Ata Ersoy — İstanbul Kültür Üniversitesi Bilgisayar Programcılığı mezunu, oyun geliştirici ve FatalStroke Live yayıncısı. Resmi site: ataersoy.com.',
    descEn:
      'Ata Ersoy — Computer Programming graduate, game developer, and FatalStroke Live streamer. Official site: ataersoy.com.',
  },
  {
    pathTr: '/hakkimda',
    pathEn: '/about',
    titleTr: 'Ata Ersoy Hakkında | Oyun Geliştirici',
    titleEn: 'About Ata Ersoy | Game Developer',
    descTr:
      'Ata Ersoy kimdir? Bilgisayar Programcılığı mezunu, ürün çıkaran geliştirici ve FatalStroke Live yayıncısı.',
    descEn:
      'Who is Ata Ersoy? Computer Programming graduate, product builder, and FatalStroke Live streamer.',
  },
  {
    pathTr: '/projeler',
    pathEn: '/projects',
    titleTr: 'Ata Ersoy Projeleri | Portfolyo',
    titleEn: 'Ata Ersoy Projects | Portfolio',
    descTr: 'Ata Ersoy projeleri — marka siteleri, mobil uygulamalar, yazılım sistemleri ve AI.',
    descEn: 'Ata Ersoy projects — brand sites, mobile apps, software systems, and AI.',
  },
  {
    pathTr: '/stack',
    pathEn: '/stack',
    titleTr: 'Ata Ersoy Stack | Teknolojiler',
    titleEn: 'Ata Ersoy Stack | Technologies',
    descTr: 'Ata Ersoy’un kullandığı diller, framework’ler ve araçlar.',
    descEn: 'Languages, frameworks, and tools Ata Ersoy works with.',
  },
  {
    pathTr: '/yayin',
    pathEn: '/stream',
    titleTr: 'Ata Ersoy — FatalStroke Live Yayın',
    titleEn: 'Ata Ersoy — FatalStroke Live Stream',
    descTr: 'Ata Ersoy / FatalStroke Live — Kick ve YouTube yayın kimliği.',
    descEn: 'Ata Ersoy / FatalStroke Live — Kick and YouTube stream identity.',
  },
  {
    pathTr: '/klipler',
    pathEn: '/clips',
    titleTr: 'Ata Ersoy Klipleri | FatalStroke Live',
    titleEn: 'Ata Ersoy Clips | FatalStroke Live',
    descTr: 'Ata Ersoy / FatalStroke Live yayın klipleri ve öne çıkan anlar.',
    descEn: 'Ata Ersoy / FatalStroke Live stream clips and highlights.',
  },
  {
    pathTr: '/iletisim',
    pathEn: '/contact',
    titleTr: 'Ata Ersoy İletişim',
    titleEn: 'Contact Ata Ersoy',
    descTr: 'Ata Ersoy ile iletişime geç — proje, iş birliği veya yayın.',
    descEn: 'Contact Ata Ersoy — projects, collabs, or streaming.',
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
