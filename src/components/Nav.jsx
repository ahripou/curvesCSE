import { useState, useEffect } from 'react'
import { Logo } from './Logo'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
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
  )
}
