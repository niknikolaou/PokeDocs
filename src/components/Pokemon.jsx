import { Link } from "react-router-dom";
const Pokemon=({pokemon, load})=>{
return(
    <>
        {
            load ? <h1>Is loading..</h1>:
            pokemon.map((item)=>{
                return(
                    <div className="pokemon-list" key={item.id} >
                      <div className="pokemon">
                      <Link className="pokemon" to={`/pokemon/${item.id}`} > {item.id} {item.name} </Link> 
                      </div>
                    </div>
                )
            })
        }

        
    </>
)
}
export default Pokemon