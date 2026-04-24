import { Arc } from './Logo'

export function Hero() {
  return (
    <section className="hero" id="top">
      <Arc size={520} stroke={90} sweep={200} start={-10}
        style={{ position: 'absolute', top: -80, left: -120, opacity: 0.14 }} />
      <Arc size={320} stroke={60} sweep={140} start={180}
        style={{ position: 'absolute', bottom: -40, right: '32%', opacity: 0.08, color: 'var(--ink)' }} />

      <div className="hero-meta mono">
        <span>◉ 8a Avenue des Métallurgistes</span>
        <span>1490 Court-St-Étienne · À côté du LIDL</span>
        <span>Tel : 010 68 10 73</span>
      </div>

      <div
        className="hero-media"
        style={{ backgroundImage: 'url(img/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="hero-inner">
        <div>
          <div className="h-eyebrow" style={{ marginBottom: 24, color: 'var(--brand)' }}>
            ● Club féminin · Court-Saint-Étienne
          </div>
          <h1 className="h-display hero-headline">
            <span>Forte en</span><br />
            <span className="brand">30 min.</span><br />
            <span className="outline">Pas plus.</span>
          </h1>
        </div>
        <div>
          <p className="hero-lede">
            Un circuit training pensé pour les femmes. Musculation, cardio et étirements
            en une demi-heure, coachée du début à la fin. Sans jugement, sans miroirs,
            sans perdre votre journée.
          </p>
          <div className="hero-cta-row">
            <a href="#trial" className="btn btn-primary">
              Réserver ma séance <span className="arrow">→</span>
            </a>
            <a href="#program" className="btn btn-ghost">
              Voir le programme
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
