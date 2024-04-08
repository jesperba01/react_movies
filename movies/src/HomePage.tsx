import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { fetchMovies, Movie } from './Api';

const HomePage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularTVMovies, setPopularTVMovies] = useState<Movie[]>([]);
  const [topRatedTVMovies, setTopRatedTVMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [airingTodayShows, setAiringTodayShows] = useState<Movie[]>([]);
  const [showMovieLists, setShowMovieLists] = useState<boolean>(true);

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchPopularTVMovies();
    fetchTopRatedTVMovies();
    fetchUpcomingMovies();
    fetchAiringTodayShows();
  }, []);

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

  const fetchUpcomingMovies = async () => {
    try {
      const movies = await fetchMovies('upcoming', 5); // Fetch upcoming movies
      setUpcomingMovies(movies); // Set upcoming movies state
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  const fetchAiringTodayShows = async () => {
    try {
      const shows = await fetchMovies('airingToday', 5); // Fetch airing today TV shows
      setAiringTodayShows(shows); // Set airing today TV shows state
    } catch (error) {
      console.error('Error fetching airing today TV shows:', error);
    }
  };

  return (
    <div className="container">
      {showMovieLists && (
        <div>
          <div>
            <h2>Popular Movies</h2>
            <br />
            <MovieList movies={popularMovies} onAddToFavorites={handleAddToFavorites} />
          </div>
          <div>
            <h2>Top Rated Movies</h2>
            <br />
            <MovieList movies={topRatedMovies} onAddToFavorites={handleAddToFavorites} />
          </div>
          <div>
            <h2>Upcoming Movies</h2>
            <br />
            <MovieList movies={upcomingMovies} onAddToFavorites={handleAddToFavorites} />
          </div>
          <div>
            <h2>Popular TV Shows</h2>
            <br />
            <MovieList movies={popularTVMovies} onAddToFavorites={handleAddToFavorites} />
          </div>
          <div>
            <h2>Top Rated TV Shows</h2>
            <br />
            <MovieList movies={topRatedTVMovies} onAddToFavorites={handleAddToFavorites} />
          </div>
          <div>
            <h2>Airing Today TV Shows</h2>
            <br />
            <MovieList movies={airingTodayShows} onAddToFavorites={handleAddToFavorites} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;