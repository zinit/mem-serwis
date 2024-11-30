const initState = { memes: [] };

export const memeVotesReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_MEMES": {
      return { memes: action.payload };
    }
    default:
      return state;
  }
};
