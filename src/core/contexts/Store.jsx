import React, { useEffect } from 'react';
import { API_DRIVERS } from '../endpoints/endpoints';
import { useGet } from '../hooks/useGet';

const initialNavBar = {
   title: 'F1 Predictions',
   leftAction: null,
   leftActioinIcon: null,
   rightAction: null,
   rightActionIcon: null,
   showBottomNav: true,
};

const initialState = {
   drivers: [],
   navbar: initialNavBar,
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
   switch (action.type) {
      case 'SET_DRIVERS':
         return { ...state, drivers: action.payload };
      case 'SET_NAVBAR':
         return { ...state, navbar: { ...state.navbar, ...action.payload } };
      case 'RESET_NAVBAR':
         return { ...state, navbar: initialNavBar };
      default:
         return state;
   }
}

const StoreProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(storeReducer, initialState);

   const { fetch } = useGet(API_DRIVERS, { initialFetch: false });

   useEffect(async () => {
      const drivers = await fetch(API_DRIVERS);
      dispatch({ type: 'SET_DRIVERS', payload: drivers });
   }, [fetch]);

   return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
