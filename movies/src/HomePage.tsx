import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { fetchMovies, Movie } from './Api';
import NavBar from './NavBar';

const HomePage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [showMovieLists, setShowMovieLists] = useState<boolean>(true); // State variable to control visibility

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const movies = await fetchMovies('popular');
      setPopularMovies(movies);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const movies = await fetchMovies('toprated');
      setTopRatedMovies(movies);
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
    }
  };

  return (
    <div>
      {showMovieLists && ( // Render movie lists only if showMovieLists is true
        <div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Popular</h2>
            <MovieList movies={popularMovies} isHomePage />
          </div>
          <div>
            <h2>Top Rated</h2>
            <MovieList movies={topRatedMovies} isHomePage />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;