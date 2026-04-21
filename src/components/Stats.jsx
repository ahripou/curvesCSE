const stats = [
  { n: '500', u: 'kcal', l: 'brûlées par séance en moyenne' },
  { n: '12', u: 'stations', l: 'machines hydrauliques par circuit' },
  { n: '3×', u: '/ sem.', l: 'la fréquence recommandée pour voir les résultats' },
  { n: '18 ans', u: '', l: 'à accompagner les femmes de Saint-Étienne' },
]

export function Stats() {
  return (
    <section style={{ padding: '80px var(--pad)' }}>
      <div className="inner">
        <div className="stat-row">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-num">
                {s.n}<span style={{ fontSize: '0.4em', color: 'var(--ink-60)', marginLeft: 6 }}>{s.u}</span>
              </div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
