import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus('err')
      return
    }

    setStatus('sending')

    try {
      if (site.formspreeId) {
        const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!res.ok) throw new Error('fail')
      } else {
        const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio — ${name}`,
            _template: 'table',
          }),
        })
        if (!res.ok) throw new Error('fail')
      }

      setStatus('ok')
      form.reset()
    } catch {
      const subject = encodeURIComponent(`Portfolio — ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('ok')
    }
  }

  return (
    <form className="contact-form card-glow" onSubmit={onSubmit} noValidate>
      <label>
        <span>{t.contact.name}</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        <span>{t.contact.email}</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>{t.contact.message}</span>
        <textarea name="message" rows={5} required />
      </label>
      <button
        className="btn btn-primary btn-shine"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? t.contact.sending : t.contact.send}
      </button>
      {status === 'ok' ? <p className="form-ok" role="status">{t.contact.success}</p> : null}
      {status === 'err' ? <p className="form-err" role="alert">{t.contact.error}</p> : null}
    </form>
  )
}
