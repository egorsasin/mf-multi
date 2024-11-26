import { loadRemoteModule } from '@nx/react/mf';
import React, { Suspense } from 'react';

import { DEFINITION_KEY } from '../../constants';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

const Sales: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          {Object.keys((window as any)[DEFINITION_KEY] || {})
            .filter((key) => key === 'parts')
            .map((definition) => {
              const Component = React.lazy(() =>
                loadRemoteModule(definition, './Module')
              );

              return (
                <Suspense fallback={<div>Loading...</div>} key={definition}>
                  <ErrorBoundary>
                    <Component />
                  </ErrorBoundary>
                </Suspense>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Sales;
