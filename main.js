const url = 'https://pokeapi.co/api/v2/pokemon/';

let inputSearch = document.querySelector('.input-search'),
      btnSearch = document.querySelector('.btn-search'),
      container = document.querySelector('.pokemon-container');

let pokemon, namePokemon, card;

async function getPokemonData(name) {
    await fetch(url + name)
    .then(response => response.json())
    .then(data => {
        pokemon = data;
    })
    .catch(err => console.log(err));
}

function createPokemonCard() {
    card = `<div class="pokemon-image">
                <image src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-info">
                <h1 class="pokemon-name">Name: ${pokemon.name}</h1>
                <h2 class="pokemon-number">Number: ${pokemon.id}</h2>
                <h3 class="pokemon-type"> Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
                <h3 class="pokemon-weight">Weight: ${pokemon.weight / 10}kg</h3>
                <h3 class="pokemon-height">Height: ${pokemon.height / 10}m</h3>
            </div>`;
    
    return card;
}

function searchPokemon(name) {
    getPokemonData(name);

    setTimeout(function() {
        container.innerHTML = createPokemonCard();
    },2000);
}

btnSearch.addEventListener('click', event => {
    event.preventDefault();
    namePokemon = inputSearch.value.toLowerCase();
    searchPokemon(namePokemon);
})