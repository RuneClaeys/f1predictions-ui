import { Card, Button, Placeholder } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { format } from 'date-fns';
import { fromUnixTime } from 'date-fns';

const ShowcaseGP = ({ showcaseGP, isUpcomming, loading }) => {
   const { push } = useHistory();

   return (
      <Card>
         {/* {loading ? (
            <Card.Body>
               <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={8} />
               </Placeholder>
               <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={10} />
                  <Placeholder xs={6} />
                  <Placeholder xs={8} />
               </Placeholder>
            </Card.Body>
         ) : ( */}
         <Card.Body>
            <Card.Title>{showcaseGP.name}</Card.Title>
            {isUpcomming ? (
               <Card.Text>
                  Next up is the {showcaseGP.name}, who's going to win? Submit your predictions before{' '}
                  <strong>{format(fromUnixTime(showcaseGP.qualifying_start_timestamp), 'dd/MM HH:mm')}</strong>!
               </Card.Text>
            ) : (
               <Card.Text>The {showcaseGP.name} has passed. Did you predict the outcome? Check your results now!</Card.Text>
            )}

            {isUpcomming ? (
               <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                  Enter predictions
               </Button>
            ) : (
               <Button onClick={() => push('/result/' + showcaseGP.id)} variant="primary" type="button">
                  View results
               </Button>
            )}
         </Card.Body>
         {/* )} */}
      </Card>
   );
};

export default ShowcaseGP;
