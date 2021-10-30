import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { API_USER_SIGN_IN } from '../core/endpoints/endpoints';
import { useAuth } from '../core/hooks/useAuth';

const SignIn = () => {
   const [user, setUser] = React.useState({ username: '', password: '' });
   const [loading, setLoading] = React.useState(false);

   const { setToken } = useAuth();
   const { push } = useHistory();

   async function handleSignIn(event) {
      event.preventDefault();

      if (user.username && user.password) {
         setLoading(true);
         await fetch(`${import.meta.env.VITE_API_BASE_URL}${API_USER_SIGN_IN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
         })
            .then(async (response) => await response.text())
            .then((token) => {
               setToken(token);
               setLoading(false);
               push('/');
            });
      }
   }

   return (
      <Form onSubmit={handleSignIn}>
         <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
               value={user.username}
               disabled={loading}
               placeholder="Enter email or username"
               onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
               value={user.password}
               disabled={loading}
               type="password"
               placeholder="Password"
               onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
         </Form.Group>

         <div className="d-flex flex-column align-items-center mt-5">
            <Button disabled={loading} variant="primary px-5" type="submit">
               <span className="px-5"> Sign in</span>
            </Button>
            <NavLink disabled={loading} className="mt-2" to="/signup">
               <small> Need an account? Sign up!</small>
            </NavLink>
         </div>
      </Form>
   );
};

export default SignIn;
