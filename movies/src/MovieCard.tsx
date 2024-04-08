import React from 'react';
import Card from 'react-bootstrap/Card';
import Pie from './Pie';
import { Movie } from './Api';
import './MovieCard.css';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onAddToFavorites: (movie: Movie) => void;
  onRemoveFromFavorites: (movieId: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, onAddToFavorites, onRemoveFromFavorites }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(movie.id);
  };

  return (
    <Card className="shadow movie-card">
      <div className="movieImageContainer">
        {movie.poster_path && (
          <img
            className="movieImage img-fluid"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        )}
        <Pie className="pieOverlay" percentage={movie.vote_average * 10} />
        {isFavorite ? (
          <button onClick={handleRemoveFromFavorites} className="heart-overlay">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        ) : (
          <button onClick={handleAddToFavorites} className="heart-overlay">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        )}
      </div>
      <Card.Body className="movieContainer-p">
        <Card.Title>{movie.name || movie.title}</Card.Title>
        <Card.Text>{movie.release_date || movie.first_air_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;