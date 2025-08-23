const Nav = ({ score, bestScore }) => {
  return (
    <div>
      <h1 className="text-red-500">Rasheed's memory game</h1>
      <h3>
        Get points by clicking on an image but don't click on any more than
        once!
      </h3>

      <div className="absolute top-10 right-25">
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Nav;
