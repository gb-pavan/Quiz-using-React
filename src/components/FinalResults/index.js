import './index.css'

const FinalResults = ({ score, questionArray, restartGame }) => {
    return (
      <div className="final-results">
        <h1>Final Results</h1>
        <h2>
          {score} out of {questionArray.length} correct - (
          {(score / questionArray.length) * 100}%)
        </h2>
        <button onClick={() => restartGame()}>Restart game</button>
      </div>
    );
  };

export default FinalResults
  