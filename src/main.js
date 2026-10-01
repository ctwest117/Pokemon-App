import './style.css'

function http(endpoint, options = {}) {
  const BASE_URL = "https://pokeapi.co/api/v2/";
  return fetch(`BASEURL{endpoint}`, options)
    .then((result) => result.json())
    .then((data) => {
      const transformed = transformPokemon(data);
      // console.log(transformed);
      return transformed;
    })
    .catch((err) => {
      console.error(err);
    });
}

// log the response for dev

http("pokemon/pikachu").then((res) => {
  console.log({ res });
});

function transformPokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
  };
}

const app = document.querySelector("#app");

function renderPokemon() {
  app.innerHTML = `
    <section id="center">
      <div class="hero">
        <img src="pokemon.image"alt="{pokemon.name}" class="base" width="170" height="179">
        <p>${pokemon.name}</p>
      </div>
    </section>
  `;
}

renderPokemon();
