import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MovieList from './MovieList';

function NavBar() {
  const [selectedList, setSelectedList] = useState<string>('popular');

  const handleListChange = (list: string) => {
    setSelectedList(list);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleListChange('popular')}>Popular</Nav.Link>
            <Nav.Link onClick={() => handleListChange('toprated')}>Top Rated</Nav.Link>
            {/* Add more links as needed */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Render MovieList component with selected list */}
      <MovieList list={selectedList} />
    </Navbar>
  );
}

export default NavBar;