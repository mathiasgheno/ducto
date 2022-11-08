import { isString } from './isString.js';

describe('isString', () => {
  it('should throw an error if the value is not a string', () => {
    expect(() => isString(1)).toThrow();
  });

  it('should return the value if it is a string', () => {
    expect(isString('A')).toBe('A');
  });
});
