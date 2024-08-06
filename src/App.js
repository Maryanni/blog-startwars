import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from './store/context';
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Film from "./components/Film";
import Character from "./components/Character";
import Specie from "./components/Specie";
import Planet from "./components/Planet";
import Starship from "./components/Starship";
import Vehicle from "./components/Vehicle";
import FilmDetail from "./views/FilmDetail";
import CharacterDetail from "./views/CharacterDetail";
import PlanetDetail from "./views/PlanetDetail";
import SpecieDetail from "./views/SpecieDetail";
import StarshipDetail from "./views/StarshipDetail";
import VehicleDetail from "./views/VehicleDetail";

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/films" element={<Film />}/>
        <Route path="/characters" element={<Character />}/>
        <Route path="/species" element={<Specie />}/>
        <Route path="/planets" element={<Planet />}/>
        <Route path="/starships" element={<Starship />}/>
        <Route path="/vehicles" element={<Vehicle />}/>
        <Route path="/films/:uid" element={<FilmDetail />}/>
        <Route path="/characters/:uid" element={<CharacterDetail />}/>
        <Route path="/planets/:uid" element={<PlanetDetail />}/>
        <Route path="/species/:uid" element={<SpecieDetail />}/>
        <Route path="/starships/:uid" element={<StarshipDetail />}/>
        <Route path="/vehicles/:uid" element={<VehicleDetail />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);