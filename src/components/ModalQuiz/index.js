import React from "react";

const Modal=({
    isOpen, onClose, questions

})=> {
    return (<div className= {
            `modal ${isOpen ? "open" : ""}`
        }

        > <div className="modal-content" > <h1>Quiz</h1> <div className="quiz-questions" > {
            questions.map((question, index)=> (<div key= {
                        index
                    }

                    className="question" > <h3> {
                        question.question
                    }

                    </h3> <ul className="options" > {
                        question.options.map((option, optionIndex)=> (<li key= {
                                    optionIndex
                                }

                                > {
                                    option
                                }

                                </li>))
                    }

                    </ul> </div>))
        }

        </div> <button className="close-button" onClick= {
            onClose
        }

        > Close </button> </div> </div>);
}

;

export default Modal;