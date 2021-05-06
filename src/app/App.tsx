import React from 'react';

import { authenticatorFactory } from '../lib';

import './App.css';

function App () {
  const clientId = 'hi-there-client';
  const auth = authenticatorFactory(clientId, {});
  return (
    <div className="App">
      We have the authenticator for: <span dangerouslySetInnerHTML={{ __html: auth.clientId }} />
    </div>
  );
}

export default App;