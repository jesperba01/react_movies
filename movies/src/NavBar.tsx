import React from 'react';
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
  const handleListChange = (list: string) => {
    console.log('Selected list:', list);
    if (list === 'Home') {
      onFetchHomeMovies(); // Call the function to fetch movies for the home page
    } else {
      onSelectList(list); // Pass the selected list to onSelectList function
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
            </NavDropdown>
            <NavDropdown title="TV" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tv/popular" onClick={() => handleListChange('popular_tv')}>Popular</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tv/toprated" onClick={() => handleListChange('toprated_tv')}>Top Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;