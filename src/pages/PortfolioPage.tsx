import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { ProjectCover } from '../components/ProjectCover'
import {
  categories,
  projects,
  type ProjectCategory,
} from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export function PortfolioPage() {
  const { lang, t } = useLanguage()
  const [active, setActive] = useState<(typeof categories)[number]>('Tümü')

  const filtered = useMemo(() => {
    if (active === 'Tümü') return projects
    return projects.filter((p) => p.category === (active as ProjectCategory))
  }, [active])

  const labelFor = (cat: (typeof categories)[number]) => {
    if (cat === 'Tümü') return t.projects.all
    return t.categories[cat]
  }

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <div className="filter-bar" role="tablist" aria-label="Filters">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {labelFor(cat)}
          </button>
        ))}
      </div>

      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card card-glow"
              layout
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
              whileHover={{ y: -5 }}
            >
              <ProjectCover
                title={project.title}
                category={t.categories[project.category]}
                accent={project.accent}
                image={project.image}
              />

              <div className="project-top">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description[lang]}</p>
                </div>
                <span className="badge">{t.categories[project.category]}</span>
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
                  {t.projects.github}
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    {t.projects.live}
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
