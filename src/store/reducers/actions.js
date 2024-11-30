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
