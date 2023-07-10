import "./index.css";
import React, { useState } from "react";
import Headerhq from "../components/Headerhq/index";
import CardsQuiz from "../components/CardsQuiz/index";

const Quiz = () => {
  const [input, setInput] = useState("");

  return (
    <div className="quizContainer">
       <Headerhq/>
      <h1>Découvrez nos différents quiz :</h1>
        <CardsQuiz />
    </div>
  );
};

export default Quiz;