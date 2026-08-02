import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { socials, streamLinks } from '../data/socials'

export function StreamPage() {
  const channels = socials.filter((s) =>
    ['kick', 'youtube', 'instagram'].includes(s.id),
  )

  return (
    <section className="page shell">
      <PageHeader
        eyebrow="Yayın"
        title="FatalStroke Live."
        description="Kick’te canlı yayındayım. YouTube’da da içerik paylaşıyorum."
      />

      <motion.div
        className="stream-hero card-glow"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="live-dot">
          <i /> Canlıya hazır
        </span>
        <h2 className="accent-text">fatalstrokelive</h2>
        <p>
          Oyun, sohbet ve canlı içerik. Yayınlarımı Kick hesabımdan takip
          edebilir, arşiv ve videolar için YouTube’a uğrayabilirsin.
        </p>
        <div className="stream-actions">
          <a
            className="btn btn-primary btn-shine"
            href={streamLinks.kick}
            target="_blank"
            rel="noreferrer"
          >
            Kick’te izle
          </a>
          <a
            className="btn btn-ghost"
            href={streamLinks.youtube}
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            className="btn btn-ghost"
            href={streamLinks.site}
            target="_blank"
            rel="noreferrer"
          >
            fatalstroke.com
          </a>
        </div>
      </motion.div>

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
            <span>{channel.description}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
