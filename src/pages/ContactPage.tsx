import { PageHeader } from '../components/PageHeader'
import { socials } from '../data/socials'

export function ContactPage() {
  return (
    <section className="page shell">
      <PageHeader
        eyebrow="İletişim"
        title="Birlikte çalışalım."
        description="Proje, iş birliği veya yayın için sosyal hesaplarımdan ulaşabilirsin."
      />

      <div className="contact-grid">
        {socials.map((social) => (
          <a
            key={social.id}
            className="contact-card"
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">{social.label}</span>
            <strong>{social.description}</strong>
            <span className="handle">{social.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
