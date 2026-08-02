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
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <LanguageProvider>
      <KickLiveProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route path="hakkimda" element={<AboutPage />} />
              <Route path="about" element={<AboutPage />} />

              <Route path="projeler" element={<PortfolioPage />} />
              <Route path="projects" element={<PortfolioPage />} />
              <Route path="projeler/:id" element={<ProjectDetailPage />} />
              <Route path="projects/:id" element={<ProjectDetailPage />} />

              <Route path="stack" element={<StackPage />} />

              <Route path="yayin" element={<StreamPage />} />
              <Route path="stream" element={<StreamPage />} />

              <Route path="klipler" element={<ClipsPage />} />
              <Route path="clips" element={<ClipsPage />} />

              <Route path="iletisim" element={<ContactPage />} />
              <Route path="contact" element={<ContactPage />} />

              {/* Legacy / typo helpers */}
              <Route path="hakkinda" element={<Navigate to="/hakkimda" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </KickLiveProvider>
    </LanguageProvider>
  )
}
