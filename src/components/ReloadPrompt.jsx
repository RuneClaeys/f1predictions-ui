import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import React from 'react';

import { useRegisterSW } from 'virtual:pwa-register/react';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ReloadPrompt() {
   const {
      offlineReady: [offlineReady, setOfflineReady],
      needRefresh: [needRefresh, setNeedRefresh],
      updateServiceWorker,
   } = useRegisterSW({
      onRegistered(r) {
         console.log('SW Registered');
      },
      onRegisterError(error) {
         console.log('SW registration error', error);
      },
   });

   const close = () => {
      setOfflineReady(false);
      setNeedRefresh(false);
   };

   return (
      <ToastContainer className="position-fixed " style={{ bottom: '90px', left: '50%', transform: 'translateX(-50%)' }}>
         {needRefresh && (
            <Toast className="d-inline-block m-1 shadow-lg" bg={'light'} onClose={close}>
               <Toast.Header>
                  <img src="/assets/logo.png" height="20px" className="rounded me-2" alt="" />
                  <strong className="me-auto">Update available</strong>
               </Toast.Header>
               <Toast.Body>
                  <p>New content is available, click on update button to get the newest features.</p>
                  <Button onClick={updateServiceWorker} variant="primary">
                     Update
                  </Button>
                  <Button onClick={updateServiceWorker} variant="link" className="text-dark text-decoration-none">
                     Close
                  </Button>
               </Toast.Body>
            </Toast>
         )}
      </ToastContainer>
   );
}

export default ReloadPrompt;
