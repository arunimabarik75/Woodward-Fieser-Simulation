import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CompoundDetails() {
  return (
    <Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column sm='2'>Base Value</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
        <Form.Label column sm='2'>Ring Residue</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
        <Form.Label column sm='2'>Double Bond Conjugation</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
        <Form.Label column sm='2'>Exocyclic Double Bonds</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
        <Form.Label column sm='2'>Polar Groups</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
        <Form.Label column sm='2'>Calculated λmax</Form.Label>
        <Col sm='10'><Form.Control type="text" /></Col>
      </Form.Group>

      <Button variant="light" size='lg' type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CompoundDetails;