import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sales-remote',
  library: { type: 'global', name: 'sales-remote' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  // By not declaring a shared function, all dependencies will be shared
};

export default config;
