import { describe, it, expect, vi } from "vitest";
import { getPokemonData } from "./make-request";

describe("getPokemonData", () => {
  it("calls fetch with correct URL", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        },
        base_experience: 64,
        height: 7,
        order: 1,
      }),
    });
    const pokemon = await getPokemonData(1);
    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1");
    expect(pokemon.name).toBe("bulbasaur");
  });
});
