const team = [
  { name: 'Maud', role: 'Manager', img: '/img/coach-maud.jpg' },
  { name: 'Virginie', role: 'Coach', img: '/img/coach-virginie.jpg' },
  { name: 'Axelle', role: 'Coach', img: '/img/coach-axelle.jpg' },
  { name: 'Béatrice', role: 'Coach', img: '/img/coach-beatrice.jpg' },
  { name: 'Camille', role: 'Coach', img: '/img/coach-camille.jpg' },
]

export function Coaches() {
  return (
    <section id="coaches" style={{ background: 'var(--paper-2)' }}>
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● L'Équipe</div>
            <h2>Nos super<br />coachs.</h2>
          </div>
          <p>
            Maud, Virginie, Axelle, Béatrice et Camille vous accueillent, vous corrigent
            et vous motivent à chaque séance. Vous n'êtes jamais seule face à une machine.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {team.map(m => (
            <div key={m.name} style={{ background: 'var(--paper)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{
                aspectRatio: '1/1.1',
                backgroundImage: `url(${m.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
              <div style={{ padding: 18 }}>
                <div style={{
                  fontFamily: 'var(--display)', fontWeight: 800, fontStretch: '85%',
                  fontSize: 22, textTransform: 'uppercase', letterSpacing: '-0.01em',
                }}>{m.name}</div>
                <div style={{
                  color: 'var(--brand)', fontFamily: 'var(--display)', fontWeight: 600,
                  fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4,
                }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
