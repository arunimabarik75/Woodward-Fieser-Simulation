import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

function LoginButton() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      alert('All fields are mandatory')
    }
    const configuration = {
      method: "post",
      url: "http://localhost:5001/api/users/login",
      data: {
        email,
        password,
      },
      
    };
    axios(configuration)
      .then((result) => {
        cookie.set('token', result.data['accessToken'])
        window.location.href="/aim";
      handleClose()})
      .catch((error) => {console.log(error); alert("Incorrect username/password")})
      
  }

  return (
    <>
      <Button variant="primary" size='lg' onClick={handleShow}>
              &nbsp;&nbsp;Login&nbsp;&nbsp;
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                placeholder="* * * * * * * *"
              />
            </Form.Group>
          </Form></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="button-text" size='lg' onClick={handleClose}>
            &nbsp;&nbsp;Close&nbsp;&nbsp;
          </Button>&nbsp;&nbsp;
          <NavLink to="/aim"><Button variant="primary" className="button-text" size='lg' onClick={(e) => handleSubmit(e)}>
            &nbsp;&nbsp;Login&nbsp;&nbsp;
          </Button></NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginButton;
