import axios from 'axios';

axios.interceptors.request.use(
   function (config) {
      const token = localStorage.getItem('bearerToken');
      if (!token) {
         return window.location.reload();
      }

      config.headers = {
         ...config.headers,
         Authorization: `Bearer ${token}`,
         // Accept: 'application/json',
         'Content-Type': 'application/json',
      };
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

axios.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      if (error.response.status === 401) {
         localStorage.setItem('bearerToken', '');
         window.location.reload();
      }
      return Promise.reject(error);
   }
);
