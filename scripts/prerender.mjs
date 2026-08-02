import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import {
  allPrerenderPaths,
  pageMetaForPath,
  pages,
  projectIds,
  siteUrl,
} from './seo-routes.mjs'

const distDir = path.resolve('dist')
const templatePath = path.join(distDir, 'index.html')

const sameAs = [
  'https://github.com/ataersoy44945',
  'https://instagram.com/ata44945',
  'https://youtube.com/@fatalstrokelive',
  'https://kick.com/fatalstrokelive',
  'https://fatalstroke.com',
]

function absUrl(pathname) {
  return pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}`
}

function jsonLd(lang) {
  const description =
    lang === 'tr'
      ? 'Ata Ersoy — İstanbul Kültür Üniversitesi Bilgisayar Programcılığı mezunu, oyun geliştirici ve FatalStroke Live yayıncısı. Resmi site: ataersoy.com.'
      : 'Ata Ersoy — Computer Programming graduate, game developer, and FatalStroke Live streamer. Official site: ataersoy.com.'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Ata Ersoy',
        alternateName: ['FatalStroke', 'FatalStroke Live', 'fatalstrokelive'],
        url: siteUrl,
        inLanguage: ['tr', 'en'],
        description,
        publisher: { '@id': `${siteUrl}/#person` },
        about: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Ata Ersoy',
        alternateName: ['FatalStroke', 'FatalStroke Live', 'fatalstrokelive'],
        url: siteUrl,
        image: 'https://avatars.githubusercontent.com/u/249717574?v=4',
        email: 'ataersoy1234@hotmail.com',
        jobTitle:
          lang === 'tr'
            ? 'Oyun geliştirici & yayıncı'
            : 'Game developer & streamer',
        description,
        homeLocation: {
          '@type': 'Place',
          name: lang === 'tr' ? 'İstanbul' : 'Istanbul',
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
        sameAs,
        knowsAbout: [
          'Game Development',
          'Oyun geliştirme',
          'React',
          'TypeScript',
          'Next.js',
          'Streaming',
          'FatalStroke Live',
        ],
        mainEntityOfPage: siteUrl,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: 'Ata Ersoy | Oyun Geliştirici & FatalStroke Live',
        mainEntity: { '@id': `${siteUrl}/#person` },
        inLanguage: ['tr', 'en'],
      },
    ],
  }
}

function injectMeta(html, meta) {
  const url = absUrl(meta.path)
  const locale = meta.lang === 'tr' ? 'tr_TR' : 'en_US'
  const altTr = absUrl(meta.altTr)
  const altEn = absUrl(meta.altEn)
  const ld = JSON.stringify(jsonLd(meta.lang))

  let out = html
  out = out.replace(/<html\s+lang="[^"]*"/, `<html lang="${meta.lang}"`)
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)

  out = replaceMeta(out, 'name', 'description', meta.description)
  out = replaceMeta(out, 'property', 'og:title', meta.title)
  out = replaceMeta(out, 'property', 'og:description', meta.description)
  out = replaceMeta(out, 'property', 'og:url', url)
  out = replaceMeta(out, 'property', 'og:locale', locale)
  out = replaceMeta(out, 'name', 'twitter:title', meta.title)
  out = replaceMeta(out, 'name', 'twitter:description', meta.description)

  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  )

  const hreflangs = [
    `<link rel="alternate" hreflang="tr" href="${altTr}" />`,
    `<link rel="alternate" hreflang="en" href="${altEn}" />`,
    `<link rel="alternate" hreflang="x-default" href="${altTr}" />`,
  ].join('\n    ')

  // Drop previous alternate tags so rebuilds stay clean
  out = out.replace(/\s*<link\s+rel="alternate"[^>]*>/g, '')

  if (out.includes('id="json-ld-site"')) {
    out = out.replace(
      /<script type="application\/ld\+json" id="json-ld-site">[\s\S]*?<\/script>/,
      `<script type="application/ld+json" id="json-ld-site">${ld}</script>`,
    )
    out = out.replace(
      /<script type="application\/ld\+json" id="json-ld-site">/,
      `${hreflangs}\n    <script type="application/ld+json" id="json-ld-site">`,
    )
  } else {
    out = out.replace(
      '</head>',
      `    ${hreflangs}\n    <script type="application/ld+json" id="json-ld-site">${ld}</script>\n  </head>`,
    )
  }

  return out
}

function replaceMeta(html, attr, key, value) {
  const re = new RegExp(
    `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`,
    'i',
  )
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`
  if (re.test(html)) return html.replace(re, tag)
  return html.replace('</head>', `    ${tag}\n  </head>`)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function outputFileForPath(pathname) {
  if (pathname === '/') return path.join(distDir, 'index.html')
  return path.join(distDir, pathname.slice(1), 'index.html')
}

async function writeSitemap() {
  const urls = []
  const now = new Date().toISOString().slice(0, 10)

  for (const page of pages) {
    urls.push({ loc: absUrl(page.pathTr), lang: 'tr', altTr: page.pathTr, altEn: page.pathEn })
    if (page.pathEn !== page.pathTr) {
      urls.push({ loc: absUrl(page.pathEn), lang: 'en', altTr: page.pathTr, altEn: page.pathEn })
    }
  }

  for (const id of projectIds) {
    urls.push({
      loc: absUrl(`/projeler/${id}`),
      lang: 'tr',
      altTr: `/projeler/${id}`,
      altEn: `/projects/${id}`,
    })
    urls.push({
      loc: absUrl(`/projects/${id}`),
      lang: 'en',
      altTr: `/projeler/${id}`,
      altEn: `/projects/${id}`,
    })
  }

  const body = urls
    .map((u) => {
      return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <xhtml:link rel="alternate" hreflang="tr" href="${absUrl(u.altTr)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absUrl(u.altEn)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(u.altTr)}" />
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`

  await writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
  await writeFile(path.resolve('public/sitemap.xml'), xml, 'utf8')
}

const template = await readFile(templatePath, 'utf8')
const routes = allPrerenderPaths()

for (const route of routes) {
  const meta = pageMetaForPath(route)
  if (!meta) {
    console.warn(`No meta for ${route}, skipping`)
    continue
  }
  const html = injectMeta(template, meta)
  const outFile = outputFileForPath(route)
  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, html, 'utf8')
  console.log(`prerender ${route} → ${path.relative(process.cwd(), outFile)}`)
}

await writeSitemap()
console.log(`prerendered ${routes.length} routes + sitemap.xml`)
