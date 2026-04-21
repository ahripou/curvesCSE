export function CommunityBanner() {
  return (
    <section style={{ padding: 0, position: 'relative' }}>
      <div style={{
        height: 'min(80vh, 720px)',
        backgroundImage: 'url(/img/community.jpg)',
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
            <div className="h-display" style={{ fontSize: 'clamp(48px, 8vw, 128px)', color: 'white' }}>
              Bienvenue<br />
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>chez vous.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
