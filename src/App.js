import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ApodCard from "./ApodCard.js";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <ApodCard
        title={nasaData.title}
        date={nasaData.date}
        url={nasaData.hdurl}
        copyright={nasaData.copyright}
        explanation={nasaData.explanation}
      />
    </div>
  );
}

export default App;
