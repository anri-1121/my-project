import React, { useContext } from "react";
import { QuizContext } from "../Helper/Context";
import '../App.css';

const Mainmenu = () => {
  const { setGameState } = useContext(QuizContext);

  return (
      <button className="startBtn" onClick={() => setGameState("quiz")}>Start Play</button>
  );
};

export default Mainmenu;
