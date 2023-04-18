import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/aim">Woodward Fieser Rule &nbsp;&nbsp; |</Navbar.Brand>
        &nbsp;&nbsp;
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavLink to='/aim'><Navbar.Brand>Aim</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/theory'><Navbar.Brand>Theory</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/procedure'><Navbar.Brand>Procedure</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/simulation'><Navbar.Brand>Simulation</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/quiz'><Navbar.Brand>Quiz</Navbar.Brand></NavLink>
          </Nav>
          <Form className="d-flex">
            <NavLink to="/"><Button variant="light">&nbsp;&nbsp;Logout&nbsp;&nbsp;</Button></NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;