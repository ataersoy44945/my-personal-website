import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      <div className="about-layout">
        <motion.div
          className="about-photo card-glow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={site.avatarUrl}
            alt={site.name}
            width={320}
            height={320}
            loading="lazy"
          />
          <div className="about-photo-meta">
            <strong>{site.name}</strong>
            <span>@{site.handle}</span>
          </div>
        </motion.div>

        <div className="about-grid">
          <motion.article
            className="about-block card-glow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2>{t.about.whoTitle}</h2>
            <p>{t.about.whoBody}</p>

            <div className="about-meta">
              <div className="meta-row">
                <strong>{t.about.education}</strong>
                <span>{t.about.educationValue}</span>
              </div>
              <div className="meta-row">
                <strong>{t.about.focus}</strong>
                <span>{t.about.focusValue}</span>
              </div>
              <div className="meta-row">
                <strong>{t.about.stream}</strong>
                <span>{t.about.streamValue}</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="about-block card-glow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <h2>{t.about.whatTitle}</h2>
            <p>{t.about.whatBody}</p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
