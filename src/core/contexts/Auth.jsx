import React from 'react';
import { useHistory } from 'react-router-dom';

const initialState = {
   user: null,
   token: '',
};

const AuthContext = React.createContext();

function authReducer(state, action) {
   switch (action.type) {
      case 'SET_BEARER_TOKEN':
         return { ...state, token: action.payload };
      default:
         return state;
   }
}

const AuthProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(authReducer, initialState);
   const { push } = useHistory();

   const checkAuth = React.useCallback(() => {
      const token = localStorage.getItem('bearerToken');

      if (!token) return push('/signin');
      dispatch({ type: 'SET_BEARER_TOKEN', payload: token });
   }, []);

   const setToken = React.useCallback((token) => {
      localStorage.setItem('bearerToken', token);
      dispatch({ type: 'SET_BEARER_TOKEN', payload: token });
   }, []);

   React.useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   return <AuthContext.Provider value={{ state, dispatch, checkAuth, setToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
