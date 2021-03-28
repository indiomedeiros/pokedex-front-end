import { useHistory } from "react-router-dom";
import {
  DivCard,
  PokeName,
  DivButtons,
  ButtonLeft,
  ButtonRight,
  PokeImage,
  ColorDiv
} from "./styledPokeCard";

export default function PokeCard(props) {
  const history = useHistory();

  return (
    <DivCard id={props.id}>
      <ColorDiv></ColorDiv>
      <PokeName>{props.name}</PokeName>
      <PokeImage src={props.img}></PokeImage>
      <DivButtons>
        {history.location.pathname === "/pokedex" ? (
          <ButtonLeft onClick={props.remove}>Remover</ButtonLeft>
        ) : (
          <ButtonLeft onClick={props.add}>adicionar</ButtonLeft>
        )}
        <ButtonRight onClick={props.details}>detalhes</ButtonRight>
      </DivButtons>
    </DivCard>
  );
}
