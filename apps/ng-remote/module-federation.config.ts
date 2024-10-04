import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-remote',
  exposes: {
    './Routes': 'apps/ng-remote/src/remote-entry.ts',
  },
  shared: () => {
    return { singleton: true, strictVersion: true, requiredVersion: 'auto' };
  },
};

export default config;
