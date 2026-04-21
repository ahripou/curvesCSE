const pillars = [
  {
    n: '01',
    t: 'Un circuit, 30 minutes',
    b: '12 machines hydrauliques alternées avec du cardio. Un tour complet du circuit sculpte le corps en entier et brûle jusqu\'à 500 calories.',
  },
  {
    n: '02',
    t: 'Coachée, à chaque séance',
    b: 'Nos coachs corrigent votre posture, adaptent l\'intensité et vous mesurent chaque mois. Vous progressez avec méthode, pas à l\'aveugle.',
  },
  {
    n: '03',
    t: 'Entre femmes, sans jugement',
    b: 'Un club 100% féminin. On y vient comme on est, pour soi, avec les autres. Les liens qu\'on y tisse durent bien au-delà du tapis.',
  },
]

export function Method() {
  return (
    <section id="method">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● La Méthode</div>
            <h2>
              Court.<br />
              Complet.<br />
              Conçu pour <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>vous</em>.
            </h2>
          </div>
          <p>
            Pas besoin d'y passer l'après-midi pour que ça compte. Notre méthode combine
            force, endurance et souplesse dans un format qui tient dans une pause déjeuner —
            et qui tient dans la durée.
          </p>
        </div>
        <div className="pillars">
          {pillars.map(p => (
            <div key={p.n} className="pillar">
              <div className="pillar-num">{p.n}</div>
              <h3>{p.t}</h3>
              <p className="pillar-body">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
