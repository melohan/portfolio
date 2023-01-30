# Portfolio

Le but de mon projet est de mettre en place un portfolio dont le contenu n'est pas static et qui est animé par une librairie JavaScript.

Les objectifs de ce cours étaient:

1. Concevoir et réaliser une application web.
2. Approfondire mes connaissances dans les librairies déjà étudiées.
3. Expliquer le fonctionnement de la librairie choisie à travers mon projet.

## Table des matières
1. [Détails des objectifs](#détails-des-objectifs)
2. [Technologies](#technologies)
3. [Cloner le projet](#cloner-le-projet)
4. [Description de Vue.js](#description-de-vuejs)
5. [Description de GSAP](#description-de-gsap)
6. [Architecture de mon projet](#architecture-de-mon-projet)
7. [Issues](#issues)
8. [Points d'amélioration](#points-damélioration)


## Détails des objectifs

Pour ce projet le détails de mes objectifs sont les suivants:
- Réaliser un portfolio dont le contenu n'est pas définit en dur dans le code `HTML` mais dans un fichier `JSON`.
- Prendre en main mon premier Framework JavaScript: `Vue.js`
- Approfondir une librairie étudiée en classe `GSAP`

## Technologies

| Version     | Description   |
|-------------|---------------|
| Bootstrap 4 | Framework CSS | 
| Vue.js 3    | Framework JS  | 
| GSAP 3      | Librairie JS  | 

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

## Description de Vue.js

Vue.js est un framework Javascript permettant de réaliser des interfaces utilisateurs et des applications "monopages".
Via `Vue`, il est possible de réaliser des applications web interactive.

### Architecture
Son architecture est de type MVVM (Model-View-View-Model). Cela signifie qu'il sépare ces différents éléments de la manière suivante:
Model: données d'application
Vue  : interface utilisateur
ViewModel: règles de présentations des données.

Dans ce type d'architecture, le `ViewModel` fait office de liaison entre le `Modele` et la `Vue`, ce qui sous-entends qu'il fournit des propriétés pour relier les données du modèle à l'interface de l'utilisateur.
Le bénéfice de cette architecture se trouve dans la séparation des responsabilités ente les différentes parties de l'application.
Cela facilite la maintenant.

Les méchanismes que j'ai observé sont les suivants:
- les directives: pour lier le modèle à la vue (v-bind, v-on, v-model)
- les watchers  : pour pouvoir faire des modifications en réponse à des modifications.
- les événements: hooks, mounted, updated, v-on, @click etc...

### Méchanismes
Voici les principales étapes lorsque l'applicaton Vue.Js est chargée:
1. Le navigateur charge le fichier `./index.html` avec ses références au `CSS` et au `JS` (y compris  le fichier `main.js`).
2. Puis il exécute le code de `./src/main.js` qui comporte les dépendances et qui définit le **composant racine** `./src/App.vue`
3. Cette dernière instancie ses composants enfants pour construire l'interface utilisateur.
4. Elle lies les modèles à la vue
5. Le navigateur affiche l'interface finale construite.

## Description de GSAP
GSAP (GreenSock ANimation Plateform) est une librairie JavaScript spécialisé dans les animations. Il est notamment très flexible pour animer l'HTML, le CSS et le SVG.

Il permet notamment de déplacer et de transformer des éléments `HTML`, `CSS`, `SVG`.
Au cours de ce projet j'ai particulièrement manipulé les tailles, les couleurs, les positions, les opacités et les décalages temporels.


## Architecture de mon projet

L'interface générée par mon projet est une seule et même page sans navigation ou routes.
Mes données sont chargées depuis les `assets`, au format `JSON` et sont directement parcourues dans les `views`.
J'ai définit deux composants (`components`) une pour les barres de niveau appelé `ProgressBar.Vue` et l'autre pour des
bloques de `box`. Initialement je souhaitais les réutiliser à plusieurs endroits.

### Fonctionnement
Le point d'entrée de l'application `./src/App.vue` récupère toutes les vues dans `./src/views/*.Vue`.
Il définit via `GSAP` la navigation `horizontale` et le `style` propre à cette implémentation.
Celles-ci attendent d'être centrée sur l'affichage du navigateur avant de lancer leurs propres animations sur leur propre `Timeline`.


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

Je n'ai pas implémenté de `timeline GSAP` principale que j'aurai pu passer à chaque `.Vue` du projet.
J'ai essayé de mettre en place des `observers`, des `watchers` mais le challenge était le suivant:
Lorsque la `section` de la vue `courante` était centrée sur la page, il fallait lancer une seule fois les animations de la page.
Dans l'idée d'appliquer un "patch temporaire" à ce problème j'ai utilisé `window.addEventListener('scroll', () => {...}` dans `onMounted`.

### Compatibilité entre les navigateurs
Je souhaitais gérer les barres de scroll pour ne pas induire en erreur l'utilisateur mais cela ne fonctionne que sur `FireFox`.
De la même manière, pour que le Scroll horizontale puisse se faire, j'ai définit un `style` propre aux applications `desktop`.
Comme l'enclanchement des animations se base aussi sur la position horizontale, il m'était impossible de rendre le site `responsive`.
Tout du moins, dans les temps.

Je n'avais pas envisagé ces problèmes, à refaire je prendrais une navigation verticale.
De la même manière, j'étais limitée par le template Bootstrap choisie car il me fallait le surcharger pour assumer le côté responsive.

### Méchanisme du component ProgressBar
Il n'est malheureusement pas indépendant du méchanisme de Scroll. 
Pour que le chargement de ces barres se fasse correctement, il a fallu que j'injecte les valeurs du JSON au moment où les ProgressBar sont centrées.

### Problème d'imports

J'ai rencontré des problèmes lorsque je tentais d'utiliser `BootstrapVue`, `Bootstrap 5`, `VueAnimJs`.

## Points d'amélioration

- Menu de navigation
- Information de Scroll de fin
- Site responsive
