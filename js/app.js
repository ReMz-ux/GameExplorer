import { apiKey } from './config.js';

//Utilisation de fetch pour récupérer les données de l'API
async function fetchGames(searchQuery = '') {
    // Afficher le loader
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');

    try {
        // Construction de l'URL avec ou sans recherche
        let apiURL = `https://api.rawg.io/api/games?key=${apiKey}`;

        if (searchQuery) {
            apiURL += `&search=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(apiURL);
        const data = await response.json();

        //J'affiche les jeux récupérés
        if (data.results) {
            displayGames(data.results);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    } finally {
        // Cacher le loader une fois les données reçues (ou en cas d'erreur)
        loader.classList.add('hidden');
    }
}

// On sélectionne la barre de recherche
const searchInput = document.getElementById('search-input');

// On déclare une variable pour stocker notre chronomètre (debounce)
let debounceTimer;

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();

    // On annule le chronomètre précédent (si l'utilisateur tape une nouvelle lettre)
    clearTimeout(debounceTimer);

    // On lance un nouveau chronomètre de 500 millisecondes (0.5 seconde)
    debounceTimer = setTimeout(() => {
        // Ce code ne s'exécutera que si l'utilisateur arrête de taper pendant 500ms
        if (query.length >= 3) {
            fetchGames(query);
        } else if (query.length === 0) {
            fetchGames(); // On recharge les jeux par défaut si le champ est vide
        }
    }, 500);
});

//On charge les jeux par défaut au démarrage
fetchGames();

function displayGames(games) {
    const gamesContainer = document.getElementById('games-container');

    //Je vide le conteneur avant d'afficher les nouveaux jeux
    gamesContainer.replaceChildren();

    // Vérifier si aucun jeu n'a été trouvé
    if (!games || games.length === 0) {
        const noResults = document.createElement('p');
        noResults.className = 'no-results';
        noResults.textContent = 'Aucun jeu n\'a été trouvé';
        gamesContainer.appendChild(noResults);
        return;
    }

    games.forEach(game => {
        //Je crée un élément pour chaque jeu
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';

        // Création de l'image
        const img = document.createElement('img');
        img.src = game.background_image || ''; // Protection contre les valeurs null
        img.alt = game.name || 'Jeu sans nom';
        gameCard.appendChild(img);

        // Création du conteneur d'infos
        const gameInfo = document.createElement('div');
        gameInfo.className = 'game-info';

        // Création du titre
        const title = document.createElement('h3');
        title.textContent = game.name || 'Jeu sans nom';
        gameInfo.appendChild(title);

        // Création de la note
        const rating = document.createElement('p');
        rating.textContent = `Note : ⭐ ${game.rating || 0}/5`;
        gameInfo.appendChild(rating);

        gameCard.appendChild(gameInfo);

        //J'ajoute chaque carte de jeu au conteneur
        gamesContainer.appendChild(gameCard);
    })
};

