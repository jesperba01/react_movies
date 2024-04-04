import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import MovieCard from './MovieCard';
import { fetchMovies, Movie } from './Api'; // Import fetchMovies function

interface MovieListProps {
  list: string; // Accepts string representing the type of list
  isHomePage?: boolean; // Optional prop to indicate whether it's the homepage
}

const MovieList: React.FC<MovieListProps> = ({ list, isHomePage = false }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData(list); // Fetch movies when list prop changes
  }, [list]);

  const fetchData = async (selectedList: string) => {
    try {
      const result = await fetchMovies(selectedList);
      // Limit the result to 5 movies if it's the homepage
      setMovies(isHomePage ? result.slice(0, 5) : result);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className={`movie-list ${isHomePage ? 'homepage-list' : ''}`}>
      {movies.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="movieContainer">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;