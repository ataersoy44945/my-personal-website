import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizePath } from '../i18n/routes'
import type { Lang } from '../i18n/translations'

export function LangSwitch() {
  const { lang, setLang } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const switchTo = (next: Lang) => {
    if (next === lang) return
    setLang(next)
    const nextPath = localizePath(location.pathname, next)
    if (nextPath !== location.pathname) {
      navigate(nextPath, { replace: true })
    }
  }

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'tr' ? 'active' : undefined}
        onClick={() => switchTo('tr')}
      >
        TR
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'active' : undefined}
        onClick={() => switchTo('en')}
      >
        EN
      </button>
    </div>
  )
}
