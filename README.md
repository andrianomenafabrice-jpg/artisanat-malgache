# Artisanat Malgache — Vitrine React

Vitrine frontend pur mettant en valeur des artisans malgaches réels dans leur diversité régionale : vannerie, broderie, bois sculpté zafimaniry, tissage de lamba en soie, corne de zébu, poterie, bijouterie.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (tokens de design personnalisés)
- Framer Motion (animations)
- React Router (navigation)
- Zustand (état global des filtres)
- lucide-react (icônes)

Aucun backend : toutes les données sont mockées dans `src/data/`.

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

Application disponible sur `http://localhost:5173`.

## Structure

\`\`\`
src/
  components/   Composants réutilisables (layout, gallery, product, ui)
  pages/        Pages (Home, Gallery, ProductDetail, ArtisanDetail, About, Contact)
  data/         Données mockées (artisans.json, produits.json)
  context/      ThemeContext (mode clair/sombre)
  store/        filterStore (Zustand — filtres région/catégorie/recherche)
  hooks/        useFilteredProducts, useArtisan, useProduit, usePageTitle
  types/        Types TypeScript partagés
\`\`\`

## Élément signature

Le filtre par région (`src/components/gallery/RegionMap.tsx`) est une carte SVG stylisée
de Madagascar, avec régions cliquables. Sur petit écran, un fallback en liste de boutons
prend le relais pour rester utilisable au doigt.

## Points d'intégration backend futurs

- `src/pages/Contact.tsx` : la soumission du formulaire est simulée (`setTimeout`).
  Le commentaire dans le code indique où brancher un vrai appel réseau.
- `src/data/*.json` : à remplacer par un vrai appel API si un backend est ajouté.
- `ImagePlaceholder` : à remplacer par de vraies images (`public/images/...`) une fois
  les photos disponibles.