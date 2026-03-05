import { useContext } from "react";
import Questions from "./questions";
import { QuizContext } from "../contexts/quizGlobalContext";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="quiz">
            {!quizState.showResults ?
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
                ) : (
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