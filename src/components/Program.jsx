const steps = [
  { n: '01', t: 'Échauffement', d: 'Cinq minutes pour activer les articulations, préparer le corps et lancer le rythme cardiaque.', time: '00 · 05 min' },
  { n: '02', t: 'Circuit force', d: 'Douze stations hydrauliques. Une minute par station, toutes les zones du corps travaillées.', time: '05 · 24 min' },
  { n: '03', t: 'Récupération active', d: 'Retour au calme, contrôle de la fréquence cardiaque, descente progressive.', time: '24 · 27 min' },
  { n: '04', t: 'Étirements guidés', d: 'Souplesse et mobilité. Une minute pour repartir plus droite qu\'en entrant.', time: '27 · 30 min' },
]

export function Program() {
  return (
    <section id="program" className="program">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Le Programme</div>
            <h2>30 minutes,<br />quatre temps.</h2>
          </div>
          <p>
            Chaque séance suit la même structure, pour que le corps apprenne le rythme
            et progresse. Aucune séance n'est jamais la même — l'intensité s'ajuste à vous.
          </p>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="step-time">{s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
