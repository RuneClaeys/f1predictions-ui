import React, { useEffect } from 'react';
import { API_DRIVERS, API_GRAND_PRIX } from '../endpoints/endpoints';
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
   grandPrix: [],
   navbar: initialNavBar,
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
   switch (action.type) {
      case 'SET_DRIVERS':
         return { ...state, drivers: action.payload };
      case 'SET_GRAND_PRIX':
         return { ...state, grandPrix: action.payload };
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

   useEffect(() => {
      fetch(API_DRIVERS).then((drivers) => dispatch({ type: 'SET_DRIVERS', payload: drivers }));
      // fetch(API_GRAND_PRIX).then((grandPrix) => dispatch({ type: 'SET_GRAND_PRIX', payload: grandPrix }));
   }, [fetch]);

   return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
