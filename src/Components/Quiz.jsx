import React, { useState, useContext } from "react";
import { QuizContext } from "../Helper/Context";
import { Question } from "../Helper/QuestionBank";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [checkAns, setCheckAns] = useState(false);

  //კითხვების შეცვლის და ქულის მომატების ფუნქცია თუკი სწორი პასუხი გასცა
  const nextQuestion = () => {
    if (Question[currQuestion].answer == optionChosen) {
      setScore(score + 1);
      setCurrQuestion(currQuestion + 1);
    } else if (optionChosen.length < 1) {
      setCheckAns(!checkAns);
    }else {
      setCurrQuestion(currQuestion + 1);
    }
    setOptionChosen("");
  };

  //დასრულების ფუნქცია რომ ბოლო გვერდზე გადავიდეს
  const finishQuiz = () => {
    if (Question[currQuestion].answer == optionChosen) {
      setScore(score + 1);
      setGameState("endscreen"); 
    } else if (optionChosen.length < 1) {
      setCheckAns(!checkAns);
    } else {
      setGameState("endscreen"); 
    }
    setOptionChosen("");
  };

  return (
    <div className="gameplay">
      <h1 className="quizQuestion">{Question[currQuestion].prompt}</h1>
      <div className="options">
        <button className="optionAnswer" onClick={() => setOptionChosen("A")}>
          {Question[currQuestion].optionA}
        </button>
        <button className="optionAnswer" onClick={() => setOptionChosen("B")}>
          {Question[currQuestion].optionB}
        </button>
        <button className="optionAnswer" onClick={() => setOptionChosen("C")}>
          {Question[currQuestion].optionC}
        </button>
        <button className="optionAnswer" onClick={() => setOptionChosen("D")}>
          {Question[currQuestion].optionD}
        </button>
        {currQuestion == Question.length - 1 ? (
            <button className={checkAns ? "button-57 shakeBtn" : "button-57"} role="button" onClick={finishQuiz}><span className="text">Finish Quiz</span><span>Congratulate!</span></button>
        ) : (
            <button className={checkAns ? "button-57 shakeBtn" : "button-57"} role="button" onClick={nextQuestion}><span className="text">Next Question</span><span>Good Luck!</span></button>
        )
      }
      </div>
    </div>
  );
};

export default Quiz;
