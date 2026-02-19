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
            console.log("Recherche lancée pour :", searchQuery);
        }

        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

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

    // 1. On annule le chronomètre précédent (si l'utilisateur tape une nouvelle lettre)
    clearTimeout(debounceTimer);

    // 2. On lance un nouveau chronomètre de 500 millisecondes (0.5 seconde)
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
    gamesContainer.innerHTML = '';

    // Vérifier si aucun jeu n'a été trouvé
    if (!games || games.length === 0) {
        gamesContainer.innerHTML = '<p class="no-results">Aucun jeu n\'a été trouvé</p>';
        return;
    }

    games.forEach(game => {

        //Je crée un élément pour chaque jeu
        const gameCard = `<div class="game-card">
                <img src="${game.background_image}" alt="${game.name}" />
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <p>Note : ⭐ ${game.rating}/5</p>
                </div>
            </div>
        `;

        //J'ajoute chaque carte de jeu au conteneur
        gamesContainer.innerHTML += gameCard;
    })
};

fetchGames();

