import { useEffect } from 'react'
import { site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const { lang, t } = useLanguage()
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${t.home.role}`
  const desc = description ?? t.home.lead
  const url = `${site.canonicalUrl}${path}`

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

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [fullTitle, desc, url, lang])

  return null
}
