import React from 'react'

const Answers = ({answerText, onSelectAnswer, index, currentAnswer, correctAnswer}) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongANswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongANswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';
    return (
    <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={()=>onSelectAnswer(answerText)}>
    <div className='answer-letter'>{letterMapping[index]}</div>
      <div className='answer-text'>
        {answerText}
      </div>
    </div>
  )
}

export default Answers
