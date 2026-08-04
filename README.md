# Portfolio — Junior Bini

Portfolio Angular (standalone components, Angular 17) pour Roland Junior Désiré BINI,
généré à partir du CV fourni et du mockup de design.

## Démarrage

```bash
npm install
npm start
```

Puis ouvrez http://localhost:4200

## Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/portfolio/browser`.

## Structure

```
src/app/
  core/
    data/portfolio-data.ts       ← TOUT le contenu du site (une seule source de vérité)
    models/portfolio.models.ts   ← interfaces TypeScript
    directives/reveal.directive.ts ← animation "reveal on scroll"
    pipes/safe-url.pipe.ts       ← pour intégrer les futures vidéos YouTube/Vimeo
  components/
    navbar/        hero/           about/
    education/      experience/     skills/
    projects/        project-videos/  certifications/
    achievements/    contact/         footer/
```

## Ce qu'il reste à personnaliser

Tout se trouve dans **`src/app/core/data/portfolio-data.ts`** :

1. **Liens sociaux** — `PROFILE.socials.github` et `PROFILE.socials.linkedin` sont vides
   (aucun lien n'était présent dans le CV). Ajoutez vos URLs pour qu'ils apparaissent
   dans la navbar, le hero, le footer et la section contact.
2. **Vidéos de projets** — la section "Project Videos" a des cases prêtes à l'emploi
   (`PROJECT_VIDEOS`). Remplissez `videoUrl` avec un lien d'intégration YouTube/Vimeo
   (ex. `https://www.youtube.com/embed/VOTRE_ID`) pour activer le lecteur modal.
3. **Photo de profil** — le hero affiche actuellement un avatar avec vos initiales.
   Remplacez le bloc `.avatar-placeholder` dans `hero.component.html` par une balise
   `<img>` pointant vers une photo dans `src/assets/`.
4. **GitHub des projets** — si certains projets académiques ont un dépôt public,
   ajoutez `githubUrl` / `demoUrl` dans chaque objet de `PROJECTS`.

Le CV fourni (`cv_alternance_fullstack.pdf`) a été copié dans `src/assets/cv/` et est
déjà relié aux boutons "Télécharger le CV" du hero et de la section contact.

## Notes techniques

- Angular 17, composants standalone (pas de NgModules).
- Thème sombre avec accents violet/turquoise, conforme au mockup fourni.
- Formulaire de contact : envoie un `mailto:` pré-rempli (aucun backend requis).
  Pour un vrai envoi serveur, branchez un service (EmailJS, Formspree, votre API...).
- Animations "reveal on scroll" via une directive `IntersectionObserver` maison,
  pas de dépendance externe.
- Aucune information n'a été inventée : tout le contenu vient strictement du CV fourni.
