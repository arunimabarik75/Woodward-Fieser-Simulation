import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Navigation from '../components/Navigation'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Common.css'
import '../index.css'
import { Container } from 'react-bootstrap';

export default function Feedback() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content' id="feedBack">
      <h5>Feedback</h5>
      <p className='tableText'>    
        <form>
            <Container> 
                <Row>
                    <Col><p>Email :</p></Col>
                    <Col><input type='text' name='emailId'></input></Col>
                </Row>
                <Row>
                    <Col><p>Practical :</p></Col>
                    <Col><input type='text' name='practicalId'></input></Col>
                </Row>
            </Container>
            <hr />
            <Container>
            <div className='mb-3'>
                <Table  className='tableText'>
                    <thead>
                        <tr>
                            <th>Questions</th>
                            <th>Best</th>
                            <th>Better</th>
                            <th>Good</th>
                            <th>Bad</th>
                            <th>Very Bad</th>
                        </tr>
                    </thead>
                    <tr>
                        <td><p>How do you rate the online performance of the experiment?</p></td>
                        <td> <input type="radio" name='grp1'/></td>
                        <td> <input type="radio" name='grp1'/></td>
                        <td> <input type="radio" name='grp1'/></td>
                        <td> <input type="radio" name='grp1'/></td>
                        <td> <input type="radio" name='grp1'/></td>
                    </tr>
                    <tr>
                        <td><p>To what extent did you have control over the interactions?</p></td>
                        <td> <input type="radio" name='grp2'/></td>
                        <td> <input type="radio" name='grp2'/></td>
                        <td> <input type="radio" name='grp2'/></td>
                        <td> <input type="radio" name='grp2'/></td>
                        <td> <input type="radio" name='grp2'/></td>
                    </tr>
                    <tr>
                        <td><p>To what degree was the actual lab environment simulated?</p></td>
                        <td> <input type="radio" name='grp3'/></td>
                        <td> <input type="radio" name='grp3'/></td>
                        <td> <input type="radio" name='grp3'/></td>
                        <td> <input type="radio" name='grp3'/></td>
                        <td> <input type="radio" name='grp3'/></td>
                    </tr>
                    <tr>
                        <td><p>Was the measurement and analysis of data easy for you?</p></td>
                        <td> <input type="radio" name='grp4'/></td>
                        <td> <input type="radio" name='grp4'/></td>
                        <td> <input type="radio" name='grp4'/></td>
                        <td> <input type="radio" name='grp4'/></td>
                        <td> <input type="radio" name='grp4'/></td>
                    </tr>
                    <tr>
                        <td><p>Were the results of the experiment easily interpreted?</p></td>
                        <td> <input type="radio" name='grp5'/></td>
                        <td> <input type="radio" name='grp5'/></td>
                        <td> <input type="radio" name='grp5'/></td>
                        <td> <input type="radio" name='grp5'/></td>
                        <td> <input type="radio" name='grp5'/></td>
                    </tr>
                    <tr>
                        <td><p>A clear understanding of the experiment and related topics was gained</p></td>
                        <td> <input type="radio" name='grp6'/></td>
                        <td> <input type="radio" name='grp6'/></td>
                        <td> <input type="radio" name='grp6'/></td>
                        <td> <input type="radio" name='grp6'/></td>
                        <td> <input type="radio" name='grp6'/></td>
                    </tr>
                </Table>
            </div>
            <hr/>
            </Container>
            <Container>
                <Row>
                    <Col><p>How helpful do you feel the system is ?</p></Col>
                    <Col><textarea rows={2} cols={50}/></Col>
                </Row>
                <Row>
                    <Col><p> Is there anything you would like to tell us ? </p></Col>
                    <Col><textarea rows={2} cols={50}/></Col>
                </Row>
                <Row>
                    <Col><p> Specify three problems/difficulties you faced while performing the experiments? </p></Col>
                    <Col><textarea rows={2} cols={50}/></Col>
                </Row>
                
            </Container>
            <hr/>
            <center>
            <Container>
                <Button variant="light" className='button-text' size='lg'>&nbsp;&nbsp;Clear Form&nbsp;&nbsp;</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="light" className='button-text' size='lg'>&nbsp;&nbsp;Submit Form&nbsp;&nbsp;</Button>
            </Container>
            </center>
        </form>
      </p>
      </div>
    </div>
  )
}
