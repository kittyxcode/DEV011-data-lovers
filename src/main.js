import { renderItems } from "./view.js";
//import { allPokemonChargeScreen } from "./dataFunctions.js";


//toda la data
import data from "./data/pokemon/pokemon.js";
//capturar elemento dom
const ulElement= document.querySelector("#tarjetas");

const prueba= renderItems(data.pokemon);
console.log(prueba);
//console.log(ulElement);
//
ulElement.replaceWith(prueba);

//Manipulacion DOM


const buttonSearch = document.getElementById("buttonSearch");
const filtro = document.getElementById("filter-by");
filtro.addEventListener("change", (event) => {
    const tipoPokemon = event.target.value;
    const pokemonsFiltrados = data.pokemon.filter(pokemon => pokemon.type.includes(tipoPokemon));
    const ulElement= document.querySelector("#tarjetas");
    const prueba= renderItems(pokemonsFiltrados);
    ulElement.replaceWith(prueba);
});

