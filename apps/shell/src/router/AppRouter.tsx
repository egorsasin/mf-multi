import React from 'react';

import Home from '../components/pages/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Parts from '../components/pages/Parts';
import Sales from '../components/pages/Sales';

const AppRouter: React.FC = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/salesInventory', element: <Parts /> },
    { path: '/partsService', element: <Sales /> },
  ];
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Link to="/">Dashboard</Link>
        <Link to="/salesInventory">Sales Inventory</Link>
        <Link to="/partsService">Parts Service</Link>
      </nav>

      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
