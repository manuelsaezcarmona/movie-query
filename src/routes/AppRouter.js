import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favourites from '../components/Favourites/Favourites';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import DetailMovie from '../components/DetailMovie/DetailMovie';

export default function AppRouter() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favs" element={<Favourites />} />
          <Route path="/:movieid" element={<DetailMovie />} />
        </Routes>
      </Router>
    </div>
  );
}
