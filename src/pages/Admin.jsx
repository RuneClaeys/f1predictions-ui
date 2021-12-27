import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useStore } from '../core/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { useMemo } from 'react';
import { useNavbar } from '../core/hooks/useNavbar';

const Admin = () => {
   const [gp, setGP] = useState();
   const { grandPrix } = useStore().state;
   const { push } = useHistory();

   const navBarOptions = useMemo(() => ({ title: 'Admin' }), []);
   useNavbar(navBarOptions);

   return (
      <div className="form-container">
         <Stack gap={4}>
            <h4>Manage application</h4>

            <div>
               <h5>Enter a GP result</h5>
               <div className="row">
                  <Form.Group className="col-7">
                     <Form.Control as="select" name={`gp`} value={gp} onChange={(e) => setGP(e.target.value)}>
                        <option>Choose GP</option>
                        {grandPrix.map((gp) => {
                           return (
                              <option key={gp.id} value={gp.id}>
                                 {gp.name}
                              </option>
                           );
                        })}
                     </Form.Control>
                  </Form.Group>
                  <Button disabled={!gp} className="col-4" onClick={() => push('/admin/result/' + gp)}>
                     Enter
                  </Button>
               </div>
            </div>
         </Stack>
      </div>
   );
};

export default Admin;
