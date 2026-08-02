import { useEffect } from 'react'
import { site } from '../data/site'

function injectScript(attrs: Record<string, string>, id: string) {
  if (document.getElementById(id)) return
  const el = document.createElement('script')
  el.id = id
  el.defer = true
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value)
  }
  document.head.appendChild(el)
}

export function Analytics() {
  useEffect(() => {
    const { plausibleDomain, umami } = site.analytics

    if (plausibleDomain) {
      injectScript(
        {
          src: 'https://plausible.io/js/script.js',
          'data-domain': plausibleDomain,
        },
        'plausible-analytics',
      )
    }

    if (umami.scriptSrc && umami.websiteId) {
      injectScript(
        {
          src: umami.scriptSrc,
          'data-website-id': umami.websiteId,
        },
        'umami-analytics',
      )
    }
  }, [])

  return null
}
