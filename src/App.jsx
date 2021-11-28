import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './core/contexts/Auth';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PredictionForm from './pages/PredictionForm';

import { StoreProvider } from './core/contexts/Store';
import Navbar from './components/Navbar';

const App = () => {
   return (
      <BrowserRouter>
         <AuthProvider>
            <StoreProvider>
               <Stack gap={3} style={{ maxHeight: '100vh' }} className="view overflow-auto ">
                  <div className="sticky-top">
                     <Navbar />
                  </div>
                  <Container>
                     <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/prediction/:id" component={PredictionForm} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                     </Switch>
                  </Container>
               </Stack>
            </StoreProvider>
         </AuthProvider>
      </BrowserRouter>
   );
};

export default App;
