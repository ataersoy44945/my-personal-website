import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { exploreItems } from '../data/explore'

const name = ['Ata', ' ', 'Ersoy'] as const

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-ambient" aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
          <span className="hero-ring" />
        </div>

        <div className="shell hero-inner">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i />
              FatalStroke Live
            </motion.div>

            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Portfolyo
            </motion.span>

            <h1 className="hero-brand">
              {name.map((part, i) =>
                part === ' ' ? (
                  <span key="space" className="hero-space">
                    {' '}
                  </span>
                ) : (
                  <motion.span
                    key={part}
                    className={part === 'Ersoy' ? 'accent-text' : undefined}
                    initial={{ opacity: 0, y: 28, rotateX: 40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.12 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {part}
                  </motion.span>
                ),
              )}
            </h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              Yazılım geliştirici &amp; yayıncı
            </motion.p>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
            >
              İstanbul Kültür Üniversitesi Bilgisayar Programcılığı öğrencisiyim.
              Web ve yazılım projeleri geliştiriyor, Kick üzerinden{' '}
              <strong>FatalStroke Live</strong> olarak yayın açıyorum.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link className="btn btn-primary btn-shine" to="/projeler">
                Projeleri gör
              </Link>
              <Link className="btn btn-ghost" to="/yayin">
                Yayına bak
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          aria-hidden="true"
        >
          <span />
        </motion.div>
      </section>

      <section className="explore shell">
        <motion.div
          className="explore-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <span className="eyebrow">Keşfet</span>
            <h2>Portfolyomu incele</h2>
          </div>
          <p className="muted">Aşağıdaki bölümlerden devam et.</p>
        </motion.div>

        <div className="explore-grid">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <Link className="explore-card card-glow" to={item.to}>
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
