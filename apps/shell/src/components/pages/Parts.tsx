import React, { Suspense } from 'react';

import ErrorBoundary from '../error-boundary/ErrorBoundary';

const PartsComponent = React.lazy(() => import('parts/Module'));

const Parts: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
              <PartsComponent />
            </ErrorBoundary>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Parts;
