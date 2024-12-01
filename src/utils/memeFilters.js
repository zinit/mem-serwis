export const isHot = (meme) => {
  return meme.upvotes - meme.downvotes > 5;
};

export const isFavourite = (meme, favourites) => {
  return favourites.includes(meme.id);
};
