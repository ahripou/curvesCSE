import { useState } from 'react'
import { Arc } from './Logo'

export function Trial() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="trial" className="cta">
      <Arc size={700} stroke={140} sweep={180} start={-90}
        style={{ position: 'absolute', bottom: -300, left: -200, color: 'rgba(255,255,255,0.08)' }} />
      <Arc size={500} stroke={100} sweep={180} start={90}
        style={{ position: 'absolute', top: -200, right: -150, color: 'rgba(255,255,255,0.08)' }} />

      <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid">
          <div>
            <div className="h-eyebrow" style={{ marginBottom: 20, color: 'white', opacity: 0.7 }}>
              ● Votre séance d'essai
            </div>
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 800, fontStretch: '85%',
              fontSize: 'clamp(48px, 7vw, 112px)', lineHeight: 0.92,
              letterSpacing: '-0.035em', textTransform: 'uppercase',
              marginBottom: 32, color: 'white',
            }}>
              Poussez<br />la porte.<br />
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
                C'est offert.
              </span>
            </h2>
            <p className="cta-lede">
              30 minutes avec une coach, mesure de départ, visite complète, et zéro
              engagement. Vous décidez après, pas avant.
            </p>
            <ul className="cta-bullets">
              <li><span className="check">✓</span> Séance complète, 1 coach dédiée</li>
              <li><span className="check">✓</span> Mesure de départ (forme & silhouette)</li>
              <li><span className="check">✓</span> Tous les jours, créneau au choix</li>
              <li><span className="check">✓</span> Sans engagement, sans piège</li>
            </ul>
          </div>

          <form className={`booking ${sent ? 'sent' : ''}`} onSubmit={onSubmit}>
            <div className="booking-fields">
              <h3>Réserver ma séance</h3>
              <div className="booking-sub">On vous rappelle dans la demi-journée pour caler le créneau.</div>

              <div className="field row">
                <div>
                  <label>Prénom</label>
                  <input required placeholder="Claire" />
                </div>
                <div>
                  <label>Nom</label>
                  <input required placeholder="Dupont" />
                </div>
              </div>
              <div className="field">
                <label>Téléphone</label>
                <input required type="tel" placeholder="+32 4 ..." />
              </div>
              <div className="field">
                <label>Email</label>
                <input required type="email" placeholder="claire@email.com" />
              </div>
              <div className="field">
                <label>Créneau préféré</label>
                <select>
                  <option>Matin (09h – 12h)</option>
                  <option>Midi (12h – 14h)</option>
                  <option>Après-midi (14h – 17h)</option>
                  <option>Fin de journée (17h – 20h)</option>
                  <option>Samedi matin</option>
                </select>
              </div>
              <button type="submit" className="btn btn-ink">
                Je réserve <span className="arrow">→</span>
              </button>
            </div>
            <div className="booking-success">
              ✓ Demande reçue.<br />
              <span style={{ fontWeight: 400, fontSize: 14, opacity: 0.8, textTransform: 'none', letterSpacing: 0 }}>
                On vous rappelle très vite.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
