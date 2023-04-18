import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CompoundNavbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Conjugated Dienes" title="Home">
        <Sonnet />
      </Tab>
      <Tab eventKey="Ketones" title="Profile">
        <Sonnet />
      </Tab>
      <Tab eventKey="Aromatic" title="Contact" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
  );
}

export default CompoundNavbar;