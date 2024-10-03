import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const Component = React.lazy(() => import('react-remote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Component />
            </h1>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
