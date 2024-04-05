import React from 'react';
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
    if (list === 'Home') {
      onFetchHomeMovies(); // Call the function to fetch movies for the home page
    } else {
      onSelectList(list);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleListChange('Home')}>Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleListChange('popular')}>Popular</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleListChange('toprated')}>Top Rated</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleListChange('popular_tv')}>Popular</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleListChange('toprated_tv')}>Top Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;