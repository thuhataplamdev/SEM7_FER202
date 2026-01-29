import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
      <Container>
        <Navbar.Brand >
          Lab 3
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/ex-1">
              Exercise 1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ex-2">
              Exercise 2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ex-3">
              Exercise 3
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ex-4">
              Exercise 4
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
