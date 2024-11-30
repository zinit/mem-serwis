import { useDispatch } from "react-redux";
import { upvote, downvote } from "./../store/reducers/actions";
import "./Meme.css";

export default function Meme({ meme }) {
  const dispatch = useDispatch();

  const handleUpvote = () => {
    dispatch(upvote(meme.id));
  };

  const handleDownvote = () => {
    dispatch(downvote(meme.id));
  };

  return (
    <div className="meme">
      <h3>{meme.title}</h3>
      <img src={meme.image} alt={meme.title} />
      <div>
        <button onClick={handleUpvote}>👍 {meme.upvotes}</button>
        <button onClick={handleDownvote}>👎 {meme.downvotes}</button>
      </div>
    </div>
  );
}
