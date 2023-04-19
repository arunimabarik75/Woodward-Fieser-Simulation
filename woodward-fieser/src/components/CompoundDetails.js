import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function CompoundDetails() {
  return (
    <form><p>
        <Container> 
          <Row>
            <Col>Base Value :</Col>
            <Col><input type='text' name='emailId'></input></Col>
        </Row>
        <br/>
          <Row>
            <Col>Ring Residue :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Double Bond Conjugation :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Exocyclic Double Bonds :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Polar groups :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
          </Row><br />
        </Container>
        <br />
      <Button variant="light" className='button-text' size='lg' type="submit">
        &nbsp;&nbsp;Submit&nbsp;&nbsp;
      </Button>
    </p></form>
  );
}

export default CompoundDetails;