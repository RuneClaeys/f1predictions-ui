import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import Home from './pages/Home';

const App = () => {
   return (
      <Stack gap={3} className="view">
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home">
                  <span>Formula 1 predictions</span>
               </Navbar.Brand>
            </Container>
         </Navbar>
         <Container>
            <Home />
         </Container>
      </Stack>
   );
};

export default App;
