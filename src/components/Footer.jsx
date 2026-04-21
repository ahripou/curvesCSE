export function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-big">Curves.<br />Court-St-Étienne</div>
        <div className="footer-grid">
          <div>
            <h4>Adresse</h4>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
              8a Avenue des Métallurgistes<br />
              1490 Court-St-Étienne<br />
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
  )
}
