import React, { useState, useEffect } from 'react';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

interface MoviePageProps {
  category: string;
}

const MoviePage: React.FC<MoviePageProps> = ({ category }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movieCategory = category === 'toprated' ? 'top_rated' : 'popular';
    fetchMovies(movieCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviePage;