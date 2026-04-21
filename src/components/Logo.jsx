export function Logo({ size = 36, color = 'var(--brand)', ink = 'var(--ink)', withWord = true, wordColor, location = 'Court-Saint-Étienne' }) {
  const wc = wordColor || color
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size * 5.2} height={size * 1.5} viewBox="0 0 260 72" style={{ display: 'block' }}>
        <text
          x="0" y="44"
          fill={wc}
          style={{
            fontFamily: '"Allura", "Great Vibes", "Dancing Script", cursive',
            fontSize: 56,
            fontWeight: 400,
          }}
        >Curves</text>
        <text
          x="2" y="62"
          fill={wc}
          style={{
            fontFamily: 'var(--display)',
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >Fitness pour femmes</text>
      </svg>
      {withWord && location && (
        <span style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 10,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: ink,
          opacity: 0.55,
          paddingLeft: 12,
          marginLeft: 4,
          borderLeft: `1px solid ${ink === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(14,14,16,0.15)'}`,
          whiteSpace: 'nowrap',
        }}>
          {location}
        </span>
      )}
    </div>
  )
}

export function Arc({ size = 400, stroke = 80, color = 'var(--brand)', style = {}, sweep = 180, start = 0 }) {
  const r = size / 2 - stroke / 2
  const cx = size / 2
  const cy = size / 2
  const startRad = (start * Math.PI) / 180
  const endRad = ((start + sweep) * Math.PI) / 180
  const x1 = cx + r * Math.cos(startRad)
  const y1 = cy + r * Math.sin(startRad)
  const x2 = cx + r * Math.cos(endRad)
  const y2 = cy + r * Math.sin(endRad)
  const largeArc = sweep > 180 ? 1 : 0
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ color, ...style }}>
      <path
        d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
