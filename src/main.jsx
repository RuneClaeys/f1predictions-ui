import React from 'react';
import ReactDOM from 'react-dom';
import './scss/base.scss';
import App from './App';

import './core/interceptors/auth.interceptor';

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);
