import { useContext } from "react";
import { Question } from "../Helper/QuestionBank";
import { QuizContext } from "../Helper/Context";
import RestartBtn from "./RestartBtn.jsx";

const EndScreen = () => {
  const { score, setScore, setGameState} = useContext(QuizContext);
  return (
    <div className="EndScreen">
      <h3 className="result" oncl>{score} / {Question.length}</h3>
      <RestartBtn />
    </div>
  );
};

export default EndScreen;
