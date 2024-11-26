import { setRemoteDefinitions } from '@nx/react/mf';

import { DEFINITION_KEY } from './constants';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => {
    (window as any)[DEFINITION_KEY] = definitions;
    setRemoteDefinitions(definitions);
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
