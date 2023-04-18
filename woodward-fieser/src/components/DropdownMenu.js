import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" size='lg' variant='light' title="Select a compound">
      <Dropdown.Item>Compound 1</Dropdown.Item>
      <Dropdown.Item>Compound 2</Dropdown.Item>
      <Dropdown.Item>Compound 3</Dropdown.Item>
      <Dropdown.Item>Compound 4</Dropdown.Item>
      <Dropdown.Item>Compound 5</Dropdown.Item>
      <Dropdown.Item>Compound 6</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;