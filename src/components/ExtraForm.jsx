import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useStore } from '../core/hooks/useStore';

const ExtraForm = ({ handleChange, errors, values, disabled }) => {
   const { drivers } = useStore().state;

   return (
      <div className="d-flex flex-column" style={{ paddingBottom: '80px' }}>
         <h2>Extra</h2>

         <Form.Group key={`FASTEST_LAP`} className="mb-3">
            <Form.Label>Fastest lap</Form.Label>
            <Form.Control
               as="select"
               name={`FASTEST_LAP`}
               value={values[`FASTEST_LAP`]}
               disabled={disabled}
               onChange={handleChange}
               isInvalid={!!errors[`FASTEST_LAP`]}
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
            <Form.Control.Feedback type="invalid">{errors[`FASTEST_LAP`]}</Form.Control.Feedback>
         </Form.Group>

         <Form.Group key={`FIRST_DNF`} className="mb-3">
            <Form.Label>First dnf</Form.Label>
            <Form.Control
               as="select"
               name={`FIRST_DNF`}
               value={values[`FIRST_DNF`]}
               disabled={disabled}
               onChange={handleChange}
               isInvalid={!!errors[`FIRST_DNF`]}
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
            <Form.Control.Feedback type="invalid">{errors[`FIRST_DNF`]}</Form.Control.Feedback>
         </Form.Group>

         <div className="d-flex p-4 w-100 flex-column position-fixed bg-white" style={{ bottom: 0, left: 0 }}>
            <Button variant="primary" type="submit" disabled={disabled}>
               <span className="me-3">Submit prediction</span>
            </Button>
         </div>
      </div>
   );
};

export default ExtraForm;
