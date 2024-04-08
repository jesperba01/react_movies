import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies, Movie } from './Api';
import MovieList from './MovieList';

const TVPage: React.FC = () => {
  const { category = 'popular' } = useParams(); // Set default value for category
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let tvCategory = category === 'toprated' ? 'toprated_tv' :
    category === 'airingToday' ? 'airingToday' :
    'popular_tv';

    fetchMovies(tvCategory)
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching TV shows:', error));
  }, [category]);

  const getCategoryDisplayName = () => {
    if (category === 'airingToday') {
      return 'Airing Today';
    }
    return category.toUpperCase();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{getCategoryDisplayName()} TV Shows</h2>
      <div className="row">
        <div className="col">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default TVPage;