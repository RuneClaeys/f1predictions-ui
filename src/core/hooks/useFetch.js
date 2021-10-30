import React from 'react';

export function useFetch({ url, method = 'GET', initialFetch = false }) {
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);
   const [data, setData] = React.useState(null);

   const fetchData = React.useCallback(
      async (fetchOptions) => {
         setLoading(true);

         await fetch(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
            ...fetchOptions,
            method,
            body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : undefined,
            headers: {
               'Content-Type': 'application/json',
            },
         })
            .then((response) => response.json())
            .then((json) => {
               setData(json);
               return json;
            })
            .catch((ex) => setError(ex))
            .finally(() => setLoading(false));
      },
      [url]
   );

   return { loading, data, error, fetchData };
}
