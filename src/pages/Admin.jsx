import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useStore } from '../core/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { useMemo } from 'react';
import { useNavbar } from '../core/hooks/useNavbar';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { format } from 'date-fns';
import { useDelete } from '../core/hooks/useDelete';
import { API_GRAND_PRIX, API_SEASONS } from '../core/endpoints/endpoints';

const Admin = () => {
   const [gp, setGP] = useState();
   const { state, dispatch } = useStore();
   const { current_season, grandPrix } = state;
   const { push } = useHistory();

   const navBarOptions = useMemo(() => ({ title: 'Admin' }), []);
   useNavbar(navBarOptions);

   const { fetch, loading } = useDelete();

   async function deleteGP(gp) {
      if (confirm('Delete ' + gp.name)) {
         await fetch(`${API_GRAND_PRIX}/${gp.id}`);
         await fetchGet(`${API_SEASONS}/${current_season.id}${API_GRAND_PRIX}`).then((grandPrix) =>
            dispatch({
               type: 'SET_GRAND_PRIX',
               payload: grandPrix.sort((a, b) => new Date(a.qualifying_start_timestamp) - new Date(b.qualifying_start_timestamp)),
            })
         );
      }
   }

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

            <div>
               <div className="d-flex justify-content-between">
                  <h5>Change GP's</h5>
                  <button onClick={() => push('/admin/add-gp')} type="button" class="btn btn-link">
                     Voeg GP toe
                  </button>
               </div>

               <ListGroup as="ol">
                  {grandPrix.map((gp) => {
                     return (
                        <ListGroup.Item key={gp.id} as="li" className="d-flex justify-content-between align-items-start p-0">
                           <div className="d-flex align-items-center w-100 text-decoration-none text-black px-2">
                              <strong className="text-nowrap p-2">{gp.event}</strong>

                              <div className="d-flex flex-column p-2 flex-grow-1">
                                 <h6>{gp.name}</h6>
                                 <div className="d-flex flex-row">
                                    <div className="d-flex flex-column flex-grow-1">
                                       <small>Qualifying</small>
                                       <small className="m-0">{format(gp?.qualifying_start_timestamp, 'dd/MM/yyyy HH:mm')}</small>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                       <small>Race</small>
                                       <small className="m-0">{format(gp?.race_start_timestamp, 'dd/MM/yyyy HH:mm')}</small>
                                    </div>
                                 </div>
                              </div>
                              <NavLink disabled={loading} to={'/admin/change-gp/' + gp.id} className="p-2 m-0 text-black">
                                 <i className="fas fa-pen"></i>
                              </NavLink>
                              <button disabled={loading} onClick={() => deleteGP(gp)} className="btn p-2 m-0 text-black">
                                 <i className="fas fa-trash"></i>
                              </button>
                           </div>
                        </ListGroup.Item>
                     );
                  })}
               </ListGroup>
            </div>
         </Stack>
      </div>
   );
};

export default Admin;
