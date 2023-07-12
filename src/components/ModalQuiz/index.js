import React from "react";
import "./index.css";

const ModalQuiz = ({ isOpen, onClose, questions, selectedAnswer, handleAnswerSelection }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <h4>{question.question}</h4>
            <ul className="options">
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={
                    question.selected !== null && question.selected === optionIndex
                      ? question.correctAnswer === optionIndex
                        ? "option correct"
                        : "option incorrect"
                      : "option"
                  }
                  onClick={() => handleAnswerSelection(index, optionIndex)}
                >
                  {option}
                  {question.selected !== null && question.selected === optionIndex && (
                    <span className="answer-status">
                      {question.correctAnswer === optionIndex ? "Correct" : "Incorrect"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalQuiz;