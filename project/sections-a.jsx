// Hero, Nav, Marquee, Method/Pillars, Program/Steps
const { useState, useEffect, useRef } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo"><Logo /></a>
      <div className="nav-links">
        <a href="#methode">Méthode</a>
        <a href="#programme">Programme</a>
        <a href="#temoignages">Témoignages</a>
        <a href="#faq">FAQ</a>
        <a href="#essai" className="btn btn-primary" style={{ padding: '12px 18px', fontSize: 12 }}>
          Séance d'essai <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      {/* Decorative arcs */}
      <div className="arc-bg" style={{ top: '-120px', left: '-80px' }}>
        <Arc size={460} stroke={70} sweep={220} start={-50} />
      </div>
      <div className="arc-bg" style={{ bottom: '15%', right: '-140px', opacity: 0.12 }}>
        <Arc size={520} stroke={90} sweep={160} start={-80} />
      </div>

      <div className="hero-media ph">
        <div className="ph-label"><span>women training · saint-étienne studio</span><span>16:9</span></div>
      </div>

      <div className="hero-meta mono">
        <div>Rue de la Station, 12</div>
        <div>Saint-Étienne · 4480</div>
        <div style={{ color: 'var(--brand)' }}>● Ouvert aujourd'hui · 8h–20h</div>
      </div>

      <div className="hero-inner">
        <div>
          <div className="mono" style={{ marginBottom: 24, color: 'var(--ink-60)' }}>
            — Club 100% femmes · Saint-Étienne
          </div>
          <h1 className="h-display hero-headline">
            30&nbsp;minutes.<br/>
            <span className="brand">Toute</span> ta<br/>
            <span className="outline">force.</span>
          </h1>
        </div>
        <div>
          <p className="hero-lede">
            Un circuit complet, guidé et chronométré, pensé pour les femmes
            qui veulent des résultats sans y passer leurs journées.
            Cardio, force et souplesse en une seule séance.
          </p>
          <div className="hero-cta-row">
            <a href="#essai" className="btn btn-primary">
              Réserver ma séance d'essai <span className="arrow">→</span>
            </a>
            <a href="#methode" className="btn btn-ghost">
              La méthode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "30 min chrono", "100% femmes", "Résultats visibles",
    "Coaching continu", "Cardio + Force", "Sans jugement",
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className={`marquee-item ${i % 2 === 1 ? 'outline' : ''}`}>
            <span>{t}</span>
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Method() {
  const pillars = [
    {
      num: '01',
      title: 'Un circuit pensé pour toi',
      body: '12 stations alternant machines hydrauliques et cardio. Ton effort s\'adapte à ta force — pas l\'inverse.',
    },
    {
      num: '02',
      title: 'Un coach, toujours',
      body: 'Une coach dédiée te guide à chaque séance. Ajustements, encouragements, suivi. Tu n\'es jamais seule face à une machine.',
    },
    {
      num: '03',
      title: 'Des résultats qui durent',
      body: 'Bilan mensuel, objectifs clairs, communauté bienveillante. Un engagement réaliste, des progrès mesurables.',
    },
  ];
  return (
    <section id="methode">
      <div className="inner">
        <div className="section-head">
          <h2>La méthode<br/>Curves.</h2>
          <p>
            Développée avec des kinésithérapeutes, la méthode Curves combine renforcement
            musculaire, cardio et étirements en un format ultra-efficace. Pensée par et pour
            les femmes, quel que soit ton niveau de départ.
          </p>
        </div>
        <div className="pillars">
          {pillars.map(p => (
            <div key={p.num} className="pillar">
              <div className="pillar-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="stat-row" style={{ marginTop: 0 }}>
          <div className="stat">
            <div className="stat-num">30<span style={{ fontSize: '.5em' }}>min</span></div>
            <div className="stat-label">Durée d'une séance complète — cardio, force, souplesse</div>
          </div>
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">Membres actives à Saint-Étienne et en province de Liège</div>
          </div>
          <div className="stat">
            <div className="stat-num">12</div>
            <div className="stat-label">Stations d'entraînement alternant force et cardio</div>
          </div>
          <div className="stat">
            <div className="stat-num">3×</div>
            <div className="stat-label">Séances par semaine recommandées pour des résultats visibles</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Program() {
  const steps = [
    { n: '01', t: 'Échauffement dynamique', d: 'Activation progressive : mobilité, cardio léger, préparation musculaire.', time: '5 min' },
    { n: '02', t: 'Circuit force + cardio', d: 'Tu passes d\'une station à l\'autre au signal : 30 sec machine, 30 sec cardio. 12 stations au total.', time: '20 min' },
    { n: '03', t: 'Étirements guidés', d: 'Récupération active : assouplissement, respiration, relâchement. On termine en douceur.', time: '5 min' },
  ];
  return (
    <section id="programme" className="program">
      <div className="inner">
        <div className="section-head">
          <h2>Une séance.<br/>Trois temps.</h2>
          <p>
            Un format rodé depuis 30 ans, optimisé pour travailler l'ensemble du corps
            sans perdre une minute. Tu arrives, tu suis le signal, tu progresses.
          </p>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="step-time">⏱ {s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Method, Program });
