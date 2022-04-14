import React, { useState } from 'react';
import axios from "axios";

let pokeapi = 'https://pokeapi.co/api/v2/pokemon/';
let pokemon = new Object;


const PokemonCard=({id})=>{
    const [loading,setLoading] = useState(true);
    const getPokemon= async() =>{

        const result = await axios.get(pokeapi+id)
        pokemon = await result.data;
        setLoading(false)
    }

    getPokemon();
    
return(
    <>
    {
        loading ? <h1>Is loading..</h1>:
        <div>
        <h1 className='header'>Name: {pokemon.name}</h1>
        <h1 className='header'>Hp: {pokemon.stats[0].base_stat} </h1>
        <h1 className='header'>Defense: {pokemon.stats[2].base_stat} </h1>
        <h1 className='header'>Attack: {pokemon.stats[1].base_stat} </h1>
        <img className='img' src={pokemon.sprites.front_default} alt=""/>
        </div>
        
    }
    </>
)
}
export default PokemonCard