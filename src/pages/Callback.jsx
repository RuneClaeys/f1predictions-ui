import { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useStore } from '../core/hooks/useStore';

const Callback = () => {
   const { push } = useHistory();
   const { search } = useLocation();
   const { dispatch } = useStore();

   const state = useMemo(() => new URLSearchParams(search).get('state'), [search]);

   useEffect(() => {
      if (state) {
         localStorage.setItem('access_token', state);
         dispatch({ type: 'SET_ACCESS_TOKEN', payload: state });
         push('/');
      }
   }, [state]);

   return <div>Loading...</div>;
};

export default Callback;
