import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { exploreItems } from '../data/explore'

export function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Portfolyo
          </motion.span>
          <motion.h1
            className="hero-brand"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Ata <em>Ersoy</em>
          </motion.h1>
          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Yazılım geliştirici &amp; yayıncı
          </motion.p>
          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            İstanbul Kültür Üniversitesi Bilgisayar Programcılığı öğrencisiyim.
            Web ve yazılım projeleri geliştiriyor, Kick üzerinden{' '}
            <strong>FatalStroke Live</strong> olarak yayın açıyorum.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <Link className="btn btn-primary" to="/projeler">
              Projeleri gör
            </Link>
            <Link className="btn btn-ghost" to="/yayin">
              Yayına bak
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="explore shell">
        <div className="explore-head">
          <div>
            <span className="eyebrow">Keşfet</span>
            <h2>Portfolyomu incele</h2>
          </div>
          <p className="muted">Aşağıdaki bölümlerden devam et.</p>
        </div>

        <div className="explore-grid">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link className="explore-card" to={item.to}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
