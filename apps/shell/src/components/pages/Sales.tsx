import React, { Suspense } from 'react';

const SalesComponent = React.lazy(() => import('sales-remote/Module'));

const Sales: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <SalesComponent />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Sales;
