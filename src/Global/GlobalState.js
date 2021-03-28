import React, { useEffect, useState } from "react";
import axios from "axios";

import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const states = {
    pokemonList,
    setPokemonList,
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const listPokemon = [];

    for (let i = 1; i < 21; i++) {
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

          if (listPokemon.length === 20) {
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
