import React, { useEffect } from 'react';
import { API_DRIVERS } from '../endpoints/endpoints';
import { useAuth } from '../hooks/useAuth';
import { useGet } from '../hooks/useGet';

const initialState = {
   grandPrixes: [],
   drivers: [],
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
   switch (action.type) {
      case 'SET_GRAND_PRIXES':
         return { ...state, grandPrixes: action.payload };
      case 'SET_DRIVERS':
         return { ...state, drivers: action.payload };
      default:
         return state;
   }
}

const StoreProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(storeReducer, initialState);

   const { fetch } = useGet(API_DRIVERS, { initialFetch: false });

   const { token } = useAuth().state;

   useEffect(async () => {
      if (token) {
         const drivers = await fetch();
         dispatch({ type: 'SET_DRIVERS', payload: drivers });
      }
   }, [token, fetch]);

   return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
