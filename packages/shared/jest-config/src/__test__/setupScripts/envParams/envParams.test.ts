describe('it should test env params setup', () => {
  test('it should has env params', () => {
    expect(typeof process.env).toBe('object');
  });

  test('it should has process.env.NODE_ENV value', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  test('it should has process.env.BABEL_ENV value', () => {
    expect(process.env.BABEL_ENV).toBe('test');
  });

  test('it should has parsed env params from .env files', () => {
    expect(process.env.SOMEVAR).toBe('somevalue');
    expect(process.env.ANOTHERVAR).toBe('anothervalue');
  });
});
