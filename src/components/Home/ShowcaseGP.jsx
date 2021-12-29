import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

import { useHistory } from 'react-router';
import { format } from 'date-fns';

const ShowcaseGP = ({ showcaseGP, isUpcomming, loading }) => {
   const { push } = useHistory();

   return (
      <Card>
         {loading ? (
            <Card.Body>
               <Placeholder as={Card.Title} animation="glow">
                  <Placeholder className="rounded-1" xs={8} />
               </Placeholder>
               <Placeholder as={Card.Text} animation="glow">
                  <Placeholder className="rounded-1" xs={10} />
                  <Placeholder className="rounded-1" xs={6} />
                  <Placeholder className="rounded-1" xs={8} />
               </Placeholder>
               <Placeholder.Button xs={6} aria-hidden="true" />
            </Card.Body>
         ) : (
            showcaseGP && (
               <Card.Body>
                  <Card.Title>{showcaseGP.name}</Card.Title>

                  {isUpcomming ? (
                     <Card.Text>
                        Next up is the {showcaseGP.name}, who's going to win? Submit your predictions before{' '}
                        <strong>{format(new Date(showcaseGP.qualifying_start_timestamp), 'dd/MM HH:mm')}</strong>!
                     </Card.Text>
                  ) : (
                     <Card.Text>The {showcaseGP.name} has passed. Did you predict the outcome? Check your results now!</Card.Text>
                  )}

                  {isUpcomming && !showcaseGP?.user_prediction ? (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        Enter predictions
                     </Button>
                  ) : !!showcaseGP?.user_prediction && new Date(showcaseGP.qualifying_start_timestamp) > new Date() ? (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        Edit prediction
                     </Button>
                  ) : (
                     <Button onClick={() => push('/result/' + showcaseGP.id)} variant="primary" type="button">
                        View results
                     </Button>
                  )}
               </Card.Body>
            )
         )}
      </Card>
   );
};

export default ShowcaseGP;
