import React, { Suspense } from 'react';

import ErrorBoundary from '../error-boundary/ErrorBoundary';
import ClientOnly from '../client-only/ClientOnly';

const SalesComponent = React.lazy(() => import('sales/Module'));

const Sales: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientOnly>
              <ErrorBoundary>
                <SalesComponent />
              </ErrorBoundary>
            </ClientOnly>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Sales;
