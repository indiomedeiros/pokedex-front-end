import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { GridContainer } from "./styledHomePage";
import { goToPageDetails } from "../../Coordination/coordination";

export default function Home() {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

  const addPokemon = (pokemon) => {
    const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    states.setPokedex([pokemon, ...states.pokedex]);
    states.setPokemonList(newListPokemon);
  };

  const getDetailsOfPokemon = (pokemon) => {
    states.setPokemonDetails(pokemon);
    goToPageDetails(history);
  };

  return (
    <GridContainer>
      {states.pokemonList &&
        states.pokemonList.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              add={() => {
                addPokemon(pokemon);
              }}
              details={() => {
                getDetailsOfPokemon(pokemon);
              }}
            />
          );
        })}
    </GridContainer>
  );
}
