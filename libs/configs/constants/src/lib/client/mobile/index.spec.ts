import env from './index';

describe('constants/client/mobile', () => {
  it('get the default mobile envs', () => {
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

    expect(env.USE_REACTOTRON).toBe(true);
    expect(env.USE_REDUX_LOGGER).toBe(true);
    expect(env.persistNavigation).toBe('never');
    expect(env.catchErrors).toBe('always');
  });
});
