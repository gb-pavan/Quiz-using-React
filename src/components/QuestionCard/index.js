import './index.css'

const QuestionCard = ({ currentQuestion, questionArray, optionClicked, remainingTime, renderTimer }) => {


    return (
      <div className="question-card">
        <div className="side-by-side">
          <h2>
            Question: {currentQuestion + 1} out of {questionArray.length}
          </h2>
          <div className="timer">
            <h2>
              Time Remaining : {renderTimer()}
            </h2>
          </div>
        </div>
        <h3 className="question-text" >{questionArray[currentQuestion].text}</h3>
        <ul className="options">
          {questionArray[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  export default QuestionCard
  