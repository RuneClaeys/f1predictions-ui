import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useCallback } from 'react';

const Settings = () => {
   const logout = useCallback(() => {
      window.location.replace(`${import.meta.env.VITE_API_BASE_URL}/logout`);
   }, []);

   return (
      <Stack gap={3}>
         <div>
            <h4>Application</h4>
         </div>
         <div>
            <h4>Account</h4>
            <Button style={{ width: '200px' }} onClick={logout}>
               Log out
            </Button>
         </div>
      </Stack>
   );
};

export default Settings;
