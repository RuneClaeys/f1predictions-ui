import React, { useMemo } from 'react';
import { Card, ListGroup, Stack, Row, Col, Spinner } from 'react-bootstrap';
import { format, differenceInDays, fromUnixTime } from 'date-fns';

import ShowcaseGP from '../components/ShowcaseGP';
import { useGet } from '../core/hooks/useGet';
import { API_RESULTS } from '../core/endpoints/endpoints';

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

   if (loading) return <div></div>;

   return (
      <Stack gap={3} className="mb-5">
         {showcaseGP && <ShowcaseGP showcaseGP={showcaseGP} isUpcomming={showcaseGP?.id === nextGP?.id} loading={loading} />}

         <h5 className="mb-0">overview results</h5>
         <Card bg="secondary" text="white">
            <Card.Body>
               <Row>
                  <Col className="text-center d-flex flex-column">
                     <strong>Quali</strong>
                     <span>{overview.qualifying_points}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Race</strong>
                     <span>{overview.race_points}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Other</strong>
                     <span>{overview.other_points}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Total</strong>
                     <span>{overview.total_points}</span>
                  </Col>
               </Row>
            </Card.Body>
         </Card>

         <h5 className="mb-0">History</h5>
         <ListGroup as="ol" reversed>
            {overview.grand_prix
               .filter((gp) => fromUnixTime(gp.qualifying_start_timestamp) < new Date())
               .reverse()
               .map((gp, i) => {
                  return (
                     <ListGroup.Item key={gp.id} as="li" className="d-flex justify-content-between align-items-start">
                        <Row className="w-100">
                           <Col className="d-flex align-items-center justify-content-center" xs={2}>
                              <strong>{i}</strong>
                           </Col>
                           <Col xs={9}>
                              <h6 className="p-0 mb-1">{gp.name}</h6>

                              <p className="m-0">{format(fromUnixTime(gp.qualifying_start_timestamp), 'dd/MM/yyyy HH:mm:ss')}</p>
                           </Col>
                           <Col xs={1} className="d-flex align-items-center">
                              <span>{gp?.userPrediction?.total_points || '-'}</span>
                           </Col>
                        </Row>
                     </ListGroup.Item>
                  );
               })}
         </ListGroup>
      </Stack>
   );
};

export default Home;
