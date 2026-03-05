import { useContext, useEffect } from "react";
import Questions from "./questions";
import { QuizContext } from "../contexts/quizGlobalContext";
import data from "../data";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986';
    useEffect(() => {
        if(quizState.questions.length > 0 || quizState.error){
            return;
        }
        console.log('On initialize');
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data);
            dispatch({type: 'LOADED_QUESTIONS', payload: data.results});
        })
        .catch((err) => {
            console.log('err', err.message);
            dispatch({type: "SERVER_ERROR", payload:err.message})
        })
        
    })
    return (
        <div className="quiz">
            {quizState.error && (
                <div className="results">
                <div className="congratulations">Server Error</div>
                <div className="results-info">
                    {quizState.error}
                </div> 
                </div>                        
               
            )}
            {!quizState.showResults && quizState.questions.length > 0 &&
                (
                    <div>
                        <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                        <Questions />
                        <div
                            className="next-button"
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                        >
                            Next question
                        </div>
                    </div>
                )}
            {quizState.showResults && (
                    <div className="results">
                        <div className="congratulations">Congratulations</div>
                        <div className="results-info">
                            <div>You have completed the Quiz.</div>
                            <div>You've got {quizState.correctAnswersCount} of {""}{quizState.questions.length}</div>
                        </div>
                        <div className="next-button"
                            onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                    </div>
                )}
        </div>
    );
};

export default Quiz;