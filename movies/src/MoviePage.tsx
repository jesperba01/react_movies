import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

const MoviePage: React.FC = () => {
  const { category = 'popular' } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movieCategory = category === 'toprated' ? 'toprated' : 'popular';
    fetchMovies(movieCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{category.toUpperCase()} Movies</h2>
      <div className="row">
        <div className="col">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;