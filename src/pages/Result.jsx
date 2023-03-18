import React from 'react';
import { useMemo } from 'react';

import { useHistory, useParams, useLocation } from 'react-router';
import OtherResults from '../components/Results/OtherResults';
import QualifyingResults from '../components/Results/QualifyingResults';
import RaceResults from '../components/Results/RaceResults';
import TotalPoints from '../components/TotalPoints';
import { API_GRAND_PRIX } from '../core/endpoints/endpoints';
import { useGet } from '../core/hooks/useGet';
import { useNavbar } from '../core/hooks/useNavbar';

const Result = () => {
   const { id } = useParams();
   const { search } = useLocation();
   const searchParams = useMemo(() => new URLSearchParams(search), [search]);
   const userName = useMemo(() => searchParams.get('user_name'), [searchParams]);
   const userId = useMemo(() => searchParams.get('user_id'), [searchParams]);
   const { loading, data: grandPrix } = useGet(userId ? `${API_GRAND_PRIX}/${id}/user/${userId}` : `${API_GRAND_PRIX}/${id}`);

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
      <div className="result">
         <div className="result__total">
            {userName && (
               <p>
                  <strong className="mb-3">{userName}</strong>
               </p>
            )}

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
   );
};

export default Result;
