import { hasSameLengthOf } from './hasSameLengthOf.js';

describe('hasSameLengthOf', () => {
  it('should return true if the length of the condition is the same as the value', () => {
    const condition = 'abc';
    const value = 'abc';
    expect(hasSameLengthOf(condition)(value)).toBe(true);
  });

  it('should return false if the length of the condition is not the same as the value', () => {
    const condition = 'abc';
    const value = 'abcd';
    expect(hasSameLengthOf(condition)(value)).toBe(false);
  });
});
