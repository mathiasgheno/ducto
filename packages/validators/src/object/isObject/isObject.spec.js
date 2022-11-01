import { isObject } from './isObject.js';

describe('isObject', () => {
  it('should return true for object', () => {
    const obj = { a: 1 };
    const result = isObject(obj);
    expect(result).toBe(true);
  });

  it('should return false for undefined', () => {
    const obj = undefined;
    const result = isObject(obj);
    expect(result).toBe(false);
  });

  it('should return false for null', () => {
    const obj = null;
    const result = isObject(obj);
    expect(result).toBe(false);
  });
});
