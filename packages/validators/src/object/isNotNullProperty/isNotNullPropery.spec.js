import { isNotNullProperty } from './isNotNullProperty.js';

describe('isNotNullProperty', () => {
  it('should return object', () => {
    const obj = { a: 1 };
    const result = isNotNullProperty('a')(obj);
    expect(result).toBe(obj);
  });

  it('should throw error for null', () => {
    const obj = { a: null };
    expect(() => isNotNullProperty('a')(obj)).toThrowError();
  });

  it('should not throw a error for undefined', () => {
    const obj = { a: undefined };
    const result = isNotNullProperty('a')(obj);
    expect(result).toBe(obj);
  });
});
