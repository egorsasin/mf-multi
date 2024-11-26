import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'parts',
  library: { type: 'var', name: 'parts' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  // By not declaring a shared function, all dependencies will be shared
};

export default config;
