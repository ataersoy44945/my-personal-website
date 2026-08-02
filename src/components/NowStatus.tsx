import { site, statusConfig } from '../data/site'
import { useKickLiveState } from '../hooks/KickLiveContext'
import { useLanguage } from '../i18n/LanguageContext'
import { Equalizer } from './Equalizer'

export function NowStatus() {
  const { lang, t } = useLanguage()
  const { isLive, title, viewers, loading } = useKickLiveState()

  return (
    <aside className="now-status card-glow">
      <div className="now-status-head">
        <span className="eyebrow">{t.status.title}</span>
        {isLive ? <Equalizer /> : null}
      </div>

      <div className={`now-pill${isLive ? ' live' : ''}`}>
        <i />
        {loading ? '…' : isLive ? t.status.live : t.status.offline}
      </div>

      <h3>
        {isLive
          ? title || t.status.onKick
          : statusConfig.activity[lang]}
      </h3>

      <p className="muted">
        {isLive
          ? viewers != null
            ? `${viewers} viewers · Kick`
            : t.status.watching
          : statusConfig.location[lang]}
      </p>

      <a
        className="btn btn-primary btn-shine now-cta"
        href={site.kickUrl}
        target="_blank"
        rel="noreferrer"
      >
        {t.stream.watchKick}
      </a>
    </aside>
  )
}
