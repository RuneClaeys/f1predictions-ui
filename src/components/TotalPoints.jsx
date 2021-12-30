import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';

const TotalPoints = ({ results, loading, bg = 'primary' }) => {
   const { t } = useTranslation();
   return (
      <Card bg={bg} text="white">
         <Card.Body>
            <Row>
               <Col className="text-center d-flex flex-column">
                  <strong>{t('home.quali')}</strong>
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
                  <strong>{t('global.race')}</strong>
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
                  <strong>{t('global.other')}</strong>
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
                  <strong>{t('global.total')}</strong>
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
