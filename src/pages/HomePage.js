import React from "react";
import Meme from "./../components/Meme";

export default function HomePage({ memes }) {
  const getRandomMeme = () => {
    if (memes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  };

  const randomMeme = getRandomMeme();

  return (
    <div>
      <h2>Welcome to Meme Service App!</h2>
      <p>Discover and vote for your favourite memes.</p>
      {randomMeme ? (
        <div>
          <h3>Random Meme</h3>
          <Meme meme={randomMeme} />
        </div>
      ) : (
        <p>No memes available yet.</p>
      )}
    </div>
  );
}
