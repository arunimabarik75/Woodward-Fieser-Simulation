import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom";

function LoginButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                placeholder="* * * * * * * *"
              />
            </Form.Group>
          </Form></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="button-text" size='lg' onClick={handleClose}>
            &nbsp;&nbsp;Close&nbsp;&nbsp;
          </Button>&nbsp;&nbsp;
          <NavLink to="/aim"><Button variant="primary" className="button-text" size='lg' onClick={handleClose}>
            &nbsp;&nbsp;Login&nbsp;&nbsp;
          </Button></NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginButton;
