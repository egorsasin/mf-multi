import React, { Suspense } from 'react';
import { loadRemoteModule } from '@nx/react/mf';

import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { DEFINITION_KEY } from '../../constants';

const keys = Object.keys((window as any)[DEFINITION_KEY] || {});
const Component = React.lazy(() =>
  loadRemoteModule(keys[keys.length - 1], './Module')
);

const Parts: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
              <Component />
            </ErrorBoundary>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Parts;
