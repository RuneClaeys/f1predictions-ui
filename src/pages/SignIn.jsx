import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { API_USER_SIGN_IN } from '../core/endpoints/endpoints';
import { useAuth } from '../core/hooks/useAuth';

import * as yup from 'yup';
import axios from 'axios';

const SignIn = () => {
   const [enableValidation, setEnableValidation] = React.useState(false);
   const [loading, setLoading] = React.useState(false);

   const { setToken } = useAuth();
   const { push } = useHistory();

   async function handleSignIn(user) {
      setLoading(true);

      await axios
         .post(`${import.meta.env.VITE_API_BASE_URL}${API_USER_SIGN_IN}`, user)
         .then((response) => response.data)
         .then((token) => {
            setToken(token);
            setLoading(false);
            push('/');
         })
         .finally(() => setLoading(false));
   }

   return (
      <Formik
         validationSchema={yup.object().shape({
            username: yup.string().required('Required'),
            password: yup.string().required('Required'),
         })}
         validateOnChange={enableValidation}
         validateOnBlur={enableValidation}
         initialValues={{ username: '', password: '' }}
         onSubmit={handleSignIn}
      >
         {({ handleSubmit, handleChange, values, errors }) => (
            <Form
               noValidate
               onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setEnableValidation(true);
               }}
            >
               <Form.Group className="mb-3" controlId="validateUsername">
                  <Form.Label>Username or Email</Form.Label>
                  <Form.Control
                     name="username"
                     value={values.username}
                     disabled={loading}
                     placeholder="Enter email or username"
                     onChange={handleChange}
                     isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
               </Form.Group>

               <Form.Group className="mb-3" controlId="validatePassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     name="password"
                     value={values.password}
                     disabled={loading}
                     type="password"
                     placeholder="Password"
                     onChange={handleChange}
                     isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
               </Form.Group>

               <div className="d-flex flex-column align-items-center mt-5">
                  <Button disabled={loading} variant="primary px-5" type="submit">
                     <span className="px-5"> Sign in</span>
                  </Button>
                  <NavLink disabled={loading} className="mt-2" to="/signin">
                     <small>Need an account? Sign in!</small>
                  </NavLink>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default SignIn;
