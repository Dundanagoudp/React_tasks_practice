import { useEffect, useState } from "react";
import { PokemonData } from "../api/PokemonApi";

export const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemon = async () => {
    try {
      const res = await PokemonData();
      const pokemonList = res.data.results;
      
      const detailedPokemonPromises = pokemonList.map(async (pokemon) => {
        const pokemonDetailRes = await fetch(pokemon.url);
        return pokemonDetailRes.json();
      });
      
      const detailedPokemonData = await Promise.all(detailedPokemonPromises);
      setPokemonData(detailedPokemonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Failed to fetch Pokémon data.');
      setLoading(false);
    }          
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-container">
      <h1>Pokémon Cards</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {loading && <p>Loading Pokémon data...</p>}
      {error && <p>{error}</p>}
      <div className="card-grid">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <img
              src={pokemon.sprites?.front_default || "placeholder_image_url"}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height || 'N/A'}</p>
            <p>Weight: {pokemon.weight || 'N/A'}</p>
            <p>Base Experience: {pokemon.base_experience || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
