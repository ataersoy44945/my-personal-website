import { useRef, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { exploreItems } from '../data/explore'
import { Marquee } from '../components/Marquee'
import { LiveBadge } from '../components/LiveBadge'
import { NowStatus } from '../components/NowStatus'
import { useLanguage } from '../i18n/LanguageContext'

const name = ['Ata', ' ', 'Ersoy'] as const

export function HomePage() {
  const { t } = useLanguage()
  const ambientRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLHeadingElement>(null)

  const onParallax = (e: PointerEvent<HTMLElement>) => {
    const ambient = ambientRef.current
    if (!ambient) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    ambient.style.setProperty('--px', String(px))
    ambient.style.setProperty('--py', String(py))

    if (brandRef.current) {
      brandRef.current.style.transform = `perspective(900px) rotateX(${py * -4}deg) rotateY(${px * 5}deg) translateZ(0)`
    }
  }

  const resetParallax = () => {
    ambientRef.current?.style.setProperty('--px', '0')
    ambientRef.current?.style.setProperty('--py', '0')
    if (brandRef.current) brandRef.current.style.transform = ''
  }

  return (
    <>
      <section
        className="hero"
        onPointerMove={onParallax}
        onPointerLeave={resetParallax}
      >
        <div className="hero-ambient" ref={ambientRef} aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
          <span className="hero-ring" />
          <span className="hero-mesh" />
          <span className="hero-beam" />
          <span className="hero-scan" />
        </div>

        <div className="shell hero-inner hero-layout">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LiveBadge />
            </motion.div>

            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {t.home.eyebrow}
            </motion.span>

            <h1 className="hero-brand" ref={brandRef}>
              {name.map((part, i) =>
                part === ' ' ? (
                  <span key="space" className="hero-space">
                    {' '}
                  </span>
                ) : (
                  <motion.span
                    key={part}
                    className={part === 'Ersoy' ? 'accent-text glitch' : 'glitch'}
                    data-text={part}
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
              <span className="hero-brand-line" aria-hidden="true" />
            </h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              {t.home.role}
            </motion.p>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
            >
              {t.home.lead}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link className="btn btn-primary btn-shine" to="/projeler">
                {t.home.ctaProjects}
              </Link>
              <Link className="btn btn-ghost" to="/yayin">
                {t.home.ctaStream}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <NowStatus />
          </motion.div>
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

      <Marquee />

      <section className="strengths shell">
        <motion.div
          className="explore-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <span className="eyebrow">{t.home.strengthsEyebrow}</span>
            <h2>{t.home.strengthsTitle}</h2>
          </div>
        </motion.div>

        <div className="strengths-grid">
          {t.home.strengths.map((item, index) => (
            <motion.article
              key={item.title}
              className="strength-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="strength-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
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
            <span className="eyebrow">{t.home.exploreEyebrow}</span>
            <h2>{t.home.exploreTitle}</h2>
          </div>
          <p className="muted">{t.home.exploreSub}</p>
        </motion.div>

        <div className="explore-grid">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                className="explore-card card-glow spotlight-card"
                to={item.to}
                onMouseMove={(e) => {
                  const el = e.currentTarget
                  const rect = el.getBoundingClientRect()
                  el.style.setProperty(
                    '--spot-x',
                    `${((e.clientX - rect.left) / rect.width) * 100}%`,
                  )
                  el.style.setProperty(
                    '--spot-y',
                    `${((e.clientY - rect.top) / rect.height) * 100}%`,
                  )
                }}
              >
                <span className="explore-index">0{index + 1}</span>
                <div>
                  <h3>{t.nav[item.titleKey]}</h3>
                  <p>{t.explore[item.descriptionKey]}</p>
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
