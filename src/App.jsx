import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './core/contexts/Auth';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PredictionForm from './pages/PredictionForm';
import Result from './pages/Result';
import Leaderboard from './pages/Leaderboard';

import { StoreContext, StoreProvider } from './core/contexts/Store';
import Navbar from './components/Navbar';
import BottomNavBar from './components/BottomNavBar';

const App = () => {
   return (
      <BrowserRouter>
         <AuthProvider>
            <StoreProvider>
               <StoreContext.Consumer>
                  {({ state }) => (
                     <Stack gap={3}>
                        <div className="sticky-top">
                           <Navbar />
                        </div>
                        <Container className="h-100" style={{ minHeight: 'calc(100vh - 134px)' }}>
                           <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/prediction/:id" component={PredictionForm} />
                              <Route exact path="/result/:id" component={Result} />
                              <Route exact path="/leaderboard" component={Leaderboard} />
                              <Route path="/signin" component={SignIn} />
                              <Route path="/signup" component={SignUp} />
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
         </AuthProvider>
      </BrowserRouter>
   );
};

export default App;
