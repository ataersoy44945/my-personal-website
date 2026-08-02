import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'

export function AboutPage() {
  return (
    <section className="page shell">
      <PageHeader
        eyebrow="Hakkımda"
        title="Kod, ürün ve yayın."
        description="Teknolojiyle üretmeyi ve canlı yayında paylaşmayı bir arada yürütüyorum."
      />

      <div className="about-grid">
        <motion.article
          className="about-block card-glow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2>Kimim?</h2>
          <p>
            Ben Ata Ersoy. İstanbul Kültür Üniversitesi’nde Bilgisayar
            Programcılığı okuyorum. Web siteleri, mobil uygulamalar ve nesne
            tabanlı yazılım sistemleri üzerinde çalışıyorum. Aynı zamanda{' '}
            <strong>FatalStroke Live</strong> adıyla Kick ve YouTube’da yayın
            açıyorum.
          </p>

          <div className="about-meta">
            <div className="meta-row">
              <strong>Eğitim</strong>
              <span>İstanbul Kültür Üniversitesi — Bilgisayar Programcılığı</span>
            </div>
            <div className="meta-row">
              <strong>Odak</strong>
              <span>Web geliştirme, mobil, OOP, yayıncılık</span>
            </div>
            <div className="meta-row">
              <strong>Yayın</strong>
              <span>Kick / YouTube — fatalstrokelive</span>
            </div>
          </div>
        </motion.article>

        <motion.article
          className="about-block card-glow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2>Ne yapıyorum?</h2>
          <p>
            GitHub’da kuyumculuk sitelerinden yönetim sistemlerine, AI chatbot’tan
            oyun kimliği sitelerine kadar çeşitli projeler geliştiriyorum. Amacım
            temiz arayüzler, çalışan ürünler ve sürdürülebilir kod üretmek.
          </p>
        </motion.article>
      </div>
    </section>
  )
}
