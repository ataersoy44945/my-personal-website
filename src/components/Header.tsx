import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LangSwitch } from './LangSwitch'
import { LiveBadge } from './LiveBadge'
import { useLanguage } from '../i18n/LanguageContext'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/hakkimda', label: t.nav.about },
    { to: '/projeler', label: t.nav.projects },
    { to: '/stack', label: t.nav.stack },
    { to: '/yayin', label: t.nav.stream },
    { to: '/klipler', label: t.nav.clips },
    { to: '/iletisim', label: t.nav.contact },
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
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
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
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
