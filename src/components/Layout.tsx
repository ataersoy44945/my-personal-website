import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { CursorGlow } from './CursorGlow'
import { PageTransition } from './PageTransition'
import { PageWipe } from './PageWipe'
import { Seo } from './Seo'
import { Analytics } from './Analytics'
import { useLanguage } from '../i18n/LanguageContext'
import { detectLangFromPath, normalizePath } from '../i18n/routes'

export function Layout() {
  const location = useLocation()
  const { lang, setLang } = useLanguage()
  const path = normalizePath(location.pathname)

  useEffect(() => {
    const fromPath = detectLangFromPath(path)
    if (fromPath && fromPath !== lang) {
      setLang(fromPath)
    }
  }, [path, lang, setLang])

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'tr' ? 'İçeriğe geç' : 'Skip to content'}
      </a>
      <Seo path={path} />
      <Analytics />
      <CursorGlow />
      <PageWipe />
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={path}>
          <main id="main" className="page-main" tabIndex={-1}>
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  )
}
