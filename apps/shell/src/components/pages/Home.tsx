import { loadRemoteModule } from '@nx/react/mf';
import React, { Suspense } from 'react';

import ClientOnly from '../client-only/ClientOnly';

const PartsComponent = React.lazy(() => import('parts/Module'));
const SalesComponent = React.lazy(() => loadRemoteModule('sales', './Module'));

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <div style={{ display: 'flex', gap: '6rem', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientOnly>
              <PartsComponent />
              <SalesComponent />
            </ClientOnly>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Home;
