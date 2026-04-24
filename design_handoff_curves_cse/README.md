# Handoff — Curves Court-Saint-Étienne — Site vitrine

## Overview

Site vitrine d'un club de fitness féminin (franchise Curves) situé à Court-Saint-Étienne (Belgique). Le site est une **one-page** marketing dont l'objectif principal est la **réservation d'une séance d'essai gratuite**. Il présente la méthode, le programme d'une séance, l'équipe de coachs, les tarifs, une FAQ et un formulaire de prise de rendez-vous.

Langue : **français**.
Audience : femmes de la région de Court-Saint-Étienne, tous âges (étudiantes à seniors), intéressées par un programme sportif court, coaché et bienveillant.

---

## About the Design Files

Les fichiers livrés dans ce bundle sont des **références de design produites en HTML/CSS/JSX inline** — des prototypes hi-fi illustrant l'apparence et les interactions souhaitées. Ils ne sont **pas du code de production** à copier tel quel.

**Votre mission** : recréer ces designs dans l'environnement cible du projet (React + framework au choix — Next.js, Remix, Astro, Vite/React, ou équivalent), en utilisant les patterns, la structure de composants et les conventions du codebase existant. Si aucun codebase n'existe encore, **Next.js (App Router) + CSS modules ou Tailwind** est une base recommandée pour un site vitrine français avec SEO.

Les formulaires sont actuellement des stubs (simulation client). Il faudra les brancher à une solution réelle (endpoint API, Formspree, service de réservation, etc.).

---

## Fidelity

**Hi-fi.** Les maquettes sont pixel-perfect : typographie, couleurs, espacements et interactions sont finalisés. Reproduisez-les fidèlement en utilisant les tokens listés plus bas.

---

## Tech Recommendations

- **Framework** : React (Next.js App Router recommandé pour SEO, SSG et routes i18n futures)
- **Styling** : CSS Modules, Tailwind, ou vanilla-extract — au choix. Les tokens CSS custom properties du prototype (`--brand`, `--paper`, etc.) se traduisent directement.
- **Fonts** : Google Fonts — Archivo, Inter, Allura, JetBrains Mono (voir Design Tokens)
- **Images** : `next/image` avec les photos fournies. Prévoir WebP/AVIF, tailles responsives.
- **Formulaire** : endpoint API route + service type Resend/Postmark pour l'email, ou intégration directe avec l'outil de gestion du club. Validation server-side requise.
- **Analytics** : Plausible ou GA4 — tracker les soumissions de formulaire comme conversion principale.
- **Pas de SPA** : pas besoin de routage client complexe, une seule page avec ancres.

---

## Screens / Views

Le site est une **one-page** structurée en 12 sections verticales. Ordre de rendu :

1. **Nav** (fixed)
2. **Hero** — annonce + CTA principal
3. **Marquee** — bandeau défilant des mots-clés
4. **Method** — 3 piliers de la méthode
5. **Program** — déroulé d'une séance en 4 étapes
6. **Stats** — 4 chiffres-clés
7. **Community Banner** — photo pleine largeur, overlay dégradé violet
8. **Testimonials** — grille de 6 témoignages (1 "featured" + 5 standards)
9. **Coaches** — équipe de 5 personnes (cartes photo + nom + rôle)
10. **Pricing** — 5 formules tarifaires
11. **FAQ** — accordéon de 6 questions
12. **Trial (CTA + Booking)** — pitch + formulaire de réservation
13. **Footer** — adresse, horaires, contact, navigation

### 1. Nav (component: `Nav`)

**Position** : `position: fixed; top: 0` — devient translucide/blurred au scroll (`scrollY > 40`).

**Layout** : flex `space-between`, padding `18px var(--pad)`.

**Contenu** :
- Gauche : logo (scriptural "Curves" en violet + tagline "FITNESS POUR FEMMES" + séparateur vertical + nom de la ville "COURT-SAINT-ÉTIENNE" en caps espacés)
- Centre : liens `La Méthode`, `Le Programme`, `Coachs`, `Tarifs`, `FAQ` (Archivo 13px, uppercase, letter-spacing 0.12em, underline animé au hover en violet)
- Droite (desktop) : bouton primary pill "Bilan de forme gratuit! →"
- Droite (mobile) : bouton burger (3 barres → × animé)

**État scrolled** : fond `rgba(251, 247, 244, 0.88)`, backdrop-filter `saturate(140%) blur(14px)`, border-bottom `1px solid var(--ink-08)`.

**Mobile (<960px)** : masquer `.nav-links` + `.nav-cta-desktop`, afficher un **burger menu** (bouton ☰ animé → ×) qui ouvre un overlay plein écran avec les liens de navigation + CTA.

### 2. Hero (component: `Hero`)

**Layout** : `min-height: 100vh`, grid 2 colonnes `1.15fr 1fr` alignées en bas.

**Éléments** :
- **Hero-meta** (absolue, top 120px, right `var(--pad)`) — mono 11px uppercase : adresse, localisation, téléphone
- **Hero-media** (absolue, top 100px, right, width 36%, height 72%) — image `img/hero.jpg` en cover, `border-radius: 6px`
- **Eyebrow** : "● Club féminin · Court-Saint-Étienne" — Archivo 12px letter-spacing 0.18em, couleur brand
- **Headline h1** : 3 lignes, font `clamp(56px, 11vw, 180px)`, Archivo 800 stretch 85%, line-height 0.92, letter-spacing -0.035em, uppercase
  - L1 : "Forte en" (ink)
  - L2 : "30 min." (brand violet)
  - L3 : "Pas plus." (outlined — `-webkit-text-stroke: 2px var(--ink); color: transparent`)
- **Lede** : paragraphe, Inter 17px line-height 1.5, `color: var(--ink-60)`, max-width 420px
- **CTA row** : bouton primary "Bilan de forme gratuit! →" + bouton ghost "Voir le programme"
- **Background decorative** : 2× `<Arc>` SVG (voir `logo.jsx`) — grand arc violet top-left à 14% opacity + arc ink bottom-right à 8% opacity

**Copy exact** :
- Eyebrow : `● Club féminin · Court-Saint-Étienne`
- Headline : `Forte en / 30 min. / Pas plus.`
- Lede : `Un circuit training pensé pour les femmes. Musculation, cardio et étirements en une demi-heure, coachée du début à la fin. Sans jugement, sans miroirs, sans perdre votre journée.`

### 3. Marquee

Bandeau horizontal défilant, border-top + border-bottom 1px ink, padding 20px 0.
- Animation CSS `@keyframes marquee` : translateX 0 → -50% sur 40s linéaire infinie
- Items (répétés 2×) : `30 minutes`, `entre femmes`, `coachée`, `sans miroirs`, `musculation hydraulique`, `cardio`, `résultats mesurables` — séparés par un dot violet 12px
- Type : Archivo 800 stretch 85%, clamp(28px, 4vw, 56px), uppercase, letter-spacing -0.02em
- Items pairs : outlined (`-webkit-text-stroke: 1.5px var(--ink); color: transparent`)

### 4. Method (3 piliers)

**Section-head** : grid `1fr 1.2fr`, gap 48px, align-items end.
- Colonne gauche : eyebrow violet "● La Méthode" + h2 3 lignes "Court. / Complet. / Conçu pour *vous*." (*vous* en italique + violet)
- Colonne droite : paragraphe Inter 17px, max-width 520px, `color: var(--ink-60)`

**Pillars grid** : 3 colonnes, gap 1px, fond `ink-15` (crée des séparateurs visuels 1px entre cartes).
Chaque `.pillar` :
- Fond paper, padding 40px 32px, min-height 360px
- Numéro géant `01/02/03` — Archivo 800 72px, couleur brand
- Titre h3 Archivo 800 28px uppercase
- Body Inter 15px `ink-60`, `margin-top: auto`
- **Hover** : fond → brand, couleur → white, transitions 0.3s

**Copy** (exact, voir `sections.jsx:104-122`) :
- 01 · **Un circuit, 30 minutes** · "12 machines hydrauliques alternées avec du cardio. Un tour complet du circuit sculpte le corps en entier et brûle jusqu'à 500 calories."
- 02 · **Coachée, à chaque séance** · "Nos coachs corrigent votre posture, adaptent l'intensité et vous mesurent chaque mois. Vous progressez avec méthode, pas à l'aveugle."
- 03 · **Entre femmes, sans jugement** · "Un club 100% féminin. On y vient comme on est, pour soi, avec les autres. Les liens qu'on y tisse durent bien au-delà du tapis."

### 5. Program (dark section)

Fond `--ink` (#0E0E10), texte `--paper`. Padding 120px `var(--pad)`.

Section-head identique, mais `p { color: rgba(255,255,255,0.68) }`. h2 "30 minutes, / quatre temps."

Timeline 4 étapes : chaque `.step` est une grid `120px 1fr 1fr 180px` gap 32px, séparé par border-top 1px `rgba(255,255,255,0.16)`.
- Col 1 : numéro Archivo 800 48px violet
- Col 2 : titre h3 Archivo 700 26px uppercase
- Col 3 : description Inter 15px
- Col 4 : temps right-aligned Archivo 700 14px letter-spacing 0.12em uppercase violet
- **Hover** : `padding-left: 16px` transition 0.3s

**Étapes** :
- 01 · Échauffement · "Cinq minutes pour activer les articulations, préparer le corps et lancer le rythme cardiaque." · `00 · 05 min`
- 02 · Circuit force · "Douze stations hydrauliques. Une minute par station, toutes les zones du corps travaillées." · `05 · 24 min`
- 03 · Récupération active · "Retour au calme, contrôle de la fréquence cardiaque, descente progressive." · `24 · 27 min`
- 04 · Étirements guidés · "Souplesse et mobilité. Une minute pour repartir plus droite qu'en entrant." · `27 · 30 min`

### 6. Stats

Grid 4 colonnes, cartes séparées par 1px `ink-15`, padding 32px 24px.
- Numéro Archivo 800 stretch 85% clamp(44px, 5vw, 72px) violet
- Unité suffixée en 0.4em `ink-60`
- Label Inter 13px `ink-60` max-width 220px

**Stats** :
- `500 kcal` · brûlées par séance en moyenne
- `12 stations` · machines hydrauliques par circuit
- `3× / sem.` · la fréquence recommandée pour voir les résultats
- `18 ans` · à accompagner les femmes de Saint-Étienne

### 7. Community Banner

Full-bleed image `img/community.jpg`, height `min(80vh, 720px)`.

Overlay dégradé : `linear-gradient(180deg, rgba(14,14,16,0.15) 0%, rgba(91,42,134,0.35) 60%, rgba(62,28,92,0.85) 100%)`.

Contenu aligné bottom-left du conteneur inner (max-width 1360px) :
- Eyebrow blanc : "● Notre tribu"
- Headline `clamp(48px, 8vw, 128px)` Archivo 800 : `Bienvenue` (blanc) + `chez vous.` (outline 2px blanc, transparent fill)

### 8. Testimonials

Fond `--brand-soft` (#EFE6F6). Grille 12 colonnes, gap 24px.
- Carte "featured" : `grid-column: span 8`, fond `--ink`, texte `--paper`, quote Archivo 700 stretch 90% 34px
- Cartes standards : `span 4`, fond paper, padding 32px, border-radius 6px, min-height 340px
- Chaque carte : 5 étoiles violettes, quote Archivo 700 22px line-height 1.2, footer = avatar 52px circle + nom Archivo 700 14px uppercase + label Inter 12px `ink-60`
- **Hover** : translateY -4px, shadow `0 20px 40px -20px rgba(230,0,126,0.35)`

**6 témoignages** (featured en premier) — textes complets dans `sections.jsx:283-371`.

### 9. Coaches (MAJ récente)

Fond `--paper-2` (#F3ECE6). Grille **5 colonnes** gap 20px.

Chaque carte :
- Fond paper, border-radius 6px, overflow hidden
- Photo : `aspect-ratio: 1/1.1`, background-image cover center
- Texte : padding 18px, nom Archivo 800 stretch 85% 22px uppercase, rôle Archivo 600 11px letter-spacing 0.14em uppercase violet

**Équipe (avec photos réelles)** :
1. **Maud** — Manager — `img/coach-maud.jpg`
2. **Virginie** — Coach — `img/coach-virginie.jpg`
3. **Axelle** — Coach — `img/coach-axelle.jpg`
4. **Béatrice** — Coach — `img/coach-beatrice.jpg`
5. **Camille** — Coach — `img/coach-camille.jpg`

### 10. Pricing

Grille 5 colonnes bordée 1px `ink-15`, avec séparateurs internes 1px. Responsive : 3 colonnes <1100px, 2 colonnes <720px.

Chaque carte : padding 28px, min-height 260px, flex column gap 14px.
- Label (Étudiante/Senior/…) Archivo 700 12px letter-spacing 0.14em uppercase violet
- Prix Archivo 800 stretch 85% 64px + suffixe "/mois" 14px opacity 0.7
- Sub-text bottom Inter 13px opacity 0.8 `margin-top: auto`

**Carte emphase** (`12 mois`) : fond brand, texte blanc.

**Plans** :
| Label | Prix | Sub |
|---|---|---|
| Étudiante | 25€/mois | Moins de 25 ans · min. 4 mois |
| Senior | 49€/mois | +65 ans · engagement 12 mois |
| **12 mois** (emph) | 54€/mois | Le plus choisi · engagement 12 mois |
| 3 mois | 64€/mois | Engagement 3 mois |
| Sans engagement | 69€/mois | Liberté totale, mois par mois |

Note sous grille, centrée, 13px `ink-60` : "Frais de service selon la promotion actuelle · Paiement mensuel · Valable dans +4 000 clubs Curves dans le monde"

### 11. FAQ

Wrap grid `1fr 2fr` gap 80px.
- Colonne gauche : eyebrow violet + h2 "Les questions / qu'on nous pose / **souvent.**" (3ᵉ ligne violette)
- Colonne droite : liste `.faq-list` border-top ink, chaque item border-bottom ink.

Chaque question : button plein-largeur `.faq-q` padding 26px 0, Archivo 700 clamp(20px, 2.2vw, 28px) uppercase.
- Icône : cercle 36px bordé currentColor avec `+` (deux pseudo-éléments). Ouvert : fond brand, `+` devient `−` (scaleY(0) sur le trait vertical).
- Réponse : max-height 0 → 400px transition 0.4s, padding 0 0 28px à l'ouverture. Inter 16px line-height 1.6 `ink-60` max-width 640px.

**6 questions** — copy exact dans `sections.jsx:377-406`. Comportement : accordéon single-open (réponse déjà ouverte en cliquant se referme).

### 12. Trial (CTA + Booking)

Fond `--brand`, texte blanc. 2 arcs décoratifs SVG 8% opacity.

Grid 2 colonnes `1.3fr 1fr` gap 60px.

**Gauche** :
- Eyebrow blanc opacity 0.7 "● Votre séance d'essai"
- Headline `clamp(48px, 7vw, 112px)` Archivo 800 : "Poussez / la porte. / **C'est offert.**" (3ᵉ ligne outline 2px blanc)
- Lede 18px opacity 0.88 max-width 520px
- Liste 4 bullets : cercle blanc 26px avec ✓ violet + texte Archivo 600 15px uppercase
  - Séance complète, 1 coach dédiée
  - Mesure de départ (forme & silhouette)
  - Tous les jours, créneau au choix
  - Sans engagement, sans piège

**Droite — formulaire** :
- Carte blanche padding 40px border-radius 6px shadow `0 30px 80px -30px rgba(0,0,0,0.3)`
- Titre h3 Archivo 800 stretch 85% 28px "Réserver ma séance"
- Sous-titre `ink-60` 14px : "On vous rappelle dans la demi-journée pour caler le créneau."
- Champs : Prénom+Nom (row), Téléphone, Email, Créneau préféré (select)
- Inputs : padding 14px 16px, border 1.5px `ink-15`, border-radius 4px, fond paper. Focus : border brand, fond white.
- Submit : btn-ink full-width "Je réserve →"
- À la soumission : remplace le formulaire par un message de succès "✓ Demande reçue. On vous rappelle très vite." (state local `sent`)

**Créneaux du select** :
- Matin (09h – 12h)
- Midi (12h – 14h)
- Après-midi (14h – 17h)
- Fin de journée (17h – 20h)
- Samedi matin

### 13. Footer

Fond `--ink`, texte `--paper`. Padding 80px `var(--pad)` 40px.

- **Big wordmark** : "Curves. / Court-St-Étienne" — Archivo 800 stretch 85% `clamp(64px, 12vw, 200px)` outline 1.5px brand, transparent fill
- **Grid** 4 col `2fr 1fr 1fr 1fr` gap 48px :
  - Adresse : 8a Avenue des Métallurgistes, 1490 Court-St-Étienne, À côté du LIDL
  - Horaires : Lun 9h–13h30·15h30–19h30 / Mar 10h–13h·15h30–19h30 / Mer 9h–13h30·15h30–19h30 / Jeu 10h–13h·15h30–19h30 / Ven 9h–13h30·15h30–19h / Sam 9h30–12h30 / Dim fermé
  - Contact : `tel:+3210681073` (010 68 10 73), `mailto:curvescourtstetienne@gmail.com`, Instagram, Facebook
  - Navigation : ancres vers les sections (#method, #program, #community, #faq, #trial)
- **Bottom** : "© 2026 Curves Court-St-Étienne · THOMIAL srl. Tous droits réservés." + "Mentions légales · Politique de confidentialité"

---

## Interactions & Behavior

| Composant | Trigger | Effet |
|---|---|---|
| Nav | `window.scrollY > 40` | Toggle classe `.scrolled` (blur + fond translucide + border-bottom) |
| Nav links | hover | Couleur → brand, underline violette scaleX 0→1 transition 0.25s |
| Pillars | hover | Fond → brand, texte → blanc, transition 0.3s |
| Step timeline | hover | `padding-left: 16px` transition 0.3s |
| Testimonial card | hover | `translateY(-4px)` + shadow magenta transition 0.3s |
| FAQ item | click | Toggle open/closed, max-height 0 ↔ 400px, `+` → `−` (scaleY transform) |
| Booking form | submit | Prevent default, state `sent=true` → swap fields ↔ success message |
| Tweaks panel | `postMessage __activate_edit_mode` | Affiche panneau bottom-right avec 6 swatches de couleur, change `--brand` live |
| Marquee | auto | Animation CSS infinie 40s linéaire |

**Smooth scroll** : ajouter `html { scroll-behavior: smooth; }` si non inclus.

---

## State Management

Minime — local component state suffit :
- `Nav` : `scrolled: boolean`
- `FAQ` : `open: number` (index question ouverte, -1 = toutes fermées)
- `Trial` : `sent: boolean`
- App-level : `accent: string` (hex) pour le Tweaks panel — non nécessaire en prod

**Form submission** :
- Prévoir endpoint API route (`POST /api/booking`)
- Validation : prénom+nom requis, téléphone requis (regex BE/FR), email requis
- Protection spam : honeypot + rate-limiting + reCAPTCHA optionnel
- Envoi email vers `curvescourtstetienne@gmail.com` + log/CRM

---

## Design Tokens

### Colors

| Token | Valeur | Usage |
|---|---|---|
| `--brand` | `#5B2A86` | Violet Curves signature, accents, CTA primaire |
| `--brand-dark` | `#3E1C5C` | Hover primary, overlay bas du community banner |
| `--brand-soft` | `#EFE6F6` | Fond section testimonials |
| `--accent` | `#E6007E` | Magenta (shadow testimonials) |
| `--ink` | `#0E0E10` | Texte principal, fond dark sections, footer |
| `--ink-60` | `rgba(14,14,16,0.64)` | Texte secondaire |
| `--ink-40` | `rgba(14,14,16,0.42)` | — |
| `--ink-15` | `rgba(14,14,16,0.14)` | Bordures fines |
| `--ink-08` | `rgba(14,14,16,0.08)` | Bordure nav scrolled |
| `--paper` | `#FBF7F4` | Fond principal (blanc chaud) |
| `--paper-2` | `#F3ECE6` | Fond alternatif (coaches, image placeholder) |
| `--white` | `#ffffff` | — |

### Typography

Google Fonts URL :
```
https://fonts.googleapis.com/css2?family=Allura&family=Archivo:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

| Stack | Usage |
|---|---|
| `Archivo` 400/600/700/800 (stretch 85% pour display) | Tous les titres, eyebrows, boutons, navigation |
| `Inter` 400/500/600 | Corps de texte, paragraphes, lede |
| `Allura` | Logo wordmark uniquement |
| `JetBrains Mono` 400/500 | Hero meta, image placeholders, labels mono |

**Type scale récurrente** :
- Display h1 hero : `clamp(56px, 11vw, 180px)`, weight 800, stretch 85%, line-height 0.92, letter-spacing -0.035em, uppercase
- Display h2 section : `clamp(40px, 6.4vw, 96px)`, weight 800, stretch 85%, line-height 0.94, letter-spacing -0.03em, uppercase
- Eyebrow : Archivo 700 12px, letter-spacing 0.18em, uppercase
- Body : Inter 17px, line-height 1.5
- Mono label : JetBrains Mono 11px, letter-spacing 0.06em, uppercase

### Spacing

- `--pad` : `clamp(20px, 4vw, 56px)` — padding horizontal de sections
- `--max` : `1360px` — largeur max inner
- Section padding vertical : `120px` (sauf hero & stats qui varient)
- Grid gaps courants : 24px, 32px, 48px, 60px, 80px

### Radius & Shadows

- `--radius` : 2px
- `--radius-lg` : 6px
- Boutons pill : 999px
- FAQ icon : 50% circle
- Shadow booking card : `0 30px 80px -30px rgba(0,0,0,0.3)`
- Shadow testimonial hover : `0 20px 40px -20px rgba(230,0,126,0.35)`
- Shadow tweaks panel : `0 20px 50px -10px rgba(0,0,0,0.25)`

### Buttons

3 variants tous en pill `border-radius: 999px`, padding `16px 22px`, Archivo 700 13px letter-spacing 0.14em uppercase, gap 10px avec flèche `.arrow` qui se déplace +4px au hover.

- `.btn-primary` : fond brand, texte blanc. Hover : translateY(-1px) + fond brand-dark
- `.btn-ghost` : transparent, texte ink, border 1.5px ink. Hover : fond ink, texte paper
- `.btn-ink` : fond ink, texte paper. Hover : fond brand

---

## Assets

Toutes les images sont dans `assets/img/`. Remplacer par WebP optimisés en production.

### Photos fournies par la cliente (Curves CSE)

| Fichier | Usage | Original |
|---|---|---|
| `coach-maud.png` | Équipe · Maud (Manager) | Maud.png |
| `coach-virginie.png` | Équipe · Virginie (Assistante Manager & Coach) | Virginie.png |
| `coach-axelle.png` | Équipe · Axelle (Coach) | Axelle.png |
| `coach-beatrice.png` | Équipe · Béatrice (Coach) | beatrice.png |
| `coach-camille.png` | Équipe · Camille (Coach) | camille.png |
| `hero.jpg` | Hero media | À fournir — idéalement photo du club ou groupe |
| `community.jpg` | Community banner full-bleed | À fournir — photo groupe chaleureuse |
| `p1.jpg` – `p5.jpg` | Avatars testimonials | Portraits de membres |

### Logo

**⚠️ Important** : le wordmark "Curves" et le logo officiel de la franchise Curves sont des marques protégées. Le prototype utilise un **rendu typographique en Allura** comme placeholder ; en production, il faut :
- soit intégrer les PDF officiels fournis par le franchisé (`Curves Logo Tagline_Purple_Transparent BG_*.pdf` — à vectoriser en SVG),
- soit obtenir l'accord écrit du franchisor pour l'utilisation des assets de marque.

Le fichier `logo.jsx` expose aussi un composant `<Arc>` — motif SVG décoratif arc-de-cercle utilisé en arrière-plan du Hero et du CTA Trial. Conservez-le, il est original.

### Iconographie

Pas d'icon set tiers — tout est rendu en CSS (checkmarks, FAQ `+/−`, étoiles `★`, dots, chevrons `→`). Libre d'utiliser Lucide / Heroicons si besoin d'enrichir.

---

## Responsive Behavior

Breakpoints définis dans `styles.css` :

**< 1100px** (pricing seulement) : grille 5 → 3 colonnes
**< 960px** : breakpoint principal mobile/tablette
  - Hero : grille 1 colonne, media repasse en relatif 300px
  - Section-head : 1 colonne
  - Pillars, FAQ wrap, CTA grid → 1 colonne
  - Step timeline : simplifiée à 2 colonnes
  - Stats : 2 colonnes
  - Testimonials : tous `span 12`
  - Footer : 2 colonnes
  - Nav links cachés (⚠️ prévoir un menu burger à implémenter)
**< 720px** (pricing) : grille → 2 colonnes

**À ajouter en production** :
- Menu burger mobile ✅ (présent dans le prototype)
- Image optimization via `next/image` avec `sizes` responsive
- Réduire la taille du headline hero sur très petits écrans (<360px)

---

## Accessibility Checklist

- Landmarks : `<nav>`, `<main>` (à ajouter autour des sections), `<footer>`
- Headings : 1× h1 (hero), h2 par section, h3 dans les cartes
- Contraste : vérifier paper/ink-60 (à la limite AA sur petits textes)
- Formulaire : labels associés, autocomplete attributes, ARIA invalid sur erreurs
- FAQ accordion : ajouter `aria-expanded`, `aria-controls`, gérer clavier (Enter/Space, arrow keys optionnel)
- Focus visible : actuellement traité sur inputs, à étendre aux boutons et liens
- Marquee : `prefers-reduced-motion` → arrêter l'animation
- Images : alt text descriptif (pas "photo de X" — décrire le contexte)
- Lang : `<html lang="fr">` ✅

---

## SEO / Meta (à ajouter en production)

Le prototype a seulement `<title>Curves · Court-Saint-Étienne</title>`. Prévoir :

```html
<meta name="description" content="Curves Court-Saint-Étienne — circuit training 30 minutes pour femmes. Musculation, cardio, coaching. Séance d'essai gratuite. 8a Avenue des Métallurgistes, 1490 Court-St-Étienne." />
<meta property="og:title" content="Curves Court-Saint-Étienne" />
<meta property="og:description" content="Fitness 30 min entre femmes. Séance d'essai gratuite." />
<meta property="og:image" content="/og.jpg" />
<meta property="og:locale" content="fr_BE" />

<!-- Schema.org LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Curves Court-Saint-Étienne",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8a Avenue des Métallurgistes",
    "addressLocality": "Court-Saint-Étienne",
    "postalCode": "1490",
    "addressCountry": "BE"
  },
  "telephone": "+32-10-68-10-73",
  "email": "curvescourtstetienne@gmail.com",
  "openingHours": [
    "Mo 09:00-13:30", "Mo 15:30-19:30",
    "Tu 10:00-13:00", "Tu 15:30-19:30",
    "We 09:00-13:30", "We 15:30-19:30",
    "Th 10:00-13:00", "Th 15:30-19:30",
    "Fr 09:00-13:30", "Fr 15:30-19:00",
    "Sa 09:30-12:30"
  ]
}
</script>
```

---

## Files in this Bundle

```
design_handoff_curves_cse/
├── README.md                       ← ce fichier
├── Curves Saint-Étienne.html       ← page principale (shell HTML)
├── styles.css                      ← tous les styles du site
├── sections.jsx                    ← tous les composants React (Nav → Footer)
├── logo.jsx                        ← Logo + Arc SVG
└── assets/
    └── img/
        ├── coach-maud.jpg
        ├── coach-virginie.jpg
        ├── coach-axelle.jpg
        ├── coach-beatrice.jpg
        ├── coach-camille.jpg
        ├── hero.jpg
        ├── community.jpg
        ├── p1.jpg … p5.jpg
        ├── curves.jpg, curves1.jpg, court.jpg, method.jpg
```

**Pour implémenter** :
1. Ouvrir `Curves Saint-Étienne.html` dans un navigateur pour voir le résultat attendu (nécessite les fichiers frères + dossier `img/` à ce niveau).
2. Découper `sections.jsx` en composants React séparés (`Nav.tsx`, `Hero.tsx`, …) dans le framework cible.
3. Traduire `styles.css` en CSS modules / Tailwind / styled-components au choix — en conservant strictement les tokens.
4. Brancher le formulaire sur un vrai endpoint.
5. Ajouter meta SEO + Schema.org.
6. Intégrer le logo Curves officiel (PDF vectorisé en SVG) à la place du placeholder Allura.
7. Ajouter menu burger mobile.
8. Tester contraste / a11y (axe, Lighthouse).

---

## Contact

Cliente : **Curves Court-Saint-Étienne** (THOMIAL srl)
Email : `curvescourtstetienne@gmail.com` / `cse@curves.be`
Tel : `+32 10 68 10 73`
