import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { DivContainerImage, DivPokeImage } from "./styledDetails";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

export default function PokeImageDetails() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;
  return (
    <DivContainerImage>
      <DivPokeImage>
        {pokemon.sprites.front_default && (
          <Img src={pokemon.sprites.front_default} />
        )}
      </DivPokeImage>
      <DivPokeImage>
        {pokemon.sprites.back_default && (
          <Img src={pokemon.sprites.back_default} />
        )}
      </DivPokeImage>
    </DivContainerImage>
  );
}
