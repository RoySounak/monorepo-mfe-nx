// import { ModuleFederationConfig } from '@nx/module-federation';

// const config: ModuleFederationConfig = {
//   name: 'host',
//   /**
//    * To use a remote that does not exist in your current Nx Workspace
//    * You can use the tuple-syntax to define your remote
//    *
//    * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
//    *
//    * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
//    * following content:
//    *
//    * declare module 'my-external-remote';
//    *
//    */
// exposes: {
//   './AuthContext': './src/auth/AuthContext.tsx',
// },
//   remotes: ['owner'],
// };

// /**
//  * Nx requires a default export of the config to allow correct resolution of the module federation graph.
//  **/
// export default config;

///based on prod ready version of owner mfe

import { ModuleFederationConfig } from '@nx/module-federation';

const OWNER_URL = process.env.NX_OWNER_REMOTE_URL || 'http://localhost:4201';

const config: ModuleFederationConfig = {
  name: 'host',
  exposes: {
    './AuthContext': './src/auth/AuthContext.tsx',
  },
  remotes: [['owner', `${OWNER_URL}/remoteEntry.js`]],
};

export default config;
