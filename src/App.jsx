// here we are importing the styled components to write the styles using it

import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

//Here first we are checking if the game has been started or not?
//If it is already started then send the user on the Gameplay page.
//If not started then then call the StartGame component and pass the prop toggle which will toggle the game play mode to start mode.
//The toggleGamePlay function has the role to change the state of the game from idol to start game ane already started game to closed state game.
//Now the question arises how to think in this way?

function App() {
  const [isGameStarted, setIsgameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsgameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay toggle={toggleGamePlay} />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
