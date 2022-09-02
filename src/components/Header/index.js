import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    
    < div className="HeaderContainer">

  
    <div class="HPTitle">HARRY POTTER</div>
    <nav id="navbar">
          <ul class="barremenu">

            <Link className="buttonContainer" to="/">
              <li href="Home" class="button">Home</li>
            </Link>
            <Link className="buttonContainer" to="/Story">
              <li href="HPStory" class="button">Story</li>
            </Link>
            <Link className="buttonContainer" to="/Quiz">
              <li href="HPQuiz" class="button">Quiz</li>
            </Link>
            </ul>
          </nav> 
      <div class="text">Click below to discover more about your fav characters</div>
     
    </div>
  );
};

export default Header;