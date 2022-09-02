import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Story from "./Story/index";
import Quiz from "./Quiz/index";
// import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {

  return (
    <div className="App">
      
<BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Story" element={<Story />} />
        <Route path="Quiz" element={<Quiz/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
      
     
    </div>
  );
}

export default App;
