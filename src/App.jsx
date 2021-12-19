import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PredictionForm from './pages/PredictionForm';
import Result from './pages/Result';
import Leaderboard from './pages/Leaderboard';

import { StoreContext, StoreProvider } from './core/contexts/Store';
import Navbar from './components/Navbar';
import BottomNavBar from './components/BottomNavBar';
import Admin from './pages/Admin';
import ResultsForm from './pages/ResultsForm';

const App = () => {
   return (
      <BrowserRouter>
         <StoreProvider>
            <StoreContext.Consumer>
               {({ state }) => (
                  <Stack gap={3}>
                     <div className="sticky-top yeet">
                        <Navbar />
                     </div>
                     <Container className="h-100" style={{ minHeight: 'calc(100vh - 134px)' }}>
                        <Switch>
                           <Route path="/login" component={SignIn} />

                           <Route exact path="/" component={Home} />
                           <Route path="/prediction/:id" component={PredictionForm} />
                           <Route path="/result/:id" component={Result} />
                           <Route path="/leaderboard" component={Leaderboard} />
                           <Route path="/admin" component={Admin} />
                           <Route path="/admin/result/:id" component={ResultsForm} />
                           <Route exact path="*" render={() => <Redirect to="/" />} />
                        </Switch>
                     </Container>
                     {state.navbar.showBottomNav && (
                        <div className="position-sticky" style={{ bottom: '0', width: '100vw' }}>
                           <BottomNavBar />
                        </div>
                     )}
                  </Stack>
               )}
            </StoreContext.Consumer>
         </StoreProvider>
      </BrowserRouter>
   );
};

export default App;
