import React, { useState, useEffect } from 'react';
import { Movie } from './Api';
import MovieCard from './MovieCard';

const FavouritesList: React.FC = () => {
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites') || '[]');
    if (movieFavourites.length > 0) {
      const favouritesWithType: Movie[] = movieFavourites.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        name: movie.name,
        first_air_date: movie.first_air_date,
      }));

      setFavourites(favouritesWithType);
    }
  }, []);

  const addToFavorites = (movie: Movie) => {
    const isAlreadyFavorite = favourites.some((favMovie) => favMovie.id === movie.id);
  
    // If the movie ID is not already in the favorites list, add it
    if (!isAlreadyFavorite) {
      const updatedFavourites = [...favourites, movie];
      setFavourites(updatedFavourites);
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(updatedFavourites));
    } else {
      console.log('Movie is already in favorites');
    }
  };

  const removeFromFavorites = (movieId: number) => {
    const updatedFavourites = favourites.filter((movie) => movie.id !== movieId);
    setFavourites(updatedFavourites);
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="container">
      <h2>Favorite Movies</h2>
      <div className="row">
        {favourites.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
            <MovieCard
              movie={movie}
              isFavorite={true} // Set isFavorite to true for movies in favorites list
              onAddToFavorites={addToFavorites}
              onRemoveFromFavorites={removeFromFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesList;