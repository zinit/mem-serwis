import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { fetchMemes, fetchFavorites } from './api/memeApi';
import { setMemes, setFavourites } from './store/reducers/actions';
import { isHot, isFavourite } from './utils/memeFilters';
import MemeList from "./pages/MemeList";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  const memes = useSelector((state) => state.memes);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([fetchMemes(), fetchFavorites()])
      .then(([memesData, favouritesData]) => {
        dispatch(setMemes(memesData));
        dispatch(setFavourites(favouritesData));
      })
      .catch((err) => console.error('Failed to load data:', err));
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <h1>Meme Service</h1>
        <nav>
          <NavLink to="/">🏠 Home</NavLink> | 
          <NavLink to="/hot">🔥 Hot Memes</NavLink> | 
          <NavLink to="/regular">📋 Regular Memes</NavLink> | 
          <NavLink to="/favourite">❤️ Favourites</NavLink>
        </nav>
        <Routes>
          <Route path="/" 
            element={<HomePage memes={memes} />} 
          />
          <Route path="/hot" 
            element={<MemeList memes={memes.filter((meme) => isHot(meme))} />} 
          />
          <Route path="/regular" 
            element={<MemeList memes={memes.filter((meme) => !isHot(meme))} />} 
          />
          <Route path="/favourite"
            element={<MemeList memes={memes.filter((meme) => isFavourite(meme, favourites))} />}
          />
          <Route path="/*" 
            element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
