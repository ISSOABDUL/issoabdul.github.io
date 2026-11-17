/**
 * Rendu des schémas d'architecture (Mermaid) côté navigateur.
 *
 * Pourquoi côté navigateur et pas au build ? Le rendu au build exige un
 * navigateur headless (Playwright) dans la CI : lourd et fragile pour 3 schémas.
 * Compromis accepté : ~0,5 s de rendu à l'ouverture d'une étude de cas.
 *
 * Pourquoi un import dynamique ? Mermaid pèse plusieurs centaines de Ko :
 * il n'est téléchargé que sur les pages qui contiennent un schéma.
 */

// Astro produit <pre><code class="language-mermaid"> pour les blocs exclus de la coloration (cf. astro.config.mjs).
const SELECTEUR_BLOCS = 'pre > code.language-mermaid';

/** Lit une variable CSS du thème actif, pour que les schémas suivent le mode clair/sombre. */
function couleurTheme(nom: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(nom).trim();
}

export async function rendreSchemas(): Promise<void> {
  const blocs = document.querySelectorAll<HTMLElement>(SELECTEUR_BLOCS);
  if (blocs.length === 0) return;

  const { default: mermaid } = await import('mermaid');

  mermaid.initialize({
    startOnLoad: false,
    // `strict` : Mermaid n'exécute aucun script ni lien JavaScript dans les schémas.
    securityLevel: 'strict',
    theme: 'base',
    fontFamily: '"Public Sans Variable", sans-serif',
    themeVariables: {
      primaryColor: couleurTheme('--surface'),
      primaryBorderColor: couleurTheme('--accent'),
      primaryTextColor: couleurTheme('--encre'),
      lineColor: couleurTheme('--encre-douce'),
      secondaryColor: couleurTheme('--accent-doux'),
      tertiaryColor: couleurTheme('--papier'),
      edgeLabelBackground: couleurTheme('--papier'),
    },
  });

  // Rendu séquentiel : Mermaid n'est pas conçu pour des rendus parallèles.
  for (const [index, bloc] of Array.from(blocs).entries()) {
    const source = bloc.textContent ?? '';
    try {
      const { svg } = await mermaid.render(`schema-${index}`, source);
      const conteneur = document.createElement('figure');
      conteneur.className = 'schema';
      conteneur.setAttribute('role', 'img');
      conteneur.setAttribute('aria-label', "Schéma d'architecture de la solution");
      conteneur.innerHTML = svg; // SVG produit par Mermaid en mode `strict` à partir de notre propre contenu.
      // On remplace le <pre> parent, pas seulement le <code>, pour ne pas garder un cadre vide.
      const indice = document.createElement('p');
      indice.className = 'indice-defilement'; // Visible uniquement sur mobile (cf. global.css).
      indice.textContent = 'Faites défiler le schéma horizontalement.';
      (bloc.parentElement ?? bloc).replaceWith(conteneur, indice);
    } catch (erreur) {
      // Échec explicite : on garde le texte source visible plutôt qu'un trou dans la page.
      console.error(`Rendu du schéma ${index} impossible`, erreur);
    }
  }
}
