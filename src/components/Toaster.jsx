import { useStore } from '../core/hooks/useStore';

import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { useMemo, useCallback } from 'react';

const Toaster = () => {
   const { state, dispatch } = useStore();
   const { notifications } = state;

   const notification = useMemo(
      () => (notifications.length > 0 ? notifications.reverse()[notifications.length - 1] : null),
      [notifications]
   );

   const removeToast = useCallback(
      (notification) => {
         dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
      },
      [dispatch]
   );

   return (
      <ToastContainer>
         <Toast
            show={!!notification}
            autohide
            delay={notification?.delay || 5000}
            onClose={() => removeToast(notification)}
            bg={notification?.type || 'primary'}
            className="text-white"
         >
            <Toast.Body>
               <div className="d-flex justify-content-between align-items-center">
                  <span>{notification?.text}</span>
                  <i onClick={() => removeToast(notification)} className="fas fa-times text-white"></i>
               </div>
            </Toast.Body>
         </Toast>
      </ToastContainer>
   );
};

export default Toaster;
