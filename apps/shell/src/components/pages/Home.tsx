import React, { Suspense } from 'react';
import { loadRemoteModule } from '@nx/react/mf';

import { DEFINITION_KEY } from '../../constants';

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          {Object.keys((window as any)[DEFINITION_KEY] || {}).map(
            (definition) => {
              const Component = React.lazy(() =>
                loadRemoteModule(definition, './Module')
              );

              return (
                <Suspense fallback={<div>Loading...</div>} key={definition}>
                  <Component />
                </Suspense>
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
