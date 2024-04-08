import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MovieCard from './MovieCard';
import { Movie } from './Api';
import './MovieCard.css';

interface MovieListProps {
  movies: Movie[];
  onAddToFavorites: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onAddToFavorites }) => {
  return (
    <div className="row justify-content-center">
      {movies.length === 0 ? (
        <div className="col text-center">
          <CircularProgress />
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <MovieCard movie={movie} onAddToFavorites={onAddToFavorites} />
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;