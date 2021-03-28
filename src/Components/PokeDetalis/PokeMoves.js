import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { DivType } from "./styledDetails";

export default function PokeMoves() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;
  return (
    <DivType>
      <h1>Moves</h1>
      {pokemon.moves[0] && <p>{pokemon.moves[0].move.name}</p>}
      {pokemon.moves[1] && <p>{pokemon.moves[1].move.name}</p>}
      {pokemon.moves[2] && <p>{pokemon.moves[2].move.name}</p>}
    </DivType>
  );
}
