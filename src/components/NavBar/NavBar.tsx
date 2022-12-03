import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand><NavLink className="text-white text-decoration-none" to="/">Quotes Central</NavLink></Navbar.Brand>
          <Nav>
            <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
            <NavLink className="nav-link" to="/new_quote">New Quote</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;