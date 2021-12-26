import React from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useLocation } from 'react-router-dom';
import { useNavbar } from '../core/hooks/useNavbar';

const SignIn = () => {
   const search = useLocation().search;

   const redirectURI = useMemo(() => new URLSearchParams(search).get('redirect_uri'), [search]);

   const handleSignIn = useCallback(() => {
      window.location.replace(`${import.meta.env.VITE_API_BASE_URL}/login?redirect_uri=${encodeURIComponent(redirectURI)}`);
   }, [redirectURI]);

   const navbar = useMemo(
      () => ({
         title: 'Sign in',
         showBottomNav: false,
      }),
      []
   );

   useNavbar(navbar);

   return (
      <Stack className="display:flex; align-items-center p-4 mt-4">
         <center>
            <h3 className="mb-4">Welcome to F1 Predictions</h3>
         </center>

         <center className="mb-5 pb-4">
            Please login using your Google account by clicking the button below.
            <br />
         </center>
         <Button onClick={handleSignIn} variant="primary w-100 mb-2">
            <center>
               <span>Login with Google</span>
            </center>
         </Button>
         <center>
            <small> We'll never share your data with anyone.</small>
         </center>
      </Stack>
   );
};

export default SignIn;
