import './style.css'
import { getPokemonData } from './make-request';
window.getPokemonData = getPokemonData;
window.renderPokemon = renderPokemon

// log the response for dev

getPokemonData('pikachu')

async function renderPokemon(nameOrId) {
   const pokemon = await getPokemonData(nameOrId)
   const container = document.querySelector('#app')
  container.innerHTML = `
    <section id="center">
      <div class="hero">
        <img src="${pokemon.image}"alt="${pokemon.name}" class="w-50 h-50">
        <p class='text-center'>${pokemon.name}</p>
      </div>
    </section>
  `;
}

renderPokemon('charizard');
