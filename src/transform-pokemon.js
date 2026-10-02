export function transformPokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    backImage: pokemon.sprites.back_default,
    level: pokemon.base_experience,
    height: pokemon.height,
    order: pokemon.order
  };
}