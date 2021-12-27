import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PredictionForm from './pages/PredictionForm';
import Result from './pages/Result';
import Leaderboard from './pages/Leaderboard';

import Navbar from './components/Navbar';
import BottomNavBar from './components/BottomNavBar';
import Admin from './pages/Admin';
import ResultsForm from './pages/ResultsForm';
import Toaster from './components/Toaster';
import { useStore } from './core/hooks/useStore';
import { useGet } from './core/hooks/useGet';
import { useEffect } from 'react';
import { API_DRIVERS, API_GRAND_PRIX, API_SEASONS } from './core/endpoints/endpoints';

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
      <>
         <Stack style={{ width: '100vw' }}>
            <div className="sticky-top">
               <Navbar />
            </div>
            <Container className="my-3" style={{ minHeight: `calc(100vh - 134px)` }}>
               <Switch>
                  <Route path="/login" component={SignIn} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/prediction/:id" component={PredictionForm} />
                  <Route exact path="/result/:id" component={Result} />
                  <Route exact path="/leaderboard" component={Leaderboard} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/admin/result/:id" component={ResultsForm} />
                  <Route exact path="*" render={() => <Redirect to="/" />} />
               </Switch>
            </Container>
            {state.navbar.showBottomNav && (
               <div className="position-sticky" style={{ bottom: '0', width: '100vw' }}>
                  <BottomNavBar />
               </div>
            )}
         </Stack>
         <div
            className="fixed-bottom"
            style={{ bottom: '70px', left: '50%', transform: 'translateX(-50%)', width: '90vw', maxWidth: '600px' }}
         >
            <Toaster />
         </div>
      </>
   );
};

export default App;
