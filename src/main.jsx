import React from 'react';
import './scss/base.scss';
import App from './App';

import './core/interceptors/http.interceptor';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './core/contexts/Store';

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

registerRoute(
   new RegExp(`^${import.meta.env.VITE_API_BASE_URL}/.*`),
   new CacheFirst({ plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })] })
);

Workbox.ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <StoreProvider>
            <App />
         </StoreProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);
