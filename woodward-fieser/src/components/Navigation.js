import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

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
            <Navbar.Brand href="/aim">Aim</Navbar.Brand>
            &nbsp;&nbsp;
            <Navbar.Brand href="/theory">Theory</Navbar.Brand>
            &nbsp;&nbsp;
            <Navbar.Brand href="/procedure">Procedure</Navbar.Brand>
            &nbsp;&nbsp;
            <Navbar.Brand href="/simulation">Simulation</Navbar.Brand>
            &nbsp;&nbsp;
            <Navbar.Brand href="/quiz">Quiz</Navbar.Brand>
          </Nav>
          <Form className="d-flex">
            <Link to="/"><Button variant="light">&nbsp;&nbsp;Logout&nbsp;&nbsp;</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;