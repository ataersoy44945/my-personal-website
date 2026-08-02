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

export function Layout() {
  const location = useLocation()
  const { lang } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'tr' ? 'İçeriğe geç' : 'Skip to content'}
      </a>
      <Seo path={location.pathname === '/' ? '/' : location.pathname} />
      <Analytics />
      <CursorGlow />
      <PageWipe />
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main id="main" className="page-main" tabIndex={-1}>
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  )
}
