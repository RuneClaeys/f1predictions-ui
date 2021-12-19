import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Admin = () => {
   const [gp, setGP] = useState();

   return (
      <Stack gap={4}>
         <h4>Manage application</h4>

         <div>
            <h5>Enter a GP result</h5>
            <div className="row">
               <Form.Group className="col-7">
                  <Form.Control as="select" name={`gp`} value={gp} onChange={(e) => setGP(e.target.value)}>
                     <option>Choose GP</option>
                     {[].map((gp) => {
                        return (
                           <option key={gp.id} value={gp.id}>
                              {gp.name}
                           </option>
                        );
                     })}
                  </Form.Control>
               </Form.Group>
               <Button disabled={!gp} className="col-4" onClick={() => push('/')}>
                  Enter
               </Button>
            </div>
         </div>
      </Stack>
   );
};

export default Admin;
