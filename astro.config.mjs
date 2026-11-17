// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Configuration Astro.
 *
 * - `site` : URL publique. Le dépôt GitHub s'appelle `issoabdul.github.io`,
 *   donc le site est servi à la racine : pas besoin de `base`.
 *   En janvier (V2 : nom de domaine), seule cette ligne changera.
 * - `excludeLangs: ['mermaid']` : on empêche la coloration syntaxique des blocs
 *   Mermaid. Sinon Shiki les transforme en HTML coloré et le script client
 *   ne peut plus lire le texte brut du diagramme.
 */
export default defineConfig({
  site: 'https://issoabdul.github.io',
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
