import React from "react";
import "./home.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
// import Footer from "./components/Footer";
import Form from "./components/Form";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
  
    useEffect(() => {

  const fetchData = async () => {
  const response = await axios.get(
    "https://hp-api.onrender.com/api/characters"
  );

    const modifiedData = response.data.slice(0, 30).filter((el) => {
      return el.name.includes(search);
    });
    setData(modifiedData);
};

fetchData();

    }, [search]);

  return (
    
    <div id="HomeContainer">
      <Header/>
      <Hero/>
      <span> <div id="Type">Type a Character's Name here  :</div> 
        <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      /> </span>
      {data !== null ? <Characters data={data} /> : null}
      <Form/>
      
  <div></div>
    
    </div>
  );
};

export default Home;