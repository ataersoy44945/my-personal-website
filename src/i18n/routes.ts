import type { Lang } from './translations'

export type RouteKey =
  | 'home'
  | 'about'
  | 'projects'
  | 'stack'
  | 'stream'
  | 'clips'
  | 'contact'

export const routePaths: Record<RouteKey, { tr: string; en: string }> = {
  home: { tr: '/', en: '/' },
  about: { tr: '/hakkimda', en: '/about' },
  projects: { tr: '/projeler', en: '/projects' },
  stack: { tr: '/stack', en: '/stack' },
  stream: { tr: '/yayin', en: '/stream' },
  clips: { tr: '/klipler', en: '/clips' },
  contact: { tr: '/iletisim', en: '/contact' },
}

const projectTr = /^\/projeler\/([^/]+)\/?$/
const projectEn = /^\/projects\/([^/]+)\/?$/

export function pathFor(key: RouteKey, lang: Lang, projectId?: string): string {
  const base = routePaths[key][lang]
  if (key === 'projects' && projectId) {
    return `${base}/${projectId}`
  }
  return base
}

export function detectLangFromPath(pathname: string): Lang | null {
  const clean = normalizePath(pathname)
  if (clean === '/' || clean === '/stack') return null

  for (const key of Object.keys(routePaths) as RouteKey[]) {
    if (key === 'home' || key === 'stack') continue
    if (routePaths[key].tr === clean) return 'tr'
    if (routePaths[key].en === clean) return 'en'
  }

  if (projectTr.test(clean)) return 'tr'
  if (projectEn.test(clean)) return 'en'
  return null
}

export function localizePath(pathname: string, lang: Lang): string {
  const clean = normalizePath(pathname)

  for (const key of Object.keys(routePaths) as RouteKey[]) {
    const paths = routePaths[key]
    if (clean === paths.tr || clean === paths.en) {
      return paths[lang]
    }
  }

  const trMatch = clean.match(projectTr)
  if (trMatch) return pathFor('projects', lang, trMatch[1])

  const enMatch = clean.match(projectEn)
  if (enMatch) return pathFor('projects', lang, enMatch[1])

  return clean
}

export function alternatePaths(pathname: string): { tr: string; en: string } {
  const clean = normalizePath(pathname)

  for (const key of Object.keys(routePaths) as RouteKey[]) {
    const paths = routePaths[key]
    if (clean === paths.tr || clean === paths.en) {
      return { tr: paths.tr, en: paths.en }
    }
  }

  const trMatch = clean.match(projectTr)
  if (trMatch) {
    return {
      tr: pathFor('projects', 'tr', trMatch[1]),
      en: pathFor('projects', 'en', trMatch[1]),
    }
  }

  const enMatch = clean.match(projectEn)
  if (enMatch) {
    return {
      tr: pathFor('projects', 'tr', enMatch[1]),
      en: pathFor('projects', 'en', enMatch[1]),
    }
  }

  return { tr: clean, en: clean }
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

/** Flat list of localized page paths (no project details). */
export function staticLocalizedPaths(): string[] {
  const out = new Set<string>(['/'])
  for (const key of Object.keys(routePaths) as RouteKey[]) {
    if (key === 'home') continue
    out.add(routePaths[key].tr)
    out.add(routePaths[key].en)
  }
  return [...out]
}
