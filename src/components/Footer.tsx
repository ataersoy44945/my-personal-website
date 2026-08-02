import { socials } from '../data/socials'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {year} Ata Ersoy</p>
        <div className="footer-links">
          {socials.map((s) => (
            <a key={s.id} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
