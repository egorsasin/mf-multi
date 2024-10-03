import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-remote',

  library: { type: 'global', name: 'react-remote' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
