import axios from 'axios';
import React from 'react';

export function usePost() {
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);
   const [data, setData] = React.useState(null);

   const fetch = React.useCallback(async (url, body, fetchOptions) => {
      setLoading(true);

      return await axios
         .post(`${import.meta.env.VITE_API_BASE_URL}${url}`, body, fetchOptions)
         .then((response) => response.data)
         .then((response) => {
            setData(response);
            return response;
         })
         .catch((error) => setError(error))
         .finally(() => setLoading(false));
   }, []);

   return { loading, data, error, fetch, setError, setLoading };
}
