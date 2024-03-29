import { isNotNullishProperty } from './isNotNullishProperty.js';

describe('isNotNullishProperty', () => {
  it('should return object and not throw error', () => {
    const obj = { a: 1 };
    const result = isNotNullishProperty('a')(obj);
    expect(result).toBe(obj);
  });

  it('should throw error for undefined', () => {
    const obj = { a: undefined };
    expect(() => isNotNullishProperty('a')(obj)).toThrowError();
  });

  it('should throw error for null', () => {
    const obj = { a: null };
    expect(() => isNotNullishProperty('a')(obj)).toThrowError();
  });
});
