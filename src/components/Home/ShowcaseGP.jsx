import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

import { useHistory } from 'react-router';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { nlBE } from 'date-fns/locale';
import { useStore } from '../../core/hooks/useStore';

const ShowcaseGP = ({ showcaseGP, isUpcomming, isActive, loading }) => {
   const { push } = useHistory();
   const { t } = useTranslation();
   const { current_season } = useStore().state;

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
         ) : showcaseGP ? (
            <Card.Body>
               <Card.Title>{showcaseGP.name}</Card.Title>

               {isActive ? (
                  <>
                     <Card.Text className="mb-1">{t('home.passed-gp', { name: showcaseGP.name })}</Card.Text>
                     <div className="d-flex gap-5">
                        <p>
                           {t('home.quali')}: {format(showcaseGP.qualifying_start_timestamp, 'EE dd/MM HH:mm', { locale: nlBE })}
                        </p>
                        <p>Race: {format(showcaseGP.race_start_timestamp, 'EE dd/MM HH:mm', { locale: nlBE })}</p>{' '}
                     </div>
                  </>
               ) : isUpcomming ? (
                  <Card.Text>
                     {t('home.upcomming-gp', { name: showcaseGP.name })}
                     <strong className="ms-1">{format(new Date(showcaseGP.qualifying_start_timestamp), 'dd/MM HH:mm')}</strong>!
                  </Card.Text>
               ) : (
                  <Card.Text>{t('home.passed-gp-and-result', { name: showcaseGP.name })}</Card.Text>
               )}

               {isActive ? (
                  <Button onClick={() => push('/result/' + showcaseGP.id)} variant="primary" type="button">
                     {t('home.show-prediction')}
                  </Button>
               ) : isUpcomming ? (
                  showcaseGP?.user_prediction ? (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        {t('home.edit-prediction')}
                     </Button>
                  ) : (
                     <Button onClick={() => push('/prediction/' + showcaseGP.id)} variant="primary" type="button">
                        {t('home.enter-prediction')}
                     </Button>
                  )
               ) : (
                  <Button onClick={() => push('/result/' + showcaseGP.id)} variant="primary" type="button">
                     {t('home.show-results')}
                  </Button>
               )}
            </Card.Body>
         ) : (
            <Card.Body>
               <Card.Title>{t('global.season-start-title', { year: current_season?.year || '' })}</Card.Title>

               <Card.Text>{t('global.season-start-description')}</Card.Text>
            </Card.Body>
         )}
      </Card>
   );
};

export default ShowcaseGP;
