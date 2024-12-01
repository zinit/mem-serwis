export const setMemes = (memes) => ({
  type: "SET_MEMES",
  payload: memes,
});

export const upvote = (id) => ({
  type: "UPVOTE",
  payload: id,
});

export const downvote = (id) => ({
  type: "DOWNVOTE",
  payload: id,
});

export const setFavourites = (memes) => ({
  type: "SET_FAVOURITES",
  payload: memes,
});

export const addToFavourites = (id) => ({
  type: "ADD_TO_FAVOURITES",
  payload: id,
});

export const removeFromFavourites = (id) => ({
  type: "REMOVE_FROM_FAVOURITES",
  payload: id,
});
