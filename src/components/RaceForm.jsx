import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useStore } from '../core/hooks/useStore';

const RaceForm = ({ handleChange, errors, values, disabled, onNext }) => {
   const { drivers } = useStore().state;

   return (
      <div className="d-flex flex-column" style={{ paddingBottom: '80px' }}>
         <h2>Race</h2>

         {[...Array(10)].map((_, i) => {
            const count = i + 1;
            return (
               <Form.Group key={`RACE_${count}`} className="mb-3">
                  <Form.Label>Position {count}</Form.Label>
                  <Form.Control
                     as="select"
                     name={`RACE_${count}`}
                     value={values[`RACE_${count}`]}
                     disabled={disabled}
                     onChange={handleChange}
                     isInvalid={!!errors[`RACE_${count}`]}
                  >
                     <option>Choose a driver</option>
                     {drivers.map((driver) => {
                        return (
                           <option key={driver.id} value={driver.id}>
                              {`${driver.first_name} ${driver.last_name}`}
                           </option>
                        );
                     })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors[`RACE_${count}`]}</Form.Control.Feedback>
               </Form.Group>
            );
         })}

         <div className="d-flex p-4 w-100 flex-column position-fixed bg-white" style={{ bottom: 0, left: 0 }}>
            <Button onClick={onNext} variant="primary px-5" type="button" disabled={disabled}>
               <span className="me-3">Fastest lap & First DNF</span>
               <i className="fas fa-arrow-right"></i>
            </Button>
         </div>
      </div>
   );
};

export default RaceForm;
