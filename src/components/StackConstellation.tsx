import { useMemo } from 'react'
import { stackGroups } from '../data/stack'
import { useLanguage } from '../i18n/LanguageContext'

type Node = {
  id: string
  label: string
  x: number
  y: number
  group: number
}

export function StackConstellation() {
  const { lang } = useLanguage()

  const { nodes, links } = useMemo(() => {
    const flat: Node[] = []
    stackGroups.forEach((group, gi) => {
      group.items.forEach((item, ii) => {
        const angle = (ii / Math.max(group.items.length, 1)) * Math.PI * 2
        const radius = 28 + gi * 16
        const cx = 50 + Math.cos(angle + gi) * radius * 0.55
        const cy = 50 + Math.sin(angle + gi * 0.7) * radius * 0.42
        flat.push({
          id: `${gi}-${item}`,
          label: item,
          x: Math.min(92, Math.max(8, cx)),
          y: Math.min(90, Math.max(12, cy)),
          group: gi,
        })
      })
    })

    const edges: Array<[Node, Node]> = []
    for (let i = 0; i < flat.length; i++) {
      for (let j = i + 1; j < flat.length; j++) {
        if (flat[i].group === flat[j].group && j - i <= 2) {
          edges.push([flat[i], flat[j]])
        }
      }
      // connect hubs across groups lightly
      if (i % 4 === 0 && i + 5 < flat.length) {
        edges.push([flat[i], flat[i + 5]])
      }
    }

    return { nodes: flat, links: edges }
  }, [])

  return (
    <div className="constellation card-glow" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="constellation-svg" preserveAspectRatio="xMidYMid meet">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className="constellation-link"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id} className="constellation-node">
            <circle cx={n.x} cy={n.y} r="1.4" className="constellation-dot" />
            <text x={n.x} y={n.y - 2.4} textAnchor="middle" className="constellation-label">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="constellation-caption">
        {lang === 'tr' ? 'Araç ağı · bağlantılı stack' : 'Tool network · linked stack'}
      </p>
    </div>
  )
}
