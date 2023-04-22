import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookie = new Cookies();

function Navigation() {
  const handleLogout = () => {
    cookie.remove('token');
  }
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/aim" className='navText'>Woodward Fieser Rule &nbsp;&nbsp; |</Navbar.Brand>
        &nbsp;&nbsp;
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavLink to='/aim'><Navbar.Brand className='navText'>Aim</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/theory'><Navbar.Brand className='navText'>Theory</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/procedure'><Navbar.Brand className='navText'>Procedure</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/simulation'><Navbar.Brand className='navText'>Simulation</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/quiz'><Navbar.Brand className='navText'>Quiz</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/assignment'><Navbar.Brand className='navText'>Assignment</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/feedback'><Navbar.Brand href="/feedback" className='navText'>Feedback</Navbar.Brand></NavLink>
            &nbsp;&nbsp;
            <NavLink to='/references'><Navbar.Brand className='navText'>References</Navbar.Brand></NavLink>
          </Nav>
          <Form className="d-flex">
            <NavLink to="/"><Button onClick={handleLogout} variant="light" size='lg' className='button-text'>&nbsp;&nbsp;Logout&nbsp;&nbsp;</Button></NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
