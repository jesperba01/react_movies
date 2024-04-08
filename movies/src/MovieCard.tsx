import React from 'react';
import Card from 'react-bootstrap/Card';
import Pie from './Pie';
import './MovieCard.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  first_air_date: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
      </div>
      <Card.Body className='movieContainer-p'>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.release_date}</Card.Text>
        <Card.Text>{movie.first_air_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;