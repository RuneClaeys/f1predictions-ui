import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from '../../core/hooks/useStore';

const RaceForm = ({ handleChange, errors, values, disabled, onNext, onPrev }) => {
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

         <div className="d-flex p-4 w-100 position-fixed bg-white gap-4" style={{ bottom: 0, left: 0 }}>
            <Button onClick={onPrev} variant="outline-primary" type="button" className="col" disabled={disabled}>
               <i className="fas fa-arrow-left"></i>
               <span className="ms-3">Back</span>
            </Button>
            <Button onClick={onNext} variant="primary" type="button" className="col-7" disabled={disabled}>
               <span className="me-3">Next</span>
               <i className="fas fa-arrow-right"></i>
            </Button>
         </div>
      </div>
   );
};

export default RaceForm;