import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'owner',

  // remotes: ['host'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
