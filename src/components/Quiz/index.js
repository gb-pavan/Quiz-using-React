import { useState,useEffect} from "react";
import FinalResults from '../FinalResults'
import QuestionCard from '../QuestionCard'
import './index.css'

const Quiz = ({ questionArray }) => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [remainingTime, setRemainingTime] = useState(10);
  
    
  
    useEffect(() => {
      if (remainingTime > 0) {
        const intervalId = setInterval(() => {
          setRemainingTime((time) => time - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      } else {
        optionClicked(false);
      }
    }, [remainingTime]);
  
    const optionClicked = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questionArray.length) {
        setCurrentQuestion(currentQuestion + 1);
        setRemainingTime(10);
      } else {
        setShowResults(true);
      }
    };
  
    const renderTimer = () => {
      return <div className="timer">{remainingTime}</div>;
    };
  
    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
    };
  
    
  
    return (
      <div className="container">
        {showResults ? (
          <FinalResults score={score} questionArray={questionArray} restartGame={restartGame} />
        ) : (
          <QuestionCard
            currentQuestion={currentQuestion}
            questionArray={questionArray}
            optionClicked={optionClicked}
            remainingTime={remainingTime}
            renderTimer={renderTimer}
          />
        )}
      </div>
    );
  };


  export default Quiz
  