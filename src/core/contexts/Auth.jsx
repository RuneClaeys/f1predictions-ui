import React from 'react';

const initialState = {
   user: null,
   token: '',
};

const StoreContext = React.createContext();

function storeReducer(state, action) {
   switch (action.type) {
      case 'SET_GRAND_PRIXES':
         return { ...state, grandPrixes: action.payload };
      default:
         return state;
   }
}

const StoreProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(storeReducer, initialState);

   return <StoreContext.Provider value={{ state, dispatch }}>{{ children }}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
