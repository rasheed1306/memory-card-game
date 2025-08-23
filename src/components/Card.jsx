import { useState, useEffect } from "react";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();

      const pokemonArray = [];
      for (let i = 0; i < 30; i++) {
        pokemonArray.push({
          id: data.results[i].name,
          src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`,
          alt: `pokemon-${data.results[i].name}`,
        });
      }
      setPokemons(pokemonArray);
    };
    fetchPokemons();
  }, []);

  return (
    <section
      className="flex flex-wrap my-6 gap-4 justify-center items-center"
      aria-label="Pokemon Cards"
    >
      {pokemons.map((pokemon) => (
        <article
          key={pokemon.id}
          className="flex-col items-center justify-center px-2 mx-2 border-black border-3 rounded-xl"
          aria-labelledby={`pokemon-title-${pokemon.id}`}
        >
          <img src={pokemon.src} alt={pokemon.alt} width={250} height={250} />
          <h2
            id={`pokemon-title-${pokemon.id}`}
            className="text-xl font-semibold mt-2 capitalize"
          >
            {pokemon.id}
          </h2>
        </article>
      ))}
    </section>
  );
};

export default Card;
