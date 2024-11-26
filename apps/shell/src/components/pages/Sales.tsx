import { loadRemoteModule } from '@nx/react/mf';
import React, { Suspense } from 'react';

import { DEFINITION_KEY } from '../../constants';

const key = Object.keys((window as any)[DEFINITION_KEY] || {})[0];
const Component = React.lazy(() => loadRemoteModule(key, './Module'));

const Sales: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Sales;
