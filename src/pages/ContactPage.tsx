import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { ContactForm } from '../components/ContactForm'
import { socials } from '../data/socials'
import { getDiscordUrl, site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactPage() {
  const { lang, t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(site.discord)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

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
            {socials.map((social, index) => {
              const isDiscord = social.id === 'discord'
              const useCopy = isDiscord && !site.discordUserId
              const common = {
                className: 'contact-card card-glow' + (useCopy ? ' contact-card-btn' : ''),
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: index * 0.06 },
                whileHover: { y: -5 },
              } as const

              const inner = (
                <>
                  <span className="label">{social.label}</span>
                  <strong>
                    {useCopy
                      ? copied
                        ? t.contact.copied
                        : t.contact.copyDiscord
                      : social.description[lang]}
                  </strong>
                  <span className="handle">{social.handle}</span>
                </>
              )

              if (useCopy) {
                return (
                  <motion.button
                    key={social.id}
                    type="button"
                    {...common}
                    onClick={() => void copyDiscord()}
                  >
                    {inner}
                  </motion.button>
                )
              }

              return (
                <motion.a
                  key={social.id}
                  {...common}
                  href={isDiscord ? getDiscordUrl() : social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {inner}
                </motion.a>
              )
            })}
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
