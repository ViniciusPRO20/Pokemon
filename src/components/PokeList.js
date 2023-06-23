import "./PokeList.css";
import { useState } from 'react';
import axios from 'axios';

function PokeSearch() {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="box">
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {pokemon && (
        <div className="pokemons">
          <h2>{pokemon.name}</h2>
          <ul className="pokemon">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </ul>
          <ul className='types'>
            {pokemon.types.map(type => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokeSearch;
