import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import MovieCard from './MovieCard';
import { Movie } from './Api';
import './MovieCard.css';

interface MovieListProps {
  movies: Movie[];
  isHomePage?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="row justify-content-center">
      {movies.length === 0 ? (
        <div className="col text-center">
          <CircularProgress />
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))
      )}
    </div>
  );
};


export default MovieList;