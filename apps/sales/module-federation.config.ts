import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sales',
  library: { type: 'var', name: 'sales' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  // By not declaring a shared function, all dependencies will be shared
};

export default config;
