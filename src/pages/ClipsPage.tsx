import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { clips, featuredYoutubeIds } from '../data/clips'
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
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </motion.div>

      {featuredYoutubeIds.length > 0 ? (
        <div className="yt-grid">
          {featuredYoutubeIds.map((id) => (
            <div key={id} className="yt-embed card-glow">
              <iframe
                title={`YouTube ${id}`}
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="yt-embed card-glow yt-channel-cta">
          <div className="kick-embed-label">
            <span className="eyebrow">YouTube</span>
          </div>
          <div className="yt-cta-body">
            <p>{t.clips.youtubeEmpty}</p>
            <a
              className="btn btn-primary btn-shine"
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.clips.openChannel}
            </a>
          </div>
        </div>
      )}

      <div className="clips-grid">
        {clips.map((clip, index) =>
          clip.youtubeId ? (
            <motion.div
              key={clip.id}
              className="clip-card card-glow clip-embed-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className={`clip-platform ${clip.platform}`}>
                {clip.platform}
              </span>
              <h3>{clip.title[lang]}</h3>
              <div className="yt-embed clip-inline-embed">
                <iframe
                  title={clip.title[lang]}
                  src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          ) : (
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
          ),
        )}
      </div>
    </section>
  )
}
