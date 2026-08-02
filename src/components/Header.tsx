import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Ana Sayfa', end: true },
  { to: '/hakkimda', label: 'Hakkımda' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/stack', label: 'Stack' },
  { to: '/yayin', label: 'Yayın' },
  { to: '/iletisim', label: 'İletişim' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

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

        <nav className="nav-links" aria-label="Ana menü">
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

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <nav
        className={`shell mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobil menü"
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
