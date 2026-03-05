import React, { useContext } from 'react'
import Answers from './answers'
import { QuizContext } from '../contexts/quizGlobalContext';

const Questions = () => {
    const [quizState,dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log(quizState);
    return (
        <div>
            <div className='question'>
                {currentQuestion.question}
            </div>
            <div className='answers'>
                {quizState.answers.map((answer, index) => (
                    <Answers 
                    answerText = {answer} 
                    key={index} 
                    index={index}
                    currentAnswer={quizState.currentAnswer}
                    correctAnswer={currentQuestion.correctAnswer} 
                    onSelectAnswer={(answerText) => 
                        dispatch({type: "SELECT_ANSWER", payload: answerText})} />
                ))}
            </div>
        </div>
    )
}

export default Questions
