import React, { useContext } from "react";
import PokeCard from "../../Components/PokeCard/PokeCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokedexContainer } from "./styledPokedexPage";
import { useHistory } from "react-router-dom";
import { goToPageDetails } from "../../Coordination/coordination";

export default function Pokedex() {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

  const removePokemon = (pokemon) => {
    const newListPokemon = states.pokedex.filter((poke) => {
      return poke !== pokemon;
    });
    states.setPokemonList([pokemon, ...states.pokemonList]);
    states.setPokedex(newListPokemon);
  };

  const getDetailsPokemon = (pokemon) => {
    states.setPokemonDetails(pokemon);
    goToPageDetails(history);
  };

  return (
    <PokedexContainer>
      {states.pokedex &&
        states.pokedex.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              remove={() => {
                removePokemon(pokemon);
              }}
              details={() => {
                getDetailsPokemon(pokemon);
              }}
            />
          );
        })}
    </PokedexContainer>
  );
}
