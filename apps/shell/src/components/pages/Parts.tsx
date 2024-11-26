import React, { Suspense } from 'react';

import ErrorBoundary from '../error-boundary/ErrorBoundary';
import ClientOnly from '../client-only/ClientOnly';

const PartsComponent = React.lazy(() => import('react-remote/Module'));

const Parts: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientOnly>
              <ErrorBoundary>
                <PartsComponent />
              </ErrorBoundary>
            </ClientOnly>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Parts;
