import React from 'react';
import { Button, Card, ListGroup, Stack, Badge, Row, Col } from 'react-bootstrap';
import { API_GRAND_PRIX } from '../core/endpoints/endpoints';
import { useGet } from '../core/hooks/useGet';
import { format } from 'date-fns';

const Home = () => {
   const { data: grandPrix, loading: loadingGrandPrix } = useGet(API_GRAND_PRIX, { initialValue: [] });

   if (loadingGrandPrix) {
      return <div>loading...</div>;
   }

   return (
      <Stack gap={3}>
         <Card>
            <Card.Body>
               TODO
               {/* <Card.Title>Mexican GP</Card.Title>
               <Card.Text>
                  Next up is the Mexican GP, who's going to win? Submit your predictions before <strong>06/11 12:00</strong>!
               </Card.Text>
               <Button variant="primary">Enter predictions</Button> */}
            </Card.Body>
         </Card>

         <Card>
            <Card.Body>
               TODO
               {/* <Row>
                  <Col className="text-center d-flex flex-column">
                     <strong>Quali</strong>
                     <span>100</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Race</strong>
                     <span>131</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Other</strong>
                     <span>22</span>
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Total</strong>
                     <span>263</span>
                  </Col>
               </Row> */}
            </Card.Body>
         </Card>

         <ListGroup as="ol" reversed>
            {grandPrix.map((grandPrix) => {
               return (
                  <ListGroup.Item key={grandPrix.id} as="li" className="d-flex justify-content-between align-items-start">
                     <Row className="w-100">
                        <Col className="d-flex align-items-center" xs={2}>
                           <strong>TODO</strong>
                        </Col>
                        <Col xs={8}>
                           <h6 className="p-0 mb-1">{grandPrix.name}</h6>
                           <p className="m-0">{format(new Date(grandPrix.qualifying_start_timestamp), 'dd/MM HH:mm')}</p>
                        </Col>
                        <Col xs={2} className="d-flex align-items-center" xs={2}>
                           TODO
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
