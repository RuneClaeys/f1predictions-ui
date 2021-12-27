import { useMemo } from 'react';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';
import PerRace from '../components/Leaderboards/PerRace';
import Summary from '../components/Leaderboards/Summary';
import { useNavbar } from '../core/hooks/useNavbar';

const Leaderboard = () => {
   const [activeKey, setActiveKey] = useState('0');
   const navBarOptions = useMemo(() => ({ title: 'Leaderboard' }), []);
   useNavbar(navBarOptions);

   return (
      <Stack className="leaderboard">
         <Tabs className="mb-2" variant="pills" defaultActiveKey={0} onSelect={(eventKey) => setActiveKey(eventKey)}>
            <Tab eventKey="0" title="Summary" style={{ maxHeight: 'calc(100vh - 12rem)', overflow: 'auto' }}>
               <Summary />
            </Tab>
            <Tab eventKey="1" title="Detailed" style={{ maxHeight: 'calc(100vh - 12rem)', overflow: 'auto' }}>
               <PerRace />
            </Tab>
         </Tabs>
      </Stack>
   );
};
export default Leaderboard;
