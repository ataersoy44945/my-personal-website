import { useEffect, useState } from 'react'
import { statusConfig } from '../data/site'

export type KickLiveState = {
  loading: boolean
  isLive: boolean
  title: string | null
  viewers: number | null
}

type KickChannelPayload = {
  livestream?: {
    session_title?: string
    viewer_count?: number
    is_live?: boolean
  } | null
}

async function fetchKickChannel(username: string): Promise<KickChannelPayload | null> {
  const endpoints = [
    `/api/kick/${username}`,
    `https://kick.com/api/v2/channels/${username}`,
  ]

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) continue
      return (await res.json()) as KickChannelPayload
    } catch {
      /* try next */
    }
  }
  return null
}

export function useKickLive(pollMs = 60_000): KickLiveState {
  const [state, setState] = useState<KickLiveState>({
    loading: true,
    isLive: statusConfig.forceLive,
    title: null,
    viewers: null,
  })

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      if (statusConfig.forceLive) {
        if (!cancelled) {
          setState({
            loading: false,
            isLive: true,
            title: null,
            viewers: null,
          })
        }
        return
      }

      const data = await fetchKickChannel(statusConfig.kickUsername)
      if (cancelled) return

      if (!data) {
        setState((prev) => ({ ...prev, loading: false }))
        return
      }

      const live = Boolean(data.livestream)
      setState({
        loading: false,
        isLive: live,
        title: data.livestream?.session_title ?? null,
        viewers: data.livestream?.viewer_count ?? null,
      })
    }

    void run()
    const id = window.setInterval(() => void run(), pollMs)
    return () => {
      cancelled = true
      window.clearInterval(id)
    }
  }, [pollMs])

  return state
}
