import "./style.css";
import { renderPokemon } from "./pokemon-render";
window.renderPokemon = renderPokemon;

const allyInput = document.getElementById("ally-pokemon");
const allyBtn = document.getElementById("ally-btn");
const enemyInput = document.getElementById("enemy-pokemon");
const enemyBtn = document.getElementById("enemy-btn");

allyBtn.addEventListener("click", () => renderPokemon(allyInput.value, "ally"));
enemyBtn.addEventListener("click", () =>
  renderPokemon(enemyInput.value, "enemy"),
);

allyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    allyBtn.click();
  }
});
enemyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enemyBtn.click();
  }
});
renderPokemon("charmander", "enemy");
renderPokemon("pikachu", "ally");
