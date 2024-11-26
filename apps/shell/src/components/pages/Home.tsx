import React, { Suspense } from 'react';

const PartsComponent = React.lazy(() => import('parts/Module'));
const SalesComponent = React.lazy(() => import('sales/Module'));

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <PartsComponent />
            <SalesComponent />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Home;
