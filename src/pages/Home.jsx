import React from 'react';
import { Button, Card, ListGroup, Stack, Badge, Row, Col } from 'react-bootstrap';

const Home = () => {
   return (
      <Stack gap={3}>
         <Card>
            <Card.Body>
               <Card.Title>Mexican GP</Card.Title>
               <Card.Text>
                  Next up is the Mexican GP, who's going to win? Submit your predictions before <strong>06/11 12:00</strong>!
               </Card.Text>
               <Button variant="primary">Enter predictions</Button>
            </Card.Body>
         </Card>

         <Card>
            <Card.Body>
               <Row>
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
               </Row>
            </Card.Body>
         </Card>

         <ListGroup as="ol" reversed>
            {[...Array(10)].map((_, i) => {
               return (
                  <ListGroup.Item key={i} as="li" className="d-flex justify-content-between align-items-start">
                     <Row className="w-100">
                        <Col className="d-flex align-items-center" xs={2}>
                           <strong>18</strong>
                        </Col>
                        <Col xs={8}>
                           <h6 className="p-0 mb-1">United States GP</h6>
                           <p className="m-0">Sun 7 Nov</p>
                        </Col>
                        <Col xs={2} className="d-flex align-items-center" xs={2}>
                           222
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
