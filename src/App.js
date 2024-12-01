import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { fetchMemes } from './api/memeApi';
import { setMemes } from './store/reducers/actions';
import { isHot } from './utils/memeFilters';
import MemeList from "./pages/MemeList";
import "./App.css";

function App() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMemes()
      .then((data) => dispatch(setMemes(data)))
      .catch((err) => console.error('Failed to fetch memes:', err));
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <h1>Meme Service</h1>
        <nav>
          <NavLink to="/hot">Hot Memes</NavLink> | <NavLink to="/regular">Regular Memes</NavLink>
        </nav>
        <Routes>
          <Route path="/hot" 
            element={<MemeList memes={memes.filter((meme) => isHot(meme))} />} 
          />
          <Route path="/regular" 
            element={<MemeList memes={memes.filter((meme) => !isHot(meme))} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
