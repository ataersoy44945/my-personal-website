import { motion } from 'framer-motion'
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
        {socials.map((social, index) => (
          <motion.a
            key={social.id}
            className="contact-card card-glow"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -5 }}
          >
            <span className="label">{social.label}</span>
            <strong>{social.description}</strong>
            <span className="handle">{social.handle}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
