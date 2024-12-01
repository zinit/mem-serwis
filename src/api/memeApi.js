export const fetchMemes = async () => {
  try {
    const response = await fetch("/data/memes.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching memes:", error);
    throw error;
  }
};

export const fetchFavorites = async () => {
  try {
    const response = await fetch('/data/favourites.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching favourites:', error);
    throw error;
  }
};