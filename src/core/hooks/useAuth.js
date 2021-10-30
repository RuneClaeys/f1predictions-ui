import React from 'react';
import { AuthContext } from '../contexts/Auth';

export function useAuth() {
   const context = React.useContext(AuthContext);
   if (!context) {
      throw Error('AuthContext must be used within a AuthProvider');
   }

   return context;
}
