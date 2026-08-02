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
          />
        </div>

        <div className="project-detail-body">
          <span className="badge">{t.categories[project.category]}</span>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.description[lang]}</p>

          {project.longDescription ? (
            <p className="project-detail-copy">{project.longDescription[lang]}</p>
          ) : null}

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

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
    </section>
  )
}
