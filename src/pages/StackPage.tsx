import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { stackGroups } from '../data/stack'
import { useLanguage } from '../i18n/LanguageContext'

export function StackPage() {
  const { lang, t } = useLanguage()

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.stack.eyebrow}
        title={t.stack.title}
        description={t.stack.description}
      />

      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <motion.article
            key={group.title.tr}
            className="stack-card card-glow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <h2>{group.title[lang]}</h2>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
