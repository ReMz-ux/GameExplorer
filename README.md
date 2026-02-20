
## 📝 À propos du projet

Ce projet a été développé dans le but de consolider mes compétences en **JavaScript Natif (Vanilla JS)** et en intégration UI/UX moderne. L'objectif était de construire une application web complète consommant une API externe complexe (RAWG.io) sans utiliser le moindre framework (ni React, ni Vue).

Le design s'inspire de l'esthétique Cyberpunk/Synthwave, utilisant des effets de "Glassmorphism" et des animations CSS fluides pour offrir une expérience utilisateur (UX) immersive.

## ✨ Fonctionnalités Principales

* **Recherche en temps réel (Debounce) :** Le moteur de recherche attend que l'utilisateur ait fini de taper avant de lancer la requête API, optimisant ainsi les performances et la bande passante.
* **Consommation d'API REST :** Récupération dynamique des données (titres, notes, images) via l'API de RAWG.
* **Gestion des états Asynchrones :** Implémentation d'un loader dynamique pendant le chargement des requêtes et gestion des erreurs (ex: aucun jeu trouvé).
* **Interface Glassmorphism & Responsive :** Utilisation de CSS Grid, de filtres de flou (`backdrop-filter`) et d'un fond dynamique animé.

## 🛠️ Technologies Utilisées

* **HTML5** (Structure sémantique)
* **CSS3** (Variables CSS, Animations `@keyframes`, Flexbox & Grid)
* **JavaScript ES6+** (Vanilla JS, Async/Await, Arrow Functions, Fetch API)
* **API Externe :** [RAWG Video Games Database API](https://rawg.io/apidocs)

## 🧠 Ce que j'ai appris grâce à ce projet

Concevoir ce projet de zéro m'a permis de maîtriser les concepts fondamentaux du web moderne :

1. **La manipulation avancée du DOM :** Créer, injecter et vider des éléments HTML dynamiquement selon le cycle de vie de la donnée.
2. **L'Asynchrone (Promises & Async/Await) :** Comprendre le temps de réponse d'un serveur et adapter l'interface utilisateur en conséquence.
3. **L'optimisation des requêtes :** Coder une fonction de `debounce` en utilisant `setTimeout` et `clearTimeout` pour éviter le spam d'appels API.
4. **Le design system CSS :** Gérer des variables root pour maintenir une direction artistique cohérente (thème Néon).

## 🚀 Installation en local

Si vous souhaitez faire tourner ce projet sur votre machine :

1. Clonez ce dépôt :
   ```bash
   git clone [https://github.com/TON_NOM_UTILISATEUR/TON_REPO.git](https://github.com/TON_NOM_UTILISATEUR/TON_REPO.git)