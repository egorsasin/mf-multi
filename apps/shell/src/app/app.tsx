import * as React from 'react';

import AppRouter from '../router/AppRouter';

export function App() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <h1>Dealer HUB</h1>
      </header>

      <AppRouter />
    </div>
  );
}

export default App;
