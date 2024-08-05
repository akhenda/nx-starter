// https://gist.github.com/dev99problems/5838f1a437b6fedd7b0aedb81e6c72fb

const OLD_ENV = process.env;

beforeEach(() => {
  // MOST IMPORTANT THING IS 👇
  jest.resetModules(); // Most important - it clears the cache
  process.env = { ...OLD_ENV }; // Make a copy
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});
