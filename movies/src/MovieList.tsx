import React from 'react';
import { Movie } from './Api';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  onAddToFavorites: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onAddToFavorites }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <MovieCard
              movie={movie}
              isFavorite={false} // Set isFavorite to false for movies in regular movie list
              onAddToFavorites={onAddToFavorites}
              onRemoveFromFavorites={() => {}} // Pass a no-op function as onRemoveFromFavorites for movies in regular list
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;