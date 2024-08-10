import env from './index';

describe('constants/server', () => {
  it('get the default server envs', () => {
    // Read an environment variable, which is validated and cleaned during
    // and/or filtering that you specified with cleanEnv().
    expect(env.ADMIN_EMAIL).toEqual('admin@example.com');

    // Envalid checks for NODE_ENV automatically, and provides the following
    // shortcut (boolean) properties for checking its value:
    // env.isProduction; // true if NODE_ENV === 'production'
    // env.isTest; // true if NODE_ENV === 'test'
    // env.isDev; // true if NODE_ENV === 'development'
    expect(env.isProduction).toBe(false);
    expect(env.isTest).toBe(true);
    expect(env.isDev).toBe(false);
  });
});
