export function Marquee() {
  const items = [
    '30 minutes', 'entre femmes', 'coachée', 'sans miroirs',
    'musculation hydraulique', 'cardio', 'résultats mesurables',
  ]
  const row = (
    <div className="marquee-item">
      {items.map((txt, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <span className={i % 2 === 1 ? 'outline' : ''}>{txt}</span>
          <span className="marquee-dot" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}
      </div>
    </div>
  )
}
