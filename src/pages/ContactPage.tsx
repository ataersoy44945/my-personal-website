import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { ContactForm } from '../components/ContactForm'
import { socials } from '../data/socials'
import { site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactPage() {
  const { lang, t } = useLanguage()

  return (
    <section className="page shell">
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <div className="contact-layout">
        <ContactForm />

        <div>
          <h2 className="contact-socials-title">{t.contact.orSocials}</h2>
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
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
              >
                <span className="label">{social.label}</span>
                <strong>{social.description[lang]}</strong>
                <span className="handle">{social.handle}</span>
              </motion.a>
            ))}
            <motion.a
              className="contact-card card-glow"
              href={`mailto:${site.email}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <span className="label">Email</span>
              <strong>{site.email}</strong>
              <span className="handle">mailto</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
