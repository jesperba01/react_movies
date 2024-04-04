import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieListProps {
  list: string | null;
}

const MovieList: React.FC<MovieListProps> = ({ list }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = "4ba04b36da1b0f7da8622918c9908ef8";
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const toprated = "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    if (list) {
      fetchData(list);
    }
  }, [list]);

  const fetchData = (selectedList: string) => {
    const url = selectedList === 'toprated' ? toprated : popular;
    axios.get<{ results: Movie[] }>(`${url}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results;
      setMovies(result);
    });
  };

  // Render nothing if list is not selected
  if (!list) {
    return null;
  }

  return (
    <div className="App">
      {movies.length === 0 ? (
        <CircularProgress />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;