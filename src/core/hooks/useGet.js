import axios from 'axios';
import React from 'react';

export function useGet(url, { initialFetch = true, initialFetchOptions = {}, initialValue = null } = {}) {
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);
   const [data, setData] = React.useState(initialValue);

   const fetch = React.useCallback(
      async (fetchOptions) => {
         setLoading(true);

         return await axios
            .get(`${import.meta.env.VITE_API_BASE_URL}${url}`, fetchOptions)
            .then((response) => response.data)
            .then((response) => {
               setData(response);
               return response;
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
      },
      [url]
   );

   React.useEffect(() => {
      if (initialFetch) {
         fetch(initialFetchOptions);
      }
   }, []);

   return { loading, data, error, fetch, setError, setLoading };
}
