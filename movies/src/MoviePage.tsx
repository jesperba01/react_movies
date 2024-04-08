import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

const MoviePage: React.FC<{ onAddToFavorites: (movie: Movie) => void }> = ({ onAddToFavorites }) => {
  const { category = 'popular' } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let movieCategory = 'popular';

    if (category === 'toprated') {
      movieCategory = 'toprated';
    } else if (category === 'upcoming') {
      movieCategory = 'upcoming';
    }

    fetchMovies(movieCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, [category]);

  const getCategoryDisplayName = () => {
    if (category === 'upcoming') {
      return 'Upcoming';
    }
    return category.toUpperCase();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{getCategoryDisplayName()} Movies</h2>
      <div className="row">
        <div className="col">
          <MovieList movies={movies} onAddToFavorites={onAddToFavorites} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;