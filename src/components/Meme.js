import React, { useState } from "react";
import './Meme.css';

export default function Meme({ meme }) {
  const [votes, setVotes] = useState({
    upvotes: meme.upvotes,
    downvotes: meme.downvotes,
  });

  const handleUpvote = () => {
    setVotes((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
  };

  const handleDownvote = () => {
    setVotes((prev) => ({ ...prev, downvotes: prev.downvotes + 1 }));
  };

  return (
    <div className="meme">
      <h3>{meme.title}</h3>
      <img src={meme.image} alt={meme.title} />
      <div>
        <button onClick={handleUpvote}>👍 {votes.upvotes}</button>
        <button onClick={handleDownvote}>👎 {votes.downvotes}</button>
      </div>
    </div>
  );
};

