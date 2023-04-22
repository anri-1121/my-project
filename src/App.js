import "./App.css";
import React, { useState, useContext } from "react";
import Mainmenu from "./Components/Mainmenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helper/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1 className="gameName">QuizGame</h1>
      <a href="/">
        <div className="Logo"></div>
      </a>
      <div className="Menu">
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
          {gameState === "menu" && <Mainmenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endscreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
