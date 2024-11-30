import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes } from './api/MemeApi';
import Meme from "./components/Meme";
import "./App.css";

function App() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMemes()
      .then((data) => dispatch({ type: "LOAD_MEMES", payload: data }))
      .catch((err) => console.error('Failed to fetch memes:', err));
  }, [dispatch]);

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
