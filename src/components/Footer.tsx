import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>{t.footer.replace('{year}', String(year))}</p>
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
