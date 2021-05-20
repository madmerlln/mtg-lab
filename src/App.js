import React from 'react';
import { GlobalStorage } from './context/Global';
import Routes from './routes';

function App() {
  return (
    <GlobalStorage>
      <Routes />
    </GlobalStorage>
  );
}

export default App;
