import axios from 'axios';

axios.interceptors.request.use(
   function (config) {
      config.withCredentials = true;
      config.headers = {
         ...config.headers,
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'crossorigin': true
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
         // localStorage.setItem('bearerToken', '');
         // window.location.reload();
         window.location.replace(window.location.origin + `/login?redirect_uri=${window.location.href}`);
      }
      return Promise.reject(error);
   }
);
