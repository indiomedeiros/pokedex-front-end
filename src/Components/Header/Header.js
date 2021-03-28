import React, { useContext } from "react";
import { HeaderDiv, Div, Img,  Button, Title, Button2 } from "./StyledHeader";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToPageHome, goToPagePokedex } from "../../Coordination/coordination";
import logoPokemon from "../../assents/pokemon_logo.png"
export default function Header() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;
  const history = useHistory();

  return (
    <Div>
      <Img src = {logoPokemon}/>
    <HeaderDiv>
      {history.location.pathname === "/" && (
        <Button onClick={() => goToPagePokedex(history)}>
          Ir para Pokedex
        </Button>
      )}
      {history.location.pathname === "/pokedex" && (
        <Button onClick={() => goToPageHome(history)}>Voltar para lista</Button>
      )}
      {history.location.pathname === "/details" && (
        <Button onClick={history.goBack}>Voltar</Button>
      )}
      {history.location.pathname === "/" && <Title>Lista de Pokemons</Title>}
      {history.location.pathname === "/pokedex" && <Title>Pokedex</Title>}
      {history.location.pathname === "/details" && (
        <Title>{pokemon.name}</Title>
      )}
      {history.location.pathname === "/details" && (
        <Button2 onClick={() => goToPagePokedex(history)}>
          Ir para Pokedex
        </Button2>
      )}
    </HeaderDiv>
    </Div>
  );
}
