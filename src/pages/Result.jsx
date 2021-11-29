import React from 'react';
import { Stack } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import OtherResults from '../components/Results/OtherResults';
import QualifyingResults from '../components/Results/QualifyingResults';
import RaceResults from '../components/Results/RaceResults';
import TotalPoints from '../components/TotalPoints';
import { useNavbar } from '../core/hooks/useNavbar';

const Result = () => {
   const { id } = useParams();
   const { goBack } = useHistory();
   useNavbar({
      title: 'Dutch GP',
      leftAction: goBack,
      leftActionIcon: 'fa-arrow-left',
      showBottomNav: false,
   });

   return (
      <Stack gap={3} className="mb-5">
         <TotalPoints
            results={{
               qualifying_points: 21,
               race_points: 25,
               other_points: 5,
               total_points: 50,
            }}
            loading={false}
         />
         <QualifyingResults open={true} />
         <RaceResults open={false} />
         <OtherResults open={false} />
      </Stack>
   );
};

export default Result;
