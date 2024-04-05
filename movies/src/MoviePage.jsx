import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

interface MoviePageProps {
  category: string;
}

const MoviePage: React.FC<MoviePageProps> = ({ category }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies(category)
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