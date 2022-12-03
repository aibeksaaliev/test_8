import React from 'react';
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CategoriesMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="rounded-3" style={{width: "20%", height: "250px"}}>
        <Container className="d-flex justify-content-between">
          <Nav className="d-flex flex-column text-uppercase">
            <NavLink to="/quotes" className="nav-link">All</NavLink>
            <NavLink to="/quotes/star-wars" className="nav-link">Star wars</NavLink>
            <NavLink to="/quotes/famous-people" className="nav-link">Famous people</NavLink>
            <NavLink to="/quotes/saying" className="nav-link">Saying</NavLink>
            <NavLink to="/quotes/humour" className="nav-link">Humour</NavLink>
            <NavLink to="/quotes/motivational" className="nav-link">Motivational</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CategoriesMenu;