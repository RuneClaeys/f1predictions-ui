import React, { useEffect, useMemo } from 'react';
import { Card, ListGroup, Stack, Row, Col } from 'react-bootstrap';
import { format, differenceInDays } from 'date-fns';

import { SEASON } from '../core/data/Season';
import ShowcaseGP from '../components/ShowcaseGP';
import { useStore } from '../core/hooks/useStore';

const Home = () => {
   const { dispatch } = useStore();

   const prevGP = useMemo(() => {
      const dates = SEASON.grandPrixs.filter((gp) => new Date(gp.date) < new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));
      return dates[dates.length - 1];
   }, []);

   const nextGP = useMemo(() => {
      const dates = SEASON.grandPrixs.filter((gp) => new Date(gp.date) > new Date());
      return dates[dates.length - 1];
   }, []);

   const showcaseGP = useMemo(() => {
      if (nextGP && differenceInDays(new Date(nextGP.date), new Date()) <= 3) {
         return nextGP;
      }
      return prevGP;
   }, [prevGP, nextGP]);

   useEffect(() => {
      dispatch({
         type: 'RESET_NAVBAR',
      });
   }, []);

   return (
      <Stack gap={3} className="mb-5">
         <ShowcaseGP showcaseGP={showcaseGP} isUpcomming={showcaseGP.id === nextGP?.id} />

         <h5 className="mb-0">Season results</h5>
         <Card bg="secondary" text="white">
            <Card.Body>
               <Row>
                  <Col className="text-center d-flex flex-column">
                     <strong>Quali</strong>
                     <span>{SEASON.total_qualifying}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Race</strong>
                     <span>{SEASON.total_race}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Other</strong>
                     <span>{SEASON.total_other}</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Total</strong>
                     <span>{SEASON.total}</span>
                  </Col>
               </Row>
            </Card.Body>
         </Card>

         <h5 className="mb-0">History</h5>
         <ListGroup as="ol" reversed>
            {SEASON.grandPrixs
               .filter((gp) => new Date(gp.date) < new Date())
               .reverse()
               .map((grandPrix, i) => {
                  return (
                     <ListGroup.Item key={grandPrix.id} as="li" className="d-flex justify-content-between align-items-start">
                        <Row className="w-100">
                           <Col className="d-flex align-items-center justify-content-center" xs={2}>
                              <strong>{grandPrix.event}</strong>
                           </Col>
                           <Col xs={9}>
                              <h6 className="p-0 mb-1">{grandPrix.name}</h6>
                              <p className="m-0">{format(new Date(grandPrix.date), 'dd/MM/yyyy HH:mm:ss')}</p>
                           </Col>
                           <Col xs={1} className="d-flex align-items-center">
                              <span>{grandPrix.result?.total}</span>
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
