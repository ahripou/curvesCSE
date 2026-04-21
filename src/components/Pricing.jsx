const plans = [
  { name: 'Étudiante', price: '25', period: '/mois', sub: 'Moins de 25 ans · min. 4 mois', emph: false },
  { name: 'Senior', price: '49', period: '/mois', sub: '+65 ans · engagement 12 mois', emph: false },
  { name: '12 mois', price: '54', period: '/mois', sub: 'Le plus choisi · engagement 12 mois', emph: true },
  { name: '3 mois', price: '64', period: '/mois', sub: 'Engagement 3 mois', emph: false },
  { name: 'Sans engagement', price: '69', period: '/mois', sub: 'Liberté totale, mois par mois', emph: false },
]

export function Pricing() {
  return (
    <section id="pricing">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Tarifs</div>
            <h2>Une formule<br />pour chacune.</h2>
          </div>
          <p>
            Pas de frais cachés. Vous choisissez la durée qui vous convient, vous venez quand
            vous voulez. Les frais de service dépendent de la promotion en cours.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map(p => (
            <div key={p.name} className="pricing-card" style={{
              background: p.emph ? 'var(--brand)' : 'var(--paper)',
              color: p.emph ? 'white' : 'var(--ink)',
            }}>
              <div style={{
                fontFamily: 'var(--display)', fontWeight: 700, fontSize: 12,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: p.emph ? 'rgba(255,255,255,0.9)' : 'var(--brand)',
              }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{
                  fontFamily: 'var(--display)', fontWeight: 800, fontStretch: '85%',
                  fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em',
                }}>{p.price}€</span>
                <span style={{ fontSize: 14, opacity: 0.7 }}>{p.period}</span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.8, marginTop: 'auto' }}>
                {p.sub}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-60)', textAlign: 'center' }}>
          Frais de service selon la promotion actuelle · Paiement mensuel · Valable dans +4 000 clubs Curves dans le monde
        </div>
      </div>
    </section>
  )
}
