/**
 * Contenu de la page d'accueil, séparé de sa mise en page.
 *
 * Pourquoi un fichier de données ? Pour modifier un texte (une compétence,
 * une date) sans toucher au HTML : on édite ici, la page se met à jour.
 * Les types empêchent d'oublier un champ.
 */

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Realisation {
  contexte: string;
  description: string;
}

export interface GroupeCompetences {
  domaine: string;
  elements: string[];
}

export interface EtapeParcours {
  /** `null` = date pas encore vérifiée : la ligne n'est pas affichée. */
  periode: string | null;
  organisation: string;
  intitule: string;
  detail?: string;
}

export const identite = {
  nom: 'Abdul-Hamid Hassan ISSO',
  titre: 'Développeur Microsoft 365 & Full Stack',
  phraseDeValeur:
    "Du diagnostic métier à l'application en production : je transforme des processus manuels en outils Microsoft 365 et web, sûrs et adoptés.",
  ville: 'Cotonou, Bénin',
} as const;

/**
 * Le CV n'existe pas encore (prévu le mercredi 18 novembre).
 * Tant que `cvDisponible` vaut `false`, le bouton est masqué :
 * un lien vers un fichier absent donnerait une erreur 404 à un recruteur.
 * Une fois le PDF déposé dans /public, passer la valeur à `true`.
 */
export const cv = {
  disponible: false,
  chemin: '/cv-abdul-hamid-isso.pdf',
} as const;

export const contact: Contact = {
  email: 'issoabdulhamidhassan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdul-hamid-hassan-isso-74521326a',
  github: 'https://github.com/ISSOABDUL',
};

/** Les 3 étapes qui résument la méthode de travail, affichées en ouverture. */
export const methode: string[] = [
  'Comprendre et cartographier le processus',
  'Concevoir avec les contraintes réelles',
  'Livrer en production et former les utilisateurs',
];

export const autresRealisations: Realisation[] = [
  {
    contexte: 'Établissement public',
    description:
      'Maarch Courrier : mise à jour, corrections de bugs, améliorations, déploiement et configuration',
  },
  { contexte: 'Administration publique', description: 'Agenda numérique de la direction' },
  {
    contexte: 'Iokeo (interne)',
    description:
      'Cahier des charges de la digitalisation des bons de caisse (application Teams)',
  },
  {
    contexte: 'Personnel',
    description:
      "Site web et outillage technique d'une entreprise de services (lafeedeslogis.com)",
  },
  {
    contexte: 'Personnel, en cours',
    description:
      "Détection d'animaux sur images de caméras de surveillance de la faune (Python, YOLOv8, OpenCV)",
  },
  {
    contexte: 'Formation',
    description:
      'Application de réservation en ligne pour compagnies de transport terrestre (projet de licence)',
  },
];

export const competences: GroupeCompetences[] = [
  {
    domaine: 'Microsoft 365 et Power Platform',
    elements: [
      'SharePoint Online (sites hub, permissions, API REST)',
      'Power Automate',
      'Power BI',
      'Power Apps',
      'Teams (applications en onglet)',
      'Microsoft Graph API',
      'Entra ID',
    ],
  },
  {
    domaine: 'Développement full stack',
    elements: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'MSAL',
      'C# / .NET (Blazor)',
      'Java (Spring Boot)',
      'Python',
    ],
  },
  {
    domaine: 'Déploiement et outils',
    elements: [
      'Git / GitHub',
      'Azure',
      'Déploiement et configuration de Maarch Courrier',
      'Développement assisté par IA',
    ],
  },
];

export const experiences: EtapeParcours[] = [
  {
    periode: 'Depuis mai 2025',
    organisation: 'Iokeo',
    intitule: 'Ingénieur logiciel',
    detail:
      'Missions de digitalisation pour une administration publique et un établissement public.',
  },
  {
    periode: 'Oct. 2024 – févr. 2025',
    organisation: 'HÉ SYSTÈME',
    intitule: 'Stage de développement backend (5 mois)',
    detail:
      "Modules d'une application en Java Spring Boot ; découverte de l'architecture et des microservices.",
  },
];

export const formations: EtapeParcours[] = [
  {
    periode: '2020 – 2024',
    organisation: 'École Supérieure de Management du Bénin (ESMB)',
    intitule: 'Licence en Système Informatique et Logiciel',
  },
  {
    // À compléter avec les dates exactes du diplôme : la ligne reste masquée d'ici là.
    periode: null,
    organisation: 'ENEAM',
    intitule: 'Filière à préciser',
  },
];

export const certification = {
  libelle: 'Microsoft AB-900',
  statut: 'En préparation, examen le 28 novembre 2026 (financée par Iokeo)',
} as const;
