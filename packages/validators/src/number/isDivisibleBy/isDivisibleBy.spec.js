import { isDivisibleBy } from './isDivisibleBy.js';

describe('isDivisibleBy', () => {
  it('should return the value if it is divisible by the number', () => {
    expect(isDivisibleBy(5)(10)).toBe(10);
  });

  it('should throw an error if the value is not divisible by the number', () => {
    expect(() => isDivisibleBy(5)(9)).toThrowError('Value is not divisible by 5');
  });

  it('should return the value for float number', () => {
    expect(isDivisibleBy(2.5)(5)).toEqual(5);
  });
});
