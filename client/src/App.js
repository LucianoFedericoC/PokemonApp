import './App.css';
import { BrowserRouter, Route , Switch } from "react-router-dom";
import BootPage from "./Components/BootPage/BootPage";
import Pokemons from "./Components/Pokemons/Pokemons"
import Detalles from './Components/Detalles/Detalles';
import Creacion from './Components/Creacion/Creacion';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
     <Route exact path="/" component={BootPage} />
     <Route exact path="/pokemons" component={Pokemons} />
     <Route exact path="/pokemons/:id" component={Detalles}/>
     <Route path="/creacion" component={Creacion}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
