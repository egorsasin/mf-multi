import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-remote',
  exposes: {
    './Routes': 'apps/ng-remote/src/remote-entry.ts',
  },
  shared: () => {
    return { singleton: true, eager: true, requiredVersion: 'auto' };
  },
};

export default config;
