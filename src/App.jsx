import { Card, Nav } from "./components";
import { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [repeatedPokemon, setRepeatedPokemon] = useState(false);

  return (
    <>
      <Nav score={score} bestScore={bestScore} />
      <Card />
    </>
  );
};

export default App;
