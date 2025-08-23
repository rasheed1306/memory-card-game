import { Card, Nav } from "./components";
import { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [repeatedPokemon, setRepeatedPokemon] = useState(false);

  useEffect(() => {
    if (repeatedPokemon) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setRepeatedPokemon(false);
    }
  }, [score, repeatedPokemon]);

  return (
    <>
      <Nav score={score} bestScore={bestScore} />
      <Card
        score={score}
        setScore={setScore}
        setRepeatedPokemon={setRepeatedPokemon}
      />
    </>
  );
};

export default App;
