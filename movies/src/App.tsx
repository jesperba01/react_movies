import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import NavBar from './NavBar'; // Import the NavBar component
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import TVPage from './TVPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Include the NavBar component */}
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} /> {/* Update syntax for Route */}
          <Route path="/movies/:category" element={<MoviePage />} /> {/* Update syntax for Route */}
          <Route path="/tv/:category" element={<TVPage />} /> {/* Update syntax for Route */}
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;