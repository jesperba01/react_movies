import React from 'react';
import Card from 'react-bootstrap/Card';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className="movieContainer shadow">
      {movie.poster_path && (
        <Card.Img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
      )}
      <Card.Body className="text-center">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.release_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;