export const fetchMemes = async () => {
    try {
      const response = await fetch("/memes.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching memes:", error);
      throw error;
    }
  };
  