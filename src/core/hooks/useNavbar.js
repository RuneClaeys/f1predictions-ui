import { useEffect } from 'react';
import { useStore } from './useStore';

export function useNavbar(options) {
   const { dispatch } = useStore();

   useEffect(() => {
      dispatch({
         type: 'SET_NAVBAR',
         payload: options,
      });

      return () => {
         dispatch({
            type: 'RESET_NAVBAR',
         });
      };
   }, []);
}
