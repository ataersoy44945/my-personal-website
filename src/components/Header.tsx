import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LangSwitch } from './LangSwitch'
import { LiveBadge } from './LiveBadge'
import { useLanguage } from '../i18n/LanguageContext'
import { useLocalizedPath } from '../hooks/useLocalizedPath'
import { alternatePaths, normalizePath } from '../i18n/routes'

function linkActive(pathname: string, to: string, end?: boolean) {
  const current = normalizePath(pathname)
  const alts = alternatePaths(to)
  const candidates = [alts.tr, alts.en]
  if (end) return candidates.includes(current)
  return candidates.some(
    (c) => current === c || (c !== '/' && current.startsWith(`${c}/`)),
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()
  const path = useLocalizedPath()

  const links = [
    { to: path('home'), label: t.nav.home, end: true },
    { to: path('about'), label: t.nav.about },
    { to: path('projects'), label: t.nav.projects },
    { to: path('stack'), label: t.nav.stack },
    { to: path('stream'), label: t.nav.stream },
    { to: path('clips'), label: t.nav.clips },
    { to: path('contact'), label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="shell nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          Ata Ersoy<span>.</span>
        </NavLink>

        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to + link.label}
              to={link.to}
              end={link.end}
              className={() =>
                linkActive(location.pathname, link.to, link.end)
                  ? 'active'
                  : undefined
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-tools">
          <LiveBadge compact />
          <LangSwitch />
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`shell mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <NavLink
            key={link.to + link.label}
            to={link.to}
            end={link.end}
            className={() =>
              linkActive(location.pathname, link.to, link.end)
                ? 'active'
                : undefined
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
