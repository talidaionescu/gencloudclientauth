import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerElements } from './configs/registerGUXComponents';
import './configs/i18n';

registerElements();
console.log('public url: ', process.env.REACT_APP_PUBLIC_URL);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading i18n</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
