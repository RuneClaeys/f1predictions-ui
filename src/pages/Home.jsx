import React, { useMemo } from 'react';
import { Stack } from 'react-bootstrap';
import { differenceInDays, fromUnixTime } from 'date-fns';

import ShowcaseGP from '../components/Home/ShowcaseGP';
import { useGet } from '../core/hooks/useGet';
import { API_RESULTS } from '../core/endpoints/endpoints';
import TotalPoints from '../components/TotalPoints';
import GrandPrixHistory from '../components/Home/GrandPrixHistory';

const Home = () => {
   const { data: overview, loading } = useGet(API_RESULTS, { initialValue: { grand_prix: [] } });

   const prevGP = useMemo(() => {
      const dates = overview.grand_prix
         .filter((gp) => fromUnixTime(gp.qualifying_start_timestamp) < new Date())
         .sort((a, b) => fromUnixTime(a.qualifying_start_timestamp) - fromUnixTime(b.qualifying_start_timestamp));
      return dates[dates.length - 1];
   }, [overview]);

   const nextGP = useMemo(() => {
      const dates = overview.grand_prix.filter((gp) => fromUnixTime(gp.qualifying_start_timestamp) > new Date());
      return dates[dates.length - 1];
   }, [overview]);

   const showcaseGP = useMemo(() => {
      if (nextGP && differenceInDays(fromUnixTime(nextGP.qualifying_start_timestamp), new Date()) <= 3) {
         return nextGP;
      }
      return prevGP;
   }, [prevGP, nextGP]);

   return (
      <Stack gap={3} className="mb-5">
         <ShowcaseGP showcaseGP={showcaseGP} isUpcomming={showcaseGP?.id === nextGP?.id} loading={loading} />
         <>
            <h5 className="mb-0">Season total</h5>
            <TotalPoints results={overview} loading={loading} bg="secondary" />
         </>
         <GrandPrixHistory overview={overview} loading={loading} />
      </Stack>
   );
};

export default Home;
