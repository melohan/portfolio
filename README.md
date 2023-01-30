# Portfolio

Le but de ce projet est de réaliser un portfolio animé dans le cadre du cours `AWA1`.
L'idée était de ne pas réaliser un portfolio static où le texte est directement définie dans des fichiers JSON.


## Table des matières

1. [Objectifs](#objectifs)
2. [Technologies](#technologies)
3. [Cloner le projet](#cloner-le-projet)
4. [Architecture du projet](#architecture-du-projet)
5. [Issues](#issues)
6. [Points d'améliorations](#points-daméliorations)

## Objectifs

- Réaliser un portfolio dont le contenu n'est pas défini dans fichier `JSON`.
- Prendre en main mon premier Framework JavaScript: `Vue.js`
- Approfondir une librairie étudiée en classe `GSAP`

## Technologies

| Version     | Description     |
|-------------|-----------------|
| Bootstrap 4 | Framework CSS   | 
| Vue.js 3    | Framework JS    | 
| GSAP 3      | Bibliothèque JS | 

Le template de ce projet est [ce bootstrap](https://bootstrapmade.com/laura-free-creative-bootstrap-theme/).

## Cloner le projet

### Prérequis

- npm @8.18.0

### Git Clone

```shell
git clone git@github.com:melohan/portfolio.git
cd portfolio
```

### Installation des dépendances

```shell
cd custom-portfolio/
npm i
```

### Run

```shell
npm run dev
```

## Architecture du projet

Le portfolio est une seule et même page séparée en différentes vues. Lorsque l’application est lancée, `App.vue` (le point d’entrée), récupère `Home.vue`, `About.vue`, `Resume.vue`, `Realization.vue` et `Skills.vue`.
Depuis App.vue, je définis une animation horizontale à l’aide de la méthode `gsap.to` basé sur ce [code](https://codepen.io/GreenSock/pen/YzygYvM).

L’idée, est qu’au scroll de la souris de l’utilisateur, l’on glisse sur la droite jusqu’à la prochaine section où est définie  ma vue.
Chaque vue est contenue dans un élément HTML qui prend la largeur et la hauteur de la page du navigateur. Une fois que la vue est bien au centre, sa propre timeline est lancée.
C’est ainsi que les animations sont enclanchées.

### Répertoire du projet 

```shell
├── public
│   └── favicon.ico
├── index.html
├── src
│   ├── App.vue
│   ├── assets                           # Contenu static
│   │   ├── data                         # Fichiers JSON de données par src/views/*.vue
│   │   │   ├── about.json
│   │   │   ├── home.json
│   │   │   ├── realization.json
│   │   │   ├── resume.json
│   │   │   └── skills.json
│   │   ├── img                          # Image du portfolio
│   │   │   ├── about.png
│   │   │   ├── github.png
│   │   │   ├── linkedin.png
│   │   │   ├── portrait.jpg
│   │   │   ├── portrait.webp
│   │   │   └── scroll.png
│   │   └── main.css                     # CSS du template Bootstrap
│   ├── components                       # Component utilisable par les autres vues
│   │   ├── CardBox.vue
│   │   └── ProgressBar.vue
│   ├── main.js                          # Définit le composant racine et charge les dépendances
│   └── views                            # Vue component de chaque section du portfolio
│       ├── About.vue
│       ├── Home.vue
│       ├── Realizations.vue
│       ├── Resume.vue
│       └── Skills.vue
└── vite.config.js                                   # Configuration de l'outil de build `vite`

```

## Issues

### Navigation horizontale
J’ai rencontré beaucoup de difficultés pour lancer les animations lorsque le scroll horizontal était mis en place. Il fallait que celles-ci se lancent uniquement lorsque la vue était centrée sur la page. Je n’ai malheureusement pas réussi à l’aide d’`observers` et de `watchers`.
J’ai opté pour un « patch » en utilisant `window.addEventListener`. Cela m’a obligé à définir mes timelines dans le `hook` : `onMounted`.

### Affichage
Je n’ai pas réussi à cacher la barre de scroll du navigateur sur tous les navigateurs. Cela fonctionne uniquement sur Firefox.

### Affichage Responsive
Ayant opté pour une navigation horizontale et un template Bootstrap, je n’ai pas réussi à rendre mon portfolio responsive.
Je n’avais pas envisagé cette problématique au moment de mon choix. L’expérience que j’ai acquise me fait désormais que j’aurai dû opter une animation verticale au scroll.

### Problèmes d’imports
J’ai rencontré des problèmes lorsque je tentais d’utiliser BootstrapVue, Bootstrap 5 et VueAnimJS. Je n’ai pas réussi à les résoudre à temps. Il y avait des problèmes de compatibilités.

## Points d'améliorations

- Mettre en place un menu de navigation ou indiquer la position de l’utilisateur. 
- Indiquer à l’utilisateur lorsqu’il arrive à la fin du portfolio en lui proposant de revenir en arrière.
- Rendre le portfolio responsive
- Relancer les animations lorsque l’utilisateur revient en arrière et/ou en ajouter lorsqu’il quitte une certaine vue.
