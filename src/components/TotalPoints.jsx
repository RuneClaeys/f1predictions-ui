import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';

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
                  ) : results.qualifying_points != undefined ? (
                     <span>{results.qualifying_points}</span>
                  ) : (
                     <span>-</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Race</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : results.race_points != null ? (
                     <span>{results.race_points}</span>
                  ) : (
                     <span>-</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Other</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : results.other_points != undefined ? (
                     <span>{results.other_points}</span>
                  ) : (
                     <span>-</span>
                  )}
               </Col>
               <Col className="text-center d-flex flex-column">
                  <strong>Total</strong>
                  {loading ? (
                     <Placeholder as="span" animation="glow">
                        <Placeholder className="rounded-1" xs={8} />
                     </Placeholder>
                  ) : results.total_points != null ? (
                     <span>{results.total_points}</span>
                  ) : (
                     <span>-</span>
                  )}
               </Col>
            </Row>
         </Card.Body>
      </Card>
   );
};

export default TotalPoints;
