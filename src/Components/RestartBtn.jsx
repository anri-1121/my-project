import logo from "../Helper/logo.png";
import "./RestartBtn.css";
import { useContext } from "react";
import { QuizContext } from "../Helper/Context";

const RestartBtn = () => {
  const { setGameState, setScore } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("menu");
    setScore(0);
  };
  return (
    <ul onClick={restartQuiz}>
      <li>
        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <img src={logo} />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default RestartBtn;
