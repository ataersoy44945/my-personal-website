export function Equalizer() {
  return (
    <div className="equalizer" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  )
}
