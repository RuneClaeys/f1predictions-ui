import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { format } from 'date-fns';

const ShowcaseGP = ({ showcaseGP, isUpcomming }) => {
   const { push } = useHistory();

   return (
      <Card>
         <Card.Body>
            <Card.Title>{showcaseGP.name}</Card.Title>
            {isUpcomming ? (
               <Card.Text>
                  Next up is the {showcaseGP.name}, who's going to win? Submit your predictions before{' '}
                  <strong>{format(new Date(showcaseGP.date), 'dd/MM HH:mm')}</strong>!
               </Card.Text>
            ) : (
               <Card.Text>The {showcaseGP.name} has passed. Did you predict the outcome? Check your results now!</Card.Text>
            )}

            {isUpcomming ? (
               <Button onClick={() => push('/prediction/c6498159-c5a8-48d2-9511-ae8bb2093335')} variant="primary" type="button">
                  Enter predictions
               </Button>
            ) : (
               <Button onClick={() => push('/result/9876465465465442435')} variant="primary" type="button">
                  View results
               </Button>
            )}
         </Card.Body>
      </Card>
   );
};

export default ShowcaseGP;
