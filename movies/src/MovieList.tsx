import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import MovieCard from './MovieCard';
import { Movie } from './Api';
import './MovieCard.css';

interface MovieListProps {
  movies: Movie[];
  isHomePage?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, isHomePage = false }) => {
  return (
    <div className={`movie-list ${isHomePage ? 'homepage-list' : ''}`}>
      <div className="movieContainer">
        {movies.length === 0 ? (
          <CircularProgress />
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;