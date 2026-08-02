import { site } from '../data/site'
import { useKickLiveState } from '../hooks/KickLiveContext'
import { useLanguage } from '../i18n/LanguageContext'

export function LiveBadge({ compact = false }: { compact?: boolean }) {
  const { isLive, loading, title } = useKickLiveState()
  const { t } = useLanguage()

  if (loading && !isLive) {
    return (
      <a className={`live-badge dim${compact ? ' compact' : ''}`} href={site.kickUrl}>
        <i />
        {t.stream.ready}
      </a>
    )
  }

  if (!isLive) {
    return (
      <a className={`live-badge dim${compact ? ' compact' : ''}`} href={site.kickUrl}>
        <i />
        {t.status.offline}
      </a>
    )
  }

  return (
    <a
      className={`live-badge on${compact ? ' compact' : ''}`}
      href={site.kickUrl}
      target="_blank"
      rel="noreferrer"
      title={title ?? t.status.onKick}
    >
      <i />
      {compact ? t.status.live : t.status.onKick}
    </a>
  )
}
