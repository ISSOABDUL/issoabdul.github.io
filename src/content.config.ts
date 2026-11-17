import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection « projets » : une étude de cas = un fichier Markdown.
 *
 * Pourquoi un schéma Zod ? Le build échoue si un champ obligatoire manque
 * (ex. oubli du rôle ou du statut). C'est un garde-fou contre une étude de cas
 * publiée incomplète — exactement la règle « problème, rôle, stack, résultat ».
 */
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    /** Type de structure anonymisé : jamais le nom du client. */
    contexte: z.string(),
    /** Rôle exact, en une ligne : seul, binôme, équipe. */
    role: z.string(),
    statut: z.string(),
    /** Résumé affiché sur la page d'accueil : le problème et le résultat. */
    resume: z.string().max(220),
    stack: z.array(z.string()).min(1),
    /** Ordre d'affichage sur l'accueil (1 = premier). */
    ordre: z.number().int().positive(),
  }),
});

export const collections = { projets };
