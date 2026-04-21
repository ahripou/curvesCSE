const testimonials = [
  {
    feat: true,
    quote: '"En six mois, j\'ai retrouvé un dos qui ne me fait plus mal, un sommeil qui tient la nuit, et une bande de copines qui me poussent sans me juger. Je n\'imagine plus ma semaine sans mes trois Curves."',
    name: 'Véronique',
    img: '/img/p3.jpg',
  },
  {
    quote: '"L\'accueil des coachs change tout. On se sent attendue, suivie. C\'est devenu mon créneau non-négociable."',
    name: 'Pascale',
    img: '/img/p1.jpg',
  },
  {
    quote: '"Trente minutes qui passent vite. Je ressors vidée, claire, et j\'ai déjà repris ma journée."',
    name: 'Muriel',
    img: '/img/p2.jpg',
  },
  {
    quote: '"J\'avais peur d\'une salle classique. Ici, zéro regard, que des encouragements. −7kg en un an, sans régime."',
    name: 'Krystyna',
    img: '/img/p4.jpg',
  },
  {
    quote: '"Mes rendez-vous médicaux parlent d\'une autre femme. La méthode fait ce qu\'elle promet."',
    name: 'Jennifer',
    img: '/img/p5.jpg',
  },
  {
    quote: '"À 58 ans j\'ai repris le sport, ici. Je n\'aurais osé nulle part ailleurs. C\'est autre chose qu\'une salle — c\'est un refuge."',
    name: 'Annick',
    img: '/img/p1.jpg',
  },
]

export function Testimonials() {
  return (
    <section id="community" className="testimonials">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Communauté</div>
            <h2>Elles l'ont fait.<br />Vous aussi.</h2>
          </div>
          <p>
            Plus de 600 femmes poussent la porte chaque mois à Court-Saint-Étienne. Certaines viennent pour la forme,
            d'autres pour la tête, beaucoup pour les deux. Elles en parlent mieux que nous.
          </p>
        </div>
        <div className="tst-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`tst-card ${t.feat ? 'feat' : ''}`}>
              <div className="tst-stars">★★★★★</div>
              <div className="tst-quote">{t.quote}</div>
              <div className="tst-foot">
                <div
                  className="tst-avatar"
                  style={{ backgroundImage: `url(${t.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="tst-meta">
                  <strong>{t.name}</strong>
                  <span>Membre à Court-St-Étienne</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
