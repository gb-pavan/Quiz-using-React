import Header from "../Header";
import Quiz from "../Quiz";

const DisplayQuestions = props => {
    const {questionArray} = props
    return (
        <div>
            <Header />
            <Quiz questionArray={questionArray} />
        </div>
        
      );

}

export default DisplayQuestions