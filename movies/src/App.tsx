import React from 'react';
import './App.css';
import MovieList from './MovieList';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;