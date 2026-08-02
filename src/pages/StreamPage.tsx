import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { Equalizer } from '../components/Equalizer'
import { LiveBadge } from '../components/LiveBadge'
import { socials, streamLinks } from '../data/socials'
import { site } from '../data/site'
import { useKickLiveState } from '../hooks/KickLiveContext'
import { useLanguage } from '../i18n/LanguageContext'

export function StreamPage() {
  const { lang, t } = useLanguage()
  const { isLive } = useKickLiveState()
  const channels = socials.filter((s) =>
    ['kick', 'youtube', 'instagram'].includes(s.id),
  )

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.stream.eyebrow}
        title={t.stream.title}
        description={t.stream.description}
      />

      <motion.div
        className="stream-hero card-glow spotlight-card"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
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
        {isLive ? <Equalizer /> : null}
        <LiveBadge />
        <h2 className="accent-text">{site.handle}</h2>
        <p>{t.stream.body}</p>
        <div className="stream-actions">
          <a
            className="btn btn-primary btn-shine"
            href={streamLinks.kick}
            target="_blank"
            rel="noreferrer"
          >
            {t.stream.watchKick}
          </a>
          <a
            className="btn btn-ghost"
            href={streamLinks.youtube}
            target="_blank"
            rel="noreferrer"
          >
            {t.stream.youtube}
          </a>
          <a
            className="btn btn-ghost"
            href={streamLinks.site}
            target="_blank"
            rel="noreferrer"
          >
            {t.stream.site}
          </a>
        </div>
      </motion.div>

      {isLive ? (
        <div className="kick-embed card-glow">
          <iframe
            title="Kick Live"
            src={`https://player.kick.com/${site.handle}`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="stream-channels">
        {channels.map((channel, index) => (
          <motion.a
            key={channel.id}
            className="channel-card card-glow"
            href={channel.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <strong>{channel.label}</strong>
            <span>{channel.handle}</span>
            <span>{channel.description[lang]}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
