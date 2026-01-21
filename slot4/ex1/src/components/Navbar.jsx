import React from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-2">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <Link to="/" className="text-decoration-none text-white"> Pizza House </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto ms-md-4">
            <Nav.Item>
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">About Us</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav.Item>
          </Nav>

          <Form className="d-flex mt-3 mt-md-0">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}