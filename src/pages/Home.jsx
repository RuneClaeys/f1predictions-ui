import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';

const Home = () => {
   return (
      <Stack gap={2}>
         <Card>
            <Card>
               <Card.Body>
                  <Card.Title>Mexican GP</Card.Title>
                  <Card.Text>
                     Next up is the Mexican GP, who's going to win? Submit your predictions before <strong>06/11 12:00</strong>!
                  </Card.Text>
                  <Button variant="primary">Enter predictions</Button>
               </Card.Body>
            </Card>
         </Card>
      </Stack>
   );
};

export default Home;
