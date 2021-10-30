import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import Home from './pages/Home';

const App = () => {
   return (
      <Stack gap={3} style={{ maxHeight: '100vh' }} className="view overflow-auto ">
         <Navbar className="sticky-top" bg="primary" variant="dark">
            <Container>
               <Navbar.Brand href="#home">
                  <span>Formula 1 predictions</span>
               </Navbar.Brand>
            </Container>
         </Navbar>
         <Container className="pb-5">
            <Home />
         </Container>
      </Stack>
   );
};

export default App;
