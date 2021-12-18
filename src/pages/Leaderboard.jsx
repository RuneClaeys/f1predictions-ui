import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import PerRace from '../components/Leaderboards/PerRace';
import Summary from '../components/Leaderboards/Summary';
import { useNavbar } from '../core/hooks/useNavbar';

const Leaderboard = () => {
   const [activeKey, setActiveKey] = useState(0);

   useNavbar({
      title: 'Leaderboard',
   });

   return (
      <Stack>
         <Nav className="mb-2" variant="pills" defaultActiveKey={0} onSelect={(eventKey) => setActiveKey(eventKey)}>
            <Nav.Item>
               <Nav.Link eventKey="0">Summary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="1">Per race</Nav.Link>
            </Nav.Item>
         </Nav>
         <div className="border overflow-auto" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
            {activeKey == 0 && <Summary />}
            {activeKey == 1 && <PerRace />}
         </div>
      </Stack>
   );
};
export default Leaderboard;
