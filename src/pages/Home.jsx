import React, { useMemo } from 'react';
import Stack from 'react-bootstrap/Stack';
import { differenceInDays, fromUnixTime } from 'date-fns';

import { useGet } from '../core/hooks/useGet';
import { API_RESULTS } from '../core/endpoints/endpoints';

const TotalPoints = React.lazy(() => import('../components/TotalPoints'));
const ShowcaseGP = React.lazy(() => import('../components/Home/ShowcaseGP'));
const GrandPrixHistory = React.lazy(() => import('../components/Home/GrandPrixHistory'));

const Home = () => {
   const { data: overview, loading } = useGet(API_RESULTS, { initialValue: { grand_prix: [] } });

   const OVERVIEW = useMemo(
      () => ({
         ...overview,
         grand_prix: overview.grand_prix.map((gp) => ({ ...gp, qualifying_start_timestamp: new Date(gp.qualifying_start_timestamp) })),
      }),
      [overview]
   );

   const prevGP = useMemo(() => {
      const dates = OVERVIEW.grand_prix
         .filter((gp) => gp.qualifying_start_timestamp < new Date())
         .sort((a, b) => a.qualifying_start_timestamp - b.qualifying_start_timestamp);
      return dates[dates.length - 1];
   }, [OVERVIEW]);

   const nextGP = useMemo(() => {
      const dates = OVERVIEW.grand_prix.filter((gp) => gp.qualifying_start_timestamp > new Date());
      return dates[dates.length - 1];
   }, [OVERVIEW]);

   const showcaseGP = useMemo(() => {
      if (nextGP && differenceInDays(nextGP.qualifying_start_timestamp, new Date()) <= 2) {
         return nextGP;
      }
      return prevGP;
   }, [prevGP, nextGP]);

   return (
      <div gap={4} className="home">
         <div className="home__showcase">
            <ShowcaseGP showcaseGP={showcaseGP} isUpcomming={showcaseGP?.id === nextGP?.id} loading={loading} />
         </div>
         <div className="home__total">
            <h5 className="mb-3">Season total</h5>
            <TotalPoints results={overview} loading={loading} bg="secondary" />
         </div>
         <div className="home__history">
            <GrandPrixHistory overview={overview} loading={loading} />
         </div>
      </div>
   );
};

export default Home;
