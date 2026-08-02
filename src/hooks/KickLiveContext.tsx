import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'
import { useKickLive, type KickLiveState } from '../hooks/useKickLive'

const KickLiveContext = createContext<KickLiveState | null>(null)

export function KickLiveProvider({ children }: { children: ReactNode }) {
  const state = useKickLive()
  return (
    <KickLiveContext.Provider value={state}>{children}</KickLiveContext.Provider>
  )
}

export function useKickLiveState() {
  const ctx = useContext(KickLiveContext)
  if (!ctx) throw new Error('useKickLiveState must be used within KickLiveProvider')
  return ctx
}
