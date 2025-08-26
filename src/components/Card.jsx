import { useState, useEffect } from "react";

const Card = ({ score, setScore, setRepeatedPokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);

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

  useEffect(() => {
    if (score == 0) {
      setClickedPokemon([]);
    }
    if (score > 0) {
      setPokemons([...pokemons].sort(() => Math.random() - 0.5));
    }
  }, [score]);

  const handleClick = (pokemon) => {
    if (clickedPokemon.includes(pokemon)) {
      setRepeatedPokemon(true);
    } else {
      setClickedPokemon([...clickedPokemon, pokemon]);
      setScore(score + 1);
    }
  };

  return (
    <section
      className="flex flex-wrap my-6 gap-4 justify-center items-center"
      aria-label="Pokemon Cards"
    >
      {pokemons.map((pokemon) => (
        <article
          key={pokemon.id}
          onClick={() => handleClick(pokemon)}
          className="flex flex-col items-center justify-center px-2 mx-2 border-black border-3 rounded-xl hover:shadow-2xl hover:shadow-yellow-300 transition-shadow duration-300 cursor-pointer"
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
