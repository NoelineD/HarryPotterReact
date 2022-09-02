import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


const Headerhq = () => {


  return (
    
    < div className="HeaderContainer">

  
    <div class="HPTitle">HARRY POTTER</div>
    <nav id="navbar">
          <ul class="barremenu">

            <Link className="buttonContainer" to="/">
              <li href="Home" class="button">Home</li>
            </Link>
            <Link className="buttonContainer" to="/Story">
              <li href="Story" class="button">Story</li>
            </Link>
            <Link className="buttonContainer" to="/Quiz">
              <li href="HPQuiz" class="button">Quiz</li>
            </Link>
            </ul>
          </nav> 
      {/* <div class="text">Click below to discover more about Hogwarts History</div> */}
     
    </div>
  );
};

export default Headerhq;