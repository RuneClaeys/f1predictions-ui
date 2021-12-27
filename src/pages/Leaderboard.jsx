import React, { useMemo } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';
import { useNavbar } from '../core/hooks/useNavbar';

const PerRace = React.lazy(() => import('../components/Leaderboards/PerRace'));
const Summary = React.lazy(() => import('../components/Leaderboards/Summary'));

const Leaderboard = () => {
   const navBarOptions = useMemo(() => ({ title: 'Leaderboard' }), []);
   useNavbar(navBarOptions);

   return (
      <Stack className="leaderboard">
         <Tabs className="mb-2" variant="pills" defaultActiveKey={0}>
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
