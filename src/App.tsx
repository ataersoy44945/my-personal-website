import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { StackPage } from './pages/StackPage'
import { StreamPage } from './pages/StreamPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimda" element={<AboutPage />} />
          <Route path="projeler" element={<PortfolioPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="yayin" element={<StreamPage />} />
          <Route path="iletisim" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
