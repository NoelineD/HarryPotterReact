import React, { useState } from "react";
import ModalQuiz from "../ModalQuiz";
import "./index.css";

const CardsQuiz = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState([]);

  const cardsData = [
    {
      id: 1,
      title: "Main Characters Quiz",
      image: require("../assets/Harry.jpg"),
      questions: [
        {
          question: "Question 1 pour Main Characters Quiz",
          options: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
          correctAnswer: 0,
        },
        // Ajoutez les autres questions pour Main Characters Quiz ici
      ],
    },
    // Ajoutez les autres données de carte avec leurs questions respectives
    {
      id: 2,
      title: "Gryffindor Quiz",
      image: require("../assets/griff.jpg"),
      questions: [
        {
          question: "Question 1 pour Gryffindor Quiz",
          options: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
          correctAnswer: 0,
        },
        // Ajoutez les autres questions pour Main Characters Quiz ici
      ],
    },
    
    {
      id: 3,
      title: "Slytherin Quiz",
      image: require("../assets/slyth.jpeg"),
      questions: [
        {
          question: "Question 1 pour Slytherin Quiz",
          options: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
          correctAnswer: 0,
        },
        // Ajoutez les autres questions pour Main Characters Quiz ici
      ],
    },

    {
      id: 4,
      title: "Ravenclaw Quiz",
      image: require("../assets/raven.jpg"),
      questions: [
        {
          question: "Question 1 pour Ravenclaw Quiz",
          options: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
          correctAnswer: "Réponse 2",
        },
        // Ajoutez les autres questions pour Main Characters Quiz ici
      ],
    },
  ];

  const openModal = (questions) => {
    setActiveQuestions(questions);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveQuestions([]);
    setModalOpen(false);
  };

  return (
    <div className="cardQuizContainer">
      {cardsData.map((card) => (
        <div className="cardQuiz" key={card.id} onClick={() => openModal(card.questions)}>
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
      <ModalQuiz isOpen={isModalOpen} onClose={closeModal} questions={activeQuestions} />
    </div>
  );
};

export default CardsQuiz;