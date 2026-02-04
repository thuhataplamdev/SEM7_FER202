import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-2">
      <Container>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto ms-md-4">
            <Nav.Item>
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/news">News</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/quizzes">Quiz</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}