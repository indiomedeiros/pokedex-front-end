import React, { useContext } from "react";
import { HeaderDiv, Button, Titulo } from "./StyledHeader";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPageHome, goToPagePokedex } from "../../Coordination/coordination";

export default function Header() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;
  const history = useHistory();

  return (
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
      {history.location.pathname === "/" && <Titulo>Lista de Pokemons</Titulo>}
      {history.location.pathname === "/pokedex" && <Titulo>Pokedex</Titulo>}
      {history.location.pathname === "/details" && (
        <Titulo>{pokemon.name}</Titulo>
      )}
      {history.location.pathname === "/details" && (
        <Button onClick={() => goToPagePokedex(history)}>
          Ir para Pokedex
        </Button>
      )}
    </HeaderDiv>
  );
}
