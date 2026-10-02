import { getPokemonData } from './make-request';
window.getPokemonData = getPokemonData;

export async function renderPokemon(nameOrId, position = 'enemy') {
      nameOrId = nameOrId.toLowerCase()
      const pokemon = await getPokemonData(nameOrId)
      if (!pokemon) return;
      const container = document.querySelector(`#${position}`)
      const pokeName = document.getElementById(`${position}-name`)
      let capName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1,100);
      let image;
      position == 'enemy'? image = pokemon.image: image = pokemon.backImage;
      pokeName.innerText = capName
      const level = document.querySelector(`#${position}-level`)
      if (level) level.textContent = String(pokemon.level).padStart(2, '0')
      container.innerHTML = `
            <div class="relative h-full w-full sm:h-36 sm:w-36">
                <img src="/src/assets/shadow.png" alt=""  style="--shadow-y: ${ 20 - ((pokemon.order%3)*5)}px; --shadow-x: ${100 + ((pokemon.order%3)*10)}%"
                    class="absolute bottom-0 translate-y-[var(--shadow-y)] object-contain left-1/2 h-30 w-[var(--shadow-x)] -translate-x-1/2 z-0">
                <img src="${image}" alt="${pokemon.name}"
                  class="relative h-full w-full object-contain [image-rendering:pixelated] z-10">
            </div>
      `; 
      document.getElementById(`${position}-pokemon`).value = `${capName}`
}