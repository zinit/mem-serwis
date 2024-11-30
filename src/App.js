import React, { useEffect, useState } from "react";
import Meme from "./components/Meme";
import { fetchMemes } from './api/MemeApi';
import "./App.css";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes()
      .then((data) => setMemes(data))
      .catch((err) => console.error('Failed to fetch memes:', err));
  }, []);

  return (
    <div className="container">
      <h1>Meme Service</h1>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export default App;
