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
  const [homeMovies, setHomeMovies] = useState<Movie[]>([]); // Declare state variable

  const fetchHomeMovies = async () => {
    try {

      const response = await fetch('/');
      
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      
      setHomeMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleAddToFavorites = (movie: Movie) => {
    const currentFavorites = JSON.parse(localStorage.getItem('react-movie-app-favourites') || '[]') as Movie[];
    console.log('Movie:', movie);
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
          <Route path="/movies/:category" element={<MoviePage onAddToFavorites={handleAddToFavorites} />} />
          <Route path="/tv/:category" element={<TVPage onAddToFavorites={handleAddToFavorites} />} /> 
          <Route path="/favorites" element={<FavouritesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;