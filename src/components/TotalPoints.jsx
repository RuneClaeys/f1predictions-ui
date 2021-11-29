import { Card, Col, Placeholder, Row } from 'react-bootstrap';

const TotalPoints = ({ results, loading, bg = 'primary' }) => {
   return (
      <Card bg={bg} text="white">
         <Card.Body>
            <Row>
               <Col className="text-center d-flex flex-column">
                  <strong>Quali</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : (
                     <span>{results.qualifying_points}</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Race</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : (
                     <span>{results.race_points}</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Other</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : (
                     <span>{results.other_points}</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Total</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : (
                     <span>{results.total_points}</span>
                  )}
               </Col>
            </Row>
         </Card.Body>
      </Card>
   );
};

export default TotalPoints;
