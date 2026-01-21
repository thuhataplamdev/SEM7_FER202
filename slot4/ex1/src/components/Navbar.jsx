import React from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-2">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Pizza House
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto ms-md-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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
