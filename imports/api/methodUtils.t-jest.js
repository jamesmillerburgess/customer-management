import { Meteor } from 'meteor/meteor';

import { isoError, buildSearchRegExp } from './methodUtils';

describe('buildSearchRegExp Function', () => {
  it('returns a regular expression', () => {
    const regexp = buildSearchRegExp();
    expect(regexp instanceof RegExp).toBe(true);
  });
  it('only accepts a string as a parameter', () => {
    expect(() => buildSearchRegExp(true)).toThrow();
    expect(() => buildSearchRegExp(1)).toThrow();
    expect(() => buildSearchRegExp({})).toThrow();
    expect(() => buildSearchRegExp([])).toThrow();
    expect(() => buildSearchRegExp(null)).toThrow();
  });
  it('returns a regular expression that looks for all words in a string in any order', () => {
    const regexp = buildSearchRegExp('word1 word2 word3');
    expect(regexp.test('word1 word2 word3')).toBe(true);
    expect(regexp.test('word2 word3 word1')).toBe(true);
    expect(regexp.test('word3 word2 word1')).toBe(true);
    expect(regexp.test('aword3a bword2b bword1b notaword')).toBe(true);
    expect(regexp.test('word4 word2 word3')).toBe(false);
  });
  it('finds a UNLocation by full code', () => {
    const regexp = buildSearchRegExp('inmaa');
    expect(
      regexp.test(
        'INMAA Chennai (ex Madras) Chennai (ex Madras) TN port airport'
      )
    ).toBe(true);
  });
  // TODO: Complete test
  it('handles special characters', () => {
    const regexp = buildSearchRegExp('/[');
  });
});
