import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { CursorGlow } from './CursorGlow'
import { PageTransition } from './PageTransition'
import { Seo } from './Seo'

const pathMeta: Record<string, string> = {
  '/': '/',
  '/hakkimda': '/hakkimda',
  '/projeler': '/projeler',
  '/stack': '/stack',
  '/yayin': '/yayin',
  '/klipler': '/klipler',
  '/iletisim': '/iletisim',
}

export function Layout() {
  const location = useLocation()

  return (
    <>
      <Seo path={pathMeta[location.pathname] ?? '/'} />
      <CursorGlow />
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main className="page-main">
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  )
}
