# Portfolio — Jean de Dieu Riche TCHIBOUANGA

Développeur Full-Stack & Data / IA · Casablanca.

- **Stack** : Next.js 16, React 19, TypeScript, Tailwind CSS 4 (aucune autre dépendance).
- **Contenu** : tout est dans `src/data/profile.ts` (projets, compétences, certifications, expériences).
  Ajouter un projet = ajouter un objet dans `PROJECTS` et son image dans `public/images/projects/`.
- **Animations** : CSS + IntersectionObserver ; désactivées si l'utilisateur demande à réduire les animations.
- **Accessibilité** : audit axe-core WCAG 2.1 AA sans violation (bureau et mobile).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérification avant mise en ligne
```
