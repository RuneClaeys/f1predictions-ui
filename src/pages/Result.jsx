import React from 'react';
import { useMemo, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';

import { useHistory, useParams } from 'react-router';
import OtherResults from '../components/Results/OtherResults';
import QualifyingResults from '../components/Results/QualifyingResults';
import RaceResults from '../components/Results/RaceResults';
import TotalPoints from '../components/TotalPoints';
import { API_GRAND_PRIX, API_PREDICTIONS, API_RESULTS } from '../core/endpoints/endpoints';
import { useGet } from '../core/hooks/useGet';
import { useNavbar } from '../core/hooks/useNavbar';

const Result = () => {
   const { id } = useParams();

   const { error, loading, data: grandPrix } = useGet(`${API_GRAND_PRIX}/${id}`);

   const { goBack } = useHistory();

   useEffect(() => {
      console.log(grandPrix);
   }, [grandPrix]);

   const navbar = useMemo(
      () => ({
         title: grandPrix?.name || 'Loading...',
         leftAction: goBack,
         leftActionIcon: 'fa-arrow-left',
         showBottomNav: false,
      }),
      [grandPrix]
   );

   useNavbar(navbar);

   return (
      <Stack gap={3} className="mb-5">
         <TotalPoints
            results={{
               qualifying_points: grandPrix?.user_prediction?.qualifying_points,
               race_points: grandPrix?.user_prediction?.race_points,
               other_points: grandPrix?.user_prediction?.other_points,
               total_points: grandPrix?.user_prediction?.total_points,
            }}
            loading={loading}
         />
         <QualifyingResults grandPrix={grandPrix} open={true} />
         <RaceResults grandPrix={grandPrix} open={false} />
         <OtherResults grandPrix={grandPrix} open={false} />
      </Stack>
   );
};

export default Result;
