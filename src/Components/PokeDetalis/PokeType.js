import {DivType2} from './styledDetails'
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';


export default function PokeType () {
    const states = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails 
    
    return (
        <DivType2>
             {pokemon.types[0] && <p>{pokemon.types[0].type.name}</p>}
             {pokemon.types[1] && <p>{pokemon.types[1].type.name}</p>}
        </DivType2>
    )

}