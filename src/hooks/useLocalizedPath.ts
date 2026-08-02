import { useLanguage } from '../i18n/LanguageContext'
import { pathFor, type RouteKey } from '../i18n/routes'

export function useLocalizedPath() {
  const { lang } = useLanguage()
  return (key: RouteKey, projectId?: string) => pathFor(key, lang, projectId)
}
