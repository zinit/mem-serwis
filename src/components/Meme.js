import { useSelector, useDispatch } from "react-redux";
import { upvote, downvote, addToFavourites, removeFromFavourites } from "./../store/reducers/actions";
import { isFavourite } from './../utils/memeFilters';
import "./Meme.css";

export default function Meme({ meme }) {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const handleUpvote = () => {
    dispatch(upvote(meme.id));
  };

  const handleDownvote = () => {
    dispatch(downvote(meme.id));
  };

  const toggleFavourite = () => {
    if (isFavourite(meme, favourites)) {
      dispatch(removeFromFavourites(meme.id));
    } else {
      dispatch(addToFavourites(meme.id));
    }
  };

  return (
    <div className="meme">
      <h3>{meme.title}</h3>
      <div className="image-container">
        <img src={meme.image} alt={meme.title} />
        <button onClick={toggleFavourite} className={`heart-button ${isFavourite(meme, favourites) ? 'favourite' : ''}`}>
          <span>♥️</span>
        </button>
      </div>
      <div>
        <button onClick={handleUpvote}>👍 {meme.upvotes}</button>
        <button onClick={handleDownvote}>👎 {meme.downvotes}</button>
      </div>
    </div>
  );
}
