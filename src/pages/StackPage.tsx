import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { stackGroups } from '../data/stack'

export function StackPage() {
  return (
    <section className="page shell">
      <PageHeader
        eyebrow="Stack"
        title="Araç çantam."
        description="Projelerde kullandığım diller, framework’ler ve çalışma alanlarım."
      />

      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="stack-card card-glow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <h2>{group.title}</h2>
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
