import { useState } from 'react'

const items = [
  {
    q: "Qu'est-ce que vous apportent 30 minutes de renforcement musculaire ?",
    a: "Le renforcement musculaire aide à préserver et améliorer votre masse musculaire, quel que soit votre âge. Les bénéfices : plus de force, d'énergie, le contrôle du poids, un corps ferme, plus de souplesse, un sommeil réparateur, une meilleure gestion du stress, une libido boostée — et plus de bonheur.",
  },
  {
    q: 'Pourquoi ça fonctionne ?',
    a: "Nos machines à résistance hydraulique vous permettent de pratiquer cardio et renforcement musculaire simultanément, sous la bienveillance d'une coach qui vous aide et vous motive à chaque séance. Cela équivaut à plus d'une heure dans une salle traditionnelle — et tout ça sans contrainte horaire.",
  },
  {
    q: 'Quels sont les horaires du club ?',
    a: 'Vos séances sont sans contrainte horaire pendant ces plages : Lundi et mercredi 9h–13h30 et 15h30–19h30 · Mardi et jeudi 10h–13h et 15h30–19h30 · Vendredi 9h–13h30 et 15h30–19h · Samedi 9h30–12h30.',
  },
  {
    q: 'Combien ça coûte ?',
    a: "Abonnement 12 mois : 54€/mois. Abonnement 3 mois : 64€/mois. Sans engagement : 69€/mois. Seniors (+65 ans) sur 12 mois : 49€/mois. Étudiante (–25 ans) : 25€/mois (minimum 4 mois). Frais de service selon la promotion en cours.",
  },
  {
    q: 'Faut-il réserver chaque séance ?',
    a: "Non. Vous venez quand vous voulez pendant les heures d'ouverture. Un circuit démarre toutes les 30 secondes : vous rejoignez la station libre suivante et vous suivez le rythme.",
  },
  {
    q: 'Comment se passe le bilan de forme gratuit ?',
    a: "Visite du club, mesure de départ, explication des machines, puis un circuit complet avec une coach à vos côtés. Totalement gratuit et sans engagement. Réservation en ligne ou au 010 68 10 73.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq">
      <div className="inner">
        <div className="faq-wrap">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● FAQ</div>
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 800, fontStretch: '85%',
              fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.94,
              letterSpacing: '-0.03em', textTransform: 'uppercase',
            }}>
              Les questions<br />qu'on nous pose<br />
              <span style={{ color: 'var(--brand)' }}>souvent.</span>
            </h2>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <span className="faq-icon" />
                </button>
                <div className="faq-a"><p>{it.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
