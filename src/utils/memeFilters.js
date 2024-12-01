export const isHot = (meme) => {
  return meme.upvotes - meme.downvotes > 5;
};
