import PokeImageDetails from "../../Components/PokeDetalis/PokeImage";
import PokeMoves from "../../Components/PokeDetalis/PokeMoves";
import PokeStats from "../../Components/PokeDetalis/PokeStats";
import { DivMoves, PokeDetailsDiv } from "./StyledDetailsPage";
import PokeType from "../../Components/PokeDetalis/PokeType"


export default function PageDetails () {

    return (
        <PokeDetailsDiv>
            <PokeImageDetails/>
            <PokeStats/>
            <DivMoves>
                <PokeType/>
                <PokeMoves/>
            </DivMoves>
        </PokeDetailsDiv>
    )

}