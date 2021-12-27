import { format } from 'date-fns';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

const GrandPrixHistory = ({ overview, loading }) => {
   return (
      <div>
         <h5 className="mb-3">History</h5>
         {loading ? (
            <ListGroup as="ol">
               {[...Array(5)].map((_, i) => (
                  <ListGroup.Item key={i} as="li" className="d-flex justify-content-between align-items-start">
                     <Row className="w-100">
                        <Placeholder className="d-flex align-items-center justify-content-center" xs={2} as={Col} animation="glow">
                           <Placeholder className="rounded-1" xs={12} />
                        </Placeholder>
                        <Placeholder xs={9} as={Col} animation="glow">
                           <Placeholder className="rounded-1" xs={8} />
                           <Placeholder className="rounded-1" xs={10} />
                        </Placeholder>
                        <Placeholder as={Col} animation="glow" xs={1} className="d-flex align-items-center">
                           <Placeholder className="rounded-1" xs={12} style={{ width: '20px' }} />
                        </Placeholder>
                     </Row>
                  </ListGroup.Item>
               ))}
            </ListGroup>
         ) : (
            <ListGroup as="ol" reversed>
               {overview.grand_prix
                  .filter((gp) => gp.qualifying_start_timestamp < new Date())
                  .map((gp, i) => {
                     return (
                        <ListGroup.Item key={gp.id} as="li" className="d-flex justify-content-between align-items-start">
                           <NavLink to={'/result/' + gp.id} className="w-100 text-decoration-none text-black">
                              <div className="row align-items-center">
                                 <strong className="col text-nowrap">{gp.event}</strong>

                                 <div className="col-7 d-flex flex-column">
                                    <h6>{gp.name}</h6>
                                    <small className="m-0">{format(gp.qualifying_start_timestamp, 'dd/MM/yyyy HH:mm:ss')}</small>{' '}
                                 </div>
                                 <p className="col-2  m-0">{gp?.user_prediction?.total_points || '-'}</p>
                              </div>
                           </NavLink>
                        </ListGroup.Item>
                     );
                  })}
            </ListGroup>
         )}
      </div>
   );
};

export default GrandPrixHistory;
