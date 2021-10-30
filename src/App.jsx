import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App = () => {
   return (
      <BrowserRouter>
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
               </Switch>
            </Container>
         </Stack>
      </BrowserRouter>
   );
};

export default App;
