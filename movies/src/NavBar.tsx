import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface NavBarProps {
  onSelectList: (list: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectList }) => {
  const handleListChange = (list: string) => {
    onSelectList(list);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleListChange('popular')}>Popular</Nav.Link>
            <Nav.Link onClick={() => handleListChange('toprated')}>Top Rated</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;