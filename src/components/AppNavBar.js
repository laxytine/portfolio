import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import '../assets/styles/navbar.css';
import logo from '../assets/images/logo.png';

export default function AppNavBar() {
  return (
    <Navbar expand="lg" className="pad">
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            width={100}
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              exact
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              exact
            >
              ABOUT ME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              exact
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              exact
            >
              CONTACT
            </Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
