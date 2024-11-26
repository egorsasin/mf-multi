import React, { Suspense } from 'react';
import { loadRemoteModule } from '@nx/react/mf';

import { DEFINITION_KEY } from '../../constants';
import ClientOnly from '../client-only/ClientOnly';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <ClientOnly>
            {Object.keys((window as any)[DEFINITION_KEY] || {}).map(
              (definition) => {
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
              }
            )}
          </ClientOnly>
        </div>
      </main>
    </div>
  );
};

export default Home;
