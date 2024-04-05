import React from 'react';
import Container from 'react-bootstrap/Container';
import MovieList from './MovieList';

const HomePage: React.FC = () => {
  return (
    <div className="movie-list">
        <h2>Welcome to Movie Lists</h2>
        <br></br>
        <h2>Popular</h2>
      <div>
        <MovieList list="popular" isHomePage={true} />
      </div>
      <h2>Topp Rated</h2>
      <div>
        <MovieList list="toprated" isHomePage={true} />
      </div>
    </div>
  );
};

export default HomePage;