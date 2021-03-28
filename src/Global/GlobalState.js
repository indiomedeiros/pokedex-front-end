import React, { useEffect, useState } from "react";
import axios from "axios";

import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [maxPokemons, setMaxPokemons] = useState(0);
  const states = {
    pokemonList,
    setPokemonList,
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    setMaxPokemons
  };

  useEffect(() => {
    getPokemons();
  }, [maxPokemons]);

  const getPokemons = () => {
    const listPokemon = [];
    let limitPokemons = 20 + maxPokemons;
    let offset = 21 + maxPokemons;
    let startPokemonCount = 1 + maxPokemons;

    for (let i = startPokemonCount; i < offset; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((response) => {
          listPokemon[i - 1] = {
            id: response.data.id,
            name: response.data.name,
            status: response.data.stats,
            moves: response.data.moves,
            types: response.data.types,
            sprites: response.data.sprites,
          };

          if (listPokemon.length === limitPokemons) {
            setPokemonList(listPokemon);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <GlobalStateContext.Provider value={states}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
export default GlobalState;
