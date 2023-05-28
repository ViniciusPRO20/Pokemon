import "./App.css";
import PokeList from "./components/PokeList";

function App() {
  return (
    <div className='App'>
      <h1>Pokémons</h1>
      <h2>Digite o id ou o nome do pokémon</h2>
      <br />
      <PokeList />
    </div>
  );
}

export default App;
