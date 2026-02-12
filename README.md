# Notre Histoire - Site romantique interactif (Next.js)

Site web immersif et emotionnel pour la Saint-Valentin, construit avec:
- Next.js (App Router)
- React
- TailwindCSS
- Framer Motion
- Canvas API

## 1) Installation complete

### Prerequis
- Node.js 18.18+ (ou 20+ recommande)
- npm 9+

### Etapes
1. Cloner le projet:
```bash
git clone <url-du-repo>
cd notre-histoire
```

2. Installer les dependances:
```bash
npm install
```

3. Configurer le mot de passe de la page surprise (optionnel):
- Creer un fichier `.env.local` a la racine
- Ajouter la variable:
```bash
NEXT_PUBLIC_SURPRISE_PASSWORD=14-02-2022
```

4. Lancer le serveur de developpement:
```bash
npm run dev
```

5. Ouvrir l application:
- http://localhost:3000

## 2) Commandes terminal

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## 3) Deploiement sur Vercel

### Methode via interface Vercel
1. Pousser le projet sur GitHub/GitLab/Bitbucket.
2. Aller sur https://vercel.com/new.
3. Importer le repository.
4. Vercel detecte automatiquement Next.js.
5. Dans Settings > Environment Variables, ajouter:
   - `NEXT_PUBLIC_SURPRISE_PASSWORD` = votre date speciale.
6. Cliquer sur Deploy.

### Methode via Vercel CLI
1. Installer la CLI:
```bash
npm i -g vercel
```

2. Se connecter:
```bash
vercel login
```

3. Deployer:
```bash
vercel
```

4. Deployer en production:
```bash
vercel --prod
```

## 4) Optimisation performance

1. Images
- Garder les dimensions adaptees.
- Preferer des images WebP/AVIF pour les vraies photos.
- Utiliser `next/image` (deja en place) pour le lazy-loading et l optimisation automatique.

2. Canvas
- Limiter le nombre de particules simultanees sur mobile.
- Nettoyer correctement les `requestAnimationFrame` et `setInterval` (deja en place).
- Eviter les calculs lourds dans chaque frame.

3. Framer Motion
- Utiliser `whileInView` avec `viewport.once` pour eviter de rejouer les animations inutilement.
- Eviter les animations de tres grandes listes en meme temps.

4. Bundle JS
- Garder les composants client uniquement si necessaire (`use client` cible).
- Externaliser les donnees statiques dans `lib/data.ts` (deja fait).

5. SEO et metadonnees
- Completer les metadonnees Next.js dans `app/layout.tsx`.
- Ajouter un visuel Open Graph si necessaire.

## Structure du projet

```txt
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── surprise
│       └── page.tsx
├── components
│   ├── CanvasHearts.tsx
│   ├── DayCounter.tsx
│   ├── FireworksCanvas.tsx
│   ├── GallerySection.tsx
│   ├── LandingSection.tsx
│   ├── LoveLetterSection.tsx
│   ├── MouseParticles.tsx
│   ├── PageTransition.tsx
│   ├── PasswordGate.tsx
│   ├── SurpriseExperience.tsx
│   └── TimelineSection.tsx
├── lib
│   └── data.ts
├── public
│   └── images
│       ├── anniversaire.svg
│       ├── premier-rendezvous.svg
│       ├── promesse.svg
│       ├── rencontre.svg
│       ├── souvenir-1.svg
│       ├── souvenir-2.svg
│       ├── souvenir-3.svg
│       ├── souvenir-4.svg
│       ├── souvenir-5.svg
│       ├── souvenir-6.svg
│       ├── souvenir-7.svg
│       ├── souvenir-8.svg
│       └── voyage.svg
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Personnalisation rapide

- Modifier les textes: `lib/data.ts`
- Changer la date du compteur: `components/LandingSection.tsx`
- Changer le mot de passe surprise:
  - `.env.local` (recommande)
  - ou fallback dans `components/SurpriseExperience.tsx`
- Remplacer les images:
  - `public/images/*`
  - conserver les memes noms ou mettre a jour les chemins dans `lib/data.ts`
