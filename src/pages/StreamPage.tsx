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

      <div className="stream-hero">
        <span className="live-dot">
          <i /> Canlıya hazır
        </span>
        <h2>fatalstrokelive</h2>
        <p>
          Oyun, sohbet ve canlı içerik. Yayınlarımı Kick hesabımdan takip
          edebilir, arşiv ve videolar için YouTube’a uğrayabilirsin.
        </p>
        <div className="stream-actions">
          <a
            className="btn btn-primary"
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
      </div>

      <div className="stream-channels">
        {channels.map((channel) => (
          <a
            key={channel.id}
            className="channel-card"
            href={channel.href}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{channel.label}</strong>
            <span>{channel.handle}</span>
            <span>{channel.description}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
