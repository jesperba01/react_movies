import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './NavBar'; 
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import TVPage from './TVPage';
import { Movie } from './Api';

const App: React.FC = () => {
  // Define state and function for fetching home movies
  const [homeMovies, setHomeMovies] = useState<Movie[]>([]);

  const fetchHomeMovies = () => {
    // Implement logic to fetch movies for the home page
    // For example:
    // fetchMovies('popular').then((data) => setHomeMovies(data));
  };

  return (
    <Router>
      <div>
        <NavBar onSelectList={fetchHomeMovies} onFetchHomeMovies={fetchHomeMovies} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:category" element={<MoviePage category="" />} />
          <Route path="/tv/:category" element={<TVPage category="" />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;