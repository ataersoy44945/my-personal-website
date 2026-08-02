import { useEffect, useRef } from 'react'

const TRAIL = 8

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    const trailRoot = trailRef.current
    if (!glow || !trailRoot) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isCoarse) {
      glow.style.display = 'none'
      trailRoot.style.display = 'none'
      return
    }

    const dots = Array.from(trailRoot.querySelectorAll<HTMLElement>('.cursor-dot'))
    const points = Array.from({ length: TRAIL }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`

      points[0].x = x
      points[0].y = y
      for (let i = 1; i < TRAIL; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.28
        points[i].y += (points[i - 1].y - points[i].y) * 0.28
        const d = dots[i - 1]
        if (d) {
          d.style.transform = `translate3d(${points[i].x}px, ${points[i].y}px, 0)`
          d.style.opacity = String(0.55 - i * 0.06)
        }
      }

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={trailRef} className="cursor-trail" aria-hidden="true">
        {Array.from({ length: TRAIL - 1 }).map((_, i) => (
          <span key={i} className="cursor-dot" />
        ))}
      </div>
    </>
  )
}
