import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './NavBar'; 
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import TVPage from './TVPage';
import FavouritesList from './FavouritesList';
import { Movie } from './Api';

// Define your App component
const App: React.FC = () => {
  // Define state and function for fetching home movies
  const [homeMovies, setHomeMovies] = useState<Movie[]>([]);

  const fetchHomeMovies = () => {
    // Implement logic to fetch movies for the home page
    // For example:
    // fetchMovies('popular').then((data) => setHomeMovies(data));
  };

  const handleAddToFavorites = (movie: Movie) => {
    const currentFavorites = JSON.parse(localStorage.getItem('react-movie-app-favourites') || '[]') as Movie[];

    const isAlreadyFavorite = currentFavorites.some((favMovie) => favMovie.id === movie.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...currentFavorites, movie];
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(updatedFavorites));
    } else {
      console.log('Movie is already in favorites');
    }
  };

  return (
    <Router>
      <div>
        <NavBar onSelectList={fetchHomeMovies} onFetchHomeMovies={fetchHomeMovies} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Pass onAddToFavorites prop to the MoviePage component */}
          <Route path="/movies/:category" element={<MoviePage onAddToFavorites={handleAddToFavorites} />} />
          <Route path="/tv/:category" element={<TVPage onAddToFavorites={handleAddToFavorites} />} /> 
          <Route path="/favorites" element={<FavouritesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;