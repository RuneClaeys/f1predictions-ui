import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Settings = () => {
   const [locale, setLocale] = useState('en');
   const { push } = useHistory();

   const logout = useCallback(() => {
      caches
         .keys()
         .then(function (names) {
            for (let name of names) {
               if (name.startsWith('workbox-runtime')) {
                  caches.delete(name);
               }
            }
         })
         .finally(() => {
            localStorage.removeItem('access_token');
            push('/signin');
         });
   }, []);

   const changeLocale = useCallback(() => {}, []);

   return (
      <div className="form-container">
         <Stack gap={3}>
            <div>
               <h4>Application</h4>
               <div className="row">
                  <Form.Group className="col-7">
                     <Form.Control as="select" name={`locale`} value={locale} onChange={(e) => setLocale(e.target.value)}>
                        {[
                           { id: 'nl', language: 'Nederlands' },
                           { id: 'en', language: 'English' },
                        ].map((locale) => {
                           return (
                              <option key={locale.id} value={locale.id}>
                                 {locale.language}
                              </option>
                           );
                        })}
                     </Form.Control>
                  </Form.Group>
                  <Button className="col-4" onClick={() => changeLocale()}>
                     Change
                  </Button>
               </div>
            </div>
            <div>
               <h4>Account</h4>
               <Button style={{ width: '200px' }} onClick={logout}>
                  Log out
               </Button>
            </div>
         </Stack>
      </div>
   );
};

export default Settings;
