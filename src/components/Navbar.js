import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
      <Container>
        <LinkContainer to="/todo">
          <Navbar.Brand>
            <img
              src={`${process.env.PUBLIC_URL}/Images/todologo.png`}
              alt="Lot-To-Do Logo"
              style={{ width: '150px', height: 'auto' }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/todo">
              <Nav.Link>List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="dark-mode-switch"
              label="Dark Mode"
              checked={darkMode}
              onChange={toggleDarkMode}
              className={darkMode ? 'text-white' : 'text-dark'}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
