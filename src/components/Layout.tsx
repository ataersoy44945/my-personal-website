import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { CursorGlow } from './CursorGlow'
import { PageTransition } from './PageTransition'

export function Layout() {
  const location = useLocation()

  return (
    <>
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
