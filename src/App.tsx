import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { KickLiveProvider } from './hooks/KickLiveContext'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ClipsPage } from './pages/ClipsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { StackPage } from './pages/StackPage'
import { StreamPage } from './pages/StreamPage'

export default function App() {
  return (
    <LanguageProvider>
      <KickLiveProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="hakkimda" element={<AboutPage />} />
              <Route path="projeler" element={<PortfolioPage />} />
              <Route path="projeler/:id" element={<ProjectDetailPage />} />
              <Route path="stack" element={<StackPage />} />
              <Route path="yayin" element={<StreamPage />} />
              <Route path="klipler" element={<ClipsPage />} />
              <Route path="iletisim" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </KickLiveProvider>
    </LanguageProvider>
  )
}
