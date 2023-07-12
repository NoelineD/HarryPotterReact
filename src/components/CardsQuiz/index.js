import React, { useState } from "react";
import ModalQuiz from "../ModalQuiz";
import "./index.css";

const CardsQuiz = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: "Movie Quiz",
      image: require("../assets/Harry.jpg"),
      questions: [

         {
          question: "Dans le film, dans quel ordre les trois héros se présentent au Choixpeau lors de la cérémonie de répartition ?",
          options: ["Ron,Hermione,Harry", "Hermione,Ron,Harry", "Ron,Harry,Hermione", "Hermione,Harry,Ron"],
          correctAnswer: 1,
          selected: null,
        },
        
        {
          question: ["Pour quelle raison Hermione parle-t-elle pour la première fois à Harry et Ron dans Harry Potter à l'école des sorciers ?"],
          options: ["Elle a vu Ron faire de la magie", "Elle dit a Ron qu'il a une tache sur le nez", "Elle cherche le crapaud de Neville", "Elle a envie de gouter l'une de leurs friandises"],
          correctAnswer: 2,
          selected: null,
        },
          {
          question: ["Dans Harry Potter et la Chambre des secrets, où Hermione retrouve-t-elle Harry et Ron au début du film ?"],
          options: ["A Poudlard", "A King's Cross", "Chez les weasley", "Au chemin de traverse"],
          correctAnswer: 3,
          selected: null,
        },
        {
          question: ["Dans Harry Potter et la Coupe de feu, quel être cher Harry doit-il récupérer dans Le Lac Noir ? ?"],
          options: ["Ron", "Hermione", "Ginny", "Dobby"],
          correctAnswer: 0,
          selected: null,
        },
        {
          question: ["Dans Harry Potter et l'Ordre du Phénix, quels élèves accompagnent Harry, Ron et Hermione quand ils se rendent au Ministère de la Magie pour tenter de sauver Sirius?"],
          options: ["Neville,Luna,Ginny", "Fred,George,Luna,Ginny", "Luna,Ginny,Fred,George,Neville,Nigel", "Neville,Ginny,Seamus,Fred,George"],
          correctAnswer: 0,
          selected: null,
        },
        // Add other questions for Main Characters Quiz here
      ],
    },
    // Add other card data with their respective questions
    {
      id: 2,
      title: "Gryffindor Quiz",
      image: require("../assets/griff.jpg"),
      questions: [
        {
          question: "Comment rentre-t-on dans la salle commune de Gryffondor ?",
          options: ["Il faut résoudre une énigme", "En donnant un mot de passe", "Il faut résoudre un enchantement", "En récitant la recette d'une potion"],
          correctAnswer: 1,
          selected: null,
        },
        {
          question: "Lequel de ces mots de passe n'a jamais été utilisé pour entrer dans la salle commune ?",
          options: ["Caput Draconis", "Fortuna Major", "Patatas Fritas", "Sorbet Citron"],
          correctAnswer: 2,
          selected: null,
        },
        {
          question: "Quelles qualités faut-il posséder pour être un Gryffondor ?",
          options: ["Courage,hardiesse,force et détermination", "Intelligence,sagesse et curiosité", "Fierté,ambition,grandeur et noblesse", "Loyauté,Persévérance,Sincérité et tolérance"],
          correctAnswer: 0,
          selected: null,
        },
        {
          question: "Lequel de ces personnages n'a jamais été élève de la maison Gryffondor ? ?",
          options: ["Sirius Black", "Minerva Mcgonagall", "Peter Pettigrow", "Sybille Trelawnay"],
          correctAnswer: 3,
          selected: null,
        },
      ],
    },

    {
      id: 3,
      title: "Slytherin Quiz",
      image: require("../assets/slyth.jpeg"),
      questions: [
        {
          question: "Lequel de ces personnages n'a jamais été élève de la maison Serpentard ?",
          options: ["Pansy Parkinson", "Katie Bell", "Vincent Crabbe", "Millicent Bulstrode"],
          correctAnswer: 1,
          selected: null,
        },
        {
          question: "Qui est le fantôme de la maison Serpentard ?",
          options: ["Le Baron Sanglant", "Le moine Gras", "Le Chevalier Noire", "Edmond Graille"],
          correctAnswer: 0,
          selected: null,
        },
        {
          question: " Où se trouve la salle commune de Serpentard ??",
          options: ["Au 10ème étage", "Au rez-de-chaussée de Poudlard", "Au sous-sol de Poudlard", "Au 6ème étage"],
          correctAnswer: 2,
          selected: null,
        },
        {
          question: "  Lequel de ces professeur n'a jamais été affilié à Serpentard ?",
          options: ["Professeur Quirell", "Horace Slughorn", "Dolores Ombrage", "Severus Rogue"],
          correctAnswer: 0,
          selected: null,
        },
         {
          question: "Quelle créature marine peut-on apercevoir passer derrière les fenêtres de la salle commune de Serpentard ?",
          options: ["Un Calamar géant", "Une pieuvre noire", "Une sirène doré", "Un serpent argentée"],
          correctAnswer: 0,
          selected: null,
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
          selected: null,
        },
        // Ajoutez les autres questions pour Main Characters Quiz ici
      ],
    },
  ];

  const openModal = (questions) => {
    questions.forEach((question) => {
      question.selected = null;
    });
    setActiveQuestions(questions);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveQuestions([]);
    setModalOpen(false);
  };

const handleAnswerSelection = (questionIndex, answerIndex) => {
  const updatedQuestions = [...activeQuestions];
  updatedQuestions[questionIndex].selected = answerIndex;
  setActiveQuestions(updatedQuestions);
  setSelectedAnswer(answerIndex);
};

  return (
    <div className="cardQuizContainer">
      {cardsData.map((card) => (
        <div className="cardQuiz" key={card.id} onClick={() => openModal(card.questions)}>
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
      <ModalQuiz
        isOpen={isModalOpen}
        onClose={closeModal}
        questions={activeQuestions}
        selectedAnswer={selectedAnswer}
        handleAnswerSelection={handleAnswerSelection}
      />
    </div>
  );
};

export default CardsQuiz;