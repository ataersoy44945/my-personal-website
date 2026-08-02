const items = [
  'Game Dev',
  'FatalStroke Live',
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'React Native',
  'Kick',
  'Ship Products',
  'İstanbul',
]

export function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  )
}
