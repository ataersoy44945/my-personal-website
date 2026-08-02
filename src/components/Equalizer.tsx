type WaveformProps = {
  active?: boolean
  bars?: number
}

export function Waveform({ active = true, bars = 28 }: WaveformProps) {
  return (
    <div
      className={`waveform${active ? ' active' : ''}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${0.7 + (i % 5) * 0.12}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Equalizer() {
  return (
    <div className="equalizer" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  )
}
