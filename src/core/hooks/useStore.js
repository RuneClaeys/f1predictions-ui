import React from 'react';
import { StoreContext } from '../contexts/Store';

export function useStore() {
   const context = React.useContext(StoreContext);
   if (!context) {
      throw Error('StoreContext must be used within a StoreProvider');
   }

   return context;
}
