import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const PokemonInfo=()=>{
    const { id } = useParams();
    return(
        <>
            <PokemonCard id={id}/>
        </>
    )
}

export default PokemonInfo