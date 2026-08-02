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

const itemsB = [
  'Oyun',
  'Web',
  'Mobil',
  'OOP',
  'Vite',
  'Netlify',
  'UI/UX',
  'Yayın',
  'Build',
  'Ship',
]

function Track({
  list,
  reverse = false,
}: {
  list: string[]
  reverse?: boolean
}) {
  const loop = [...list, ...list]
  return (
    <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
      {loop.map((item, i) => (
        <span key={`${item}-${i}`} className="marquee-item">
          {item}
          <i />
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <Track list={items} />
      <Track list={itemsB} reverse />
    </div>
  )
}
