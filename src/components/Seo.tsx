import { useEffect } from 'react'
import { site } from '../data/site'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'
import { alternatePaths, normalizePath } from '../i18n/routes'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function buildJsonLd(lang: 'tr' | 'en') {
  const sameAs = socials.map((s) => s.href)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.canonicalUrl}/#website`,
        name: site.name,
        url: site.canonicalUrl,
        inLanguage: ['tr', 'en'],
        publisher: { '@id': `${site.canonicalUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${site.canonicalUrl}/#person`,
        name: site.name,
        url: site.canonicalUrl,
        image: site.avatarUrl,
        email: site.email,
        jobTitle:
          lang === 'tr'
            ? 'Oyun geliştirici & yayıncı'
            : 'Game developer & streamer',
        sameAs,
        knowsAbout: [
          'Game Development',
          'React',
          'TypeScript',
          'Next.js',
          'Streaming',
        ],
      },
    ],
  }
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const { lang, t } = useLanguage()
  const cleanPath = normalizePath(path)
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${t.home.role}`
  const desc = description ?? t.home.lead
  const url = `${site.canonicalUrl}${cleanPath === '/' ? '/' : cleanPath}`
  const alts = alternatePaths(cleanPath)

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)![1])
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)![1])
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', desc)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:image"]', 'content', `${site.canonicalUrl}/og.png`)
    setMeta('meta[property="og:locale"]', 'content', lang === 'tr' ? 'tr_TR' : 'en_US')
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)
    setMeta('meta[name="twitter:image"]', 'content', `${site.canonicalUrl}/og.png`)

    upsertLink('canonical', url)
    upsertLink('alternate', `${site.canonicalUrl}${alts.tr === '/' ? '/' : alts.tr}`, 'tr')
    upsertLink('alternate', `${site.canonicalUrl}${alts.en === '/' ? '/' : alts.en}`, 'en')
    upsertLink(
      'alternate',
      `${site.canonicalUrl}${alts.tr === '/' ? '/' : alts.tr}`,
      'x-default',
    )

    upsertJsonLd('json-ld-site', buildJsonLd(lang))
  }, [fullTitle, desc, url, lang, alts.tr, alts.en])

  return null
}
