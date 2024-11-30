const initState = { memes: [] };

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
    default:
      return state;
  }
};
