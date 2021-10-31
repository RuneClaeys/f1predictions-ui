import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { API_USER_SIGN_UP } from '../core/endpoints/endpoints';
import { useAuth } from '../core/hooks/useAuth';
import * as yup from 'yup';
import axios from 'axios';

const SignUp = () => {
   const [enableValidation, setEnableValidation] = React.useState(false);
   const [loading, setLoading] = React.useState(false);

   const { setToken } = useAuth();
   const { push } = useHistory();

   async function handleSignUp(user) {
      let body = { ...user };
      delete body.password_confirm;

      setLoading(true);

      await axios
         .create()
         .post(`${import.meta.env.VITE_API_BASE_URL}${API_USER_SIGN_UP}`, body)
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
            username: yup.string().min(2, 'Too Short!').max(20, 'Too long').required('Required'),
            first_name: yup.string().required('Required'),
            last_name: yup.string().required('Required'),
            password: yup.string().min(2, 'Too Short!').max(20, 'Too long').required('Required'),
            password_confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
         })}
         validateOnChange={enableValidation}
         validateOnBlur={enableValidation}
         initialValues={{ username: '', password: '', password_confirm: '', first_name: '', last_name: '' }}
         onSubmit={handleSignUp}
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

               <Form.Group className="mb-3" controlId="validateFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                     name="first_name"
                     value={values.first_name}
                     disabled={loading}
                     placeholder="First name"
                     onChange={handleChange}
                     isInvalid={!!errors.first_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
               </Form.Group>

               <Form.Group className="mb-3" controlId="validateLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                     name="last_name"
                     value={values.last_name}
                     disabled={loading}
                     placeholder="Last name"
                     onChange={handleChange}
                     isInvalid={!!errors.last_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
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

               <Form.Group className="mb-3" controlId="validatePassword_confirm">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                     name="password_confirm"
                     value={values.password_confirm}
                     disabled={loading}
                     type="password"
                     placeholder="Repeat password"
                     onChange={handleChange}
                     isInvalid={!!errors.password_confirm}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password_confirm}</Form.Control.Feedback>
               </Form.Group>

               <div className="d-flex flex-column align-items-center mt-5">
                  <Button disabled={loading} variant="primary px-5" type="submit">
                     <span className="px-5"> Sign up</span>
                  </Button>
                  <NavLink disabled={loading} className="mt-2" to="/signin">
                     <small> Already have an account? Sign in!</small>
                  </NavLink>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default SignUp;
