import { transformPokemon } from "./transform-pokemon";

export async function getPokemonData(pokemon) {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  try{
    const response = await fetch(`${BASE_URL}${pokemon}`)
    if (!response.ok) {throw new Error(`HTTP error: ${response.status}`)}
    let data = await response.json()
    let poke = transformPokemon(data)
    return poke
  } catch (error){console.log(error.message, ` Could not find ${pokemon} ` )}
}

