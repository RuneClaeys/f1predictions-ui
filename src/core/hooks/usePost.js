import axios from 'axios';
import React from 'react';
import { useStore } from './useStore';

export function usePost() {
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);
   const [data, setData] = React.useState(null);

   const { dispatch } = useStore();

   const fetch = React.useCallback(async (url, body, fetchOptions) => {
      setLoading(true);

      function getMessage(error) {
         let message = 'Er is iets fout gegaan';

         switch (error?.response?.status) {
            case 401:
               return (message = null);
            case 403:
               return (message = 'U hebt geen toegang tot die gegevens');
            default:
               return (message = import.meta.env.MODE === 'prod' ? 'Er is iets fout gegaan' : error?.message);
         }
      }

      return await axios
         .post(`${import.meta.env.VITE_API_BASE_URL}${url}`, body, fetchOptions)
         .then((response) => response.data)
         .then((response) => {
            setData(response);
            return response;
         })
         .catch((error) => {
            setError(error);

            if (error?.response?.status !== 401) {
               dispatch({
                  type: 'NOTIFY',
                  payload: {
                     id: new Date().getTime(),
                     text: getMessage(error),
                     delay: 5000,
                     type: 'danger',
                  },
               });
            }

            return error;
         })
         .finally(() => setLoading(false));
   }, []);

   return { loading, data, error, fetch, setError, setLoading };
}
