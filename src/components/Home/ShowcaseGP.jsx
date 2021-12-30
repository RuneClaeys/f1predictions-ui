import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

import { useHistory } from 'react-router';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const ShowcaseGP = ({ showcaseGP, isUpcomming, loading }) => {
   const { push } = useHistory();
   const { t } = useTranslation();

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
                        {t('home.upcomming-gp', { name: showcaseGP.name })}
                        <strong>{format(new Date(showcaseGP.qualifying_start_timestamp), 'dd/MM HH:mm')}</strong>!
                     </Card.Text>
                  ) : showcaseGP?.user_prediction ? (
                     <Card.Text>{t('home.passed-gp-and-result', { name: showcaseGP.name })}</Card.Text>
                  ) : (
                     <Card.Text>{t('home.passed-gp', { name: showcaseGP.name })}</Card.Text>
                  )}

                  {isUpcomming && !showcaseGP?.user_prediction ? (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        {t('home.enter-prediction')}
                     </Button>
                  ) : !!showcaseGP?.user_prediction && new Date(showcaseGP.qualifying_start_timestamp) > new Date() ? (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        {t('home.edit-prediction')}
                     </Button>
                  ) : (
                     <Button onClick={() => push('/result/' + showcaseGP.id)} variant="primary" type="button">
                        {t('home.show-results')}
                     </Button>
                  )}
               </Card.Body>
            )
         )}
      </Card>
   );
};

export default ShowcaseGP;
