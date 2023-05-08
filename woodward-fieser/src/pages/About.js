import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Navigation from '../components/Navigation'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Common.css'
import '../index.css'
import Gaurav from './20BCE079A.jpg'
import Meet from './meet.jpg'
import Devyani from './devyani.jpg'
import Arunima from './arunima.jpg'
import Devanshi from './devanshi.jpg'
import { Container } from 'react-bootstrap';
export default function About() {
  return (
    <div className='experiment-page about-page'>
        <div className='header'>
            <Navigation />
        </div>
        <div className='content' id="about-content">
            <h5>
                   About Us
            </h5>
            <p>
                We a team of 5, created this virtual lab under the guidance of Dr. Amita Chaudhary and Dr. Neha Patni from Nirma University, during the coursework Chemical Analytical Techniques 2022-2023
            </p>
            <div className='creator-detail'>
            <Row>
                <Col>
                <Card  className='about-detail' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Arunima}  width={200} height={300} />
                      <Card.Body className='details-about'>
                          <Card.Title className='navText2'>Arunima Barik</Card.Title>
                          <Card.Link href="https://www.linkedin.com/in/arunima-barik/"><i className="fa-brands fa-2xl fa-linkedin"></i></Card.Link>
                          <Card.Link href="mailto:20bce016@nirmauni.ac.in"><i class="fa-regular fa-envelope fa-2xl"></i></Card.Link>
                      </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card  className='about-detail' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Devanshi}  width={200} height={300} />
                      <Card.Body className='details-about'>
                          <Card.Title className='navText2'>Devanshi Prajapati</Card.Title>
                          <Card.Link href="https://www.linkedin.com/in/devanshi-prajapati-8b4891235/"><i className="fa-brands fa-2xl fa-linkedin"></i></Card.Link>
                          <Card.Link href="mailto:20bic033@nirmauni.ac.in"><i class="fa-regular fa-envelope fa-2xl"></i></Card.Link>
                      </Card.Body>
                  </Card>
                </Col>
                <Col>
                
                  <Card  className='about-detail' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Devyani}  width={200} height={300} />
                      <Card.Body className='details-about'>
                          <Card.Title className='navText2'>Devyaniba Chudasama</Card.Title>
                          <Card.Link href="https://www.linkedin.com/in/devyaniba-chudasama-8535b3135/"><i className="fa-brands fa-2xl fa-linkedin"></i></Card.Link>
                          <Card.Link href="mailto:20bce058@nirmauni.ac.in"><i class="fa-regular fa-envelope fa-2xl"></i></Card.Link>
                      </Card.Body>
                  </Card>
                </Col>
                </Row>
                <Row>
                <Col>
                
                  <Card  className='about-detail' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Meet}  width={200} height={300} />
                      <Card.Body className='details-about'>
                          <Card.Title className='navText2'>Meet Amin</Card.Title>
                          
                          <Card.Link href="https://www.linkedin.com/in/gaurav-golchha-745713206/"><i className="fa-brands fa-2xl fa-linkedin"></i></Card.Link>
                          <Card.Link href="mailto:20bce079@nirmauni.ac.in"><i class="fa-regular fa-envelope fa-2xl"></i></Card.Link>
                      </Card.Body>
                  </Card>
                </Col>
            <Col>
            <Card className='about-detail' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Gaurav} width={200} height={300}/>
                      <Card.Body className='details-about'>
                          <Card.Title className='navText2'>Gaurav Golchha</Card.Title>
                          <Card.Link href="https://www.linkedin.com/in/gaurav-golchha-745713206/"><i className="fa-brands fa-2xl fa-linkedin"></i></Card.Link>
                          <Card.Link href="mailto:20bce079@nirmauni.ac.in"><i class="fa-regular fa-envelope fa-2xl"></i></Card.Link>
                      
                          </Card.Body>
                        </Card>
                
                </Col>
                <Col></Col>
            </Row>
            </div>
            
        </div>
    </div>

  )
}
