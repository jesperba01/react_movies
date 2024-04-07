import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { fetchMovies, Movie } from './Api';

const HomePage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularTVMovies, setPopularTVMovies] = useState<Movie[]>([]);
  const [topRatedTVMovies, setTopRatedTVMovies] = useState<Movie[]>([]);
  const [showMovieLists, setShowMovieLists] = useState<boolean>(true);

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchPopularTVMovies();
    fetchTopRatedTVMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const movies = await fetchMovies('popular', 5);
      setPopularMovies(movies);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const movies = await fetchMovies('toprated', 5);
      setTopRatedMovies(movies);
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
    }
  };

  const fetchPopularTVMovies = async () => {
    try {
      const movies = await fetchMovies('popular_tv', 5);
      setPopularTVMovies(movies);
    } catch (error) {
      console.error('Error fetching popular TV shows:', error);
    }
  };

  const fetchTopRatedTVMovies = async () => {
    try {
      const movies = await fetchMovies('toprated_tv', 5);
      setTopRatedTVMovies(movies);
    } catch (error) {
      console.error('Error fetching top rated TV shows:', error);
    }
  };

  return (
    <div className="container">
      {showMovieLists && (
        <div className="">
          <div className="">
            <h2>Popular Movies</h2>
            <MovieList movies={popularMovies} isHomePage />
          </div>
          <div className="">
            <h2>Top Rated Movies</h2>
            <MovieList movies={topRatedMovies} isHomePage />
          </div>
          <div className="">
            <h2>Popular TV Shows</h2>
            <MovieList movies={popularTVMovies} isHomePage />
          </div>
          <div className="">
            <h2>Top Rated TV Shows</h2>
            <MovieList movies={topRatedTVMovies} isHomePage />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;