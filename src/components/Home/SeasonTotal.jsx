import { Card, Col, Placeholder, Row } from 'react-bootstrap';

const SeasonTotal = ({ overview, loading }) => {
   return (
      <>
         <h5 className="mb-0">Season total</h5>
         <Card bg="secondary" text="white">
            <Card.Body>
               <Row>
                  <Col className="text-center d-flex flex-column">
                     <strong>Quali</strong>
                     {loading ? (
                        <Placeholder as="span" animation="glow">
                           <Placeholder className="rounded-1" xs={8} />
                        </Placeholder>
                     ) : (
                        <span>{overview.qualifying_points}</span>
                     )}
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Race</strong>
                     {loading ? (
                        <Placeholder as="span" animation="glow">
                           <Placeholder className="rounded-1" xs={8} />
                        </Placeholder>
                     ) : (
                        <span>{overview.race_points}</span>
                     )}
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Other</strong>
                     {loading ? (
                        <Placeholder as="span" animation="glow">
                           <Placeholder className="rounded-1" xs={8} />
                        </Placeholder>
                     ) : (
                        <span>{overview.other_points}</span>
                     )}
                  </Col>
                  <Col className="text-center d-flex flex-column">
                     <strong>Total</strong>
                     {loading ? (
                        <Placeholder as="span" animation="glow">
                           <Placeholder className="rounded-1" xs={8} />
                        </Placeholder>
                     ) : (
                        <span>{overview.total_points}</span>
                     )}
                  </Col>
               </Row>
            </Card.Body>
         </Card>
      </>
   );
};

export default SeasonTotal;
