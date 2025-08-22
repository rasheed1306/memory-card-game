import { useState, useEffect } from "react";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = () => {
      const pokemonArray = [];
      for (let i = 1; i <= 30; i++) {
        pokemonArray.push({
          id: i,
          src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
          alt: `pokemon-${i}`,
        });
      }
      setPokemons(pokemonArray);
    };
    fetchPokemons();
  }, []);

  return (
    <span className="flex flex-wrap gap-2">
      {pokemons.map((pokemon) => (
        <img src={pokemon.src} alt={pokemon.alt} key={pokemon.id} />
      ))}
    </span>
  );
};

export default Card;
