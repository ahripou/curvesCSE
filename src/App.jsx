import { useState } from 'react'
import './styles.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Method } from './components/Method'
import { Program } from './components/Program'
import { Stats } from './components/Stats'
import { CommunityBanner } from './components/CommunityBanner'
import { Testimonials } from './components/Testimonials'
import { Coaches } from './components/Coaches'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Trial } from './components/Trial'
import { Footer } from './components/Footer'

const ACCENT_DEFAULT = '#5B2A86'

const swatches = [
  { name: 'Violet Curves (signature)', hex: '#5B2A86' },
  { name: 'Prune profonde', hex: '#3E1C5C' },
  { name: 'Magenta', hex: '#E6007E' },
  { name: 'Framboise', hex: '#D81159' },
  { name: 'Encre', hex: '#0E0E10' },
  { name: 'Émeraude', hex: '#0E8A6B' },
]

function darken(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = Math.max(0, ((n >> 16) & 255) - 40)
  const g = Math.max(0, ((n >> 8) & 255) - 40)
  const b = Math.max(0, (n & 255) - 40)
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function soften(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = Math.min(255, ((n >> 16) & 255) + 180)
  const g = Math.min(255, ((n >> 8) & 255) + 180)
  const b = Math.min(255, (n & 255) + 180)
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function applyAccent(hex) {
  const root = document.documentElement
  root.style.setProperty('--brand', hex)
  root.style.setProperty('--brand-dark', darken(hex))
  root.style.setProperty('--brand-soft', soften(hex))
}

export default function App() {
  const [accent, setAccent] = useState(ACCENT_DEFAULT)
  const [tweaksVisible] = useState(false)

  const setSwatch = (hex) => {
    setAccent(hex)
    applyAccent(hex)
  }

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Method />
      <Program />
      <Stats />
      <CommunityBanner />
      <Testimonials />
      <Coaches />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />

      <div className={`tweaks-panel ${tweaksVisible ? 'visible' : ''}`}>
        <h5>Accent</h5>
        <div className="swatch-row">
          {swatches.map(s => (
            <button
              key={s.hex}
              className={`swatch ${accent === s.hex ? 'active' : ''}`}
              style={{ background: s.hex }}
              onClick={() => setSwatch(s.hex)}
              title={s.name}
            />
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-60)', marginTop: 14, lineHeight: 1.4 }}>
          Couleur signature du logo.<br />Les dégradés s'ajustent automatiquement.
        </div>
      </div>
    </>
  )
}
