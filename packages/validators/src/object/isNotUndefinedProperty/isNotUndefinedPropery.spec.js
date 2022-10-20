import { isNotUndefinedProperty } from './isNotUndefinedProperty.js';

describe('isNotUndefinedProperty', () => {
  it('should return object', () => {
    const obj = { a: 1 };
    const result = isNotUndefinedProperty('a')(obj);
    expect(result).toBe(obj);
  });

  it('should throw error for undefined', () => {
    const obj = { a: undefined };
    expect(() => isNotUndefinedProperty('a')(obj)).toThrowError();
  });

  it('should not throw error for null', () => {
    const obj = { a: null };
    const result = isNotUndefinedProperty('a')(obj);
    expect(result).toBe(obj);
  });
});
