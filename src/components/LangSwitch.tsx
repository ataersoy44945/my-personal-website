import { useLanguage } from '../i18n/LanguageContext'

export function LangSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'tr' ? 'active' : undefined}
        onClick={() => setLang('tr')}
      >
        TR
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'active' : undefined}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
