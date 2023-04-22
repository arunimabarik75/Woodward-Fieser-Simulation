import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom";

function RegisterButton() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name || !roll || !email || !password){
      alert("Fill all the details");
      return;
    }
    const configuration = {
      method: "post",
      url: "http://localhost:5001/api/users/register",
      data: {
        userName: name,
        email,
        password,
      },
    }
    axios(configuration)
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);})
    handleClose();
  }

  return (
    <>
      <Button variant="primary" size='lg' onClick={handleShow}>
        &nbsp;&nbsp;Register&nbsp;&nbsp;
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Meet Amin"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                placeholder="20BCE012"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                placeholder="* * * * * * * *"
              />
            </Form.Group>
          </Form></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size='lg' className='button-text' onClick={handleClose}>
            &nbsp;&nbsp;Close&nbsp;&nbsp;
          </Button>&nbsp;&nbsp;
          <NavLink to="/aim"><Button variant="primary" size='lg' className='button-text' onClick={(e) => submitHandler(e)}>
            &nbsp;&nbsp;Register&nbsp;&nbsp;
          </Button></NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterButton;