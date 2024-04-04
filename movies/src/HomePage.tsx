import React from 'react';
import Container from 'react-bootstrap/Container';
import MovieList from './MovieList';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to Movie Lists</h1>
      <p>Here are some sample lists:</p>
      <div className="lists-container">
        <MovieList list="popular" />
        <MovieList list="toprated" />
        {/* Add more MovieList components for additional lists */}
      </div>
      <p>Additional information or content can be placed here.</p>
    </Container>
  );
};

export default HomePage;