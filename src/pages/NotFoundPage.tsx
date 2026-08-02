import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export function NotFoundPage() {
  const { lang } = useLanguage()

  return (
    <section className="page shell not-found">
      <motion.div
        className="not-found-panel card-glow"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="eyebrow">404</span>
        <h1 className="accent-text">GAME OVER</h1>
        <p className="not-found-sub">RESPAWN</p>
        <p className="muted">
          {lang === 'tr'
            ? 'Bu sayfa yok — ana menüden devam et.'
            : 'This page doesn’t exist — continue from the main menu.'}
        </p>
        <Link className="btn btn-primary btn-shine" to="/">
          {lang === 'tr' ? 'Respawn → Ana Sayfa' : 'Respawn → Home'}
        </Link>
      </motion.div>
    </section>
  )
}
