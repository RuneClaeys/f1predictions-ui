import React from 'react';
import './scss/base.scss';
import App from './App';

import './core/interceptors/http.interceptor';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './core/contexts/Store';

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
