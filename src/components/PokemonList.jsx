import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pokemon from "./Pokemon";

const PokemonList=()=>{
    const [pokemonData,setPokemonData]= useState([])
    const [counter, setCounter] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')
    const [loading,setLoading] = useState(true);
    const[next,setNext]=useState();
    const[previous,setPrevious] = useState();

    const getPokemons = async() =>{
        const res = await axios.get(counter); // or use fetch method.
        setNext(res.data.next);
        setPrevious(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
      }

      const getPokemon= async(res) =>{
          res.map(async(pokemon)=>{
              const result = await axios.get(pokemon.url)
              setPokemonData(state=>{
                  state=[...state,result.data]
                  state.sort((a,b)=>a.id>b.id?1:-1)
                  return state;
              })
          })
      }


    useEffect(() =>{
        getPokemons()
      },[counter])
    return(
    <>
         <div className="App">
            <div>
                <Pokemon pokemon={pokemonData} load={loading}/>
                <div className='btn-menu'>
                        {previous&&<button onClick={()=>{setPokemonData([]); setCounter(previous)}}>Previous</button>}
                        {next&&<button onClick={()=>{setPokemonData([]); setCounter(next)}}>Next</button>}
                </div>
            </div>
        </div>
    </>
    )
}

export default PokemonList;