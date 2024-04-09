import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface NavBarProps {
  onSelectList: (list: string) => void;
  onFetchHomeMovies: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectList, onFetchHomeMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleListChange = (list: string) => {
    console.log('Selected list:', list);
    if (list === 'Home') {
      onFetchHomeMovies();
    } else {
      onSelectList(list);
    }
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => handleListChange('Home')}>Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/movies/popular" onClick={() => handleListChange('popular')}>Popular</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/movies/toprated" onClick={() => handleListChange('toprated')}>Top Rated</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/movies/upcoming" onClick={() => handleListChange('upcoming')}>Upcoming</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tv/popular" onClick={() => handleListChange('popular_tv')}>Popular</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tv/toprated" onClick={() => handleListChange('toprated_tv')}>Top Rated</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tv/airingToday" onClick={() => handleListChange('airingToday')}>Airing Today</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/favorites" onClick={() => handleListChange('favorites')}>Favorites</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/Search">Search For Movies</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;