import React from 'react';
import Meme from "./../components/Meme";

export default function MemeList({ memes }) {
  if (memes.length === 0) {
    return <p>No memes to show!</p>;
  }

  return (
    <div>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  );
};