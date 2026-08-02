import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function PageWipe() {
  const location = useLocation()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    setActive(true)
    const id = window.setTimeout(() => setActive(false), 620)
    return () => window.clearTimeout(id)
  }, [location.pathname])

  return (
    <div
      className={`page-wipe${active ? ' active' : ''}`}
      aria-hidden="true"
    />
  )
}
