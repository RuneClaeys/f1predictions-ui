import React, { useMemo } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';
import { useNavbar } from '../core/hooks/useNavbar';
import { useHistory, useLocation } from 'react-router-dom';

const PerRace = React.lazy(() => import('../components/Leaderboards/PerRace'));
const Summary = React.lazy(() => import('../components/Leaderboards/Summary'));

const Leaderboard = () => {
   const { push } = useHistory();
   const { search } = useLocation();
   const activeKey = useMemo(() => new URLSearchParams(search).get('type') || 'summary', [search]);
   const navBarOptions = useMemo(() => ({ title: 'Leaderboard' }), []);
   useNavbar(navBarOptions);

   return (
      <Stack className="leaderboard">
         <Tabs className="mb-2" variant="pills" activeKey={activeKey} onSelect={(event) => push(`/leaderboard?type=${event}`)}>
            <Tab eventKey="summary" title="Summary" style={{ maxHeight: 'calc(100vh - 12rem)', overflow: 'auto' }}>
               <Summary />
            </Tab>
            <Tab eventKey="detail" title="Detailed" style={{ maxHeight: 'calc(100vh - 12rem)', overflow: 'auto' }}>
               <PerRace />
            </Tab>
         </Tabs>
      </Stack>
   );
};
export default Leaderboard;
