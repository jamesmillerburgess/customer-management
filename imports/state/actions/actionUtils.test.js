import * as AU from './actionUtils';

describe('makeActionCreator Utility', () => {
  it('makes an action creator with the given params', () => {
    const action = AU.makeActionCreator('TYPE', 'a', 'b')(1, 2);
    expect(action).toEqual({ type: 'TYPE', a: 1, b: 2 });
  });
});
