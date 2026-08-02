import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { clips } from '../data/clips'
import { site } from '../data/site'
import { useKickLiveState } from '../hooks/KickLiveContext'
import { useLanguage } from '../i18n/LanguageContext'

export function ClipsPage() {
  const { lang, t } = useLanguage()
  const { isLive } = useKickLiveState()

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.clips.eyebrow}
        title={t.clips.title}
        description={t.clips.description}
      />

      <motion.div
        className="kick-embed card-glow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="kick-embed-label">
          <span className="eyebrow">{t.clips.playerTitle}</span>
          {isLive ? <span className="live-pill">{t.status.live}</span> : null}
        </div>
        <iframe
          title="Kick Player"
          src={`https://player.kick.com/${site.handle}`}
          allowFullScreen
          loading="lazy"
        />
      </motion.div>

      <div className="clips-grid">
        {clips.map((clip, index) => (
          <motion.a
            key={clip.id}
            className="clip-card card-glow"
            href={clip.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <span className={`clip-platform ${clip.platform}`}>
              {clip.platform}
            </span>
            <h3>{clip.title[lang]}</h3>
            <p>{clip.description[lang]}</p>
            <span className="clip-open">{t.clips.open}</span>
          </motion.a>
        ))}
      </div>

      <div className="yt-embed card-glow">
        <iframe
          title="YouTube"
          src="https://www.youtube.com/embed?listType=user_uploads&list=fatalstrokelive"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
