import Main from './pages/Main';
import PokemonInfo from './pages/PokemonInfo';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
                  <h1 className='header'>PokeDocs</h1>
     <Router >
      <div className='button-main' >
        <Link to="/" >Poke-List</Link>
      </div>

      <Routes>
        <Route path="/"element={<Main/>}>
        </Route>
        <Route path="/pokemon/:id"element={<PokemonInfo/>}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}


export default App;