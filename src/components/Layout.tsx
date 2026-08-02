import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()

  return (
    <>
      <Header />
      <main key={location.pathname} className="page-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
