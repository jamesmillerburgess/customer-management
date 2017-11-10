import app from './appReducer';

describe('app reducer', () => {
  it('returns a function', () => {
    expect(typeof app).toBe('function');
  });
});
