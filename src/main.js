import { renderItems } from "./view.js";
import { filterData, computeStats } from "./dataFunctions.js";
import { ordenBy } from "./dataFunctions.js";

//import { allPokemonChargeScreen } from "./dataFunctions.js";

//toda la data
import data from "./data/pokemon/pokemon.js";
//capturar elemento dom
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const ordenByController= document.querySelector("#select-sort");



let pokemones = data.pokemon;

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

const ulElement = document.querySelector("#tarjetas");

const prueba = renderItems(pokemones);
console.log(prueba);


ulElement.replaceWith(prueba);


const filtro = document.getElementById("filter-by");
const btnOrden= document.getElementById("elect-sort");


filtro.addEventListener("change", (event) => {
  const tipoPokemon = event.target.value;
  pokemones = filterData(data.pokemon, tipoPokemon);

  const pokemonOrdenados= ordenBy(pokemones, ordenByController.value);
  console.log(ordenByController.value);


  const ulElement = document.querySelector("#tarjetas");
  const prueba = renderItems(pokemones);
  ulElement.replaceWith(prueba);
  const totalPokemones = computeStats(pokemones);
  console.log(totalPokemones);
  const totalPokemonesNum = document.getElementById("count-pokemon");
  totalPokemonesNum.textContent = `Pokemones: ${totalPokemones}`;
 
});


//function LoadAllPokemons(){}

//renderItems(data);

//Manipulacion DOM

//const selectControll = document.getElementById("select-sort");
//const radioButtons = document.querySelectorAll('input[name="sort-order"]');
//const textarea = document.getElementById("textarea");
//const buttonSearch = document.getElementById("buttonSearch");

//Manejo de Eventos




