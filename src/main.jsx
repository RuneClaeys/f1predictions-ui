import React from 'react';
import './scss/base.scss';
import App from './App';
import ReactDom from 'react-dom';

import './core/interceptors/http.interceptor';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './core/contexts/Store';

import './core/i18n/i18n';

ReactDom.render(
   <React.StrictMode>
      <BrowserRouter>
         <StoreProvider>
            <App />
         </StoreProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);
