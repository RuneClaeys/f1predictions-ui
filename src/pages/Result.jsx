import React from 'react';
import { useMemo } from 'react';

import { useHistory, useParams } from 'react-router';
import OtherResults from '../components/Results/OtherResults';
import QualifyingResults from '../components/Results/QualifyingResults';
import RaceResults from '../components/Results/RaceResults';
import TotalPoints from '../components/TotalPoints';
import { API_GRAND_PRIX } from '../core/endpoints/endpoints';
import { useGet } from '../core/hooks/useGet';
import { useNavbar } from '../core/hooks/useNavbar';

const Result = () => {
   const { id } = useParams();

   const { loading, data: grandPrix } = useGet(`${API_GRAND_PRIX}/${id}`);

   const { goBack } = useHistory();

   const navbar = useMemo(
      () => ({
         title: grandPrix?.name || 'Loading...',
         leftAction: goBack,
         leftActionIcon: 'fa-arrow-left',
      }),
      [grandPrix]
   );

   useNavbar(navbar);

   return (
      <>
         {grandPrix?.user_prediction || loading ? (
            <div className="result">
               <div className="result__total">
                  <TotalPoints
                     results={{
                        qualifying_points: grandPrix?.user_prediction?.qualifying_points,
                        race_points: grandPrix?.user_prediction?.race_points,
                        other_points: grandPrix?.user_prediction?.other_points,
                        total_points: grandPrix?.user_prediction?.total_points,
                     }}
                     loading={loading}
                  />
               </div>
               <div className="result__quali">
                  <QualifyingResults grandPrix={grandPrix} open={true} />
               </div>
               <div className="result__race">
                  <RaceResults grandPrix={grandPrix} open={false} />
               </div>
               <div className="result__other">
                  <OtherResults grandPrix={grandPrix} open={false} />
               </div>
            </div>
         ) : (
            <div>
               <center>You do not have a prediction for this gp.</center>
            </div>
         )}
      </>
   );
};

export default Result;
