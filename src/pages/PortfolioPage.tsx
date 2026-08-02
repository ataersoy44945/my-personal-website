import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import {
  categories,
  projects,
  type ProjectCategory,
} from '../data/projects'

export function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>('Tümü')

  const filtered = useMemo(() => {
    if (active === 'Tümü') return projects
    return projects.filter((p) => p.category === (active as ProjectCategory))
  }, [active])

  return (
    <section className="page shell">
      <PageHeader
        eyebrow="Projeler"
        title="GitHub’dan seçilmiş işler."
        description="Repolarımdaki projeler ve varsa canlı site linkleri. Detay için GitHub’a göz atabilirsin."
      />

      <div className="filter-bar" role="tablist" aria-label="Proje filtreleri">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.28) }}
          >
            <div className="project-top">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="badge">{project.category}</span>
            </div>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Canlı site →
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
