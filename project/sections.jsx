// Sections for the Curves Saint-Étienne prototype

// ————————————————————————————————————————————————
// Nav
// ————————————————————————————————————————————————
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo"><Logo size={22} /></a>
      <div className="nav-links">
        <a href="#method">La Méthode</a>
        <a href="#program">Le Programme</a>
        <a href="#coaches">Coachs</a>
        <a href="#pricing">Tarifs</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#trial" className="btn btn-primary">
        Séance d'essai <span className="arrow">→</span>
      </a>
    </nav>
  );
}

// ————————————————————————————————————————————————
// Hero
// ————————————————————————————————————————————————
function Hero() {
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

      <div className="hero-media" style={{ backgroundImage: 'url(img/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="hero-inner">
        <div>
          <div className="h-eyebrow" style={{ marginBottom: 24, color: 'var(--brand)' }}>
            ● Club féminin · Court-Saint-Étienne
          </div>
          <h1 className="h-display hero-headline">
            <span>Forte en</span><br/>
            <span className="brand">30 min.</span><br/>
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
  );
}

// ————————————————————————————————————————————————
// Marquee
// ————————————————————————————————————————————————
function Marquee() {
  const items = [
    "30 minutes", "entre femmes", "coachée", "sans miroirs",
    "musculation hydraulique", "cardio", "résultats mesurables",
  ];
  const row = (
    <div className="marquee-item">
      {items.map((txt, i) => (
        <React.Fragment key={i}>
          <span className={i % 2 === 1 ? 'outline' : ''}>{txt}</span>
          <span className="marquee-dot" />
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}
      </div>
    </div>
  );
}

// ————————————————————————————————————————————————
// About / Method — 3 pillars
// ————————————————————————————————————————————————
function Method() {
  const pillars = [
    {
      n: "01",
      t: "Un circuit, 30 minutes",
      b: "12 machines hydrauliques alternées avec du cardio. Un tour complet du circuit sculpte le corps en entier et brûle jusqu'à 500 calories.",
    },
    {
      n: "02",
      t: "Coachée, à chaque séance",
      b: "Nos coachs corrigent votre posture, adaptent l'intensité et vous mesurent chaque mois. Vous progressez avec méthode, pas à l'aveugle.",
    },
    {
      n: "03",
      t: "Entre femmes, sans jugement",
      b: "Un club 100% féminin. On y vient comme on est, pour soi, avec les autres. Les liens qu'on y tisse durent bien au-delà du tapis.",
    },
  ];
  return (
    <section id="method">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● La Méthode</div>
            <h2>
              Court.<br/>
              Complet.<br/>
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
  );
}

// ————————————————————————————————————————————————
// Program — steps timeline
// ————————————————————————————————————————————————
function Program() {
  const steps = [
    { n: "01", t: "Échauffement", d: "Cinq minutes pour activer les articulations, préparer le corps et lancer le rythme cardiaque.", time: "00 · 05 min" },
    { n: "02", t: "Circuit force", d: "Douze stations hydrauliques. Une minute par station, toutes les zones du corps travaillées.", time: "05 · 24 min" },
    { n: "03", t: "Récupération active", d: "Retour au calme, contrôle de la fréquence cardiaque, descente progressive.", time: "24 · 27 min" },
    { n: "04", t: "Étirements guidés", d: "Souplesse et mobilité. Une minute pour repartir plus droite qu'en entrant.", time: "27 · 30 min" },
  ];
  return (
    <section id="program" className="program">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Le Programme</div>
            <h2>30 minutes,<br/>quatre temps.</h2>
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
  );
}

// ————————————————————————————————————————————————
// Stats
// ————————————————————————————————————————————————
function Stats() {
  const stats = [
    { n: "500", u: "kcal", l: "brûlées par séance en moyenne" },
    { n: "12", u: "stations", l: "machines hydrauliques par circuit" },
    { n: "3×", u: "/ sem.", l: "la fréquence recommandée pour voir les résultats" },
    { n: "18 ans", u: "", l: "à accompagner les femmes de Saint-Étienne" },
  ];
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
  );
}

// ————————————————————————————————————————————————
// Community banner — full-bleed group photo
// ————————————————————————————————————————————————
function CommunityBanner() {
  return (
    <section style={{ padding: 0, position: 'relative' }}>
      <div style={{
        height: 'min(80vh, 720px)',
        backgroundImage: 'url(img/community.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(14,14,16,0.15) 0%, rgba(91,42,134,0.35) 60%, rgba(62,28,92,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          padding: 'var(--pad)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          color: 'white',
        }}>
          <div style={{ maxWidth: 'var(--max)', margin: '0 auto', width: '100%' }}>
            <div className="h-eyebrow" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 20 }}>
              ● Notre tribu
            </div>
            <div className="h-display" style={{
              fontSize: 'clamp(48px, 8vw, 128px)',
              color: 'white',
            }}>
              Bienvenue<br/>
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>chez vous.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————————————————————
// Testimonials
// ————————————————————————————————————————————————
function Testimonials() {
  return (
    <section id="community" className="testimonials">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Communauté</div>
            <h2>Elles l'ont fait.<br/>Vous aussi.</h2>
          </div>
          <p>
            Plus de 600 femmes poussent la porte chaque mois à Court-Saint-Étienne. Certaines viennent pour la forme,
            d'autres pour la tête, beaucoup pour les deux. Elles en parlent mieux que nous.
          </p>
        </div>
        <div className="tst-grid">
          <div className="tst-card feat">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "En six mois, j'ai retrouvé un dos qui ne me fait plus mal, un sommeil qui
              tient la nuit, et une bande de copines qui me poussent sans me juger. Je
              n'imagine plus ma semaine sans mes trois Curves."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Véronique</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
          <div className="tst-card">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "L'accueil des coachs change tout. On se sent attendue, suivie. C'est devenu mon créneau non-négociable."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Pascale</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
          <div className="tst-card">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "Trente minutes qui passent vite. Je ressors vidée, claire, et j'ai déjà repris ma journée."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Muriel</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
          <div className="tst-card">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "J'avais peur d'une salle classique. Ici, zéro regard, que des encouragements. −7kg en un an, sans régime."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Krystyna</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
          <div className="tst-card">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "Mes rendez-vous médicaux parlent d'une autre femme. La méthode fait ce qu'elle promet."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Jennifer</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
          <div className="tst-card">
            <div className="tst-stars">★★★★★</div>
            <div className="tst-quote">
              "À 58 ans j'ai repris le sport, ici. Je n'aurais osé nulle part ailleurs. C'est autre chose qu'une salle — c'est un refuge."
            </div>
            <div className="tst-foot">
              <div className="tst-avatar" style={{ backgroundImage: 'url(img/p1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="tst-meta">
                <strong>Annick</strong>
                <span>Membre à Court-St-Étienne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————————————————————
// FAQ
// ————————————————————————————————————————————————
function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: "Qu'est-ce que vous apportent 30 minutes de renforcement musculaire ?",
      a: "Le renforcement musculaire aide à préserver et améliorer votre masse musculaire, quel que soit votre âge. Les bénéfices : plus de force, d'énergie, le contrôle du poids, un corps ferme, plus de souplesse, un sommeil réparateur, une meilleure gestion du stress, une libido boostée — et plus de bonheur."
    },
    {
      q: "Pourquoi ça fonctionne ?",
      a: "Nos machines à résistance hydraulique vous permettent de pratiquer cardio et renforcement musculaire simultanément, sous la bienveillance d'une coach qui vous aide et vous motive à chaque séance. Cela équivaut à plus d'une heure dans une salle traditionnelle — et tout ça sans contrainte horaire."
    },
    {
      q: "Quels sont les horaires du club ?",
      a: "Vos séances sont sans contrainte horaire pendant ces plages : Lundi et mercredi 9h–13h30 et 15h30–19h30 · Mardi et jeudi 10h–13h et 15h30–19h30 · Vendredi 9h–13h30 et 15h30–19h · Samedi 9h30–12h30."
    },
    {
      q: "Combien ça coûte ?",
      a: "Abonnement 12 mois : 54€/mois. Abonnement 3 mois : 64€/mois. Sans engagement : 69€/mois. Seniors (+65 ans) sur 12 mois : 49€/mois. Étudiante (–25 ans) : 25€/mois (minimum 4 mois). Frais de service selon la promotion en cours."
    },
    {
      q: "Faut-il réserver chaque séance ?",
      a: "Non. Vous venez quand vous voulez pendant les heures d'ouverture. Un circuit démarre toutes les 30 secondes : vous rejoignez la station libre suivante et vous suivez le rythme."
    },
    {
      q: "Comment se passe le bilan de forme gratuit ?",
      a: "Visite du club, mesure de départ, explication des machines, puis un circuit complet avec une coach à vos côtés. Totalement gratuit et sans engagement. Réservation en ligne ou au 010 68 10 73."
    },
  ];
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
              Les questions<br/>qu'on nous pose<br/>
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
  );
}

// ————————————————————————————————————————————————
// Coaches
// ————————————————————————————————————————————————
function Coaches() {
  const team = [
    { name: 'Maud', role: 'Manager', img: 'img/coach-maud.jpg' },
    { name: 'Virginie', role: 'Coach', img: 'img/coach-virginie.jpg' },
    { name: 'Axelle', role: 'Coach', img: 'img/coach-axelle.jpg' },
    { name: 'Béatrice', role: 'Coach', img: 'img/coach-beatrice.jpg' },
    { name: 'Camille', role: 'Coach', img: 'img/coach-camille.jpg' },
  ];
  return (
    <section id="coaches" style={{ background: 'var(--paper-2)' }}>
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● L'Équipe</div>
            <h2>Nos super<br/>coachs.</h2>
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
                <div style={{ color: 'var(--brand)', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 }}>
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————————————————————
// Pricing
// ————————————————————————————————————————————————
function Pricing() {
  const plans = [
    { name: 'Étudiante', price: '25', period: '/mois', sub: 'Moins de 25 ans · min. 4 mois', emph: false },
    { name: 'Senior', price: '49', period: '/mois', sub: '+65 ans · engagement 12 mois', emph: false },
    { name: '12 mois', price: '54', period: '/mois', sub: 'Le plus choisi · engagement 12 mois', emph: true },
    { name: '3 mois', price: '64', period: '/mois', sub: 'Engagement 3 mois', emph: false },
    { name: 'Sans engagement', price: '69', period: '/mois', sub: 'Liberté totale, mois par mois', emph: false },
  ];
  return (
    <section id="pricing">
      <div className="inner">
        <div className="section-head">
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--brand)', marginBottom: 20 }}>● Tarifs</div>
            <h2>Une formule<br/>pour chacune.</h2>
          </div>
          <p>
            Pas de frais cachés. Vous choisissez la durée qui vous convient, vous venez quand
            vous voulez. Les frais de service dépendent de la promotion en cours.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
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
  );
}

// ————————————————————————————————————————————————
// Trial CTA + Booking form
// ————————————————————————————————————————————————
function Trial() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
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
              Poussez<br/>la porte.<br/>
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
              ✓ Demande reçue.<br/>
              <span style={{ fontWeight: 400, fontSize: 14, opacity: 0.8, textTransform: 'none', letterSpacing: 0 }}>
                On vous rappelle très vite.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————————————————————
// Footer
// ————————————————————————————————————————————————
function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-big">Curves.<br/>Court-St-Étienne</div>
        <div className="footer-grid">
          <div>
            <h4>Adresse</h4>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
              8a Avenue des Métallurgistes<br/>
              1490 Court-St-Étienne<br/>
              À côté du LIDL
            </p>
          </div>
          <div>
            <h4>Horaires</h4>
            <ul>
              <li>Lun · 9h–13h30 · 15h30–19h30</li>
              <li>Mar · 10h–13h · 15h30–19h30</li>
              <li>Mer · 9h–13h30 · 15h30–19h30</li>
              <li>Jeu · 10h–13h · 15h30–19h30</li>
              <li>Ven · 9h–13h30 · 15h30–19h</li>
              <li>Sam · 9h30–12h30</li>
              <li>Dim · fermé</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+3210681073">010 68 10 73</a></li>
              <li><a href="mailto:curvescourtstetienne@gmail.com">curvescourtstetienne@gmail.com</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#method">La Méthode</a></li>
              <li><a href="#program">Le Programme</a></li>
              <li><a href="#community">Communauté</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#trial">Séance d'essai</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Curves Court-St-Étienne · THOMIAL srl. Tous droits réservés.</span>
          <span>Mentions légales · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Method, Program, Stats, CommunityBanner, Testimonials, Coaches, Pricing, FAQ, Trial, Footer });
