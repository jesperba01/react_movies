import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

interface TVPageProps {
  onAddToFavorites: (movie: Movie) => void;
}

const TVPage: React.FC<TVPageProps> = ({ onAddToFavorites }) => {
  const { category = 'popular' } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const tvCategory = category === 'toprated' ? 'toprated_tv' : 'popular_tv';
    fetchMovies(tvCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching TV shows:', error));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{category.toUpperCase()} TV Shows</h2>
      <div className="row">
        <div className="col">
          <MovieList movies={movies} onAddToFavorites={onAddToFavorites} />
        </div>
      </div>
    </div>
  );
};

export default TVPage;