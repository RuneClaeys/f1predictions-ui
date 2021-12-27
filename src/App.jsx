import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import BottomNavBar from './components/BottomNavBar';
import Toaster from './components/Toaster';
import { useStore } from './core/hooks/useStore';
import { useGet } from './core/hooks/useGet';
import { useEffect } from 'react';
import { API_DRIVERS, API_GRAND_PRIX, API_SEASONS } from './core/endpoints/endpoints';

const Home = React.lazy(() => import('./pages/Home'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const PredictionForm = React.lazy(() => import('./pages/PredictionForm'));
const Result = React.lazy(() => import('./pages/Result'));
const Leaderboard = React.lazy(() => import('./pages/Leaderboard'));
const Admin = React.lazy(() => import('./pages/Admin'));
const Settings = React.lazy(() => import('./pages/Settings'));
const ResultsForm = React.lazy(() => import('./pages/ResultsForm'));

const Fallback = () => {
   return (
      <div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh' }}>
         <Spinner size="lg" animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
         </Spinner>
      </div>
   );
};

const App = () => {
   const { state, dispatch } = useStore();
   const { fetch } = useGet(null, { initialFetch: false });

   useEffect(async () => {
      await fetch(API_DRIVERS).then((drivers) => dispatch({ type: 'SET_DRIVERS', payload: drivers }));
      await fetch(API_GRAND_PRIX).then((grandPrix) => dispatch({ type: 'SET_GRAND_PRIX', payload: grandPrix }));
      await fetch(API_SEASONS).then((seasons) => {
         dispatch({ type: 'SET_SEASONS', payload: seasons });
         dispatch({ type: 'SET_CURRENT_SEASON', payload: seasons.find((season) => season.year == new Date().getFullYear()) });
      });
   }, [fetch]);

   return (
      <Suspense fallback={<Fallback />}>
         <div className="app">
            <Stack style={{ width: '100vw' }}>
               <div className="app__navbar sticky-top">
                  <Navbar />
               </div>
               <Container className="py-3" style={{ minHeight: `calc(100vh - 100px)` }}>
                  <Switch>
                     <Route path="/login" component={SignIn} />
                     <Route exact path="/" component={Home} />
                     <Route exact path="/prediction/:id" component={PredictionForm} />
                     <Route exact path="/result/:id" component={Result} />
                     <Route exact path="/leaderboard" component={Leaderboard} />
                     <Route exact path="/admin" component={Admin} />
                     <Route exact path="/admin/result/:id" component={ResultsForm} />
                     <Route exact path="/settings" component={Settings} />
                     <Route exact path="*" render={() => <Redirect to="/" />} />
                  </Switch>
               </Container>
               {state.navbar.showBottomNav && (
                  <div className="app__bottom-navbar position-sticky" style={{ bottom: '0', width: '100vw' }}>
                     <BottomNavBar />
                  </div>
               )}
            </Stack>
            <div className="app__toaster">
               <Toaster />
            </div>
         </div>
      </Suspense>
   );
};

export default App;
