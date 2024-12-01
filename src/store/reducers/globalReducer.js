const initState = { 
  memes: [],
  favourites: [] 
};

export const memeVotesReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MEMES":
      return {
        ...state,
        memes: action.payload,
      };
    case "UPVOTE":
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? { ...meme, upvotes: meme.upvotes + 1 }
            : meme
        ),
      };
    case "DOWNVOTE":
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? { ...meme, downvotes: meme.downvotes + 1 }
            : meme
        ),
      };
    case "SET_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.payload),
      };  
    default:
      return state;
  }
};
