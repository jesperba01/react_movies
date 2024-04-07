import React, { useState, useEffect } from 'react';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

interface TVPageProps {
  category: string;
}

const TVPage: React.FC<TVPageProps> = ({ category }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const tvCategory = category === 'toprated' ? 'toprated_tv' : 'popular_tv';
    fetchMovies(tvCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching TV shows:', error));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default TVPage;