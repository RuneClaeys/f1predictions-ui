import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './core/contexts/Auth';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Stack gap={3} style={{ maxHeight: '100vh' }} className="view overflow-auto ">
               <Navbar className="sticky-top" bg="primary" variant="dark">
                  <Container>
                     <Navbar.Brand href="#home">
                        <span>Formula 1 predictions</span>
                     </Navbar.Brand>
                  </Container>
               </Navbar>
               <Container className="pb-5">
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/signin" component={SignIn} />
                     <Route path="/signup" component={SignUp} />
                  </Switch>
               </Container>
            </Stack>
         </AuthProvider>
      </BrowserRouter>
   );
};

export default App;
