import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(next);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [next]);
  console.log(pokemon);

  return (
    <main>
      {pokemon.previous && (
      <button
        type="button"
        onClick={() => (pokemon.previous ? setNext(pokemon.previous) : null)}
      >
        Previous Page
      </button>
      )}
      <button type="button" onClick={() => setNext(pokemon.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
