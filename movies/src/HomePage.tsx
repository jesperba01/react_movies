import React from 'react';
import Container from 'react-bootstrap/Container';
import MovieList from './MovieList';

const HomePage: React.FC = () => {
  return (
    <div className="movie-list">
        <h2 className="">Welcome to Movie Lists</h2>
      <div>
        <MovieList list="popular" isHomePage={true} />
      </div>
      
      <div>
        <MovieList list="toprated" isHomePage={true} />
      </div>
    </div>
  );
};

export default HomePage;