import React from 'react';

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
   seasons: [],
   current_season: null,
   notifications: [],
   navbar: initialNavBar,
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
   switch (action.type) {
      case 'SET_DRIVERS':
         return { ...state, drivers: action.payload };
      case 'SET_GRAND_PRIX':
         return { ...state, grandPrix: action.payload };
      case 'SET_SEASONS':
         return { ...state, seasons: action.payload };
      case 'SET_CURRENT_SEASON':
         return { ...state, current_season: action.payload };
      case 'SET_NAVBAR':
         return { ...state, navbar: { ...state.navbar, ...action.payload } };
      case 'RESET_NAVBAR':
         return { ...state, navbar: initialNavBar };
      case 'NOTIFY':
         return { ...state, notifications: [...state.notifications, action.payload] };
      case 'REMOVE_NOTIFICATION':
         return { ...state, notifications: state.notifications.filter((n) => n.id != action.payload) };
      default:
         return state;
   }
}

const StoreProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(storeReducer, initialState);

   return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
