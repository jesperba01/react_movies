import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import TVPage from './TVPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Include the NavBar component */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:category" component={MoviePage} />
          <Route path="/tv/:category" component={TVPage} />
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;