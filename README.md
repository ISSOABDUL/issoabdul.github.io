# Portfolio — Abdul-Hamid Hassan ISSO

Site personnel : **https://issoabdul.github.io**
Développeur Microsoft 365 & Full Stack, Cotonou (Bénin).

## Stack

| Outil | Rôle | Pourquoi ce choix |
| --- | --- | --- |
| Astro 5 | Générateur de site statique | HTML pur, très rapide, contenu en Markdown |
| Tailwind CSS 4 | Mise en page | Pas de CSS à maintenir à la main pour la structure |
| Mermaid | Schémas d'architecture | Schémas écrits en texte : versionnés et sans capture d'écran client |
| GitHub Pages + Actions | Hébergement | Gratuit, déploiement automatique à chaque push |

## Structure

```
src/
├── content/projets/   # Une étude de cas = un fichier Markdown (schéma validé au build)
├── content.config.ts  # Schéma des études de cas : un champ manquant fait échouer le build
├── data/accueil.ts    # Contenu de l'accueil (compétences, parcours, contact)
├── layouts/           # Mise en page commune (métadonnées, en-tête, pied de page)
├── pages/             # Accueil + page générée pour chaque étude de cas
├── scripts/schemas.ts # Rendu des schémas Mermaid, chargé uniquement si nécessaire
└── styles/global.css  # Couleurs (clair/sombre), typographie, contenu des études de cas
```

## Commandes

```bash
npm install        # installer les dépendances (une seule fois)
npm run dev        # aperçu local sur http://localhost:4321
npm run build      # vérification TypeScript + génération dans dist/
```

## Tâches courantes

- **Ajouter ou modifier une étude de cas** : éditer un fichier de `src/content/projets/`.
- **Publier le CV** : déposer `cv-abdul-hamid-isso.pdf` dans `public/`, puis passer `cv.disponible` à `true` dans `src/data/accueil.ts`.
- **Afficher l'ENEAM** : renseigner `periode` et `intitule` dans `src/data/accueil.ts` (la ligne est masquée tant que `periode` vaut `null`).

## Décisions techniques

- **Schémas rendus dans le navigateur, pas au build** : le rendu au build exige un navigateur headless dans la CI. Compromis accepté : environ une demi-seconde de rendu à l'ouverture d'une étude de cas.
- **Une seule version de Vite** (`overrides` dans `package.json`) : `@tailwindcss/vite` en installait une autre que celle d'Astro, ce qui cassait la vérification TypeScript.
- **Confidentialité** : aucun nom de client ni donnée interne. Les projets sont décrits par type de structure.
