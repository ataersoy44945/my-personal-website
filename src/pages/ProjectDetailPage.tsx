import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { ProjectCover } from '../components/ProjectCover'
import { Seo } from '../components/Seo'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export function ProjectDetailPage() {
  const { id } = useParams()
  const { lang, t } = useLanguage()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="page shell">
        <PageHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.notFound}
          description={t.projects.notFoundDesc}
        />
        <p className="project-detail-back">
          <Link to="/projeler">{t.projects.back}</Link>
        </p>
      </section>
    )
  }

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3)

  return (
    <section className="page shell">
      <Seo
        title={project.title}
        description={project.description[lang]}
        path={`/projeler/${project.id}`}
      />
      <p className="project-detail-back">
        <Link to="/projeler">{t.projects.back}</Link>
      </p>

      <motion.div
        className="project-detail"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="project-detail-cover card-glow">
          <ProjectCover
            title={project.title}
            category={t.categories[project.category]}
            accent={project.accent}
            image={project.image}
            priority
            variant="detail"
          />
        </div>

        <div className="project-detail-body">
          <span className="badge">{t.categories[project.category]}</span>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.description[lang]}</p>

          <div className="project-actions">
            <a
              className="btn btn-primary btn-shine"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              {t.projects.github}
            </a>
            {project.live ? (
              <a
                className="btn btn-ghost"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                {t.projects.live}
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      <div className="project-detail-sections">
        <motion.article
          className="project-section"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2>{t.projects.overview}</h2>
          <p>{project.longDescription[lang]}</p>
        </motion.article>

        <motion.article
          className="project-section"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.04 }}
        >
          <h2>{t.projects.role}</h2>
          <p>{project.role[lang]}</p>
        </motion.article>

        <motion.article
          className="project-section"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <h2>{t.projects.features}</h2>
          <ul className="project-feature-list">
            {project.features.map((feature) => (
              <li key={feature.tr}>{feature[lang]}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="project-section"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <h2>{t.projects.outcome}</h2>
          <p>{project.outcome[lang]}</p>
        </motion.article>

        <motion.article
          className="project-section"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <h2>{t.projects.tech}</h2>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      </div>

      {related.length > 0 ? (
        <div className="project-related">
          <h2>{t.projects.related}</h2>
          <div className="project-related-grid">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/projeler/${item.id}`}
                className="project-related-card"
              >
                <strong>{item.title}</strong>
                <span>{item.description[lang]}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
